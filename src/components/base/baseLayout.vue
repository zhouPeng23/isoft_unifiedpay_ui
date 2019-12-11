<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <!--<div class="layout-logo" style="font-size: 20px">&nbsp;&nbsp;领&nbsp;&nbsp;创&nbsp;&nbsp;科&nbsp;&nbsp;技</div>-->
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
                订单管理
              </template>
              <MenuItem name="1-1">订单查询</MenuItem>
              <MenuItem name="1-2">退款申请</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                交易统计
              </template>
              <MenuItem name="2-1">今日交易监控</MenuItem>
              <MenuItem name="2-2">历史交易统计</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                系统配置
              </template>
              <MenuItem name="3-1">微信支付配置</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>微信支付</BreadcrumbItem>
            <BreadcrumbItem>订单管理</BreadcrumbItem>
            <BreadcrumbItem>订单查询</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '0px', minHeight: '450px', background: '#fffafe'}">
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
    width: 135px;
    height: 55px;
    background: #cdb5f9;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 5px;
    left: -20px;
  }
  .layout-nav{
    width: 65%;
    margin: 0 auto;
    margin-right: 20px;
  }
</style>
