import type { Schema, Struct } from '@strapi/strapi';

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

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.contact-section': HomeContactSection;
      'home.hero-section': HomeHeroSection;
      'home.statistic': HomeStatistic;
      'home.statistic-card': HomeStatisticCard;
      'home.testimonial': HomeTestimonial;
      'home.trust-section': HomeTrustSection;
      'ui.button': UiButton;
    }
  }
}
