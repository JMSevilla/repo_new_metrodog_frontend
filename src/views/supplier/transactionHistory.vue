<template>
  <div>
    <el-card shadow="always">
      <table class="table table-hover table-bordered table-outline">
        <thead>
          <th>Delivery Order</th>
          <th>Purchase Order</th>
          <th>Payment Made</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <table class="table table-hover table-bordered table-outline">
                <thead>
                  <th>Items</th>
                  <th>Quantity</th>
                </thead>
                <tbody>
                  <tr>
                    <td>test_item_1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>test_item_2</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table class="table table-hover table-bordered table-outline">
                <thead>
                  <th>Items</th>
                  <th>Quantity</th>
                </thead>
                <tbody>
                  <tr>
                    <td>test_item_PO_1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>test_item_PO_2</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <center>Cash</center>
            </td>
          </tr>
          <tr>
            <td>
              <table class="table table-hover table-bordered table-outline">
                <thead>
                  <th>Items</th>
                  <th>Quantity</th>
                </thead>
                <tbody>
                  <tr>
                    <td>test_item_3</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>test_item_4</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>test_item_5</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table class="table table-hover table-bordered table-outline">
                <thead>
                  <th>Items</th>
                  <th>Quantity</th>
                </thead>
                <tbody>
                  <tr>
                    <td>test_item_PO_3</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>test_item_PO_4</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>test_item_PO_5</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <center>30 days</center>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="block" style="margin-top: 20px">
        <el-pagination background layout="prev, pager, next" :total="50">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>
