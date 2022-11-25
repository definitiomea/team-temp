import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const Product = () => {
  const color = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF"];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height: "10px",
          color: color[i],
          border: `1px ${color[i]} solid`,
          borderRadius: "50%",
          backgroundColor: color[i]
        }}
      >
        {/* {i + 1} */}
      </div>
    )
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            {/* 컴포넌트로 만들어서 호출하기 */}
            {/* 어차피 슬릭이 요소를 블록 단위로 움직여주는 것도 확인됐으니까 */}
            <div className='product-category'>
              <h3>Short Sleeve T-Shirt</h3>
              <h3>Long Sleeve T-Shirt</h3>
            </div>
            <div className='product-sample-area'>
              <div className='product-sample'>
                <div style={{width:"200px", height:"200px", backgroundColor:"#FFF8E7"}}>
                  샘플 1번
                </div>
                <p>product sample - 1</p>
                <p>product price - 1</p>
              </div>            
              <div className='product-sample'>
                  <div style={{width:"200px", height:"200px", backgroundColor:"#FFF8E7"}}>
                    샘플 2번
                    <Slider {...settings}>
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                      <p>4</p>
                      <p>5</p>
                    </Slider>
                  </div>
                  <p>product sample - 2</p>
                  <p>product price - 2</p>
              </div>
              <div className='product-sample'>
                <div style={{width:"200px", height:"200px", backgroundColor:"#FFF8E7"}}>
                  샘플 3번
                </div>
                <p>product sample - 3</p>
                <p>product price - 3</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Product;
