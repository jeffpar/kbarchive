---
layout: page
title: "Q103202: Hotfix for GPF or TCPIP_NODE Service Ring 3 Trap"
permalink: /kb/103/Q103202/
---

## Q103202: Hotfix for GPF or TCPIP_NODE Service Ring 3 Trap

{% raw %}

	Article: Q103202
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Problem ID: lanman23.1176
	
	In LAN Manager 2.1a and 2.2 an OS/2 workstation or server running the TCPIP_NODE
	service may experience a general protection fault or a ring 3 trap in the
	TCPIP_NODE service. The trap information will look like:
	
	 TRAP 000D
	
	 AX=1DC4 BX=0180 cx=432D DX=8DE4 BP=1DA6
	 SI=009C DI=1DC4 DS=00C7 ES=0307 FLG=2246
	 CS=0047 IP=48C1 SS=0307 SP=1DA0 MSW=001B
	 CSLIM=A06A SSLIM=1FFF DSLIM=4B8F ESLIM=1FFF
	 CSACC=FB SSACC=F3 DSACC=F3 ESACC=F3
	 ERRCD=3182 ERLIM=**** ERACC=**
	
	You are given the option to terminate the program or continue, but the server's
	ability to perform may be limited.
	
	CAUSE
	=====
	
	The node service did not allocate enough memory for incoming messages, causing
	it to overwrite its stack.
	
	RESOLUTION
	==========
	
	Microsoft hotfix CSD00.043 replaces NODE.EXE and allocates a larger incoming
	message buffer. Since hotfixes do not go through the normal testing that
	releases or patches do, please use with caution.
	
	To get CSD00.043 please contact Microsoft support. This fix will be included in
	the next release of LAN Manager (after 2.2).
	
	Additional query words: 2.20 2.2 2.10a 2.1a hub tcp/ip routers wan
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
