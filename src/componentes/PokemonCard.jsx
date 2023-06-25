
import {Component} from 'react';
/* ------------------------------- componentes ------------------------------ */
import {Card} from 'antd';
import Meta from 'antd/lib/card/Meta';
import {StarOutlined} from '@ant-design/icons';

class PokemonCard extends Component {
  render() {
    const { name, image } = this.props;

    return (
      <Card
        style={{ width: 250 }}
        title={name}
        // cover={<img src={image} alt={name} />}
        extra={<StarOutlined />}
      >
        <Meta description='fire, magic' />
      </Card>
    );
  }
}

export default PokemonCard;
