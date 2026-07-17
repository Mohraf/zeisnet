/**
 * Genuine 5-star Google reviews for Zeisnet.
 *
 * Single source of truth: rendered as testimonials on the homepage AND
 * marked up as Review + AggregateRating structured data in `lib/seo.ts`.
 * Google requires review markup to reflect real reviews that are visible
 * on the site — every entry here is displayed on the homepage.
 *
 * When you add/remove a review, update NOTHING else: the aggregate rating
 * and review count in the LocalBusiness schema are derived automatically.
 */
export type Review = {
  /** Reviewer's name as shown on Google. */
  name: string;
  /** Short attribution line (role and/or "Google review"). */
  role: string;
  /** Star rating out of 5. */
  rating: number;
  /** The review text. */
  quote: string;
};

export const reviews: Review[] = [
  {
    name: "Joyeuse Mpinganzima",
    role: "IT Manager · Google review",
    rating: 5,
    quote:
      "I am the IT manager of our company. We are dependent on Microsoft's Volume Licencing Service Center Apps. Mack and the team at Zeisnet Rwanda have been of big help to us to deploy, licence and run our core Apps seamlessly within no time and with ease. I recommend them to anyone looking for support related to VLSC services.",
  },
  {
    name: "Keza Faina",
    role: "IT Manager · Google review",
    rating: 5,
    quote:
      "As an IT manager I get roughly 30 support requests everyday. My team cannot cope with such a huge number. With Zeisnet Rwanda's Support Plans, On Site and in workshop, it has been really simple to handle any IT issues we have for a workforce of about 90 people. I would recommend them to anyone seeking solutions to seemingly simple but turns out to be complex IT problems.",
  },
  {
    name: "Irumva Mahoro Sylvie",
    role: "Google review",
    rating: 5,
    quote:
      "I am thoroughly impressed with the level of expertise and professionalism they bring to the table. Their range of services, including computer repair, maintenance, networking, and data recovery, truly sets them apart… If you're seeking top-notch services delivered by a team of professionals who genuinely care about your needs, Zeisnet Computing Solutions is the way to go.",
  },
  {
    name: "Alice Mukakalisa",
    role: "Small business owner · Google review",
    rating: 5,
    quote:
      "As small business owners performance is of the utmost in criticality! Having Mack and the Zeisnet Rwanda team available for repairs at a very competitive price, and sometimes the option for on-site (or at home) service, makes it highly desirable to do business with them! They are very knowledgeable and have a great rapport with clients because they can describe in “lay terms” what needs to be done.",
  },
  {
    name: "David Anjichi",
    role: "Local Guide · Google review",
    rating: 5,
    quote:
      "Quick and efficient service. All spare parts found easily. Hard working team who know how to work on both Windows and Mac machines. Also provide networking services.",
  },
  {
    name: "Dani Brown",
    role: "Google review",
    rating: 5,
    quote:
      "I'm writing this review on a computer I thought might not work again. Mack is a fantastic technician, and on top of that a good businessman. He prioritizes his customers and quickly gets the job done, communicating every step of the way. And his prices are fair and affordable. Highly recommend making Zeisnet your go-to place for personal and business tech needs!",
  },
];

/** Average rating across all reviews, rounded to one decimal. */
export const aggregateRatingValue =
  Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10) / 10;

/** Total number of reviews. */
export const reviewCount = reviews.length;
