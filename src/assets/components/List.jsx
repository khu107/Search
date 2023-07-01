import { styled } from 'styled-components';
import '../../App.css';

function List({ web, value }) {
  console.log(value);

  const renderContent = () => {
    switch (value) {
      case 'image':
        return (
          <WrapList>
            {web.map((v, i) => (
              <div key={i}>
                <img src={v.image_url} alt={v.display_sitename} />
              </div>
            ))}
          </WrapList>
        );
      case 'web':
        return (
          <WrapList>
            {web.map((v, i) => (
              <div key={i}>
                <h5
                  style={{ color: 'white', margin: '15px', fontWeight: '400' }}
                  dangerouslySetInnerHTML={{ __html: v.title }}
                />
              </div>
            ))}
          </WrapList>
        );
      case 'blog':
        return (
          <WrapList>
            {web.map((v, i) => (
              <div key={i}>
                <h5
                  style={{ color: 'white', margin: '15px', fontWeight: '400' }}
                  dangerouslySetInnerHTML={{ __html: v.title }}
                />
                <p
                  style={{ color: 'white' }}
                  dangerouslySetInnerHTML={{ __html: v.contents }}
                />
              </div>
            ))}
          </WrapList>
        );
      default:
        return null;
    }
  };

  return renderContent();
}

export default List;

const WrapList = styled.div`
  width: 500px;
  margin: 0 auto;
  text-align: left;
`;
