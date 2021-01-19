/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,TouchableOpacity,FlatList,TextInput
} from 'react-native';

import RadioForm from 'react-native-simple-radio-button';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import { Table, Row, Rows } from 'react-native-table-component';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'moment';
import CheckBox from '@react-native-community/checkbox';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    const elementItem = (value) => {
      if (value == 'sl'){
        return(
          <View style={{flexDirection:'row',marginLeft:10}}>
          <TextInput style={{fontWeight:'bold',width:70,borderWidth:1,padding:-5,alignSelf:'center'}}></TextInput>
          <Icon name="bars" size={20} style={styles.iconTable}/>
          </View>
        )
      }
      else if (value == '%'){
        return(
          <View style={{flexDirection:'row',marginLeft:10}}>
          <TextInput style={{fontWeight:'bold',width:70,borderWidth:1,padding:-5,alignSelf:'center'}}></TextInput>
          <Icon name="percent" size={20} style={styles.iconTable}/>
          </View>
        )
      }
      else {
        return(
          <View style={{flexDirection:'row',marginLeft:10}}>
          <TextInput style={{fontWeight:'bold',width:70,borderWidth:1,padding:-5,alignSelf:'center'}}></TextInput>
          </View>
        )
      }
    };
    this.state = {
      valuePicker1:'Hóa đơn',
      valuePicker2:'Giảm giá hóa đơn',
      valuePicker4:'Quận 1',
      valuePicker5:'VIP',
      isVisible: false,
      isVisible2:false,
      isVisible3: false,
      isVisible4:false,
      date1Visible:false,
      date2Visible:false,
      date3Visible:false,
      time1Visible:false,
      radio_2_props: [
        {label: 'Kích hoạt', value: 0 },
        {label: 'Chưa kích hoạt', value: 1 },
      ],
      radio_3_props: [
        {label: 'Tất cả chi nhánh', value: 0 },
        {label: 'Chi nhánh:', value: 1 },
      ],
      radio_4_props: [
        {label: 'Tất cả khách hàng', value: 0 },
        {label: 'Nhóm khách hàng:', value: 1 },
      ],
      tableHead: ['Tổng tiền', 'Giảm giá', ''],
      tableData: [
        [elementItem(''), elementItem('%'), 'X'],
      ],
      date1:(new Date()),
      date2:(new Date()),
      time1:(new Date()),
      date4:''
    }
  }

  
  toggleList = event => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  toggleList2 = event => {
    this.setState({
      isVisible2: !this.state.isVisible2
    });
  }

  toggleList3 = event => {
    this.setState({
      isVisible3: !this.state.isVisible3
    });
  }

  toggleList4 = event => {
    this.setState({
      isVisible4: !this.state.isVisible4
    });
  }
  
  toggleDate1 = event => {
    this.setState({
      date1Visible: !this.state.date1Visible
    });
  }

  toggleDate2 = event => {
    this.setState({
      date2Visible: !this.state.date2Visible
    });
  }

  toggleDate3 = event => {
    this.setState({
      date3Visible: !this.state.date3Visible
    });
  }

  toggleTime1 = event => {
    this.setState({
      time1Visible: !this.state.time1Visible
    });
  }

  handleConfirm1 = (date) => {
    this.setState({
      date1: date
    });
  };

  handleConfirm2 = (date) => {
    this.setState({
      date2: date
    });
  };

  handleConfirm3 = (date) => {
    this.setState({
      time1: date
    });
  };

  handleClose = event => {};

  elementItem = (value) => {
    if (value == 'sl'){
      return(
        <View style={{flexDirection:'row',marginLeft:10}}>
        <TextInput style={{fontWeight:'bold',width:70,borderWidth:1,padding:-5,alignSelf:'center'}}></TextInput>
        <Icon name="bars" size={20} style={styles.iconTable}/>
        </View>
      )
    }
    else if (value == '%'){
      return(
        <View style={{flexDirection:'row',marginLeft:10}}>
        <TextInput style={{fontWeight:'bold',width:70,borderWidth:1,padding:-5,alignSelf:'center'}}></TextInput>
        <Icon name="percent" size={20} style={styles.iconTable}/>
        </View>
      )
    }
    else {
      return(
        <View style={{flexDirection:'row',marginLeft:10}}>
        <TextInput style={{fontWeight:'bold',width:70,borderWidth:1,padding:-5,alignSelf:'center'}}></TextInput>
        </View>
      )
    }
  };

  render(){
    const state = this.state;
    return (
        <SafeAreaView>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start"
            }}>
            <TouchableOpacity 
              style={styles.button}
              onPress={this.toggleList}>
              <Icon name="bars" size={40} style={styles.icon}/>
            </TouchableOpacity>
            {(this.state.isVisible) && <FlatList
            data={[{key:'Trợ giúp'},{key:'Liên hệ'},{key:'Tải công cụ'},{key:'Thiết lập'},{key:'Tài khoản'}]}
            renderItem={({item}) => <Text style={styles.list}>{item.key}</Text>}
            />}
          </View>
          <ScrollView>
            <Text style={styles.title}>Thêm chương trình khuyến mãi</Text>
            <View style={{flexDirection:'row'}}>
              <View>
                <TextInput style={styles.txtInput} editable={false} selectTextOnFocus={false} placeholder='KM120520'/>
                <TextInput style={styles.txtInput} editable={false} selectTextOnFocus={false} placeholder='Tên chương trình'/>
                <Text style={{fontSize:20,padding:10,marginTop:20}}>Trạng thái</Text>
                <RadioForm
                  radio_props={state.radio_2_props}
                  initial={0}
                  onPress={(value) => {}}
                />
              </View>
              <View style={{marginLeft:50,marginTop:30}}>
                <Text style={styles.ghichu}>Ghi chú</Text>
                <TextInput
                  multiline={true}
                  numberOfLines={12}
                  textAlignVertical = "top"
                  style={styles.txtArea}/>
              </View>
            </View>
            <TouchableOpacity 
              onPress={this.toggleList2}>
              <Text style={styles.txtClick}>Hình thức khuyến mãi</Text>
            </TouchableOpacity>
            {(this.state.isVisible2) && 
              <View>
                <Text style={{fontSize:16,padding:10}}>Khuyến mãi theo: </Text>
                <Picker
                  selectedValue={state.valuePicker1}
                  style={{height: 40}}
                  mode={'dropdown'}
                  onValueChange={(itemValue, itemIndex) =>
                    {
                      this.setState({valuePicker1: itemValue});
                      if (state.valuePicker2=='Giảm giá mặt hàng' && itemValue=='Hàng hóa'){
                        this.setState({
                          tableHead: ['SL / Nhóm (hàng) mua', 'Giảm giá', 'SL / Nhóm (hàng) được giảm',''],
                          tableData: [
                            [this.elementItem('sl'), this.elementItem('%'),this.elementItem('sl'),'X'],
                          ],
                        })
                      }
                      else{
                        this.setState({
                          tableHead: ['Tổng tiền', 'Giảm giá', ''],
                          tableData: [
                            [this.elementItem(''), this.elementItem('%'), 'X'],
                          ],
                        })
                      }
                    }}>
                  <Picker.Item label="Hóa đơn" value="Hóa đơn" />
                  <Picker.Item label="Hàng hóa" value="Hàng hóa" />
                </Picker>
                <Text style={{fontSize:16,padding:10}}>Hình thức: </Text>
                <Picker
                  selectedValue={state.valuePicker2}
                  style={{height: 40}}
                  mode={'dropdown'}
                  onValueChange={(itemValue, itemIndex) =>
                    {
                      this.setState({valuePicker2: itemValue});
                      if (state.valuePicker1=='Hàng hóa' && itemValue=='Giảm giá mặt hàng'){
                        this.setState({
                          tableHead: ['SL / Nhóm (hàng) mua', 'Giảm giá', 'SL / Nhóm (hàng) được giảm',''],
                          tableData: [
                            [this.elementItem('sl'), this.elementItem('%'),this.elementItem('sl'),'X'],
                          ],
                        })
                      }
                      else{
                        this.setState({
                          tableHead: ['Tổng tiền', 'Giảm giá', ''],
                          tableData: [
                            [this.elementItem(''), this.elementItem('%'), 'X'],
                          ],
                        })
                      }
                    }}>
                  <Picker.Item label="Giảm giá hóa đơn" value="Giảm giá hóa đơn" />
                  <Picker.Item label="Giảm giá mặt hàng" value="Giảm giá mặt hàng" />
                </Picker>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                  <Row data={state.tableHead} style={styles.row} textStyle={styles.textHead}/>
                  <Rows data={state.tableData} style={styles.rows} textStyle={styles.textData}/>
                </Table>
                <TouchableOpacity
                  onPress={() => {
                    const temp=state.tableData;
                    if (state.tableHead.length == 3){
                      temp.push([this.elementItem(''), this.elementItem('%'), 'X']);  
                    }
                    else{
                      temp.push([this.elementItem('sl'), this.elementItem('%'),this.elementItem('sl'),'X']);
                    }
                    this.setState({
                      tableData:temp
                    })                     
                  }}>
                <Text style={styles.txtThemDK}>Thêm đk</Text>
                </TouchableOpacity>
              </View>
            }
            <TouchableOpacity 
              onPress={this.toggleList3}>
              <Text style={styles.txtClick}>Chi nhánh áp dụng</Text>
            </TouchableOpacity>
            {(this.state.isVisible3) && 
              <View style={{marginLeft:20,marginTop:20}}>
                <RadioForm
                  radio_props={state.radio_3_props}
                  initial={0}
                  onPress={(value) => {}}
                />
                <Picker
                  selectedValue={state.valuePicker4}
                  style={{height: 40,marginTop:20,marginBottom:20}}
                  mode={'dropdown'}
                  onValueChange={(itemValue, itemIndex) =>
                    {
                      this.setState({valuePicker4: itemValue})
                    }}>
                  <Picker.Item label="Quận 1" value="Quận 1" />
                  <Picker.Item label="Quận 2" value="Quận 2" />
                  <Picker.Item label="Quận 3" value="Quận 3" />
                </Picker>
                <RadioForm
                  radio_props={state.radio_4_props}
                  initial={0}
                  onPress={(value) => {}}
                />
                <Picker
                  selectedValue={state.valuePicker5}
                  style={{height: 40,marginTop:20,marginBottom:20}}
                  mode={'dropdown'}
                  onValueChange={(itemValue, itemIndex) =>
                    {
                      this.setState({valuePicker5: itemValue})
                    }}>
                  <Picker.Item label="VIP" value="VIP" />
                  <Picker.Item label="Thường" value="Thường" />
                </Picker>
              </View>
            }
            <TouchableOpacity 
              onPress={this.toggleList4}>
              <Text style={styles.txtClick}>Thời gian áp dụng</Text>
            </TouchableOpacity>
            {(this.state.isVisible4) && 
              <View>
                <Text style={styles.txtTimeArea}>Thời gian:</Text>
                <TouchableOpacity 
                  onPress={this.toggleDate1}>
                  <Text style={styles.txtDate}>{Moment(state.date1).format('DD / MM / YYYY   hh:mm')}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={state.date1Visible}
                  mode="datetime"
                  onConfirm={this.handleConfirm1}
                  onCancel={this.handleClose}
                />
                <Text style={styles.txtTimeArea}>Đến:</Text>
                <TouchableOpacity 
                  onPress={this.toggleDate2}>
                  <Text style={styles.txtDate}>{Moment(state.date2).format('DD / MM / YYYY   hh:mm')}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={state.date2Visible}
                  mode="datetime"
                  onConfirm={this.handleConfirm2}
                  onCancel={this.handleClose}
                />
                <Text style={styles.txtTimeArea}>Theo tháng:</Text>
                <TextInput style={styles.txtDate} placeholder='mm/yyyy, cách dấu phẩy'></TextInput>
                <Text style={styles.txtTimeArea}>Theo ngày:</Text>
                <TextInput style={styles.txtDate} placeholder='dd/mm, cách dấu phẩy'></TextInput>
                <View style={{flexDirection:'row',marginLeft:20,marginTop:5,width:330}}>
                  <CheckBox></CheckBox><Text style={{marginTop:5,fontSize:20}}>Áp dụng vào ngày sinh nhật khách hàng</Text>
                </View>
                <Text style={styles.txtTimeArea}>Theo thứ:</Text>
                <TextInput style={styles.txtDate} placeholder='mm/yyyy, cách dấu phẩy'></TextInput>
                <Text style={styles.txtTimeArea}>Theo giờ:</Text>
                <TouchableOpacity 
                  onPress={this.toggleTime1}>
                  <Text style={styles.txtDate}>{Moment(state.time1).format('hh:mm')}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={state.time1Visible}
                  mode="time"
                  onConfirm={this.handleConfirm3}
                  onCancel={this.handleClose}
                />  
                <View style={{flexDirection:'row',marginLeft:20,marginTop:5,width:330}}>
                  <CheckBox></CheckBox><Text style={{marginTop:5,fontSize:20}}>Cảnh báo khách hàng khuyến mãi này đã được hưởng</Text>
                </View>
              </View>
            }
            <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:10}}>
              <Button title="Lưu" buttonStyle={styles.saveButton}/>
              <Button title="Hủy" buttonStyle={styles.cancelButton}/>
            </View>
          </ScrollView>
        </SafeAreaView>
    );
  };
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  list:{
    fontSize:20,
    padding:5
  },
  title:{
    fontSize:34,
    textAlign:"center"
  },
  txtInput:{
    borderBottomWidth:1,
    fontSize:20,
    marginTop:20
  },
  txtArea:{
    borderWidth:1,
    width:150,
    marginTop:-10
  },
  ghichu:{
    fontSize:20,
    marginLeft:20,
    backgroundColor:'white',
    width:100,
    paddingLeft:15,
    paddingRight:15,
    zIndex:1
  },
  txtClick:{
    backgroundColor:'#BB6BD9',
    fontSize:30,
    alignSelf:'center',
    color:'white',
    width:370,
    marginTop:10
  },
  saveButton:{
    paddingLeft:15,
    paddingRight:15,
    backgroundColor:'#4CAF50',
    borderRadius:5,
    marginRight:5
  },
  cancelButton:{
    paddingLeft:15,
    paddingRight:15,
    backgroundColor:'#6c757d',
    borderRadius:5,
    marginRight:20,
    marginBottom:100
  },
  row:{
    borderWidth:1,
    height:'auto',
    width:400,
  },
  rows:{
    borderWidth:1,
    height:50,
    width:400
  },
  textHead:{
    alignSelf:'center',
    fontSize:20
  },
  textData:{
    alignSelf:'center',
    fontSize:20
  },
  txtThemDK:{
    backgroundColor:'#007bff',
    padding:5,
    color:'white',
    fontWeight:'bold',
    width:70,
    marginTop:10,
    marginLeft:10
  },
  txtDate:{
    marginLeft:20,
    width:370,
    fontSize:20,
    padding:5,
    borderWidth:2
  },
  txtTimeArea:{
    marginTop:10,
    marginLeft:20,
    fontSize:20,
    fontWeight:'bold'
  },
  iconTable:{
    alignSelf:'center',
    backgroundColor:'#6c757d',
    padding:5
  }
});
