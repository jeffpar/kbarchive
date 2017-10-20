---
layout: page
title: "Q124801: SMTP: Err Msg: Socket Error (123) When Starting Gateway"
permalink: /kb/124/Q124801/
---

## Q124801: SMTP: Err Msg: Socket Error (123) When Starting Gateway

{% raw %}

	Article: Q124801
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft 32-bit version TCP/IP for Windows for Workgroups,
	SMTPGATE.EXE will generate an error and the gateway will fail to operate. The
	user will see the following error message on the screen or in the smtpgate.log
	if the the -l logging parameter is used:
	
	  ERROR socket: (123) network error
	  SMTP_listen: system error
	
	CAUSE
	=====
	
	This error message is generated because the SMTPGATE.EXE program works with the
	LAN Manager API called sockets.exe. It does not work with Winsock APIs. The SMTP
	Gateway was developed before Windows for Workgroups and the WFW 32- bit version
	of TCP/IP.
	
	RESOLUTION
	==========
	
	To work around this issue, use the 16-bit version of TCP/IP and load SOCKETS.EXE
	before starting the gateway. The 16 bit version of TCP/IP can be found on any of
	our electronic services as the self-extracting file wfwtcp.exe. See Q96244 and
	Q105288 for related information.
	
	Additional query words: 3.00 3.0.6. 3.0 stack
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP3xSearch
	Version           : MS-DOS:3.x
	
	=============================================================================
	

{% endraw %}
