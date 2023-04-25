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

If you want to add members, add their information to `src/lib/members.ts` and their photo to `images/headshots`. This should require writing a bit of JSON but basically no edits to code.

If you want to add sponsors, add their information to `src/lib/sponsors.ts` and their logos to `images/sponsors`. Again, this should require a bit of JSON but no edits to code.

The main pages of the website (Events, Sponsors, Officers, Alumni, FAQ, Contact) are in their respective files in `src/pages`.

The Alumni and Officers share a component called `PeopleList`, which you can edit in `src/lib/PeopleList.tsx`.

## Styling

This project uses TailwindCSS. Despite its ugliness, the author thinks it's the best styling solution currently available. Documentation is [here](https://tailwindcss.com/).

## Deploying

You should do your work on a feature branch. You can see a live preview of that branch through Vercel.

When you're ready to deploy your code to production, merge your feature branch into master. Vercel will automatically deploy it in a few seconds.

If you're a bit shaky on Git, [this tutorial](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) on feature branches should get you up and running.
