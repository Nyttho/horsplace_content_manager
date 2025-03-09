import type { Schema, Struct } from '@strapi/strapi';

export interface ClientLogoClientLogo extends Struct.ComponentSchema {
  collectionName: 'components_client_logo_client_logos';
  info: {
    description: '';
    displayName: 'ClientLogo';
    icon: 'user';
  };
  attributes: {
    logo_img: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
  };
}

export interface StatcardStatisticCard extends Struct.ComponentSchema {
  collectionName: 'components_statcard_statistic_cards';
  info: {
    displayName: 'Statistic Card';
    icon: 'chartPie';
  };
  attributes: {
    stat_description: Schema.Attribute.Text;
    stat_percentage: Schema.Attribute.Integer;
    stat_title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'client-logo.client-logo': ClientLogoClientLogo;
      'statcard.statistic-card': StatcardStatisticCard;
    }
  }
}
