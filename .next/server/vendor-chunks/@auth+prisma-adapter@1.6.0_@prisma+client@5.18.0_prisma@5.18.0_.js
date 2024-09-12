"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@auth+prisma-adapter@1.6.0_@prisma+client@5.18.0_prisma@5.18.0_";
exports.ids = ["vendor-chunks/@auth+prisma-adapter@1.6.0_@prisma+client@5.18.0_prisma@5.18.0_"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@auth+prisma-adapter@1.6.0_@prisma+client@5.18.0_prisma@5.18.0_/node_modules/@auth/prisma-adapter/index.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@auth+prisma-adapter@1.6.0_@prisma+client@5.18.0_prisma@5.18.0_/node_modules/@auth/prisma-adapter/index.js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PrismaAdapter: () => (/* binding */ PrismaAdapter)\n/* harmony export */ });\n/**\n * ## Setup\n *\n * Add this adapter to your `auth.ts` Auth.js configuration object:\n *\n * ```js title=\"auth.ts\"\n * import NextAuth from \"next-auth\"\n * import Google from \"next-auth/providers/google\"\n * import { PrismaAdapter } from \"@auth/prisma-adapter\"\n * import { PrismaClient } from \"@prisma/client\"\n *\n * const prisma = new PrismaClient()\n *\n * export const { handlers, auth, signIn, signOut } = NextAuth({\n *   adapter: PrismaAdapter(prisma),\n *   providers: [\n *     Google,\n *   ],\n * })\n * ```\n *\n * ### Create the Prisma schema from scratch\n *\n * You need to use at least Prisma 2.26.0. Create a schema file in `prisma/schema.prisma` similar to this one:\n *\n * > This schema is adapted for use in Prisma and based upon our main [schema](https://authjs.dev/reference/core/adapters#models)\n *\n * ```json title=\"schema.prisma\"\n * datasource db {\n *   provider = \"postgresql\"\n *   url      = env(\"DATABASE_URL\")\n *   shadowDatabaseUrl = env(\"SHADOW_DATABASE_URL\") // Only needed when using a cloud provider that doesn't support the creation of new databases, like Heroku. Learn more: https://pris.ly/d/migrate-shadow\n * }\n *\n * generator client {\n *   provider        = \"prisma-client-js\"\n *   previewFeatures = [\"referentialActions\"] // You won't need this in Prisma 3.X or higher.\n * }\n *\n * model Account {\n *   id                 String  @id @default(cuid())\n *   userId             String\n *   type               String\n *   provider           String\n *   providerAccountId  String\n *   refresh_token      String?  @db.Text\n *   access_token       String?  @db.Text\n *   expires_at         Int?\n *   token_type         String?\n *   scope              String?\n *   id_token           String?  @db.Text\n *   session_state      String?\n *\n *   user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n *\n *   @@unique([provider, providerAccountId])\n * }\n *\n * model Session {\n *   id           String   @id @default(cuid())\n *   sessionToken String   @unique\n *   userId       String\n *   expires      DateTime\n *   user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n * }\n *\n * model User {\n *   id            String    @id @default(cuid())\n *   name          String?\n *   email         String?   @unique\n *   emailVerified DateTime?\n *   image         String?\n *   accounts      Account[]\n *   sessions      Session[]\n * }\n *\n * model VerificationToken {\n *   identifier String\n *   token      String   @unique\n *   expires    DateTime\n *\n *   @@unique([identifier, token])\n * }\n * ```\n *\n * :::note\n * When using the MySQL connector for Prisma, the [Prisma `String` type](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#string) gets mapped to `varchar(191)` which may not be long enough to store fields such as `id_token` in the `Account` model. This can be avoided by explicitly using the `Text` type with `@db.Text`.\n * :::\n *\n *\n * ### Create the Prisma schema with `prisma migrate`\n *\n * This will create an SQL migration file and execute it:\n *\n * ```\n * npx prisma migrate dev\n * ```\n *\n * Note that you will need to specify your database connection string in the environment variable `DATABASE_URL`. You can do this by setting it in a `.env` file at the root of your project.\n *\n * To learn more about [Prisma Migrate](https://www.prisma.io/migrate), check out the [Migrate docs](https://www.prisma.io/docs/concepts/components/prisma-migrate).\n *\n * ### Generating the Prisma Client\n *\n * Once you have saved your schema, use the Prisma CLI to generate the Prisma Client:\n *\n * ```\n * npx prisma generate\n * ```\n *\n * To configure your database to use the new schema (i.e. create tables and columns) use the `prisma migrate` command:\n *\n * ```\n * npx prisma migrate dev\n * ```\n *\n * ### MongoDB support\n *\n * Prisma supports MongoDB, and so does Auth.js. Following the instructions of the [Prisma documentation](https://www.prisma.io/docs/concepts/database-connectors/mongodb) on the MongoDB connector, things you have to change are:\n *\n * 1. Make sure that the id fields are mapped correctly\n *\n * ```prisma\n * id  String  @id @default(auto()) @map(\"_id\") @db.ObjectId\n * ```\n *\n * 2. The Native database type attribute to `@db.String` from `@db.Text` and userId to `@db.ObjectId`.\n *\n * ```prisma\n * user_id            String   @db.ObjectId\n * refresh_token      String?  @db.String\n * access_token       String?  @db.String\n * id_token           String?  @db.String\n * ```\n *\n * Everything else should be the same.\n *\n * ### Naming Conventions\n *\n * If mixed snake_case and camelCase column names is an issue for you and/or your underlying database system, we recommend using Prisma's `@map()`([see the documentation here](https://www.prisma.io/docs/concepts/components/prisma-schema/names-in-underlying-database)) feature to change the field names. This won't affect Auth.js, but will allow you to customize the column names to whichever naming convention you wish.\n *\n * For example, moving to `snake_case` and plural table names.\n *\n * ```json title=\"schema.prisma\"\n * model Account {\n *   id                 String  @id @default(cuid())\n *   userId             String  @map(\"user_id\")\n *   type               String\n *   provider           String\n *   providerAccountId  String  @map(\"provider_account_id\")\n *   refresh_token      String? @db.Text\n *   access_token       String? @db.Text\n *   expires_at         Int?\n *   token_type         String?\n *   scope              String?\n *   id_token           String? @db.Text\n *   session_state      String?\n *\n *   user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n *\n *   @@unique([provider, providerAccountId])\n *   @@map(\"accounts\")\n * }\n *\n * model Session {\n *   id           String   @id @default(cuid())\n *   sessionToken String   @unique @map(\"session_token\")\n *   userId       String   @map(\"user_id\")\n *   expires      DateTime\n *   user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n *\n *   @@map(\"sessions\")\n * }\n *\n * model User {\n *   id             String    @id @default(cuid())\n *   name           String?\n *   email          String?   @unique\n *   emailVerified  DateTime? @map(\"email_verified\")\n *   image          String?\n *   accounts       Account[]\n *   sessions       Session[]\n *   authenticators Authenticator[]\n *\n *   @@map(\"users\")\n * }\n *\n * model VerificationToken {\n *   identifier String\n *   token      String   @unique\n *   expires    DateTime\n *\n *   @@unique([identifier, token])\n *   @@map(\"verificationtokens\")\n * }\n *\n * model Authenticator {\n *   id                   String  @id @default(cuid())\n *   credentialID         String  @unique\n *   userId               String\n *   providerAccountId    String\n *   credentialPublicKey  String\n *   counter              Int\n *   credentialDeviceType String\n *   credentialBackedUp   Boolean\n *   transports           String?\n *\n *   user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n * }\n * ```\n *\n **/\nfunction PrismaAdapter(prisma) {\n    const p = prisma;\n    return {\n        // We need to let Prisma generate the ID because our default UUID is incompatible with MongoDB\n        createUser: ({ id: _id, ...data }) => {\n            return p.user.create({ data });\n        },\n        getUser: (id) => p.user.findUnique({ where: { id } }),\n        getUserByEmail: (email) => p.user.findUnique({ where: { email } }),\n        async getUserByAccount(provider_providerAccountId) {\n            const account = await p.account.findUnique({\n                where: { provider_providerAccountId },\n                select: { user: true },\n            });\n            return account?.user ?? null;\n        },\n        updateUser: ({ id, ...data }) => p.user.update({ where: { id }, data }),\n        deleteUser: (id) => p.user.delete({ where: { id } }),\n        linkAccount: (data) => p.account.create({ data }),\n        unlinkAccount: (provider_providerAccountId) => p.account.delete({\n            where: { provider_providerAccountId },\n        }),\n        async getSessionAndUser(sessionToken) {\n            const userAndSession = await p.session.findUnique({\n                where: { sessionToken },\n                include: { user: true },\n            });\n            if (!userAndSession)\n                return null;\n            const { user, ...session } = userAndSession;\n            return { user, session };\n        },\n        createSession: (data) => p.session.create({ data }),\n        updateSession: (data) => p.session.update({ where: { sessionToken: data.sessionToken }, data }),\n        deleteSession: (sessionToken) => p.session.delete({ where: { sessionToken } }),\n        async createVerificationToken(data) {\n            const verificationToken = await p.verificationToken.create({ data });\n            // @ts-expect-errors // MongoDB needs an ID, but we don't\n            if (verificationToken.id)\n                delete verificationToken.id;\n            return verificationToken;\n        },\n        async useVerificationToken(identifier_token) {\n            try {\n                const verificationToken = await p.verificationToken.delete({\n                    where: { identifier_token },\n                });\n                // @ts-expect-errors // MongoDB needs an ID, but we don't\n                if (verificationToken.id)\n                    delete verificationToken.id;\n                return verificationToken;\n            }\n            catch (error) {\n                // If token already used/deleted, just return null\n                // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025\n                if (error.code === \"P2025\")\n                    return null;\n                throw error;\n            }\n        },\n        async getAccount(providerAccountId, provider) {\n            return p.account.findFirst({\n                where: { providerAccountId, provider },\n            });\n        },\n        async createAuthenticator(authenticator) {\n            return p.authenticator\n                .create({\n                data: authenticator,\n            })\n                .then(fromDBAuthenticator);\n        },\n        async getAuthenticator(credentialID) {\n            const authenticator = await p.authenticator.findUnique({\n                where: { credentialID },\n            });\n            return authenticator ? fromDBAuthenticator(authenticator) : null;\n        },\n        async listAuthenticatorsByUserId(userId) {\n            const authenticators = await p.authenticator.findMany({\n                where: { userId },\n            });\n            return authenticators.map(fromDBAuthenticator);\n        },\n        async updateAuthenticatorCounter(credentialID, counter) {\n            return p.authenticator\n                .update({\n                where: { credentialID: credentialID },\n                data: { counter },\n            })\n                .then(fromDBAuthenticator);\n        },\n    };\n}\nfunction fromDBAuthenticator(authenticator) {\n    const { transports, id, user, ...other } = authenticator;\n    return {\n        ...other,\n        transports: transports || undefined,\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQGF1dGgrcHJpc21hLWFkYXB0ZXJAMS42LjBfQHByaXNtYStjbGllbnRANS4xOC4wX3ByaXNtYUA1LjE4LjBfL25vZGVfbW9kdWxlcy9AYXV0aC9wcmlzbWEtYWRhcHRlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0NBQWtDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDLG1DQUFtQyxNQUFNO0FBQ3pDLFNBQVM7QUFDVCw2Q0FBNkMsU0FBUyxNQUFNO0FBQzVELHVEQUF1RCxTQUFTLFNBQVM7QUFDekU7QUFDQTtBQUNBLHlCQUF5Qiw0QkFBNEI7QUFDckQsMEJBQTBCLFlBQVk7QUFDdEMsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULHVCQUF1QixhQUFhLHFCQUFxQixTQUFTLElBQUksUUFBUTtBQUM5RSw0Q0FBNEMsU0FBUyxNQUFNO0FBQzNELGtEQUFrRCxNQUFNO0FBQ3hEO0FBQ0EscUJBQXFCLDRCQUE0QjtBQUNqRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLDJCQUEyQixZQUFZO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QyxxQkFBcUI7QUFDckIsU0FBUztBQUNULG9EQUFvRCxNQUFNO0FBQzFELG9EQUFvRCxTQUFTLGlDQUFpQyxRQUFRO0FBQ3RHLDREQUE0RCxTQUFTLGdCQUFnQjtBQUNyRjtBQUNBLHlFQUF5RSxNQUFNO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrQkFBa0I7QUFDL0MsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EseUJBQXlCLDZCQUE2QjtBQUN0RCxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2QyxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNEJBQTRCO0FBQ3JELHdCQUF3QixTQUFTO0FBQ2pDLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlDQUFpQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXAtcHJvamV0by1maW5hbC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXV0aCtwcmlzbWEtYWRhcHRlckAxLjYuMF9AcHJpc21hK2NsaWVudEA1LjE4LjBfcHJpc21hQDUuMTguMF8vbm9kZV9tb2R1bGVzL0BhdXRoL3ByaXNtYS1hZGFwdGVyL2luZGV4LmpzP2IzYmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAjIyBTZXR1cFxuICpcbiAqIEFkZCB0aGlzIGFkYXB0ZXIgdG8geW91ciBgYXV0aC50c2AgQXV0aC5qcyBjb25maWd1cmF0aW9uIG9iamVjdDpcbiAqXG4gKiBgYGBqcyB0aXRsZT1cImF1dGgudHNcIlxuICogaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuICogaW1wb3J0IEdvb2dsZSBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIlxuICogaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAYXV0aC9wcmlzbWEtYWRhcHRlclwiXG4gKiBpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuICpcbiAqIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICpcbiAqIGV4cG9ydCBjb25zdCB7IGhhbmRsZXJzLCBhdXRoLCBzaWduSW4sIHNpZ25PdXQgfSA9IE5leHRBdXRoKHtcbiAqICAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICogICBwcm92aWRlcnM6IFtcbiAqICAgICBHb29nbGUsXG4gKiAgIF0sXG4gKiB9KVxuICogYGBgXG4gKlxuICogIyMjIENyZWF0ZSB0aGUgUHJpc21hIHNjaGVtYSBmcm9tIHNjcmF0Y2hcbiAqXG4gKiBZb3UgbmVlZCB0byB1c2UgYXQgbGVhc3QgUHJpc21hIDIuMjYuMC4gQ3JlYXRlIGEgc2NoZW1hIGZpbGUgaW4gYHByaXNtYS9zY2hlbWEucHJpc21hYCBzaW1pbGFyIHRvIHRoaXMgb25lOlxuICpcbiAqID4gVGhpcyBzY2hlbWEgaXMgYWRhcHRlZCBmb3IgdXNlIGluIFByaXNtYSBhbmQgYmFzZWQgdXBvbiBvdXIgbWFpbiBbc2NoZW1hXShodHRwczovL2F1dGhqcy5kZXYvcmVmZXJlbmNlL2NvcmUvYWRhcHRlcnMjbW9kZWxzKVxuICpcbiAqIGBgYGpzb24gdGl0bGU9XCJzY2hlbWEucHJpc21hXCJcbiAqIGRhdGFzb3VyY2UgZGIge1xuICogICBwcm92aWRlciA9IFwicG9zdGdyZXNxbFwiXG4gKiAgIHVybCAgICAgID0gZW52KFwiREFUQUJBU0VfVVJMXCIpXG4gKiAgIHNoYWRvd0RhdGFiYXNlVXJsID0gZW52KFwiU0hBRE9XX0RBVEFCQVNFX1VSTFwiKSAvLyBPbmx5IG5lZWRlZCB3aGVuIHVzaW5nIGEgY2xvdWQgcHJvdmlkZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgdGhlIGNyZWF0aW9uIG9mIG5ldyBkYXRhYmFzZXMsIGxpa2UgSGVyb2t1LiBMZWFybiBtb3JlOiBodHRwczovL3ByaXMubHkvZC9taWdyYXRlLXNoYWRvd1xuICogfVxuICpcbiAqIGdlbmVyYXRvciBjbGllbnQge1xuICogICBwcm92aWRlciAgICAgICAgPSBcInByaXNtYS1jbGllbnQtanNcIlxuICogICBwcmV2aWV3RmVhdHVyZXMgPSBbXCJyZWZlcmVudGlhbEFjdGlvbnNcIl0gLy8gWW91IHdvbid0IG5lZWQgdGhpcyBpbiBQcmlzbWEgMy5YIG9yIGhpZ2hlci5cbiAqIH1cbiAqXG4gKiBtb2RlbCBBY2NvdW50IHtcbiAqICAgaWQgICAgICAgICAgICAgICAgIFN0cmluZyAgQGlkIEBkZWZhdWx0KGN1aWQoKSlcbiAqICAgdXNlcklkICAgICAgICAgICAgIFN0cmluZ1xuICogICB0eXBlICAgICAgICAgICAgICAgU3RyaW5nXG4gKiAgIHByb3ZpZGVyICAgICAgICAgICBTdHJpbmdcbiAqICAgcHJvdmlkZXJBY2NvdW50SWQgIFN0cmluZ1xuICogICByZWZyZXNoX3Rva2VuICAgICAgU3RyaW5nPyAgQGRiLlRleHRcbiAqICAgYWNjZXNzX3Rva2VuICAgICAgIFN0cmluZz8gIEBkYi5UZXh0XG4gKiAgIGV4cGlyZXNfYXQgICAgICAgICBJbnQ/XG4gKiAgIHRva2VuX3R5cGUgICAgICAgICBTdHJpbmc/XG4gKiAgIHNjb3BlICAgICAgICAgICAgICBTdHJpbmc/XG4gKiAgIGlkX3Rva2VuICAgICAgICAgICBTdHJpbmc/ICBAZGIuVGV4dFxuICogICBzZXNzaW9uX3N0YXRlICAgICAgU3RyaW5nP1xuICpcbiAqICAgdXNlciBVc2VyIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSlcbiAqXG4gKiAgIEBAdW5pcXVlKFtwcm92aWRlciwgcHJvdmlkZXJBY2NvdW50SWRdKVxuICogfVxuICpcbiAqIG1vZGVsIFNlc3Npb24ge1xuICogICBpZCAgICAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGN1aWQoKSlcbiAqICAgc2Vzc2lvblRva2VuIFN0cmluZyAgIEB1bmlxdWVcbiAqICAgdXNlcklkICAgICAgIFN0cmluZ1xuICogICBleHBpcmVzICAgICAgRGF0ZVRpbWVcbiAqICAgdXNlciAgICAgICAgIFVzZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSlcbiAqIH1cbiAqXG4gKiBtb2RlbCBVc2VyIHtcbiAqICAgaWQgICAgICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSlcbiAqICAgbmFtZSAgICAgICAgICBTdHJpbmc/XG4gKiAgIGVtYWlsICAgICAgICAgU3RyaW5nPyAgIEB1bmlxdWVcbiAqICAgZW1haWxWZXJpZmllZCBEYXRlVGltZT9cbiAqICAgaW1hZ2UgICAgICAgICBTdHJpbmc/XG4gKiAgIGFjY291bnRzICAgICAgQWNjb3VudFtdXG4gKiAgIHNlc3Npb25zICAgICAgU2Vzc2lvbltdXG4gKiB9XG4gKlxuICogbW9kZWwgVmVyaWZpY2F0aW9uVG9rZW4ge1xuICogICBpZGVudGlmaWVyIFN0cmluZ1xuICogICB0b2tlbiAgICAgIFN0cmluZyAgIEB1bmlxdWVcbiAqICAgZXhwaXJlcyAgICBEYXRlVGltZVxuICpcbiAqICAgQEB1bmlxdWUoW2lkZW50aWZpZXIsIHRva2VuXSlcbiAqIH1cbiAqIGBgYFxuICpcbiAqIDo6Om5vdGVcbiAqIFdoZW4gdXNpbmcgdGhlIE15U1FMIGNvbm5lY3RvciBmb3IgUHJpc21hLCB0aGUgW1ByaXNtYSBgU3RyaW5nYCB0eXBlXShodHRwczovL3d3dy5wcmlzbWEuaW8vZG9jcy9yZWZlcmVuY2UvYXBpLXJlZmVyZW5jZS9wcmlzbWEtc2NoZW1hLXJlZmVyZW5jZSNzdHJpbmcpIGdldHMgbWFwcGVkIHRvIGB2YXJjaGFyKDE5MSlgIHdoaWNoIG1heSBub3QgYmUgbG9uZyBlbm91Z2ggdG8gc3RvcmUgZmllbGRzIHN1Y2ggYXMgYGlkX3Rva2VuYCBpbiB0aGUgYEFjY291bnRgIG1vZGVsLiBUaGlzIGNhbiBiZSBhdm9pZGVkIGJ5IGV4cGxpY2l0bHkgdXNpbmcgdGhlIGBUZXh0YCB0eXBlIHdpdGggYEBkYi5UZXh0YC5cbiAqIDo6OlxuICpcbiAqXG4gKiAjIyMgQ3JlYXRlIHRoZSBQcmlzbWEgc2NoZW1hIHdpdGggYHByaXNtYSBtaWdyYXRlYFxuICpcbiAqIFRoaXMgd2lsbCBjcmVhdGUgYW4gU1FMIG1pZ3JhdGlvbiBmaWxlIGFuZCBleGVjdXRlIGl0OlxuICpcbiAqIGBgYFxuICogbnB4IHByaXNtYSBtaWdyYXRlIGRldlxuICogYGBgXG4gKlxuICogTm90ZSB0aGF0IHlvdSB3aWxsIG5lZWQgdG8gc3BlY2lmeSB5b3VyIGRhdGFiYXNlIGNvbm5lY3Rpb24gc3RyaW5nIGluIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBgREFUQUJBU0VfVVJMYC4gWW91IGNhbiBkbyB0aGlzIGJ5IHNldHRpbmcgaXQgaW4gYSBgLmVudmAgZmlsZSBhdCB0aGUgcm9vdCBvZiB5b3VyIHByb2plY3QuXG4gKlxuICogVG8gbGVhcm4gbW9yZSBhYm91dCBbUHJpc21hIE1pZ3JhdGVdKGh0dHBzOi8vd3d3LnByaXNtYS5pby9taWdyYXRlKSwgY2hlY2sgb3V0IHRoZSBbTWlncmF0ZSBkb2NzXShodHRwczovL3d3dy5wcmlzbWEuaW8vZG9jcy9jb25jZXB0cy9jb21wb25lbnRzL3ByaXNtYS1taWdyYXRlKS5cbiAqXG4gKiAjIyMgR2VuZXJhdGluZyB0aGUgUHJpc21hIENsaWVudFxuICpcbiAqIE9uY2UgeW91IGhhdmUgc2F2ZWQgeW91ciBzY2hlbWEsIHVzZSB0aGUgUHJpc21hIENMSSB0byBnZW5lcmF0ZSB0aGUgUHJpc21hIENsaWVudDpcbiAqXG4gKiBgYGBcbiAqIG5weCBwcmlzbWEgZ2VuZXJhdGVcbiAqIGBgYFxuICpcbiAqIFRvIGNvbmZpZ3VyZSB5b3VyIGRhdGFiYXNlIHRvIHVzZSB0aGUgbmV3IHNjaGVtYSAoaS5lLiBjcmVhdGUgdGFibGVzIGFuZCBjb2x1bW5zKSB1c2UgdGhlIGBwcmlzbWEgbWlncmF0ZWAgY29tbWFuZDpcbiAqXG4gKiBgYGBcbiAqIG5weCBwcmlzbWEgbWlncmF0ZSBkZXZcbiAqIGBgYFxuICpcbiAqICMjIyBNb25nb0RCIHN1cHBvcnRcbiAqXG4gKiBQcmlzbWEgc3VwcG9ydHMgTW9uZ29EQiwgYW5kIHNvIGRvZXMgQXV0aC5qcy4gRm9sbG93aW5nIHRoZSBpbnN0cnVjdGlvbnMgb2YgdGhlIFtQcmlzbWEgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cucHJpc21hLmlvL2RvY3MvY29uY2VwdHMvZGF0YWJhc2UtY29ubmVjdG9ycy9tb25nb2RiKSBvbiB0aGUgTW9uZ29EQiBjb25uZWN0b3IsIHRoaW5ncyB5b3UgaGF2ZSB0byBjaGFuZ2UgYXJlOlxuICpcbiAqIDEuIE1ha2Ugc3VyZSB0aGF0IHRoZSBpZCBmaWVsZHMgYXJlIG1hcHBlZCBjb3JyZWN0bHlcbiAqXG4gKiBgYGBwcmlzbWFcbiAqIGlkICBTdHJpbmcgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoXCJfaWRcIikgQGRiLk9iamVjdElkXG4gKiBgYGBcbiAqXG4gKiAyLiBUaGUgTmF0aXZlIGRhdGFiYXNlIHR5cGUgYXR0cmlidXRlIHRvIGBAZGIuU3RyaW5nYCBmcm9tIGBAZGIuVGV4dGAgYW5kIHVzZXJJZCB0byBgQGRiLk9iamVjdElkYC5cbiAqXG4gKiBgYGBwcmlzbWFcbiAqIHVzZXJfaWQgICAgICAgICAgICBTdHJpbmcgICBAZGIuT2JqZWN0SWRcbiAqIHJlZnJlc2hfdG9rZW4gICAgICBTdHJpbmc/ICBAZGIuU3RyaW5nXG4gKiBhY2Nlc3NfdG9rZW4gICAgICAgU3RyaW5nPyAgQGRiLlN0cmluZ1xuICogaWRfdG9rZW4gICAgICAgICAgIFN0cmluZz8gIEBkYi5TdHJpbmdcbiAqIGBgYFxuICpcbiAqIEV2ZXJ5dGhpbmcgZWxzZSBzaG91bGQgYmUgdGhlIHNhbWUuXG4gKlxuICogIyMjIE5hbWluZyBDb252ZW50aW9uc1xuICpcbiAqIElmIG1peGVkIHNuYWtlX2Nhc2UgYW5kIGNhbWVsQ2FzZSBjb2x1bW4gbmFtZXMgaXMgYW4gaXNzdWUgZm9yIHlvdSBhbmQvb3IgeW91ciB1bmRlcmx5aW5nIGRhdGFiYXNlIHN5c3RlbSwgd2UgcmVjb21tZW5kIHVzaW5nIFByaXNtYSdzIGBAbWFwKClgKFtzZWUgdGhlIGRvY3VtZW50YXRpb24gaGVyZV0oaHR0cHM6Ly93d3cucHJpc21hLmlvL2RvY3MvY29uY2VwdHMvY29tcG9uZW50cy9wcmlzbWEtc2NoZW1hL25hbWVzLWluLXVuZGVybHlpbmctZGF0YWJhc2UpKSBmZWF0dXJlIHRvIGNoYW5nZSB0aGUgZmllbGQgbmFtZXMuIFRoaXMgd29uJ3QgYWZmZWN0IEF1dGguanMsIGJ1dCB3aWxsIGFsbG93IHlvdSB0byBjdXN0b21pemUgdGhlIGNvbHVtbiBuYW1lcyB0byB3aGljaGV2ZXIgbmFtaW5nIGNvbnZlbnRpb24geW91IHdpc2guXG4gKlxuICogRm9yIGV4YW1wbGUsIG1vdmluZyB0byBgc25ha2VfY2FzZWAgYW5kIHBsdXJhbCB0YWJsZSBuYW1lcy5cbiAqXG4gKiBgYGBqc29uIHRpdGxlPVwic2NoZW1hLnByaXNtYVwiXG4gKiBtb2RlbCBBY2NvdW50IHtcbiAqICAgaWQgICAgICAgICAgICAgICAgIFN0cmluZyAgQGlkIEBkZWZhdWx0KGN1aWQoKSlcbiAqICAgdXNlcklkICAgICAgICAgICAgIFN0cmluZyAgQG1hcChcInVzZXJfaWRcIilcbiAqICAgdHlwZSAgICAgICAgICAgICAgIFN0cmluZ1xuICogICBwcm92aWRlciAgICAgICAgICAgU3RyaW5nXG4gKiAgIHByb3ZpZGVyQWNjb3VudElkICBTdHJpbmcgIEBtYXAoXCJwcm92aWRlcl9hY2NvdW50X2lkXCIpXG4gKiAgIHJlZnJlc2hfdG9rZW4gICAgICBTdHJpbmc/IEBkYi5UZXh0XG4gKiAgIGFjY2Vzc190b2tlbiAgICAgICBTdHJpbmc/IEBkYi5UZXh0XG4gKiAgIGV4cGlyZXNfYXQgICAgICAgICBJbnQ/XG4gKiAgIHRva2VuX3R5cGUgICAgICAgICBTdHJpbmc/XG4gKiAgIHNjb3BlICAgICAgICAgICAgICBTdHJpbmc/XG4gKiAgIGlkX3Rva2VuICAgICAgICAgICBTdHJpbmc/IEBkYi5UZXh0XG4gKiAgIHNlc3Npb25fc3RhdGUgICAgICBTdHJpbmc/XG4gKlxuICogICB1c2VyIFVzZXIgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKVxuICpcbiAqICAgQEB1bmlxdWUoW3Byb3ZpZGVyLCBwcm92aWRlckFjY291bnRJZF0pXG4gKiAgIEBAbWFwKFwiYWNjb3VudHNcIilcbiAqIH1cbiAqXG4gKiBtb2RlbCBTZXNzaW9uIHtcbiAqICAgaWQgICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChjdWlkKCkpXG4gKiAgIHNlc3Npb25Ub2tlbiBTdHJpbmcgICBAdW5pcXVlIEBtYXAoXCJzZXNzaW9uX3Rva2VuXCIpXG4gKiAgIHVzZXJJZCAgICAgICBTdHJpbmcgICBAbWFwKFwidXNlcl9pZFwiKVxuICogICBleHBpcmVzICAgICAgRGF0ZVRpbWVcbiAqICAgdXNlciAgICAgICAgIFVzZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSlcbiAqXG4gKiAgIEBAbWFwKFwic2Vzc2lvbnNcIilcbiAqIH1cbiAqXG4gKiBtb2RlbCBVc2VyIHtcbiAqICAgaWQgICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpXG4gKiAgIG5hbWUgICAgICAgICAgIFN0cmluZz9cbiAqICAgZW1haWwgICAgICAgICAgU3RyaW5nPyAgIEB1bmlxdWVcbiAqICAgZW1haWxWZXJpZmllZCAgRGF0ZVRpbWU/IEBtYXAoXCJlbWFpbF92ZXJpZmllZFwiKVxuICogICBpbWFnZSAgICAgICAgICBTdHJpbmc/XG4gKiAgIGFjY291bnRzICAgICAgIEFjY291bnRbXVxuICogICBzZXNzaW9ucyAgICAgICBTZXNzaW9uW11cbiAqICAgYXV0aGVudGljYXRvcnMgQXV0aGVudGljYXRvcltdXG4gKlxuICogICBAQG1hcChcInVzZXJzXCIpXG4gKiB9XG4gKlxuICogbW9kZWwgVmVyaWZpY2F0aW9uVG9rZW4ge1xuICogICBpZGVudGlmaWVyIFN0cmluZ1xuICogICB0b2tlbiAgICAgIFN0cmluZyAgIEB1bmlxdWVcbiAqICAgZXhwaXJlcyAgICBEYXRlVGltZVxuICpcbiAqICAgQEB1bmlxdWUoW2lkZW50aWZpZXIsIHRva2VuXSlcbiAqICAgQEBtYXAoXCJ2ZXJpZmljYXRpb250b2tlbnNcIilcbiAqIH1cbiAqXG4gKiBtb2RlbCBBdXRoZW50aWNhdG9yIHtcbiAqICAgaWQgICAgICAgICAgICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoY3VpZCgpKVxuICogICBjcmVkZW50aWFsSUQgICAgICAgICBTdHJpbmcgIEB1bmlxdWVcbiAqICAgdXNlcklkICAgICAgICAgICAgICAgU3RyaW5nXG4gKiAgIHByb3ZpZGVyQWNjb3VudElkICAgIFN0cmluZ1xuICogICBjcmVkZW50aWFsUHVibGljS2V5ICBTdHJpbmdcbiAqICAgY291bnRlciAgICAgICAgICAgICAgSW50XG4gKiAgIGNyZWRlbnRpYWxEZXZpY2VUeXBlIFN0cmluZ1xuICogICBjcmVkZW50aWFsQmFja2VkVXAgICBCb29sZWFuXG4gKiAgIHRyYW5zcG9ydHMgICAgICAgICAgIFN0cmluZz9cbiAqXG4gKiAgIHVzZXIgVXNlciBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiovXG5leHBvcnQgZnVuY3Rpb24gUHJpc21hQWRhcHRlcihwcmlzbWEpIHtcbiAgICBjb25zdCBwID0gcHJpc21hO1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gbGV0IFByaXNtYSBnZW5lcmF0ZSB0aGUgSUQgYmVjYXVzZSBvdXIgZGVmYXVsdCBVVUlEIGlzIGluY29tcGF0aWJsZSB3aXRoIE1vbmdvREJcbiAgICAgICAgY3JlYXRlVXNlcjogKHsgaWQ6IF9pZCwgLi4uZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcC51c2VyLmNyZWF0ZSh7IGRhdGEgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFVzZXI6IChpZCkgPT4gcC51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pLFxuICAgICAgICBnZXRVc2VyQnlFbWFpbDogKGVtYWlsKSA9PiBwLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGVtYWlsIH0gfSksXG4gICAgICAgIGFzeW5jIGdldFVzZXJCeUFjY291bnQocHJvdmlkZXJfcHJvdmlkZXJBY2NvdW50SWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBwLmFjY291bnQuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgcHJvdmlkZXJfcHJvdmlkZXJBY2NvdW50SWQgfSxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgdXNlcjogdHJ1ZSB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjb3VudD8udXNlciA/PyBudWxsO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVVc2VyOiAoeyBpZCwgLi4uZGF0YSB9KSA9PiBwLnVzZXIudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KSxcbiAgICAgICAgZGVsZXRlVXNlcjogKGlkKSA9PiBwLnVzZXIuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KSxcbiAgICAgICAgbGlua0FjY291bnQ6IChkYXRhKSA9PiBwLmFjY291bnQuY3JlYXRlKHsgZGF0YSB9KSxcbiAgICAgICAgdW5saW5rQWNjb3VudDogKHByb3ZpZGVyX3Byb3ZpZGVyQWNjb3VudElkKSA9PiBwLmFjY291bnQuZGVsZXRlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IHByb3ZpZGVyX3Byb3ZpZGVyQWNjb3VudElkIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBhc3luYyBnZXRTZXNzaW9uQW5kVXNlcihzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJBbmRTZXNzaW9uID0gYXdhaXQgcC5zZXNzaW9uLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IHNlc3Npb25Ub2tlbiB9LFxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXVzZXJBbmRTZXNzaW9uKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgY29uc3QgeyB1c2VyLCAuLi5zZXNzaW9uIH0gPSB1c2VyQW5kU2Vzc2lvbjtcbiAgICAgICAgICAgIHJldHVybiB7IHVzZXIsIHNlc3Npb24gfTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlU2Vzc2lvbjogKGRhdGEpID0+IHAuc2Vzc2lvbi5jcmVhdGUoeyBkYXRhIH0pLFxuICAgICAgICB1cGRhdGVTZXNzaW9uOiAoZGF0YSkgPT4gcC5zZXNzaW9uLnVwZGF0ZSh7IHdoZXJlOiB7IHNlc3Npb25Ub2tlbjogZGF0YS5zZXNzaW9uVG9rZW4gfSwgZGF0YSB9KSxcbiAgICAgICAgZGVsZXRlU2Vzc2lvbjogKHNlc3Npb25Ub2tlbikgPT4gcC5zZXNzaW9uLmRlbGV0ZSh7IHdoZXJlOiB7IHNlc3Npb25Ub2tlbiB9IH0pLFxuICAgICAgICBhc3luYyBjcmVhdGVWZXJpZmljYXRpb25Ub2tlbihkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJpZmljYXRpb25Ub2tlbiA9IGF3YWl0IHAudmVyaWZpY2F0aW9uVG9rZW4uY3JlYXRlKHsgZGF0YSB9KTtcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JzIC8vIE1vbmdvREIgbmVlZHMgYW4gSUQsIGJ1dCB3ZSBkb24ndFxuICAgICAgICAgICAgaWYgKHZlcmlmaWNhdGlvblRva2VuLmlkKVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB2ZXJpZmljYXRpb25Ub2tlbi5pZDtcbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmljYXRpb25Ub2tlbjtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgdXNlVmVyaWZpY2F0aW9uVG9rZW4oaWRlbnRpZmllcl90b2tlbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmljYXRpb25Ub2tlbiA9IGF3YWl0IHAudmVyaWZpY2F0aW9uVG9rZW4uZGVsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWRlbnRpZmllcl90b2tlbiB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JzIC8vIE1vbmdvREIgbmVlZHMgYW4gSUQsIGJ1dCB3ZSBkb24ndFxuICAgICAgICAgICAgICAgIGlmICh2ZXJpZmljYXRpb25Ub2tlbi5pZClcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZlcmlmaWNhdGlvblRva2VuLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmljYXRpb25Ub2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIElmIHRva2VuIGFscmVhZHkgdXNlZC9kZWxldGVkLCBqdXN0IHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cucHJpc21hLmlvL2RvY3MvcmVmZXJlbmNlL2FwaS1yZWZlcmVuY2UvZXJyb3ItcmVmZXJlbmNlI3AyMDI1XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFwiUDIwMjVcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGdldEFjY291bnQocHJvdmlkZXJBY2NvdW50SWQsIHByb3ZpZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcC5hY2NvdW50LmZpbmRGaXJzdCh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgcHJvdmlkZXJBY2NvdW50SWQsIHByb3ZpZGVyIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgY3JlYXRlQXV0aGVudGljYXRvcihhdXRoZW50aWNhdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcC5hdXRoZW50aWNhdG9yXG4gICAgICAgICAgICAgICAgLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZGF0YTogYXV0aGVudGljYXRvcixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnJvbURCQXV0aGVudGljYXRvcik7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGdldEF1dGhlbnRpY2F0b3IoY3JlZGVudGlhbElEKSB7XG4gICAgICAgICAgICBjb25zdCBhdXRoZW50aWNhdG9yID0gYXdhaXQgcC5hdXRoZW50aWNhdG9yLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNyZWRlbnRpYWxJRCB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYXV0aGVudGljYXRvciA/IGZyb21EQkF1dGhlbnRpY2F0b3IoYXV0aGVudGljYXRvcikgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBsaXN0QXV0aGVudGljYXRvcnNCeVVzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGF1dGhlbnRpY2F0b3JzID0gYXdhaXQgcC5hdXRoZW50aWNhdG9yLmZpbmRNYW55KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyB1c2VySWQgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGF1dGhlbnRpY2F0b3JzLm1hcChmcm9tREJBdXRoZW50aWNhdG9yKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgdXBkYXRlQXV0aGVudGljYXRvckNvdW50ZXIoY3JlZGVudGlhbElELCBjb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcC5hdXRoZW50aWNhdG9yXG4gICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgY3JlZGVudGlhbElEOiBjcmVkZW50aWFsSUQgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGNvdW50ZXIgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnJvbURCQXV0aGVudGljYXRvcik7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGZyb21EQkF1dGhlbnRpY2F0b3IoYXV0aGVudGljYXRvcikge1xuICAgIGNvbnN0IHsgdHJhbnNwb3J0cywgaWQsIHVzZXIsIC4uLm90aGVyIH0gPSBhdXRoZW50aWNhdG9yO1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLm90aGVyLFxuICAgICAgICB0cmFuc3BvcnRzOiB0cmFuc3BvcnRzIHx8IHVuZGVmaW5lZCxcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@auth+prisma-adapter@1.6.0_@prisma+client@5.18.0_prisma@5.18.0_/node_modules/@auth/prisma-adapter/index.js\n");

/***/ })

};
;