import type { Schema, Struct } from '@strapi/strapi';

export interface AboutPageAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_about_page_about_uses';
  info: {
    description: '';
    displayName: 'About us';
  };
  attributes: {
    text: Schema.Attribute.Text;
    text2: Schema.Attribute.Text;
    text3: Schema.Attribute.Text;
    text4: Schema.Attribute.Text;
    text5: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface EstimationSectionEstimationSection
  extends Struct.ComponentSchema {
  collectionName: 'components_estimation_section_estimation_sections';
  info: {
    displayName: 'estimationSection';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeContactSection extends Struct.ComponentSchema {
  collectionName: 'components_home_contact_sections';
  info: {
    description: '';
    displayName: 'contactSection';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'ui.button', true>;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomeHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_sections';
  info: {
    description: '';
    displayName: 'heroSection';
  };
  attributes: {
    btnText: Schema.Attribute.String;
    videoUrl: Schema.Attribute.Text;
  };
}

export interface HomeStatistic extends Struct.ComponentSchema {
  collectionName: 'components_home_statistics';
  info: {
    description: '';
    displayName: 'statisticSection';
  };
  attributes: {
    statistics: Schema.Attribute.Component<'home.statistic-card', true>;
  };
}

export interface HomeStatisticCard extends Struct.ComponentSchema {
  collectionName: 'components_home_statistic_cards';
  info: {
    displayName: 'StatisticCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    percentage: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface HomeTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials';
  info: {
    description: '';
    displayName: 'testimonial';
  };
  attributes: {
    authorImg: Schema.Attribute.Media<'images'>;
    authorName: Schema.Attribute.String;
    authorTitle: Schema.Attribute.Text;
    quote: Schema.Attribute.Text;
  };
}

export interface HomeTrustSection extends Struct.ComponentSchema {
  collectionName: 'components_home_trust_sections';
  info: {
    displayName: 'trustSection';
  };
  attributes: {
    catchPhrase: Schema.Attribute.Text;
    clients: Schema.Attribute.Relation<'oneToMany', 'api::client.client'>;
  };
}

export interface QuestionQuestionItem extends Struct.ComponentSchema {
  collectionName: 'components_question_question_items';
  info: {
    displayName: 'questionItem';
  };
  attributes: {
    question: Schema.Attribute.Text;
    response: Schema.Attribute.Text;
  };
}

export interface SolutionHeader extends Struct.ComponentSchema {
  collectionName: 'components_solution_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    headerImg: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SolutionWhatSection extends Struct.ComponentSchema {
  collectionName: 'components_solution_what_sections';
  info: {
    description: '';
    displayName: 'whatSection';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SolutionWhySection extends Struct.ComponentSchema {
  collectionName: 'components_solution_why_sections';
  info: {
    description: '';
    displayName: 'whySection';
  };
  attributes: {
    productIllustration: Schema.Attribute.Media<'images', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface UiWhatList extends Struct.ComponentSchema {
  collectionName: 'components_ui_what_lists';
  info: {
    displayName: 'whatList';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    primary: Schema.Attribute.Text;
    secondary: Schema.Attribute.Text;
  };
}

export interface UiWhyList extends Struct.ComponentSchema {
  collectionName: 'components_ui_why_lists';
  info: {
    displayName: 'whyList';
  };
  attributes: {
    listItem: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-page.about-us': AboutPageAboutUs;
      'estimation-section.estimation-section': EstimationSectionEstimationSection;
      'home.contact-section': HomeContactSection;
      'home.hero-section': HomeHeroSection;
      'home.statistic': HomeStatistic;
      'home.statistic-card': HomeStatisticCard;
      'home.testimonial': HomeTestimonial;
      'home.trust-section': HomeTrustSection;
      'question.question-item': QuestionQuestionItem;
      'solution.header': SolutionHeader;
      'solution.what-section': SolutionWhatSection;
      'solution.why-section': SolutionWhySection;
      'ui.button': UiButton;
      'ui.what-list': UiWhatList;
      'ui.why-list': UiWhyList;
    }
  }
}
