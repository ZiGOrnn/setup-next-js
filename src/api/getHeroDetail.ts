interface HeroDetail {
  hero: string;
}

function getHeroDetail(): HeroDetail {
  return {
    hero: 'superman',
  };
}

export default getHeroDetail;
