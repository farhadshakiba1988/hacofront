import React from "react";
import { Card, Table, Button, Space, Badge, Tag, Input } from "antd";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import './TableSelection.css';
import ButtonDropDown from "./../ButtonWithDropdown/ButtonWithDropdown";
import BlocBuilder from 'bloc-builder-react';
import SearchResumeArchiveBloc from "./SearchResumeArchivebloc";

const data = [];
for (let i = 0; i < 4; i++) {
  data.push({
    key: i,
    name: 'امینی محمد ',
    Jobtitle: 'حسابدار',
    Sendlocation: 'وب سایت ',
    dates: i + 1,
    situation: 'رد شده',
  });
}
const scroll = { y: 240 };
class TableSelection extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.bloc = new SearchResumeArchiveBloc();
    this.bloc.getDataAxios();


  }
  state = {
    selectedRowKeys: [],
    sortedInfo: null,
    scroll: undefined,
    searchText: '',
    searchedColumn: '',
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
      default:
        return 'NO';
    }
  }
  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  setdateSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'dates',
      },
    });
  };
  // rowSelection object indicates the need for row selection
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input className="rounded-lg"
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`جستجو ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
           <Button  id="search_button"   type="primary" className="rounded-lg border border-red-400 text-white  bg-red-500 text-center"onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            size="small" style={{ width: 90 }}  icon={<SearchOutlined />}
          >جستجو</Button>
          <Button  id="delete_button" className="rounded-lg border border-red-400 text-red-400"     onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          پاک کردن
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
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
          text
        ),
  });
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
  render() {
    let { sortedInfo, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const columns = [{
      title: 'نام متقاضی',
      dataIndex: 'name',
      key: 'name',
      ...this.getColumnSearchProps('name'),
    },
    {
      title: 'عنوان شغل',
      dataIndex: 'Jobtitle',
      key: 'Jobtitle',
      ...this.getColumnSearchProps('Jobtitle'),
    },
    {
      title: 'محل ارسال ',
      dataIndex: 'Sendlocation',
      key: 'Sendlocation',
      ...this.getColumnSearchProps('Sendlocation'),
    },
    {
      title: ' تاریخ ثبت رزومه ',
      dataIndex: 'dates',
      key: 'dates',
      sorter: (a, b) => a.dates - b.dates,
      ellipsis: true,
      ...this.getColumnSearchProps('dates'),
    },
    {
      title: 'وضعیت',
      dataIndex: 'situation',
      key: 'situation',
      ...this.getColumnSearchProps('situation'),
      render: (key) => this.badgeFunction(key)
      // ...this.getColumnSearchProps('situation'),
    },
    {
      title: 'عملیات',
      key: 'action',
      render: () => <ButtonDropDown />,
    },
    ];
    return (
      <>
        <Table className='mr-9 ml-9 mt-6' rowSelection={rowSelection} columns={columns} dataSource={data} size='small' onChange={this.handleChange} scroll={{ x: 1300 }} />
      </>
    );
  }
}
export default TableSelection;
