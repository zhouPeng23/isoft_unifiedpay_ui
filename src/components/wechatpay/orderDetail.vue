<template>
  <div>
    <Row>
      <Col span="6"><div>订单号:{{Order.OrderId}}</div></Col>
      <Col span="6"><div>原交易订单:{{Order.OrgOrderId}}</div></Col>
      <Col span="6"><div>支付方式:{{Order.PayStyle}}</div></Col>
      <Col span="6"><div>交易类型:{{Order.TransType}}</div></Col>
    </Row>
    <Row>
      <Col span="6"><div>商户号:{{Order.MerchantNo}}</div></Col>
      <Col span="6"><div>商品ID:{{Order.ProductId}}</div></Col>
      <Col span="6"><div>商品描述:{{Order.ProductDesc}}</div></Col>
      <Col span="6"><div>交易时间:{{Order.TransTime}}</div></Col>
    </Row>
    <Row>
      <Col span="6"><div>交易金额:{{Order.TransAmount}}</div></Col>
      <Col span="6"><div>交易币种:{{Order.TransCurrCode}}</div></Col>
      <Col span="6"><div>下单业务结果:{{Order.OrderResultCode}}</div></Col>
      <Col span="6"><div>下单结果描述:{{Order.OrderResultDesc}}</div></Col>
    </Row>
    <Row>
      <Col span="6"><div>下单错误代码:{{Order.OrderErrCode}}</div></Col>
      <Col span="6"><div>下单错误代码描述:{{Order.OrderErrCodeDes}}</div></Col>
      <Col span="6"><div>付款二维码:{{Order.CodeUrl}}</div></Col>
      <Col span="6"><div>付款业务结果代码:{{Order.PayResultCode}}</div></Col>
    </Row>
    <Row>
      <Col span="6"><div>付款业务结果描述:{{Order.PayResultDesc}}</div></Col>
      <Col span="6"><div>付款错误代码:{{Order.PayErrCode}}</div></Col>
      <Col span="6"><div>付款错误代码描述:{{Order.PayErrCodeDesc}}</div></Col>
      <Col span="6"><div>微信官方支付订单号:{{Order.TransactionId}}</div></Col>
    </Row>
    <Row>
      <Col span="6"><div>微信零钱支付:{{Order.WechatCash}}</div></Col>
      <Col span="6"><div>付款银行code:{{Order.BankType}}</div></Col>
      <Col span="6"><div>付款银行名称:{{Order.BankName}}</div></Col>
      <Col span="6"><div>支付完成时间:{{Order.PayTimeEnd}}</div></Col>
    </Row>
    <Row>
      <Col span="6"><div>退货原因:{{Order.RefundReason}}</div></Col>
      <Col span="6"><div>退货请求业务结果代码:{{Order.RefundReqResultCode}}</div></Col>
      <Col span="6"><div>退货请求业务结果描述:{{Order.RefundReqResultDesc}}</div></Col>
      <Col span="6"><div>退货请求错误代码:{{Order.RefundReqErrCode}}</div></Col>
    </Row>
    <Row>
      <Col span="6"><div>退货请求错误代码描述:{{Order.RefundReqErrCodeDesc}}</div></Col>
      <Col span="6"><div>退款状态:{{Order.RefundStatus}}</div></Col>
      <Col span="6"><div>退款成功时间:{{Order.RefundSuccessTime}}</div></Col>
      <Col span="6"><div>已退金额:{{Order.RefundedAmount}}</div></Col>
    </Row>

  </div>
</template>

<script>
	export default {
		name: "orderDetail",
    props:{
		  Order:{

      }
    }
	}
</script>

<style scoped>

</style>
