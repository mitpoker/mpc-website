## Getting Started

This is a [Next.js](https://nextjs.org/) project. To work on it, you must install `node` on your computer.

Then, use `npm` to install the dependencies:

```bash
npm i
```

Then run the development server:

```bash
npm run dev
```

You can see a preview at [http://localhost:3000](http://localhost:3000).

## Map of the Code

If you want to add members, add their information to `src/lib/members.ts` and their photo to `images/headshots`.

If you want to add sponsors, add their information to `src/lib/sponsors.ts` and their logos to `images/sponsors`.

The main pages of the website (Events, Sponsors, Officers, Alumni, FAQ, Contact) are in their respective files in `src/pages`.

The Alumni and Officers share a component called `PeopleList`, which you can edit in `src/lib/PeopleList.tsx`.

## Deploying

You should do your work on a feature branch. You can see a live preview of that branch through Vercel.

When you're ready to deploy your code to production, merge your feature branch into master. Vercel will automatically deploy it in a few seconds.
