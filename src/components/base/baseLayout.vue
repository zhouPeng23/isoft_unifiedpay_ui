<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="logo-yen" />
              微信
            </MenuItem>
            <MenuItem name="2">
              <Icon type="md-checkmark-circle" />
              支付宝
            </MenuItem>
            <MenuItem name="3">
              <Icon type="md-cloud-outline" />
              云闪付
            </MenuItem>
            <MenuItem name="4">
              <Icon type="logo-apple" />
              Apple Pay
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                订单查询
              </template>
              <MenuItem name="1-1">实时消费监控</MenuItem>
              <MenuItem name="1-2">消费订单查询</MenuItem>
              <MenuItem name="1-3">退款订单查询</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                结算明细
              </template>
              <MenuItem name="2-1">本周结算明细</MenuItem>
              <MenuItem name="2-2">历史结算明细</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                争议处理
              </template>
              <MenuItem name="3-1">消费订单处理</MenuItem>
              <MenuItem name="3-2">退款订单处理</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>微信支付</BreadcrumbItem>
            <BreadcrumbItem>订单查询</BreadcrumbItem>
            <BreadcrumbItem>实时消费监控</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '450px', background: '#f4f5f9'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    name:"baseLayout"
  }
</script>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 80px;
    height: 40px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 60%;
    margin: 0 auto;
    margin-right: 20px;
  }
</style>
