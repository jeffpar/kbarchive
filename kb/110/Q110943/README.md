---
layout: page
title: "Q110943: WINSOCK API Init. Error: Not Enough DOS memory"
permalink: /kb/110/Q110943/
---

## Q110943: WINSOCK API Init. Error: Not Enough DOS memory

{% raw %}

	Article: Q110943
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When starting WinSock applications after other applications have started you get
	the following error:
	
	  WINSOCK API Initialization Error: Not enough DOS memory to allocate DOS
	  buffers for all sockets.
	
	CAUSE
	=====
	
	Windows uses a bottom-up memory allocation algorithm. If applications started
	before WinSock applications exhaust all lower memory, WINSOCK.DLL cannot
	initialize communication buffers in lower memory to talk to the TCP/IP protocol
	stack, resulting in the above error message.
	
	WORKAROUND
	==========
	
	Starting at least one WinSock application before any other applications allows
	WINSOCK.DLL to reserve the lower memory buffers needed for communication with
	the TCP/IP protocol stack and to retain them during subsequent memory
	allocations.
	
	Additional query words: 2.20 2.2 tcpip sockets
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
