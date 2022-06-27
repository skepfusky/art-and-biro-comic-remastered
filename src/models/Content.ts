export const NavItems = [
  { route: "/comic", name: "Comic" },
  { route: "/fan-art", name: "Fan Art" },
  { route: "/contact", name: "Contact" }
]

/**
 * Setting `img` property to null, currently not optional
 * or required at this point to satify type-checking.
 */
export const Characters = [
  { name: "Art", description: "Testing testing 123", img: null },
  { name: "Biro", description: "Testing testing 123", img: null },
  { name: "Parinton", description: "Testing testing 123", img: null },
  { name: "Julio", description: "Testing testing 123", img: null }
]

/**
 * THIS IS FOR UI PROTOTYPE ONLY
 * The Kickstarter API is not public and open-source
 * Not listing actual backers for reasons
 * Actual Kickstarter backers should be placed in a CMS or Redis
 */
// TODO: Randomize Kickstarter names from the main page on each reload
export const kickstarterBackers = [
  { name: "Kokoro Husky", img: null },
  { name: "skepfusky", img: null },
  { name: "Park Kiyoung", img: null },
  { name: "Lee Taeyong", img: null },
  { name: "Mark Lee", img: null },
  { name: "Lee Taemin", img: null },
  { name: "Do Kyungsoo", img: null },
  { name: "Park Jaehwan", img: null },
  { name: "Yeon Son-seung", img: null },
  { name: "Kim Taehyung", img: null },
  { name: "Sohyang", img: null }
]
