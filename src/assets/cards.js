// interface Card {
//     image: string;
//     isLongHair: boolean;
//   }
  
//   const cards: Card[] = [
//     // { image: nomadland, isLongHair: false },
//     // { image: rouge, isLongHair: true },
//     // { image: vivresavie, isLongHair: false },
//     // { image: womenwhoran, isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
//     { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
//     { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  
//   ];

//   export default cards;