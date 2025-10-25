npx create-next-app@latest rn-shop-admin --typescript --tailwind --eslint --> for project setup
npx shadcn-ui@latest init --> shadcn setup

### ✅ Recommended Ways to Install Supabase CLI
#### Option 1 — Use npx (quickest & works everywhere)

- You don’t need to install anything globally. Just run:
```
npx supabase logout
```

or for any command:

```
npx supabase start
npx supabase login
npx supabase link
```
This will automatically fetch the latest Supabase CLI version.

### To declare the types in Supabase for Database
```
npx supabase gen types typescript --project-id ryitwsehcqgizpxbnzsq<this is project id> > src/supabase/types.ts<types that should fetch to this file>
```