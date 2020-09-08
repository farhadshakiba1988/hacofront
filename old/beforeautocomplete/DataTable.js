import React, { Component } from 'react';
import {Table, Tag, ConfigProvider, Dropdown, Menu, Input, Space, Button, Tabs, Steps, Drawer} from 'antd';

import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import EditIcon from '../../../../Icons/edit.svg';
import MoreInformationIcon from '../../../../Icons/moreInformation.svg';
import TransferTo from './../../../../Icons/images/Group 468.svg';
import inActiveIcon from '../../../../Icons/inActive.svg';
import RemoveIcon from '../../../../Icons/remove.svg';
import MyDrawer from "../../../../BaseComponent/Drawer/Drawer";
import './DataTable.css';
import ResumeArchive from "./../Resume/ResumeArchive/ResumeArchiveForm";


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

const data = [];
for (let i = 0; i < 4; i++) {
    data.push({
        key: i,
        name: 'امینی محمد ',
        Jobtitle: 'حسابدار',
        Sendlocation: 'وب سایت ',
        dates: i + 1,
        condition: 'رد شده',
    });
}


class DataTable extends Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        hasData: true,
        searchText: '',
        searchedColumn: '',
        sortedInfo: null,
        scroll: undefined,
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
    render() {
        const columns = [
            {
                title: 'نام متقاضی',
                dataIndex: 'name',
                key: 'name',
                width: '200px',
                ...this.getColumnSearchProps('name'),
            },
            {
                title: 'عنوان شغل',
                dataIndex: 'job_title',
                key: 'job_title',
                width: '200px',
                ...this.getColumnSearchProps('job_title')
            },
            {
                title: 'محل ارسال',
                dataIndex: 'Sendlocation',
                key: 'Sendlocation',
                width: '200px',
                ...this.getColumnSearchProps('Sendlocation'),
            },
            {
                title: 'تاریخ ثبت رزومه',
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
                key: 'condition',
                width: '200px',
                filters: [
                    {
                        text: 'متقاضی جدید',
                        value: 'متقاضی جدید'
                    },
                    {
                        text: 'تایید برای مصاحبه',
                        value: 'تایید برای مصاحبه'
                    },
                    {
                        text: 'رد شده',
                        value: 'رد شده'
                    },
                    {
                        text: 'رد شده در مصاحبه',
                        value: 'رد شده در مصاحبه'
                    },
                    {
                        text: 'در انتظار مصاحبه اول',
                        value: 'در انتظار مصاحبه اول'
                    },
                    {
                        text: 'استخدام شده',
                        value: 'استخدام شده'
                    },
                    {
                        text: 'در حال مصاحبه',
                        value: 'در حال مصاحبه'
                    },
                    {
                        text: 'تکمیل مدرک',
                        value: 'تکمیل مدرک'
                    },
                    {
                        text: 'در انتظار مصاحبه دوم',
                        value: 'در انتظار مصاحبه دوم'
                    }

                ],
                onFilter: (value, record) => record.condition.indexOf(value) === 0,
                //...this.getColumnSearchProps('situation'),

                // ...this.getColumnSearchProps('situation'),
                render: (dataIndex) => this.badgeFunction(dataIndex),
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