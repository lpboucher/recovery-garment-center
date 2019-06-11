import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators } from 'reactstrap';

class Jumbo extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.data.edges.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.data.edges.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const items = this.props.data.edges.map(slide => {
        return {
            id: slide.node.id,
            src: slide.node.cover,
            altText: slide.node.text,
            caption: slide.node.text
        }
    });
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.id}
        >
          <Img fluid={item.src.fluid}/>
          <div className="w-75 text-center text-white" style={{position: 'absolute', top: '40%', marginLeft: '12.5%'}}>
            <p className="display-4" style={{fontWeight: 'bold'}}>{item.caption}</p>
          </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export const query = graphql`
    fragment JumboItems on ContentfulJumbotron {
        id
        text 
        cover {
            fluid(maxWidth: 1600) {
                ...GatsbyContentfulFluid
            }
        }
    }
`;

export default Jumbo;