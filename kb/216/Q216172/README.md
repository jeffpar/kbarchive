---
layout: page
title: "Q216172: XIMS: NNTP Event ID 11106 with MODE STREAM"
permalink: /kb/216/Q216172/
---

## Q216172: XIMS: NNTP Event ID 11106 with MODE STREAM

{% raw %}

	Article: Q216172
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to set up an NNTP pull feed from Netscape to Microsoft Exchange
	Server, you get the following error messages: On Netscape:
	
	  [99/01/11 17:04.52] innxmit:Unknown reply to "mode stream" -- 501 usage: mode
	  reader
	
	On Exchange Server:
	
	  Event ID 11106
	  MSExchangeNNTP
	  Warning
	  - An NNTP client connected from (IP Address) issued too many invalid commands.
	  Dropping the connection.
	
	CAUSE
	=====
	
	Exchange Server 5.5 does not support the Mode Stream command but does support
	the Mode Reader command.
	
	WORKAROUND
	==========
	
	At this time, Exchange Server does not support the Mode Stream command. You can
	set up an NNTP push feed from Exchange Server to Netscape, which eliminates this
	problem.
	
	MORE INFORMATION
	================
	
	Information from Netscape
	-------------------------
	What are streaming feeds? 
	
	Streaming feeds are a new method of feeding articles between two
	news servers over NNTP. Streaming feeds are designed to feed articles more efficiently than standard methods. While streaming feeds are not an official part of the protocol yet, they are widely supported and enable significant performance enhancements.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
