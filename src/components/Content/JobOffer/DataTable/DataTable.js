import React, { Component } from 'react';
import { Table, Tag, ConfigProvider, Dropdown, Menu, Input, Space, Button, Tabs, Steps } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import EditIcon from '../../../../Icons/edit.svg';
import MoreInformationIcon from '../../../../Icons/moreInformation.svg';
import inActiveIcon from '../../../../Icons/inActive.svg';
import RemoveIcon from '../../../../Icons/remove.svg';
import MyDrawer from "../../../../BaseComponent/Drawer/Drawer";
import MoreInformationsForm from "./../JobOfferForm/MoreInformation/MoreInformationsForm/Form";
import './DataTable.css';

const { TabPane } = Tabs;
const { Step } = Steps;
const menu = (

    <Menu>
        <Menu.Item key="0">
            <img className='ml-2' src={MoreInformationIcon} alt={'more information icon'} />
            <MyDrawer placement={'left'} header='انتشار آگهی استخدام' text='اطلاعات بیشتر'
            >
                <Tabs defaultActiveKey="1" className="headerDrawer"
                    // onChange={callback} 
                    centered>
                    <TabPane   
                        tab="جزییات"
                        key="1"
                      
                        style={{ paddingRight: 40 }}
                    >           
                        <MoreInformationsForm />                               
                    </TabPane>
                    <TabPane
                        tab="وضعیت درخواست"
                        key="2"
                        style={{ padding: 20 }}
                    
                    >
                        <Steps status="error"
                            direction="vertical"
                            size="small"
                            current={1}
                        >
                            <Step
                                title="Finished"
                                description="This is a description."
                            />
                            <Step
                                title="In Progress"
                                description="This is a description."
                            />
                            <Step
                                title="Waiting"
                                description="This is a description."
                            />
                        </Steps>
                    </TabPane>


                </Tabs>
            </MyDrawer>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.alipay.com/"><img className='ml-2' src={inActiveIcon} alt={'inactive icon'} />غیرفعال
                کردن</a>
        </Menu.Item>
        <Menu.Item key="2">
            <a href="http://www.alipay.com/"><img className='ml-2' src={EditIcon} alt={'edit icon'} />ویرایش</a>
        </Menu.Item>
        <Menu.Item key="3">
            <a href="http://www.alipay.com/"><img className='ml-2' src={RemoveIcon} alt={'remove icon'} />حذف</a>
        </Menu.Item>
    </Menu>
)

const data = [
    {
        key: '1',
        job_title: 'فرانت',
        volunteer: undefined,
        department: 'it',
        job_location: 'تهران',
        date: '20',
        condition: ['فعال در سایت'],
        operation: '...'
    },
    {
        key: '2',
        job_title: 'بک',
        volunteer: 128,
        department: 'it',
        job_location: 'تهران',
        date: '25',
        condition: ['تایید نشده'],
        operation: '...'
    },
    {
        key: '3',
        job_title: 'دیزاین',
        volunteer: 10,
        department: 'it',
        job_location: 'تهران',
        date: '24',
        condition: ['غیر فعال'],
        operation: '...'
    },
    {
        key: '4',
        job_title: 'دیزاین',
        volunteer: 2,
        department: 'it',
        job_location: 'تهران',
        date: '24',
        condition: ['در انتظار تایید منابع انسانی'],
        operation: '...'
    },
    {
        key: '5',
        job_title: 'دیزاین',
        volunteer: 23,
        department: 'it',
        job_location: 'تهران',
        date: '24',
        condition: ['منقضی شده'],
        operation: '...'
    },
];


class DataTable extends Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        hasData: true,
        searchText: '',
        searchedColumn: '',
    };

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

    render() {
        const columns = [
            {
                title: 'عنوان شغل',
                dataIndex: 'job_title',
                key: 'job_title',
                width: '200px',
                ...this.getColumnSearchProps('job_title')
            },
            {
                title: 'متقاضیان',
                dataIndex: 'volunteer',
                render: volunteer => {
                    if (typeof volunteer === "number") {
                        return <span className='volunteer'>{volunteer}</span>
                    }
                    if (typeof volunteer === "undefined") {
                        return <span className='pr-1' style={{ color: '#5685ee', fontFamily: 'Bold' }}>_</span>
                    }
                },
                key: 'volunteer',
                width: '200px',
            },
            {
                title: 'دپارتمان',
                dataIndex: 'department',
                key: 'department',
                width: '200px',
                ...this.getColumnSearchProps('department')
            },
            {
                title: 'محل کار',
                dataIndex: 'job_location',
                key: 'job_location',
                width: '200px',
                ...this.getColumnSearchProps('job_location')
            },
            {
                title: 'تاریخ',
                dataIndex: 'date',
                sorter: {
                    compare: (a, b) => a.date - b.date,
                    multiple: 1
                },
                width: '200px',
            },
            {
                title: 'وضعیت',
                dataIndex: 'condition',
                key: 'date',
                filters: [
                    {
                        text: 'فعال در سایت',
                        value: 'فعال در سایت'
                    },
                    {
                        text: 'غیر فعال',
                        value: 'غیر فعال'
                    },
                    {
                        text: 'در انتظار تایید منابع انسانی',
                        value: 'در انتظار تایید منابع انسانی'
                    },
                    {
                        text: 'منقضی شده',
                        value: 'منقضی شده'
                    },
                    {
                        text: 'تایید نشده',
                        value: 'تایید نشده'
                    }
                ],
                onFilter: (value, record) => record.condition.indexOf(value) === 0,
                render:tags => (
                    <>
                        {tags.map(tag => {
                            let color;
                            if (tag === 'تایید نشده') {
                                color = '#f85e6f';
                            }
                            if (tag === 'فعال در سایت') {
                                color = '#1bc57d';
                            }
                            if (tag === 'غیر فعال') {
                                color = '#898989';
                            }
                            if (tag === 'منقضی شده') {
                                color = '#898989';
                            }
                            if (tag === 'در انتظار تایید منابع انسانی') {
                                color = '#ff9d55';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag}
                                </Tag>
                            )
                        })}
                    </>
                ),
            },
            {
                title: 'عملیات',
                dataIndex: 'operation',
                render: operation => {
                    return (
                        <Dropdown overlay={menu} trigger={['click']} placement='bottomCenter'>
                            <div className="ant-dropdown-link cursor-pointer" onClick={e => e.preventDefault()}>
                                ...
                            </div>
                        </Dropdown>
                    )
                },
                key: 'operation',
                width: '200px',
            },
        ];
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;

        return (
            <ConfigProvider direction='rtl'>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                <Table className='mr-4 ml-4 mb-4 text-right overflow-scroll'
                    size='small' rowSelection={rowSelection}
                    dataSource={this.state.hasData ? data : null}
                    columns={columns}
                    scroll={{ x: 1500 }}
                />
            </ConfigProvider>
        );
    }
}

export default DataTable;