export interface Article {
  slug: string;
  title: string;
  cat: string;
  read: string;
  date: string;
  author: string;
  authorImg: string;
  img: string;
  excerpt: string;
  body: string[];
}

export const catColors: Record<string, string> = {
  HST: "bg-accent/10 text-accent",
  Growth: "bg-emerald-100 text-emerald-700",
  Bookkeeping: "bg-blue-100 text-blue-700",
  Compliance: "bg-rose-100 text-rose-700",
  Software: "bg-purple-100 text-purple-700",
  Payroll: "bg-amber-100 text-amber-700",
};

export const articles: Article[] = [
  {
    slug: "ontario-hst-guide-2025",
    title: "Ontario HST: Complete Guide for Small Business Owners (2025)",
    cat: "HST",
    read: "8 min",
    date: "Apr 12, 2025",
    author: "Ankit Kapoor, CPA",
    authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=85",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=85",
    excerpt:
      "Everything Ontario business owners need to know about HST in 2025 — registration thresholds, filing frequencies, ITCs, and the most common mistakes we see at audit. A no-jargon walkthrough.",
    body: [
      "Ontario's Harmonized Sales Tax combines the 5% federal GST with an 8% provincial portion into a single 13% tax. For most owners, the confusion is not the rate — it is knowing when registration becomes mandatory, how often to file, and what can actually be claimed back.",
      "Registration is required once your taxable revenue crosses $30,000 in any single calendar quarter or over four consecutive quarters. Below that threshold you may register voluntarily, which is often worthwhile if you spend heavily on taxable inputs and want to recover the tax through input tax credits.",
      "Your filing frequency follows your revenue: under $1.5M annually is generally annual, $1.5M to $6M is quarterly, and above $6M is monthly. You can elect to file more frequently than required, and many owners do so simply to keep the cash-flow rhythm predictable.",
      "Input tax credits are where most money is left on the table. Keep source documents that show the supplier's HST number, the date, and the tax charged. Credit card statements alone are not sufficient support if the CRA asks questions, and reconstructing a year of receipts after the fact is painful.",
      "The mistakes we see most often at review are simple: charging HST before registration is effective, claiming credits on personal expenses, and missing the quick-method election where it would have saved money. A clean monthly bookkeeping cycle prevents nearly all of them.",
    ],
  },
  {
    slug: "when-you-need-more-than-bookkeeper",
    title: "When Do You Need More Than a Bookkeeper?",
    cat: "Growth",
    read: "5 min",
    date: "Apr 5, 2025",
    author: "Priya Sharma, CPA",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&q=85",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=85",
    excerpt:
      "There's a moment in every growing business when bookkeeping alone stops being enough. We unpack the four signals that tell you it's time to bring in a controller or fractional CFO.",
    body: [
      "Bookkeeping answers the question \"what happened?\" Once your business gets past a certain size, the questions you actually need answered are forward-looking: what will cash look like in ninety days, which product line is carrying the others, and can you afford the next hire.",
      "The first signal is cash-flow anxiety despite profitability. If your income statement looks healthy but you are still watching the bank balance daily, you need forecasting and working-capital management, not more data entry.",
      "The second is decision paralysis. When pricing, hiring, or financing decisions get delayed because nobody can model the outcome, a controller-level review turns your existing numbers into scenarios you can act on.",
      "The third is complexity: multiple entities, multiple locations, inventory, or a lender who wants covenants tracked. The fourth is simply time — when the owner is still the last line of financial review at month-end, growth is capped by one person's calendar.",
      "You rarely need a full-time hire to solve this. A fractional arrangement gives you senior oversight a few days a month, layered on top of the bookkeeping you already have.",
    ],
  },
  {
    slug: "handle-5000-monthly-transactions",
    title: "How to Handle 5,000+ Monthly Transactions Without Losing Your Mind",
    cat: "Bookkeeping",
    read: "7 min",
    date: "Mar 28, 2025",
    author: "Marcus Williams",
    authorImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=85",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=85",
    excerpt:
      "Volume kills DIY bookkeeping. We share the exact stack — Xero, Dext, A2X — and rules engine we use to process 5,000+ monthly transactions for retail clients with zero errors.",
    body: [
      "At a few hundred transactions a month, manual categorisation is annoying. At five thousand, it is impossible. The fix is not working faster — it is making sure the vast majority of transactions never need a human decision at all.",
      "Start with clean feeds. Every bank account, credit card, and payment processor should flow directly into your ledger, with one account per source and no manual imports. Mixed or duplicated feeds are the single biggest cause of reconciliation drift.",
      "Next, build the rules engine. Recurring suppliers, payroll runs, processor fees, and platform payouts should all auto-code with the correct tax treatment. A well-tuned rule set will handle the large majority of lines untouched.",
      "Receipt capture belongs in its own tool. Publishing documents straight to the transaction keeps your audit trail intact without anyone filing paper, and it makes the input tax credit review at quarter-end a five-minute job instead of a weekend.",
      "Finally, reconcile weekly rather than monthly. Small discrepancies are cheap to fix in the week they appear and expensive to unwind ninety days later.",
    ],
  },
  {
    slug: "cra-audit-red-flags-ontario",
    title: "The CRA Audit Red Flags Ontario Business Owners Must Avoid",
    cat: "Compliance",
    read: "6 min",
    date: "Mar 20, 2025",
    author: "Ankit Kapoor, CPA",
    authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=85",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=85",
    excerpt:
      "Round numbers, missing receipts, large home-office claims — the CRA's audit triggers are predictable. Here are the seven red flags every Ontario owner should know and how to stay clear.",
    body: [
      "The CRA does not select files at random as often as people assume. Most reviews start with a statistical comparison against businesses of similar size and industry, and outliers get a closer look.",
      "Round numbers are the classic tell. Expense claims that land on tidy figures suggest estimates rather than records. So do sudden year-over-year swings in a single category without a corresponding change in revenue.",
      "Aggressive home-office and vehicle claims attract attention because they are frequently overstated. Both are legitimate deductions — they simply need a defensible basis: square footage, a mileage log, and consistency between years.",
      "Repeated business losses, large shareholder loan balances, and cash-heavy operations round out the list. None of these are wrong on their own, but each should come with documentation you could hand over tomorrow.",
      "The practical defence is boring and effective: reconcile monthly, keep digital source documents attached to every transaction, and file on time. Audits are far less stressful when the answer to every question already exists in your ledger.",
    ],
  },
  {
    slug: "xero-vs-quickbooks-ontario-retail",
    title: "Xero vs QuickBooks: Which Works Better for Ontario Retail?",
    cat: "Software",
    read: "9 min",
    date: "Mar 12, 2025",
    author: "Priya Sharma, CPA",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&q=85",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85",
    excerpt:
      "We've migrated hundreds of Ontario retail businesses between platforms. This is the head-to-head comparison: bank feeds, sales tax, multi-location, app ecosystem, and total cost.",
    body: [
      "Both Xero and QuickBooks Online are capable general ledgers, and either will serve an Ontario retailer well. The differences show up in workflow, not in whether the books balance.",
      "On bank feeds, both connect to the major Canadian institutions. Xero's reconciliation screen is faster for high-volume matching, while QuickBooks Online tends to feel more familiar to owners who have used desktop accounting before.",
      "For sales tax, both handle the 13% HST and the standard filing cadences. Multi-jurisdiction sellers should test their exact setup during trial rather than assume — the edge cases are where migrations get expensive.",
      "Multi-location retail favours a strong tracking-category setup, and the app ecosystem matters more than the ledger itself. Inventory, point of sale, and payout reconciliation tools are what actually determine whether month-end is quick.",
      "Our advice is unglamorous: choose the platform your accountant works in daily. Support quality beats feature lists, and a well-configured file on either platform outperforms a poorly configured file on the other.",
    ],
  },
  {
    slug: "payroll-compliance-checklist-ontario",
    title: "Payroll Compliance Checklist for Ontario Employers",
    cat: "Payroll",
    read: "6 min",
    date: "Mar 4, 2025",
    author: "Marcus Williams",
    authorImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=85",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=85",
    excerpt:
      "Source deductions, WSIB, EHT, ROEs, vacation accrual — the Ontario payroll checklist most owners overlook until the CRA calls. Print this and stick it on the wall.",
    body: [
      "Payroll is the area where small errors compound fastest, because every pay run repeats the mistake. A short checklist run each cycle prevents nearly all of the common problems.",
      "Source deductions come first. Income tax, CPP, and EI must be withheld correctly and remitted by your assigned due date. Remittance frequency depends on your average monthly withholding amount, and it can change as you grow.",
      "Ontario employers also need to consider WSIB coverage and the Employer Health Tax, each with its own registration rules and thresholds. Neither is handled by your payroll deductions automatically.",
      "Records of Employment are the most commonly missed obligation. An ROE is required whenever there is an interruption of earnings, and late filing creates problems for the employee more than the employer — which is how it ends up as a complaint.",
      "Finally, track vacation pay and statutory holiday entitlements as liabilities rather than as they are paid. Accruing properly keeps your balance sheet honest and avoids an unpleasant surprise at year end.",
    ],
  },
];

export const getArticle = (slug?: string) => articles.find((a) => a.slug === slug);
