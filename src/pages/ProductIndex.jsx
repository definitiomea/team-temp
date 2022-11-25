import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const ProductIndex = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {/* 이 페이지가 비동기로 데이터를 호출하게 만들면 될 것 같은데 */}
            <div className='product-index-area'>
              <div className='handle-area'>
                <button>앞/뒤</button>
                <button>사진 업로드</button>
                <button>사진 삭제</button>
                <button>텍스트</button>
                <button>이미지 편집</button>
              </div>
              <div style={{width:"250px", height:"250px", backgroundColor:"#FFF8E7"}}>
                티셔츠 샘플입니다
              </div>
              <div className='product-info'>
                <p>"제품명"</p>
                <p>"제품가격"</p>

                <p>색상 - 색상명</p>
                <div style={{width:"75px", height:"12px", backgroundColor:"#FFF8E7"}}></div>
                <p>사이즈</p>
                <div>
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                </div>
                <div>
                  <button>장바구니</button>
                  <button>구매하기</button>
                </div>
              </div>
            </div>
            <div className='guide-info'>
              <button>제작방법</button>
              <button>상세설명</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductIndex;
