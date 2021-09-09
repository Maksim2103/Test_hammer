import React, { Component } from 'react'
import { Card, Table, Tooltip, message, Button, Spin } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import EditProfile from './EditProfile';

export class ClientList extends Component {

  state = {
		users: [],
		userProfileVisible: false,
		selectedUser: null,
    isLoading : true
	}

  componentDidMount() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ users :  data, isLoading : false } ));

  }

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}

	render() {
		const { users, userProfileVisible, selectedUser } = this.state;

		const tableColumns = [
			{
				title: 'Id',
				dataIndex: 'Id',
				render: (_, record) => (
					<div className="d-flex">{record.id}</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Name',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">{record.name}</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Email',
				dataIndex: 'email',
				render: (_, record) => (
					<div className="d-flex">{record.email}</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Website',
				dataIndex: 'websiye',
				render: (_, record) => (
					<div className="d-flex">{record.website}</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{'padding': '0px'}}>
				<Table columns={tableColumns} dataSource={users} rowKey='id' />
        {
          this.state.isLoading 
            ? <Spin tip="Loading..."/> 
            : <EditProfile 
                data={selectedUser} 
                visible={userProfileVisible} 
                close={()=> {this.closeUserProfile()}}
              />
        }
			</Card>
		)
	}
}

export default ClientList
