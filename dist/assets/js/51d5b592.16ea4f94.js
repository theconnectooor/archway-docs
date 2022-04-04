"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[984],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5593:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:1},c="Node Installation",s={unversionedId:"node/install",id:"node/install",isDocsHomePage:!1,title:"Node Installation",description:"This guide shows how to install and run an Archway full node.",source:"@site/docs/node/install.md",sourceDirName:"node",slug:"/node/install",permalink:"/docs/node/install",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/node/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Building the NFT dApp",permalink:"/docs/create/guides/nft-project/dapp"},next:{title:"Node Configuration",permalink:"/docs/node/configure"}},d=[{value:"Running the Archway daemon",id:"running-the-archway-daemon",children:[{value:"How to install <code>archwayd</code> from source",id:"how-to-install-archwayd-from-source",children:[]},{value:"How to run <code>archwayd</code> using Docker",id:"how-to-run-archwayd-using-docker",children:[]}]},{value:"Initialize the Node",id:"initialize-the-node",children:[]},{value:"Prepare the Account and Keys",id:"prepare-the-account-and-keys",children:[]},{value:"Starting the Node",id:"starting-the-node",children:[]}],p={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"node-installation"},"Node Installation"),(0,o.kt)("p",null,"This guide shows how to install and run an Archway full node."),(0,o.kt)("h2",{id:"running-the-archway-daemon"},"Running the Archway daemon"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Archway can be installed only by pulling from Docker Hub (",(0,o.kt)("a",{parentName:"p",href:"#how-to-run-archwayd-using-docker"},"see bellow"),")."),(0,o.kt)("p",{parentName:"div"},"Installing ",(0,o.kt)("inlineCode",{parentName:"p"},"archwayd")," from source is coming soon!"))),(0,o.kt)("h3",{id:"how-to-install-archwayd-from-source"},"How to install ",(0,o.kt)("inlineCode",{parentName:"h3"},"archwayd")," from source"),(0,o.kt)("p",null,"Make sure you have golang installed on your machine:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"Go")," (",(0,o.kt)("strong",{parentName:"li"},"version 1.16")," or higher)."),(0,o.kt)("li",{parentName:"ul"},"Ensure the Go environment variables are ",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/doc/gopath_code#GOPATH"},"set properly")," on your system.")),(0,o.kt)("p",null,"Get the source code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:archway-network/archway.git\ncd archway\n")),(0,o.kt)("p",null,"Build and install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make install\n")),(0,o.kt)("p",null,"For full installation and configuration parameters, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archway-network/archway/blob/main/README.md"},"README"),"."),(0,o.kt)("h3",{id:"how-to-run-archwayd-using-docker"},"How to run ",(0,o.kt)("inlineCode",{parentName:"h3"},"archwayd")," using Docker"),(0,o.kt)("p",null,"Make sure you have ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker",title:"Install Docker"},"Docker")," installed on your machine. For Linux users, it's recommended to run the Docker daemon in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/security/rootless/",title:"Docker Rootless mode"},"Rootless Mode"),"."),(0,o.kt)("p",null,"Pull the image from ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/archwaynetwork/archwayd"},"Docker Hub"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull archwaynetwork/archwayd:latest\n")),(0,o.kt)("p",null,"Each Archway network will eventually have a different version running. To connect your node to a network, you should use a tag with the corresponding network name. For example, to connect to the Constantine testnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull archwaynetwork/archwayd:constantine\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure to always use the image tag that points to the network you want to connect."))),(0,o.kt)("p",null,"By default, the Docker image runs the ",(0,o.kt)("inlineCode",{parentName:"p"},"archwayd")," binary, so you should specify the arguments for ",(0,o.kt)("inlineCode",{parentName:"p"},"archwayd")," right after the image name. For better usage, mount an external volume at ",(0,o.kt)("inlineCode",{parentName:"p"},"/root/.archway")," to persist the daemon home path across different runs. For example, if you want to add a key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  -v ~/.archway:/root/.archway \\\n  archwaynetwork/archwayd:latest \\\n  keys add test-key\n")),(0,o.kt)("p",null,"And then list all keys:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  -v ~/.archway:/root/.archway \\\n  archwaynetwork/archwayd:latest \\\n  keys list\n")),(0,o.kt)("p",null,"It's also important to notice that, when running a node in a network, you'll need to expose the container ports for external connectivity. The image exposes the following ports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1317"),": Rest server"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"26656"),": Tendermint P2P"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"26657"),": Tendermint RPC")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To simplify using the Docker container, set an alias with the home path and the proper image tag (replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"<network-name>"),"), like:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'alias archwayd="docker run --rm -it -v ~/.archway:/root/.archway archwaynetwork/archwayd:<network-name>"\n')),(0,o.kt)("p",{parentName:"div"},"After setting this alias, you can use the other ",(0,o.kt)("inlineCode",{parentName:"p"},"archwayd")," commands without typing the verbose Docker run command."))),(0,o.kt)("h2",{id:"initialize-the-node"},"Initialize the Node"),(0,o.kt)("p",null,"Initialize the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file that is required to establish a network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd init my-node --chain-id my-chain\n")),(0,o.kt)("h2",{id:"prepare-the-account-and-keys"},"Prepare the Account and Keys"),(0,o.kt)("p",null,"Create a key to hold your account. After you run this command, you are prompted with a password dialogue. Enter a new password for your account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd keys add my-account\n")),(0,o.kt)("p",null,"You see an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'- name: my-account\n  type: local\n  address: archway12ntzpk9fjt2x39pvll8ufma9tuhhnkh8g4zzc2\n  pubkey: archwaypub1addwnpepqfgjegqxxv9srfe359t93tu9l86tpkwwjk7w63xtpwq05wmlq9emjmxfmmv\n  mnemonic: ""\n  threshold: 0\n  pubkeys: []\n\n\n**Important:** Write this mnemonic phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\nresource regret any wet stable body alcohol spring horse valve ritual top music salad gesture can earn casino example drive surface mix senior flag\n')),(0,o.kt)("p",null,"Here you can see your account details and the mnemonic phrase that is very crucial to recover the account."),(0,o.kt)("h2",{id:"starting-the-node"},"Starting the Node"),(0,o.kt)("p",null,"If you try to start the node, you get an error since at least one validator is required for your network to run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd start\n\nError: error during handshake: error on replay: validator set is nil in genesis and still empty after InitChain\n")),(0,o.kt)("p",null,"To configure a validator node, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/validator/overview"},"Validator Overview"),"."))}u.isMDXComponent=!0}}]);