---
layout: page
title: "Q105288: SMTP: Gateway Cannot Run Under Windows NT TCP/IP"
permalink: /kb/105/Q105288/
---

## Q105288: SMTP: Gateway Cannot Run Under Windows NT TCP/IP

{% raw %}

	Article: Q105288
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail Gateway to SMTP version cannot run on Microsoft's TCP/IP for
	Windows NT, which uses the Winsock API: the SMTP Gateway was not developed to
	interact with this.
	
	The SMTP Gateway does run on top of two Microsoft TCP/IP products that use the
	Microsoft LAN Manager APIs:
	
	- LAN Manager TCP/IP
	
	- Windows for Workgroups TCP/IP (must use the MS-DOS redirector)
	
	The software must be loaded in the correct order. Start TCP/IP (for LAN Manager
	or Windows for Workgroups) first with the "load tcpip" command. Then start the
	TCP/IP application interface, called SOCKET, by typing "SOCKETS". When these
	have been started, you can start the SMTP Gateway software with the "smtpgate"
	command.
	
	Additional query words: 3.00 3.0
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
