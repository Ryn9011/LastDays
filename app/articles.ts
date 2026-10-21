import type { ComponentType } from "react";

import WelcomeToTheLastDays from "./_articles-components/welcome-to-the-last-days";
import TheMiracleOfIsraelBornInADay from "./_articles-components/the-miracle-of-israel-born-in-a-day";
import ThePoliticalDeadlineOfGlobalCentralisation from "./_articles-components/the-political-deadline-of-global-centralisation";
import TheTranshumanistAlterationAndTheDaysOfNoah from "./_articles-components/the-transhumanist-alteration-and-the-days-of-noah";
import TheGlobalReligiousSynthesisAndTheShadowOfBabylon from "./_articles-components/the-global-religious-synthesis-and-the-shadow-of-babylon";
import TheRestrainerAndThePreTribulationHope from "./_articles-components/the-restrainer-and-the-pre-tribulation-hope";
import TheLawOfConvergence from "./_articles-components/the-law-of-convergence";
import TheRegionalConvergenceMassMigrationAndTheTenKingdomBlueprint from "./_articles-components/the-regional-convergence-mass-migration-and-the-ten-kingdom-blueprint";
import TheEradicationOfBordersAndTheMassMigrationVacuum from "./_articles-components/the-eradication-of-borders-and-the-mass-migration-vacuum";
import GlobalEmergencyProtocolsAndTheConditioningOfSociety from "./_articles-components/global-emergency-protocols-and-the-conditioning-of-society";
import TheTechnologicalShelfLifeAndTheAiSingularity from "./_articles-components/the-technological-shelf-life-and-the-ai-singularity";
import TheTechnicalRealisationOfTheBeastSystem from "./_articles-components/the-technical-realisation-of-the-beast-system";
import MillionsHaveDisappeared from "./_articles-components/millions-have-disappeared";

export type Article = {
  slug: string;
  title: string;
  description: string;
  // Path under /public for the article's header image. Falls back to a
  // placeholder image when not supplied.
  image?: string;
  Content: ComponentType;
};

// Add a new entry here each time you create a new article component.
export const articles: Article[] = [
  {
    slug: "6000-years-almost-over",
    image: "/6000Years-400kb.jpeg",
    title: "6,000 Years Almost Over",
    description: "The end of the 6,000-year human epoch is approaching.",
    Content: WelcomeToTheLastDays,
  },
  {
    slug: "miracle-of-israel-born-in-a-day",
    image: "/FIgTree-400kb.jpeg",
    title: "The Miracle of Israel Born in a Day and the Fig Tree Generation",
    description:
      "Israel's rebirth in 1948 as the fulfillment of Isaiah 66:8 and the fig tree generation of Matthew 24.",
    Content: TheMiracleOfIsraelBornInADay,
  },
  {
    slug: "political-deadline-of-global-centralisation",
    image: "/PoliticalDeadline-400kb.jpeg",
    title: "The Political Deadline of Global Centralisation",
    description:
      "International policy frameworks, digital identity, and CBDCs are converging on a published 2030 deadline for global integration.",
    Content: ThePoliticalDeadlineOfGlobalCentralisation,
  },
  {
    slug: "transhumanist-alteration-and-the-days-of-noah",
    image: "/DaysOfNoah-400kb.jpeg",
    title: "The Transhumanist Alteration and the Days of Noah",
    description:
      "Genetic engineering, transhumanism, and the Mark of the Beast echo the biological corruption of Noah's generation.",
    Content: TheTranshumanistAlterationAndTheDaysOfNoah,
  },
  {
    slug: "global-religious-synthesis-and-the-shadow-of-babylon",
    image: "/ShadowBabylon-400kb.jpeg",
    title: "The Global Religious Synthesis and the Shadow of Babylon",
    description:
      "Interfaith synthesis, eco-spirituality, and the commercial power of New York City as the modern shadow of Mystery Babylon.",
    Content: TheGlobalReligiousSynthesisAndTheShadowOfBabylon,
  },
  {
    slug: "restrainer-and-the-pre-tribulation-hope",
    image: "/RestrainerPreTribulation-400kb.jpeg",
    title: "The Restrainer and the Pre-Tribulation Hope",
    description:
      "The Holy Spirit's restraining work through the Church, the biblical case for the pre-tribulation Rapture, and the believer's blessed hope.",
    Content: TheRestrainerAndThePreTribulationHope,
  },
  {
    slug: "law-of-convergence",
    image: "/Convergence-400kb.jpeg",
    title: "The Law of Convergence",
    description:
      "Why the simultaneous maturation of every prophetic sign in a single generation is the ultimate evidence the end is near.",
    Content: TheLawOfConvergence,
  },
  {
    slug: "regional-convergence-mass-migration-and-the-ten-kingdom-blueprint",
    image: "/ReigonalConvergence-400kb.jpeg",
    title:
      "The Regional Convergence, Mass Migration, and the Ten-Kingdom Blueprint",
    description:
      "How the consolidation of nations into ten regional blocs and orchestrated mass migration align with Daniel's prophecy of a fractured, iron-and-clay end-times empire.",
    Content: TheRegionalConvergenceMassMigrationAndTheTenKingdomBlueprint,
  },
  {
    slug: "the-eradication-of-borders-and-the-mass-migration-vacuum",
    image: "/MigrationBorders-400kb.jpeg",
    title: "The Eradication of Borders and the Mass Migration Vacuum",
    description:
      "How transnational migration frameworks and the Hegelian Problem-Reaction-Solution dialectic are dissolving national sovereignty to create the political vacuum of Daniel's iron and clay.",
    Content: TheEradicationOfBordersAndTheMassMigrationVacuum,
  },
  {
    slug: "global-emergency-protocols-and-the-conditioning-of-society",
    image: "/GlobalEmergency-400kb.jpeg",
    title: "Global Emergency Protocols and the Conditioning of Society",
    description:
      "How WHO pandemic treaties, climate emergency mandates, and psychological conditioning are building the administrative machinery to instantly override national sovereignty when 'peace and safety' gives way to sudden destruction.",
    Content: GlobalEmergencyProtocolsAndTheConditioningOfSociety,
  },
  {
    slug: "the-technological-shelf-life-and-the-ai-singularity",
    image: "/ShelfLife-400kb.jpeg",
    title: "The Technological Shelf Life and the AI Singularity",
    description:
      "Why the rapid approach of AGI and the technological singularity imposes a strict expiration date on the human-centric, human-ruled system described in Revelation 13.",
    Content: TheTechnologicalShelfLifeAndTheAiSingularity,
  },
  {
    slug: "the-technical-realisation-of-the-beast-system",
    image: "/BeastSystem-400kb.jpeg",
    title: "The Technical Realisation of the Beast System",
    description:
      "How the convergence of CBDCs, AI-driven algorithmic surveillance, biometric identification, and planetary 5G/6G infrastructure has built the exact technical lock on buying and selling described in Revelation 13.",
    Content: TheTechnicalRealisationOfTheBeastSystem,
  },
  {
    slug: "millions-have-disappeared",
    title: "Millions Have Disappeared",
    description:
      "A reflection on the rapture and the beginning of the tribulation, urging those left behind to turn to Jesus Christ.",
    Content: MillionsHaveDisappeared,
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
