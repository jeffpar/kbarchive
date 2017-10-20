---
layout: page
title: "Q175563: XFOR: Apple Chooser Does Not Recognize Exchange Cluster Name"
permalink: /kb/175/Q175563/
---

## Q175563: XFOR: Apple Chooser Does Not Recognize Exchange Cluster Name

{% raw %}

	Article: Q175563
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you install Microsoft Exchange Server on a cluster server and then try to
	configure the AppleTalk portion of the Microsoft Mail Connector interchange
	service, Chooser does not recognize the Exchange cluster name. It can only see
	the Windows NT machine names.
	
	CAUSE
	=====
	
	This is by design. The AppleTalk MTA (ATMTA) is not supported in this
	configuration.
	
	Additional query words: macintosh
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
