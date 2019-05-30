import React, { Component, Fragment } from 'react';
import { graphql } from 'gatsby';

import ProductSlide from './ProductSlide';
import ProductNavItem from './ProductNavItem';

import {
  Container,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
} from 'reactstrap';

class BodyPartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  next() { 
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.produits.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
   }

  previous() { 
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.produits.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
   }

  onExiting() { this.animating = true; }
  onExited() { this.animating = false; }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { id, nom, slug, produits } = this.props;

    const allProducts = produits.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.id}
        >
          <ProductSlide item={item}/>
        </CarouselItem>
      );
    });

    return (
      <Fragment>
        <Container fluid id={slug} className="px-5 pt-5 text-center bg-light">
        <h3 className="display-5 text-uppercase mb-4" style={{fontWeight: 'bold', color: '#0074B4'}}>{nom}</h3>
        {produits.map((item, index) => 
          <Fragment key={`${item.id}-${index}`}>
            {index !== 0 ? <span>|</span> : null}
            <ProductNavItem 
              key={item.id}
              navigate={this.goToIndex}
              index={index}
              text={item.nom}
              active={activeIndex}
            />
          </Fragment>
        )}
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          interval={0}
          slide
        >
          <CarouselIndicators className="d-none" items={produits} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {allProducts}
        <a onClick={this.previous} className="position-absolute" style={{color: '#0074B4', fontSize: '200%', fontWeight: 'bold',top: '50%', left: '0', cursor: 'pointer'}}>&#x3c;</a>
        <a onClick={this.next} className="position-absolute" style={{color: '#0074B4', fontSize: '200%', fontWeight: 'bold', top: '50%', right: '0', cursor: 'pointer'}}>&#x3e;</a>
        </Carousel>
        </Container>
      </Fragment>
    );
  }
}

export const query = graphql`
  fragment BodyItems on ContentfulPartieDuCorps {
    id
    nom
    slug
    ordre
    produits {
        ...ProductItems
    }
  }
`;

export default BodyPartItem;


