---
layout: page
title: "Q177778: XADM: Events 12000 and 11201 from NNTP"
permalink: /kb/177/Q177778/
---

## Q177778: XADM: Events 12000 and 11201 from NNTP

{% raw %}

	Article: Q177778
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following events may be logged in the Application Event Log:
	
	  Event ID: 12000
	  Source: MSExchange NNTP
	  Type: Error
	  Category: Content Engine
	
	  Description: Error 80040C06-F2000312 occurred while processing
	  message <>.
	
	  Event ID: 11201
	  Source: MSExchange NNTP
	  Type: Error
	  Category: Client Action
	
	  Description: An unexpected error occurred while handling an NNTP
	  protocol command. Error 0x80040c06 was returned by procedure
	  EcWriteStream while executing procedure NNTPCON::EcReadArticle.
	
	CAUSE
	=====
	
	A bi-directional pull feed connection has been set up from an upstream server.
	When news is pulled down via that server and the articles include the header,
	NNTP-Posting-Host, the downstream server tries to post these articles back to
	the upstream server. The articles have the NNTP-Posting- Host header so the
	upstream server rejects them. The header is tagged onto the articles coming in
	to the upstream server when it receives those articles from its source, for
	example, a client.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
