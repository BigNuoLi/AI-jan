"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9829],{98550:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=i(85893),t=i(11151);const o={title:"Jan is Not Using GPU",slug:"/troubleshooting/gpu-not-used",description:"Jan is not using GPU.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","convZ ersational AI","no-subscription fee","large language model","troubleshooting","using GPU"]},r=void 0,l={id:"guides/troubleshooting/gpu-not-used",title:"Jan is Not Using GPU",description:"Jan is not using GPU.",source:"@site/docs/guides/08-troubleshooting/03-gpu-not-used.mdx",sourceDirName:"guides/08-troubleshooting",slug:"/troubleshooting/gpu-not-used",permalink:"/troubleshooting/gpu-not-used",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/08-troubleshooting/03-gpu-not-used.mdx",tags:[],version:"current",lastUpdatedBy:"hiento09",lastUpdatedAt:1705633577,formattedLastUpdatedAt:"Jan 19, 2024",sidebarPosition:3,frontMatter:{title:"Jan is Not Using GPU",slug:"/troubleshooting/gpu-not-used",description:"Jan is not using GPU.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","convZ ersational AI","no-subscription fee","large language model","troubleshooting","using GPU"]},sidebar:"guidesSidebar",previous:{title:"Something's amiss",permalink:"/troubleshooting/somethings-amiss"},next:{title:"How to Get Error Logs",permalink:"/troubleshooting/how-to-get-error-logs"}},a={},d=[{value:"Requirements for Running Jan in GPU Mode on Windows and Linux",id:"requirements-for-running-jan-in-gpu-mode-on-windows-and-linux",level:2},{value:"NVIDIA Driver",id:"nvidia-driver",level:3},{value:"CUDA Toolkit",id:"cuda-toolkit",level:3},{value:"Specific Requirements for Linux",id:"specific-requirements-for-linux",level:3},{value:"Switching Between CPU/GPU Modes in Jan",id:"switching-between-cpugpu-modes-in-jan",level:2},{value:"Checking GPU Settings in Jan",id:"checking-gpu-settings-in-jan",level:2},{value:"Tested Configurations",id:"tested-configurations",level:2},{value:"Common Issues and Solutions",id:"common-issues-and-solutions",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This guide provides steps to troubleshoot and resolve issues when Jan app does not utilize the GPU on Windows and Linux systems."}),"\n",(0,s.jsx)(n.h2,{id:"requirements-for-running-jan-in-gpu-mode-on-windows-and-linux",children:"Requirements for Running Jan in GPU Mode on Windows and Linux"}),"\n",(0,s.jsx)(n.h3,{id:"nvidia-driver",children:"NVIDIA Driver"}),"\n",(0,s.jsxs)(n.p,{children:["Ensure that you have installed the NVIDIA driver that supports CUDA 11.7 or higher. For a detailed of CUDA compatibility, please refer ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/deploy/cuda-compatibility/index.html#binary-compatibility__table-toolkit-driver",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To verify, open PowerShell or Terminal and enter the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nvidia-smi\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you see a result similar to the following, you have successfully installed the NVIDIA driver:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"+-----------------------------------------------------------------------------+\n| NVIDIA-SMI 470.57.02    Driver Version: 470.57.02    CUDA Version: 11.7     |\n|-------------------------------+----------------------+----------------------+\n| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |\n|                               |                      |               MIG M. |\n|===============================+======================+======================|\n|   0  NVIDIA GeForce ...  Off  | 00000000:01:00.0  On |                  N/A |\n|  0%   51C    P8    10W / 170W |    364MiB /  7982MiB |      0%      Default |\n|                               |                      |                  N/A |\n+-------------------------------+----------------------+----------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"cuda-toolkit",children:"CUDA Toolkit"}),"\n",(0,s.jsxs)(n.p,{children:["Ensure that you have installed the CUDA toolkit that is compatible with your NVIDIA driver. For a detailed of CUDA compatibility, please refer ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/deploy/cuda-compatibility/index.html#binary-compatibility__table-toolkit-driver",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To verify, open PowerShell or Terminal and enter the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nvcc --version\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you see a result similar to the following, you have successfully installed CUDA:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nvcc: NVIDIA (R) Cuda compiler driver\n\nCuda compilation tools, release 11.7, V11.7.100\nBuild cuda_11.7.r11.7/compiler.30033411_0\n"})}),"\n",(0,s.jsx)(n.h3,{id:"specific-requirements-for-linux",children:"Specific Requirements for Linux"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GCC and G++ Version"}),": Ensure that you have installed ",(0,s.jsx)(n.code,{children:"gcc-11"}),", ",(0,s.jsx)(n.code,{children:"g++-11"}),", ",(0,s.jsx)(n.code,{children:"cpp-11"})," or higher, refer ",(0,s.jsx)(n.a,{href:"https://gcc.gnu.org/projects/cxx-status.html#cxx17",children:"here"}),". For Ubuntu, you can install g++ 11 by following the instructions ",(0,s.jsx)(n.a,{href:"https://linuxconfig.org/how-to-switch-between-multiple-gcc-and-g-compiler-versions-on-ubuntu-20-04-lts-focal-fossa",children:"here"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Example for ubuntu\n# Add the following PPA repository\nsudo add-apt-repository ppa:ubuntu-toolchain-r/test\n# Update the package list\nsudo apt update\n# Install g++ 11\nsudo apt-get install -y gcc-11 g++-11 cpp-11\n\n# Update the default g++ version\nsudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-11 110 \\\n                      --slave /usr/bin/g++ g++ /usr/bin/g++-11 \\\n                      --slave /usr/bin/gcov gcov /usr/bin/gcov-11 \\\n                      --slave /usr/bin/gcc-ar gcc-ar /usr/bin/gcc-ar-11 \\\n                      --slave /usr/bin/gcc-ranlib gcc-ranlib /usr/bin/gcc-ranlib-11\nsudo update-alternatives --install /usr/bin/cpp cpp /usr/bin/cpp-11 110\n# Check the default g++ version\ng++ --version\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Post-Installation Actions"}),": You must add the ",(0,s.jsx)(n.code,{children:".so"})," libraries of CUDA to the ",(0,s.jsx)(n.code,{children:"LD_LIBRARY_PATH"})," environment variable by following the ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#post-installation-actions",children:"Post-installation Actions instruction"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Example for ubuntu with CUDA 11.7\nsudo nano /etc/environment\n# Add /usr/local/cuda-11.7/bin to the PATH environment variable - the first line\n# Add the following line to the end of the file\nLD_LIBRARY_PATH=/usr/local/cuda-11.7/lib64\n\n# Save and exit\n# Restart your computer or log out and log in again, the changes will take effect\n"})}),"\n",(0,s.jsx)(n.h2,{id:"switching-between-cpugpu-modes-in-jan",children:"Switching Between CPU/GPU Modes in Jan"}),"\n",(0,s.jsxs)(n.p,{children:["By default, Jan runs in CPU mode. Upon start, Jan checks if your system is capable of running in GPU mode. If compatible, GPU mode is enabled automatically, and the GPU with the highest VRAM is selected. This setting can be verified in the ",(0,s.jsx)(n.code,{children:"Settings"})," > ",(0,s.jsx)(n.code,{children:"Advanced"})," section."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"jan-gpu-enable-setting",src:i(45780).Z+"",width:"1488",height:"854"})}),"\n",(0,s.jsx)(n.p,{children:"If you find that GPU mode is available but not enabled by default, consider the following troubleshooting steps:"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Check if you have installed the NVIDIA driver that supports CUDA 11.7 or higher. For a detailed of CUDA compatibility, please refer ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/deploy/cuda-compatibility/index.html#binary-compatibility__table-toolkit-driver",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Ensure that the CUDA toolkit is installed and compatible with your NVIDIA driver. For a detailed of CUDA compatibility, please refer ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/deploy/cuda-compatibility/index.html#binary-compatibility__table-toolkit-driver",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For Linux, it's crucial to add the ",(0,s.jsx)(n.code,{children:".so"})," libraries of CUDA and the CUDA compatible driver to the ",(0,s.jsx)(n.code,{children:"LD_LIBRARY_PATH"})," environment variable. For Windows, users should ensure that the ",(0,s.jsx)(n.code,{children:".dll"})," libraries of CUDA and the CUDA compatible driver are included in the PATH environment variable. Usually, when installing CUDA on Windows, this environment variable is automatically added, but if you do not see it, you can add it manually by referring ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/index.html#environment-setup",children:"here"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"checking-gpu-settings-in-jan",children:"Checking GPU Settings in Jan"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["To check the current GPU settings detected by Jan, navigate to ",(0,s.jsx)(n.code,{children:"Settings"})," > ",(0,s.jsx)(n.code,{children:"Advanced"})," > ",(0,s.jsx)(n.code,{children:"Open App Directory"})]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"OpenAppDirectory",src:i(55702).Z+"",width:"1470",height:"841"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Open the ",(0,s.jsx)(n.code,{children:"settings.json"})," file under the ",(0,s.jsx)(n.code,{children:"settings"})," folder. The following is an example of the ",(0,s.jsx)(n.code,{children:"settings.json"})," file:"]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/settings/settings.json"',children:'{\n  "notify": true,\n  "run_mode": "gpu",\n  "nvidia_driver": {\n    "exist": true,\n    "version": "531.18"\n  },\n  "cuda": {\n    "exist": true,\n    "version": "12"\n  },\n  "gpus": [\n    {\n      "id": "0",\n      "vram": "12282"\n    },\n    {\n      "id": "1",\n      "vram": "6144"\n    },\n    {\n      "id": "2",\n      "vram": "6144"\n    }\n  ],\n  "gpu_highest_vram": "0"\n}\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"Troubleshooting tips:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ensure the ",(0,s.jsx)(n.code,{children:"nvidia_driver"})," and ",(0,s.jsx)(n.code,{children:"cuda"})," fields indicate that requirements software are installed."]}),"\n",(0,s.jsxs)(n.li,{children:["If the ",(0,s.jsx)(n.code,{children:"gpus"})," field is empty or does not list your GPU, verify the installation of the NVIDIA driver and CUDA toolkit."]}),"\n",(0,s.jsxs)(n.li,{children:["For further assistance, please share the ",(0,s.jsx)(n.code,{children:"settings.json"})," with us."]}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"tested-configurations",children:"Tested Configurations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Windows 11 Pro 64-bit, NVIDIA GeForce RTX 4070ti GPU, CUDA 12.2, NVIDIA driver 531.18 (Bare metal)"}),"\n",(0,s.jsx)(n.li,{children:"Ubuntu 22.04 LTS, NVIDIA GeForce RTX 4070ti GPU, CUDA 12.2, NVIDIA driver 545 (Bare metal)"}),"\n",(0,s.jsx)(n.li,{children:"Ubuntu 20.04 LTS, NVIDIA GeForce GTX 1660ti GPU, CUDA 12.1, NVIDIA driver 535 (Proxmox VM passthrough GPU)"}),"\n",(0,s.jsx)(n.li,{children:"Ubuntu 18.04 LTS, NVIDIA GeForce GTX 1660ti GPU, CUDA 12.1, NVIDIA driver 535 (Proxmox VM passthrough GPU)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"common-issues-and-solutions",children:"Common Issues and Solutions"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the issue persists, please install the ",(0,s.jsx)(n.a,{href:"/install/nightly",children:"Nightly version"})," instead."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If the issue persists, ensure your (V)RAM is accessible by the application. Some folks have virtual RAM and need additional configuration."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Get help in ",(0,s.jsx)(n.a,{href:"https://discord.gg/mY69SZaMaC",children:"Jan Discord"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},45780:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/jan-gpu-enable-setting-a15d040bb66482f134e00d361cddba8a.png"},55702:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/jan-open-home-directory-7b259ee38714840856ef743f457d800e.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var s=i(67294);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);