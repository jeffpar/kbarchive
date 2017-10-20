---
layout: page
title: "Q100706: SMTP: Err Msg: Read: (52) Network Dropped Connection or Reset"
permalink: /kb/100/Q100706/
---

## Q100706: SMTP: Err Msg: Read: (52) Network Dropped Connection or Reset

{% raw %}

	Article: Q100706
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 2.1 and 3.0 of Microsoft Mail Gateway to SMTP may display these
	messages:
	
	  ERROR read: (52) Network dropped connection or reset
	  SMTP_recv: system error
	
	CAUSE
	=====
	
	These indicate:
	
	- An error at the TCP or IP layer has occurred.
	
	- The SMTP host has gone down.
	
	- The network between the gateway computer and the other host is down.
	
	RESOLUTION
	==========
	
	You can test for these conditions by trying to "telnet" to port 25 of the SMTP
	router: type the number 25 after the router's IP address. If this test succeeds,
	the Gateway will run. If it fails, you have to bring the host or network back
	up, or make configuration changes as needed.
	
	If the error occurs frequently, check the network with a protocol analyzer to
	determine the exact network problem.
	
	Additional query words: 2.10 3.00 errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	

{% endraw %}
