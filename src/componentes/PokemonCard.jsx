
import {Component} from 'react';
/* ------------------------------- componentes ------------------------------ */
import {Card} from 'antd';
import Meta from 'antd/lib/card/Meta';
import {StarOutlined} from '@ant-design/icons';

class PokemonCard extends Component {
  render() {
    const { name } = this.props;

    return (
      <Card
        style={{ width: 250 }}
        title={name}
        cover={<img src="imagen" alt={name} />}
        extra={<StarOutlined />}
      >
        <Meta description='fire, magic' />
      </Card>
    );
  }
}

export default PokemonCard;
