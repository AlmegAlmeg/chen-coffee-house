import { randomUUID } from 'crypto';
import { ProductInterface } from '../model/product';

const defaultProducts: Array<ProductInterface> = [
  {
    id: randomUUID(),
    title: "ארפג'יו ",
    description:
      "תערובת הקפה ארפג'יו בהשראת קלייה מפירנצה והיא בדרגת חוזק 9. היא מתאימה למי שאוהב מרירות בינונית ומרקם קפה מפנק במיוחד. התערובת מצויינת גם כאספרסו קצר או ריסטרטו וגם עם חלב. ",
    imageUrl:
      'https://www.nespresso.com/il/he/media/catalog/product/n/e/nes4101_taarovot_new_resize_8_1_1.png',
    icon: 'https://www.nespresso.com/il/he/media/catalog/product//a/r/arpeggio.png',
    intensity: 9,
    category: 'Original',
    isProductNew: false,
    price: 22.2,
    slug: 'arpeggio-capsule-coffee',
  },
  {
    id: randomUUID(),
    title: 'שטוקהולם לונגו ',
    description:
      'שטוקלהום פורטיסיו לונגו לאספרסו ארוך היא תערובת קפה עוצמתית בדרגת חוזק 8 עם מרירות מאוזנת במיוחד ומרקם חלק בחלל הפה.',
    imageUrl:
      'https://www.nespresso.com/il/he/media/catalog/product/4/3/43953-n-pacshot-2-483x350_3_.png',
    icon: 'https://www.nespresso.com/il/he/media/catalog/product//4/3/43953-n-pacshot-2-120x120_3_.png',
    intensity: 8,
    category: 'Original',
    isProductNew: false,
    price: 23.3,
    slug: 'stockholm-lungo',
  },
];

export default defaultProducts;
