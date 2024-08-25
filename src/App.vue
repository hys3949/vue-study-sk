<template>
  <div id="app">
    <BoardHeader />
    <div id="contents">
      <!-- list -->
      <div id="board-list">
        <div style="float: right; margin-bottom: 10px;">
          <button @click="openWriteSection()">작성하기</button>
        </div>
        <table>
          <thead>
            <th>no</th>
            <th>제목</th>
            <th>내용</th>
          </thead>
          <tbody>
            <tr v-for="(item,i) in boards" :key="item" style="cursor:pointer" @click="detail(i);">
              <td>{{ i+1 }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.contents }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- list -->
      <!-- new -->
      <div id="" style="margin-top: 20px;">
        <table>
          <tbody>
            <tr>
              <td style="width: 15%;">제목</td>
              <td>
                <textarea name="" id="add-title" maxlength="150"></textarea>
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td >
                <textarea name="" id="add-contents" maxlength="500" style="height: 150px;"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top: 5px;">
          <button  @click="wirteCancel()">취소</button>
          <button style="float: right;" @click="wirte()">작성하기</button>
        </div>
      </div>
    </div>
    <BoardFooter />
  </div>
</template>


<script>
import BoardHeader from "./components/BoardHeader.vue" ;
import BoardFooter from "./components/BoardFooter.vue" ;

const boards = [{
  title : "title 1",
  contents : "test title 1 contents",
  viewCount : "0",
},{
  title : "title 2",
  contents : "test title 2 contents",
  viewCount : "0",
},{
  title : "title 3",
  contents : "test title 3 contents",
  viewCount : "0",
},{
  title : "title 4",
  contents : "test title 4 contents",
  viewCount : "0",
}
]

export default {
  name : 'APP',
  data() {
    return{
      boards
    } 
  },
  components : {
    BoardHeader,
    BoardFooter,
  },
  methods:{
    detail(index){
      console.log(boards[index]);
    },
    openWriteSection(){

    },
    wirte(){
      let title = document.querySelector("#add-title");
      let contents = document.querySelector("#add-contents");
      console.log(title);
      console.log(contents);
      // if(title != "" && contents != ""){

      // }else{
      //   alert("제목&내용 입력필요");
      // }
    },
    wirteCancel(){

    },
  }
};
</script>

<style>
table {
    width: 100%;
    border: 1px solid #444444;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #444444;
  }
  textarea {
    width: 90%;
    padding: 10px;
    resize: none;
    color: black;
    border: none;
    outline: none;
  }
</style>
