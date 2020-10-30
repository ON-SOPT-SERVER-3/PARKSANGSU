# ON-SOPT-SERVER-SEMINAR

---

## SOPT 과제 올리는 곳 🥇

# 2주차 세미나 과제 진행 중

1. [NodeJS란 무엇인가](#nodejs-is) (작성자: 김민지)
2. [NodeJS의 장단점](#characteristics) (작성자: 신연상)   
3. [NodeJS와 다른 프레임워크 비교](#another) (작성자: 강준우)
4. [NodeJS 엔진](#engine) (작성자: 김지현)
5. [NodeJS 컴파일 과정](#compile) (작성자: 박상수)
6. [NodeJS 사용시 주의사항](#notice) (작성자: 한수아)



## 1. NodeJS란 <a name="nodejs-is"></a>

<h2>😮Node.js란 무엇인가</h2>

노드의 공식 사이트(https://nodejs.org/ko/)에서는 노드를 다음과 같이 설명하고 있습니다.
<br>

**Node.js는 크롬 V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임입니다.**

**Node.js는 이벤트 기반, 논블로킹 I/O 모델을 사용해 가볍고 효율적입니다.**

**Node.js의 패키지 생태계인 npm은 세계에서 가장 큰 오픈 소스 라이브러리 생태계이기도 합니다.**

<br>

![img](https://blogfiles.pstatic.net/MjAyMDAzMTJfMzkg/MDAxNTgzOTkxOTAzMzU5.QwKaqWAPCywTsE9C8xsyoslCi0RLIfcXGwOOSbWAnncg.7KFgdcaw-cm7xTKuk6pFqsILbkwtzN6-9ybVlBXoOgwg.JPEG.kimminji1222/group5_8.jpg?type=w1)


<br>
간단하게 정리하자면,

<br>

**1.** **서버 애플리케이션 실행 역할**

**2. 자바스크립트 런타임**

**3. 이벤트 기반 시스템**

**4. 싱글 스레드**

**5. 논블로킹 모델**

**6. 웹 서버 내장**

<br>

이 특징을 가지고 있는 것이 node.js입니다!



<br><br>

*1. 서버 애플리케이션 실행 역할*

노드를 통해 다양한 자바스크립트 애플리케이션을 실행할 수 있지만, 노드는 **서버 애플리케이션을 실행하는 데 제일 많이 사용**됩니다.

<br>

서버란 네트워크를 통해 클라이언트에 정보나 서비스를 제공하는 컴퓨터 또는 프로그램을 말합니다.

노드는 자바스크립트 애플리케이션이 서버로서 기능하기 위한 도구를 제공하므로 서버 역할을 수행할 수 있습니다.



<br><br>

*2. 자바스크립트 런타임*

노드는 자바스크립트 런타임입니다.

런타임이란 특정 언어로 만든 프로그램들을 실행할 수 있는 환경을 뜻합니다.
<br>


따라서 노드는 **자바스크립트 프로그램을 컴퓨터에서 실행할 수 있게 해줍니다.**
<br>


기존에는 자바스크립트 프로그램을 인터넷 브라우저(브라우저 또한 자바스크립트 런타임) 위에서만 실행할 수 있었습니다.

브라우저 위의 환경에서 자바스크립트를 실행하기 위한 여러가지 시도가 있었으나, 자바스크립트의 실행 속도 문제 때문에 큰 호응을 얻지 못했습니다. 하지만 2008년 구글이 V8엔진을 사용해 크롬을 출시했고, 당시 V8엔진은 매우 빨랐고, 오픈 소스로 코드도 공개되었습니다. 이로써, 속도 문제가 해결되자 라이언 달은 2009년 V8 엔진 기반의 노드 프로젝트를 시작했다고 합니다.

<br>

노드는 **V8과 더불어 libuv라는 라이브러리를 사용**합니다.

우리가 코딩한 자바스크립트 코드는 노드가 알아서 V8과 libuv에 연결해준답니다.


<br><br>


*3. 이벤트 기반*

이벤트 기반이란 이벤트가 발생할 때 미리 지정해둔 작업을 수행하는 방식을 의미합니다.

이벤트 기반 시스템에서는 특정 이벤트가 발생할 때 무엇을 할지 미리 등록해두어야 합니다. 이것을 이벤트 리스너에 콜백 함수를 등록한다고 표현합니다.

<br>

노드도 이벤트 기반 방식으로 동작하므로 **이벤트가 발생하면 이벤트 리스너에 등록해둔 콜백 함수를 호출**합니다.
<br>


***이벤트 루프**: 이벤트 발생 시 호출할 콜백함수들을 관리하고, 호출된 콜백 함수의 실행 순서를 결정하는 역할을 담당한다. 노드가 종료될 때까지 이벤트 처리를 위한 작업을 반복해 루프라고 불린다.

***태스크 큐**: 이벤트 발생 후 호출되어야 할 콜백 함수들이 기다리는 공간이다. 콜백들이 이벤트 루프가 정한 순서대로 줄을 서 있으므로 콜백 큐라고도 불린다.

***백그라운드**: 타이머나 I/O 작업 콜백 또는 이벤트 리스너들이 대기하는 곳이다.

<br><br>



*4. 논블로킹 I/O*

논블로킹 방식이란 이전 작업이 완료될 때까지 멈추지 않고 다음 작업을 수행하는 것입니다.

하지만, 싱글 스레드라는 한계 때문에 자바스크립트의 모든 코드가 시간적 이득을 볼 수 있는 것은 아니며, **주로 I/O 작업이 시간적 이득을 많이 봅니다.**

<br><br>



*5. 싱글 스레드*

싱글 스레드란, 한 번에 한가지 일만 처리하는 것입니다.

멀티 스레드 방식보다는 컴퓨터 자원을 적게 사용하는 장점이 있지만, CPU코어를 하나밖에 사용하지 못하는 단점이 있습니다.



<br><br><br>

<h3>결론</h3>

노드는 싱글 스레드, 논블로킹 모델을 사용하므로 노드 서버 또한 동일한 모델입니다.

노드 서버는 I/O가 많은 작업에 적합하며, 노드는 libuv라이브러리를 사용해 I/O작업을 논블로킹 방식으로 처리합니다. 따라서 스레드 하나가 많은 수의 I/O를 혼자서도 감당할 수 있습니다. 하지만 CPU 부하가 큰 작업에는 적합하지 않습니다.

<br>

웹 서버가 내장되어 있어 입문자가 쉽게 접근할 수 있습니다. 노드 외의 서버를 개발하다 보면 Apache, nginx, IIS등의 별도의 웹 서버를 설치해야 하는 경우가 많습니다. 심지어 Tomcat과 같은 웹 애플리케이션 서버(WAS)를 추가로 설치해야하는 경우도 있는데, 노드는 내장된 웹 서버를 사용하면 되므로 편리합니다. 하지만 나중에 서버 규모가 커지면 결국 nginx등의 웹 서버를 노드 서버와 연결해야한답니다!

<br>

노드를 기반으로 돌아가는 대표적인 웹 프레임워크로는 Angular, React, Vue, Meteor 등이 있습니다.

노드를 기반으로 돌아가는 모바일 개발 도구로는 React Native와 Ionic Framework가 있습니다.


<br><br><br>


참고) 길벗출판사 Node.js 교과서

## 2. NodeJS의 장단점 <a name="characteristics"></a>

> ### 장점
- Non-blocking I/O와 단일 스레드(Single Thread) 이벤트 루프를 통한 **높은 처리 성능**을 가진다.
- 개발 언어가 **JavaScript**이기 때문에, 프런트엔드 개발자가 나름 쉽게 백엔드 개발까지 할 수 있다.  
JavaScript 언어 자체가 **JSON** 을 지원하는 것도 큰 장점이다.
- 구글의 **V8** JavaScript 엔진을 사용하기 때문에, 구글이 무너지지 않는 한 계속 발전한다(빨라진다).
- 이 외에 가볍게 돌아가고, 서버 무리가 적고, **npm**(node package manager)을 통해 다양한 패키지를 이용할 수 있다.    
실제로 굉장히 많은 npm 패키지들(47만개?)과 유저들이 있다.. 앵간한 기능은 이미 npm 패키지로 구현되어 있다고 한다.  
(2016년 자료긴 하지만 [참고])

> ### 단점
- 단일 스레드이기 때문에 **한 작업이 시간이 오래 걸리면 전체 성능이 낮아**진다.  
따라서, 게시판 형태와 같은 가벼운 I/O가 많은 웹서비스에 어울린다고 한다.
- 이벤트 기반 비동기 방식이라 서버단의 로직이 복잡하면 **Callback Hell**에 빠질 수 있다. (가독성이 떨어진다)
- 에러가 발생하면 프로세스 자체가 죽어버린다. (주의해야 할 사항)

[참고]: https://blog.npmjs.org/post/143451680695/how-many-npm-users-are-there


## 3. NodeJS와 다른 프레임워크 비교 <a name="another"></a>
---
### Python 언어 기반
#### Django
##### 장점
* CRUD(Create, Read, Update, Delete)에 강하다.
* 즉 블로그나 게시판을 만드는 데 최적화되어 있다.
* 기본 DB와 admin패널이 기본 내장되어 있어서, 데이터를 직접 넣는 과정이 편하다.

##### 단점
* JS기반 API를 불러오기 힘들다.
* 무겁다. (노드는 맨땅에서 만들 수 있지만 장고는 특유의 법칙을 따르며 만들어야 한다.)
* 실시간기능은 노드가 낫다고 한다.


#### Flask
##### 장점
* 파이썬 코드 10줄 미만으로 웹사이트를 만들 수 있다.
* Django에 비해 굉장히 가볍다

##### 단점
* 제공되는 기능이 거의 없다.
* 즉 모든 걸 맨땅에서 만들어야 한다.
---
### Java 언어 기반
#### Spring
##### 장점
* 우리나라에서 정-말 많이 쓴다. 즉 취업을 위해 배운다면 Spring이다.
* 효율을 높이기 위한 멀티쓰레딩이 가능하다.
* 워낙에 안정적인 언어이자 프레임워크이다.

##### 단점
* Java의 객체지향적인 특성 상 간단한 코드 짜려고 해도 매우 길다.
* 진입장벽이 높다.

---
### 기타등등
#### 점점 쓰게 되지 않는
* RUBY
* PHP

#### 앞으로가 기대되는
* Go : 구글에서 밀어주는 언어. 범용성이 좋아 서버제작에도 사용됨.
* Deno : Nodejs 제작자 Ryan Dahl이 야심차게 내놓은 새 프로젝트. 타입스크립트(자바스크립트 상위호환) 기반이며 노드의 몇몇 문제를 해결함.

#### 개인적으로 추천하는 로드맵은?
* (Node로 입문이 어렵다면) Flask로 정말정말 간단한 웹사이트를 만들어본다. 10줄이면 만든다. (본인 소개 웹사이트 등)
* 그 후 솝트 세미나를 열심히 들으며 Nodejs로 다양한 기능들을 구현해본다.
* 만약 '게시판'에 최적화된 웹을 만들고 싶다면, Django를 배우는 것도 좋다.
* 그 담엔 Spring을 배우던지, Node로 프로젝트를 하던지 본인 필요에 따라 나아가면 된다.

#### Ref
* https://www.youtube.com/watch?v=PnhmeFakkXg&ab_channel=%EB%85%B8%EB%A7%88%EB%93%9C%EC%BD%94%EB%8D%94NomadCoders


## 4. NodeJS 엔진 <a name="engine"></a>

### V8의 특징

V8 엔진은 C++로 작성 되었으며, ECMA-262에 기재된 ECMAScript 및 WebAssembly를 처리할 수 있다.

V8은 IA-32, ARM, MIPS 프로세서를 사용하는 Windows 7 이상, macOS 10.12 이상, Linux x64 환경에서 실행이 가능하다.

V8은 Chrome이 아니더라도, 독립적으로 실행이 가능한데, 대표적인 예가 V8으로 빌드된 Node.js가 있다.

V8은 아래 특징을 지닌다.

- JavaScript 소스 코드를 컴파일 하고, 실행한다.
- 생성하는 Object를 메모리에 할당한다.
- 가비지 콜렉션을 이용해 더 이상 사용되지 않는 Object의 메모리를 해제한다.
- Hidden Class를 이용해 빠르게 프로퍼티에 접근한다.
- TurboFan을 이용해 최적화된 코드로 만들어 속도 및 메모리를 최적화한다.

--- 

### JIT Compiler

Javascript는 보통 js 파일 (text)로 배포되고, 이를 브라우저에서 사용한다. 

브라우저에서는 Javascript를 처리하기 위해서, Javascript 엔진으로 Javascript 소스를 내부에서 이해할 수 있는 언어로 변환하고 실행하는데, 이를 컴파일이라고 부른다. 

브라우저에서 Javascript의 컴파일은 보통 Interpreter로 처리된다고 알려져 있지만, V8엔진에서는 꼭 그렇지도 않다.

브라우저는 Javascript를 매번 브라우저가 이해할 수 있는 언어로 변환해야하는데, interpreter의 경우 항상 같은 코드를 반복해서, Compile하고 실행한다. 웹의 특성상 새로고침이나 페이지 이동이 잦은데, 항상 같은 코드를 반복해서 Compile하는 경우가 많다. 

V8에서는 먼저 Javascript 코드를 Interpreter 방식으로 Compile 하고, 이를 **ByteCode**로 만들어낸다. 

그리고 Compile 속도를 높이기 위해, 이 ByteCode를 캐싱해두고, 자주 쓰이는 코드를 인라인 캐싱과 같은 **최적화** 기법으로 최적화한 후, 이후에 Compile할 시에 참조하여 속도를 높인다. 

이러한 방식을 **JIT (Just-In-Time) Compiler**이라고 하며, Interpreter의 느린 실행 속도를 개선할 수 있다.

[[참고](https://youtu.be/r5OWCtuKiAk/)](https://youtu.be/r5OWCtuKiAk)

## 5. NodeJS 컴파일 과정 <a name="compile"></a>

### V8 컴파일 과정

Javascript도 사람이 읽을 수 있는 코드이기 때문에, 기계가 읽을 수 있도록 기계어로 Compile 해야 한다.

V8에서 Javascript 컴파일 과정은 다음과 같다.

1. **Blink**에서 <script> 태그를 만나면, Javascript **스트리밍**을 시작한다.
2. 스트리밍으로 전달 받은 UTF-16 문자열은 **Scanner**를 이용해 **Token** (let, for)을 생성한다.
3. 생성된 **Token**을 가지고, **Parser**가 **추상 구문 트리 (AST)**를 만든다.
4. 만들어진 **AST**는 **Ignition (Compiler)**에서 **Byte Code**로 컴파일한다. 
5. 컴파일된 **Byte Code**를 실행함으로써 원하는 Javascript 동작이 실행된다. 

이때 컴파일한 내용을 V8에서는 최적화를 진행한다.

- Byte Code를 실행하면서, Profiling을 통해 최적화 해야 하는 데이터를 수집한다.
- Profiling을 통해 찾은 데이터는 TurboFan을 통해 자주 사용되는 함수나 데이터를 기반으로 최적화를 진행하며, Optimized Machine Code를 생성한다.
- 이후 Optimized Machine Code를 실행하며, 메모리 사용량을 줄이고, 기계어에 최적화되어, 속도와 성능을 향상 시킨다.

위 과정을 영상을 통해 자세히 설명하고 있다. 

[[참고](https://youtu.be/r5OWCtuKiAk/)](https://youtu.be/r5OWCtuKiAk)

---

### V8 Scanner 와 Token

Javascript 파일은 Text로 이루어져 있으며, 이를 Network를 통해 다운받는다.

V8에서는 이 Text 정보를 Parsing 하기 전에, 일정한 형태의 UTF-16으로 변환하고, Scanner를 이용해 Token을 생성한다.

이 때 Token은 미리 정의한 항목과 개발자가 정의한 함수나 변수들이다. 

- Javascript에 미리 정의되어 있는 for, const, if, function 같은 키워드
- 공백 이나 탭
- 변수 나 함수 식별자

이때 모든 파일을 다운 받고 실행되는 것이 아니라, 스트리밍 중 도착하는 순서대로, 여러 chunk 관리되며, 30kB 이상이 되면, Script Stream Tread에서 Parsing을 싲가한다.

Scanner 단계에서 속도를 올리기 위해서는 소스 코드를 축소하고, 불필요한 공백이나 주석을 제거하고, 비 ASCII 식별자를 피하는 것이 좋다. 

---

### V8 Parser와 AST

Parser는 Token을 가지고, 컴파일러(Ignition)가 사용할 AST를 생성한다.

AST(Abstract Syntax Tree)는 코드를 구조화된 트리로 만들어, 컴파일에서 사용할 수 있게 도와준다.

AST란 소스코드를 트리로 만든 구조체이며, 보통 컴파일러에서 사용한다.

[추상 구문 트리](https://ko.wikipedia.org/wiki/%EC%B6%94%EC%83%81_%EA%B5%AC%EB%AC%B8_%ED%8A%B8%EB%A6%AC)

출처 : [V8 에서 Javascript 코드를 실행하는 방법 정리해보기](https://medium.com/@pks2974/v8-%EC%97%90%EC%84%9C-javascript-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%8B%A4%ED%96%89%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EC%A0%95%EB%A6%AC%ED%95%B4%EB%B3%B4%EA%B8%B0-25837f61f551)

---


## 6. NodeJS 사용시 주의사항 <a name="notice"></a>

# Node.js 개발 시 주의사항
<h3> 1. 이벤트 루프의 블록킹 </h3>
Node.js의 자바스크립트는 싱글 쓰레드 방식의 환경입니다. 
두 개의 작업을 병렬로 진행하는 것이 불가능하기 때문에 IO기반으로 비동기적으로 동시에 발생하는 여러 작업들을 다루고 있습니다.

만약 Node.js가 데이터베이스의 데이터를 가져오는 작업을 요청하면, 데이터를 가져오는 동안 어플리케이션의 다른 일에 집중 할 수 있게 됩니다. <br>
<pre><code>
  db.User.get(userId, function(err, user) {
           // 여기에 데이터가 불려오는 동안 다른 일을 함
})
 </pre></code>

그러나 처리할 작업이 클 경우에는 문제가 생길 수 있습니다. <br>
예를 들어 매우 큰 배열을 sorting 하거나 매우 큰 loop를 도는 작업 등이 있다고 가정한다면, 
<pre><code>
 function sortUsersByAge(users) {
           users.sort(function(a, b) {
                     return a.age < b.age ? -1 : 1
           })
}
 </pre></code>

사용자가 적다면 문제가 없지만 수천 수만 명이 동시에 접속해서 동일한 작업을 요청할 경우, 이전 작업이 마칠 때까지 다른 사용자들은 결과를 오래 기다려야 하는 문제가 발생합니다. <br>
(결국 callback을 통한 비동기적인 코드의 효과가 전혀 없어지게 됩니다.) <br>
이러한 문제를 해결하는 가장 이상적인 해결책은 이미 sorting이 된 결과를 DB상에서 처리해서 내려주는 것입니다. (실제로 Nodejs에서 이 문제를 명확하게 해결할 수 없기 때문에 DB에서 최대한 처리된 데이터를 내려 주는 등 각 상황에 맞춰 해결해야 합니다.) <br>
즉, CPU에 지나치게 의존하는 작업을 최대한 피해야 합니다.


출처 https://www.toptal.com/nodejs/top-10-common-nodejs-developer-mistakes
