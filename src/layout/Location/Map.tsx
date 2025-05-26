import styled from '@emotion/styled';

const Map = () => {
  return (
    <MapWrapper>
      <iframe
        title="kakao-map"
        src="https://place.map.kakao.com/m/27446151"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
      ></iframe>
    </MapWrapper>
  );
};

export default Map;

const MapWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin: 10px 0;
  border-radius: 8px;
  overflow: hidden;
`;