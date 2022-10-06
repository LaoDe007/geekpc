import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Breadcrumb,
  Form,
  Radio,
  Button,
  Select,
  DatePicker,
  Table,
  Tag,
  Space,
} from "antd";
import type { ColumnsType } from "antd/es/table";

import { ARTICLE_STATUS } from "../../api/constants";
import { getChannels } from "../../api/channel";
import { getArticles } from "../../api/article";
import defaultImg from "assets/logo.png";

const { Option } = Select;
const { RangePicker } = DatePicker;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const onFinish = (values: number) => {
  console.log(values);
};

// 发送请求接受文章数据
const getArticlesInfo = async () => {
  const res = await getArticles({});
  console.log(res.data);
};

export default function ArticleList() {
  const channelsList: { id: number; name: string }[] = [];
  const [channels, setChannels] = useState(channelsList);
  const articlesList: {
    page: number;
    per_page: number;
    results: { id: number; title: string }[];
    total_count: number;
  } = {
    page: 1,
    per_page: 1,
    results: [{ id: 1, title: "jack" }],
    total_count: 1,
  };
  const [articles, setArticles] = useState(articlesList);

  async function getChannelsList() {
    const res = await getChannels();
    setChannels(res.data);
  }
  async function getArticlesList() {
    const res = await getArticles({});
    console.log(res.data);
    setArticles(res.data);
  }

  const columns = [
    {
      title: "封面",
      render: () => (
        <img
          src={defaultImg}
          alt="图片无加载"
          style={{
            width: 200,
            height: 80,
            objectFit:'cover',
          }}
        />
      ),
    },
    {
      title: "标题",
      dataIndex: "title",
    },
    {
      title: "状态",
      dataIndex: "status",
    },
    {
      title: "发布时间",
      dataIndex: "pubDate",
    },
    {
      title: "操作",
      dataIndex: "",
    },
  ];

  useEffect(() => {
    getChannelsList();
    getArticlesList();
  }, []);

  return (
    <div>
      <Card
        title={
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/home">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>文章列表</Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        {/* 表单结构 */}
        <Form initialValues={{ status: -1 }} onFinish={onFinish}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              {ARTICLE_STATUS.map((item) => {
                return (
                  <Radio value={item.id} key={item.id}>
                    {" "}
                    {item.name}{" "}
                  </Radio>
                );
              })}
            </Radio.Group>
          </Form.Item>
          <Form.Item label="频道" name="channel_id">
            <Select style={{ width: 200 }} placeholder="请选择频道">
              {channels.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item label="日期" name="date">
            <RangePicker />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card title={`根据筛选条件共查询到${articles.total_count}条结果`}>
        <Table columns={columns} dataSource={articles.results} rowKey="id" />
      </Card>
    </div>
  );
}
