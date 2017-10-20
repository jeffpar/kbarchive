---
layout: page
title: "Q87046: SMTP: How the Gateway Communicates with the SMTP World"
permalink: /kb/087/Q87046/
---

## Q87046: SMTP: How the Gateway Communicates with the SMTP World

{% raw %}

	Article: Q87046
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to SMTP always connects to the designated SMTP host
	to send out messages. The gateway receives messages from any host that can
	connect to the gateway.
	
	When using TCP as the transport mechanism, a TCP connection is made by the sender
	to the receiver's service port 25. When the Microsoft Mail gateway has mail to
	send to the SMTP world, it initiates a connection to the designated SMTP host's
	service port 25.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
