import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;
const TOKEN_REFRESH_INTERVAL = 50 * 60 * 1000; // 50 minutes

export const useAuthStore = create(
  persist(
    (set, get) => ({
      // User authentication state
      isAuth: false,
      userId: "",
      username: "",
      email: "",
      profileImage: "",
      isAdmin: false,
      isAuthorized: false,
      accessToken: "",
      refreshToken: "",
      lastLogin: null,
      tokenExpirationTime: null,
      refreshTimeoutId: null,
      emailVerified: false,

      // Admin dashboard stats
      activeUsersCount: 0,
      adminUsersCount: 0,

      setUser: (userData) => {
        const tokenExpirationTime = Date.now() + TOKEN_REFRESH_INTERVAL;
        set({
          isAuth: true,
          userId: userData.id,
          username: userData.username,
          email: userData.email,
          profileImage: userData.profileImage || "",
          isAdmin: userData.isAdmin || false,
          isAuthorized: userData.isAuthorized || false,
          emailVerified: userData.emailVerified || false,
          accessToken: userData.tokens.accessToken,
          refreshToken: userData.tokens.refreshToken,
          lastLogin: userData.lastLogin || new Date().toISOString(),
          tokenExpirationTime,
        });
        get().scheduleTokenRefresh();
      },

      updateUser: (userData) => {
        set((state) => ({
          ...state,
          ...userData,
        }));
      },

      clearUser: () => {
        get().cancelTokenRefresh();
        set({
          isAuth: false,
          userId: "",
          username: "",
          email: "",
          profileImage: "",
          isAdmin: false,
          isAuthorized: false,
          accessToken: "",
          refreshToken: "",
          lastLogin: null,
          tokenExpirationTime: null,
          emailVerified: false,
        });
      },

      verifyEmail: async (email, verificationCode) => {
        try {
          const response = await fetch(`${SERVER_API}/auth/verify-email`, {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, verificationCode }),
          });
      
          const data = await response.json();
          if (data.status === "success") {
            set({ emailVerified: true });
            return { success: true, message: data.message };
          }
          return { success: false, message: data.message };
        } catch (error) {
          return { success: false, message: "Email verification failed" };
        }
      },

      register: async (userData) => {
        try {
          const response = await fetch(`${SERVER_API}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          });
      
          const data = await response.json();
      
          if (data.status === "success") {
            const userWithTokens = {
              ...data.data.user,
              tokens: data.data.tokens,
            };
            
            get().setUser(userWithTokens);
            return { success: true, message: data.message };
          }
          return { success: false, message: data.message };
        } catch (error) {
          return { success: false, message: "Registration failed" };
        }
      },

      login: async (email, password) => {
        try {
          const response = await fetch(`${SERVER_API}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
      
          const data = await response.json();
      
          if (data.data?.user?.emailVerified === false) {
            return { 
              success: false, 
              message: "Please verify your email to log in. Check your inbox.",
              requiresVerification: true,
              email: data.data.user.email,
              username: data.data.user.username
            };
          }
      
          if (data.status === "success" && data.data?.user && data.data?.tokens) {
            const userWithTokens = {
              ...data.data.user,
              tokens: data.data.tokens,
            };
      
            get().setUser(userWithTokens);
            return { 
              success: true, 
              message: data.message,
              isAdmin: data.data.user.isAdmin 
            };
          }
      
          return { 
            success: false, 
            message: data.message || "Login failed"
          };
        } catch (error) {
          return { 
            success: false, 
            message: "Login failed"
          };
        }
      },
      
      logout: async () => {
        try {
          const { accessToken } = get();
          await fetch(`${SERVER_API}/auth/logout`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          get().clearUser();
          return { success: true, message: "Logout successful" };
        } catch (error) {
          get().clearUser();
          return { success: true, message: "Logged out" };
        }
      },

      refreshAccessToken: async () => {
        try {
          const { refreshToken } = get();
          if (!refreshToken) {
            get().clearUser();
            return false;
          }

          const response = await fetch(`${SERVER_API}/auth/refresh-token`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refreshToken }),
          });

          const data = await response.json();
          if (data.status === "success") {
            set({
              accessToken: data.data.accessToken,
              refreshToken: data.data.refreshToken,
              tokenExpirationTime: Date.now() + TOKEN_REFRESH_INTERVAL,
            });
            get().scheduleTokenRefresh();
            return true;
          }
          get().clearUser();
          return false;
        } catch (error) {
          get().clearUser();
          return false;
        }
      },

      updateProfile: async (updateData) => {
        try {
          const { accessToken } = get();
          const response = await fetch(`${SERVER_API}/auth/update-profile`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(updateData),
          });

          const data = await response.json();
          if (data.status === "success") {
            get().updateUser(data.data.user);
            return { success: true, message: data.message };
          }
          return { success: false, message: data.message };
        } catch (error) {
          return { success: false, message: "Profile update failed" };
        }
      },

      updatePassword: async (passwordData) => {
        try {
          const { accessToken } = get();
          const response = await fetch(`${SERVER_API}/auth/update-password`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(passwordData),
          });

          const data = await response.json();
          return { success: data.status === "success", message: data.message };
        } catch (error) {
          return { success: false, message: "Password update failed" };
        }
      },

      updateProfileImage: async (imageData) => {
        try {
          const { accessToken } = get();
          const response = await fetch(`${SERVER_API}/auth/update-profile-image`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ image: imageData }),
          });

          const data = await response.json();
          if (data.status === "success") {
            set({ profileImage: data.data.profileImage });
            return { success: true, message: data.message };
          }
          return { success: false, message: data.message };
        } catch (error) {
          return { success: false, message: "Profile image update failed" };
        }
      },

      requestPasswordReset: async (email) => {
        try {
          const response = await fetch(`${SERVER_API}/auth/reset-password-request`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          });

          const data = await response.json();
          return { success: data.status === "success", message: data.message };
        } catch (error) {
          return { success: false, message: "Password reset request failed" };
        }
      },

      resetPassword: async (token, newPassword) => {
        try {
          const response = await fetch(`${SERVER_API}/auth/reset-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, newPassword }),
          });

          const data = await response.json();
          return { success: data.status === "success", message: data.message };
        } catch (error) {
          return { success: false, message: "Password reset failed" };
        }
      },

      submitContactForm: async (email, username, message) => {
        try {
          const response = await fetch(`${SERVER_API}/auth/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, username, message }),
          });
      
          const data = await response.json();
          return { 
            success: data.status === "success", 
            message: data.message 
          };
        } catch (error) {
          return { success: false, message: "Failed to submit contact form" };
        }
      },

      deleteAccount: async () => {
        try {
          const { accessToken } = get();

          if (!accessToken) {
            return { success: false, message: "Not authenticated" };
          }
          
          const response = await fetch(`${SERVER_API}/auth/delete-account`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const data = await response.json();
          if (data.status === "success") {
            get().clearUser();
            return { success: true, message: data.message };
          }
          return { success: false, message: data.message };
        } catch (error) {
          return { success: false, message: "Failed to delete account" };
        }
      },

      // Admin functions
      toggleAdmin: async (userId, makeAdmin) => {
        try {
          const { accessToken } = get();
          const response = await fetch(`${SERVER_API}/auth/admin/toggle-admin`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ userId, makeAdmin }),
          });

          const data = await response.json();
          if (data.status === "success") {
            // Refresh user counts
            await get().getAllUsers();
            await get().getUsersByRole('admin');
            return { success: true, message: data.message, data: data.data };
          }
          return { success: false, message: data.message };
        } catch (error) {
          return { success: false, message: "Failed to toggle admin status" };
        }
      },

      bulkDeleteAccounts: async (userIds) => {
        try {
          const { accessToken } = get();
          const response = await fetch(`${SERVER_API}/auth/admin/bulk-delete`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ userIds }),
          });

          const data = await response.json();
          if (data.status === "success") {
            // Refresh user counts after bulk deletion
            await get().getAllUsers();
            await get().getUsersByRole('admin');
          }
          return {
            success: data.status === "success",
            message: data.message,
            data: data.data,
          };
        } catch (error) {
          return {
            success: false,
            message: "Failed to perform bulk deletion",
          };
        }
      },

      deleteUserAccount: async (userId) => {
        try {
          const { accessToken } = get();
          const response = await fetch(`${SERVER_API}/auth/admin/delete-account/${userId}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const data = await response.json();
          if (data.status === "success") {
            // Refresh user counts after deletion
            await get().getAllUsers();
            await get().getUsersByRole('admin');
          }
          return { success: data.status === "success", message: data.message };
        } catch (error) {
          return { success: false, message: "Failed to delete user account" };
        }
      },

      getAllUsers: async () => {
        try {
          const { accessToken } = get();
          const response = await fetch(`${SERVER_API}/auth/admin/users`, {
            headers: { Authorization: `Bearer ${accessToken}` },
          });

          const data = await response.json();
          if (data.status === "success") {
            set({ activeUsersCount: data.data.count });
            return { success: true, data: data.data };
          }
          return { success: false, message: data.message };
        } catch (error) {
          return { success: false, message: "Failed to fetch users" };
        }
      },

      getUsersByRole: async (role) => {
        try {
          const { accessToken } = get();
          const response = await fetch(`${SERVER_API}/auth/admin/users/by-role?role=${role}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
          });

          const data = await response.json();
          if (data.status === "success") {
            if (role === 'admin') {
              set({ adminUsersCount: data.data.count });
            }
            return { success: true, data: data.data };
          }
          return { success: false, message: data.message };
        } catch (error) {
          return { success: false, message: "Failed to fetch users by role" };
        }
      },

      sendNewsletter: async (emailData) => {
        try {
          const { accessToken } = get();
          const response = await fetch(`${SERVER_API}/auth/admin/newsletter`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(emailData),
          });

          const data = await response.json();
          return { 
            success: data.status === "success", 
            message: data.message,
            data: data.data 
          };
        } catch (error) {
          return { success: false, message: "Failed to send newsletter" };
        }
      },

      setActiveUsersCount: (count) => set({ activeUsersCount: count }),
      setAdminUsersCount: (count) => set({ adminUsersCount: count }),

      // Token management
      scheduleTokenRefresh: () => {
        const { tokenExpirationTime, refreshTimeoutId } = get();
        if (refreshTimeoutId) {
          clearTimeout(refreshTimeoutId);
        }

        const timeUntilRefresh = Math.max(0, tokenExpirationTime - Date.now() - 60000);
        const newTimeoutId = setTimeout(() => {
          get().refreshAccessToken();
        }, timeUntilRefresh);

        set({ refreshTimeoutId: newTimeoutId });
      },

      cancelTokenRefresh: () => {
        const { refreshTimeoutId } = get();
        if (refreshTimeoutId) {
          clearTimeout(refreshTimeoutId);
          set({ refreshTimeoutId: null });
        }
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isAuth: state.isAuth,
        userId: state.userId,
        username: state.username,
        email: state.email,
        profileImage: state.profileImage,
        isAdmin: state.isAdmin,
        isAuthorized: state.isAuthorized,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        lastLogin: state.lastLogin,
        tokenExpirationTime: state.tokenExpirationTime,
        emailVerified: state.emailVerified,
        activeUsersCount: state.activeUsersCount,
        adminUsersCount: state.adminUsersCount,
      }),
    }
  )
);