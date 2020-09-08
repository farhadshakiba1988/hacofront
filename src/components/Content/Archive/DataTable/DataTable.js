import React, { Component } from 'react';
import {Table, Tag, ConfigProvider, Dropdown, Menu, Input, Space, Button, Tabs, Steps, Drawer,AutoComplete} from 'antd';

import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import EditIcon from '../../../../Icons/edit.svg';
import MoreInformationIcon from '../../../../Icons/moreInformation.svg';
import TransferTo from './../../../../Icons/images/Group 468.svg';
import inActiveIcon from '../../../../Icons/inActive.svg';
import RemoveIcon from '../../../../Icons/remove.svg';
import MyDrawer from "../../../../BaseComponent/Drawer/Drawer";
import './DataTable.css';
import ResumeArchive from "./../Resume/ResumeArchive/ResumeArchiveBloc/Bloc";
import ResumeArchiveBloc from "./../Resume/ResumeArchive/ResumeArchiveBloc/Bloc";
import {getALLResumeArchives} from "../../../../services/ResumeArchiveService";
import Axios from "axios";


const { TabPane } = Tabs;
const { Step } = Steps;
const menu = (
    <Menu>
        <Menu.Item key="0">
            <img className='ml-2' src={MoreInformationIcon} alt={'more information icon'} />
            <MyDrawer placement={'left'} header='رزومه' text='مشاهده رزومه '
            >
                <ResumeArchive/>
            </MyDrawer>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.alipay.com/"><img className='ml-2' src={TransferTo} alt={'TransferTo icon'} />انتقال به درخواست استخدام
                </a>
        </Menu.Item>
        <Menu.Item key="2">
            <a href="http://www.alipay.com/"><img className='ml-2' src={EditIcon} alt={'edit icon'} />ویرایش</a>
        </Menu.Item>
        <Menu.Item key="3">
            <a href="http://www.alipay.com/"><img className='ml-2' src={RemoveIcon} alt={'remove icon'} />حذف</a>
        </Menu.Item>
    </Menu>
)

/*const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];*/
/*const data = [];*/





class DataTable extends Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        hasData: true,
        searchText: '',
        searchedColumn: '',
        sortedInfo: null,
        scroll: undefined,
        data:[],
    };

    constructor(props) {
        super(props);
        this.bloc = new ResumeArchiveBloc();
        this.bloc.init();
    }


    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        id='search_button_delete' onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        پاک کردن
                    </Button>
                    <Button
                        id='search_button'
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        جستجو
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#f87171', padding: '.2rem', borderRadius: '0.5rem ' }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                    text
                ),
    })
    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };
    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    /*start = () => {
this.setState({loading: true});
// ajax request after empty completing
setTimeout(() => {
this.setState({
    selectedRowKeys: [],
    loading: false,
});
}, 1000);
};*/
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    badgeFunction = (val) => {
        switch (true) {
            case val === " در انتظار مصاحبه اول":
                return (
                    <Tag color="#fff4de" style={{
                        color:
                            "#ff9d55"
                    }}>{val}</Tag>
                );
            case val === "استخدام شده":
                return (
                    <Tag color="#e0fff2" style={{
                        color:
                            "#1bc57d "
                    }}>{val}</Tag>
                );
            case val === "متقاضی جدید":
                return (
                    <Tag color="#e3eeff " style={{
                        color:
                            "#5685ee"
                    }}>{val}</Tag>
                );
            case val === "رد شده":
                return (
                    <Tag color="#ffe2e5" style={{
                        color:
                            "#f85e6f"
                    }}>{val}</Tag>
                );
            case val === "تایید برای مصاحبه ":
                return (
                    <Tag color="#e0fff2" style={{
                        color:
                            "#1bc57d "
                    }}>{val}</Tag>
                );
            case " رد شده در مصاحبه":
                return (
                    <Tag color="#ffe2e5" style={{
                        color:
                            "#f85e6f"
                    }}>{val}</Tag>
                );
            case val === " در انتظار مصاحبه دوم":
                return (
                    <Tag color="#fff4de" style={{
                        color:
                            "#ff9d55"
                    }}>{val}</Tag>
                );
            case val === " در حال مصاحبه":
                return (
                    <Tag color="#fff4de" style={{
                        color:
                            "#ff9d55"
                    }}>{val}</Tag>
                );
            case val === "تکمیل مدرک":
                return (
                    <Tag color="#fff4de" style={{
                        color:
                            "#ff9d55"
                    }}>{val}</Tag>
                );
            default:
                return 'NO';
        }
    }
    componentDidMount() {
       /* const data =getALLResumeArchives();*/
      /*  this.setState({ data })*/
      Axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=24hr')
            .then(res => {
                const data = res.data;
                this.setState({ data })
            })
    }

    render() {
        const { data } = this.state;
        const tableData = data.map(row => ({
            Rank: row.market_cap_rank,
            Name: row.name,
            Price: row.current_price,
            Change: row.price_change_24h,
            totalVol: row.total_volume,

        }))

        const columns = [{
            title: 'Rank',
            dataIndex: 'Rank',
            key: 'Rank',
        }, {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
        }, {
            title: 'Price',
            dataIndex: 'Price',
            key: 'Price',
        },  {
            title: '24hr Change',
            dataIndex: 'Change',
            key: 'Change',
        }, {
            title: 'Total Volume',
            dataIndex: 'totalVol',
            key: 'totalVol',
        },]

        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;

        return (
            <ConfigProvider direction='rtl'>
          {/*      <AutoComplete
                    style={{width: 200}}
                    dataSource={dataSource.}
                    placeholder="نام متقاضی"

                    filterOption={(inputValue, option) =>
                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                />*/}


                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                <Table className='mr-4 ml-4 mb-4 text-right overflow-scroll'
                    size='small' rowSelection={rowSelection}
                    dataSource={this.state.hasData ? tableData : null}
                    columns={columns}
                    scroll={{ x: 1500 }}
                />
            </ConfigProvider>
        );
    }
}

export default DataTable;