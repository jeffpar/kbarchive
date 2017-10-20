---
layout: page
title: "Q235504: XFOR: Warning Event ID 31043 Logged by GroupWise Connector"
permalink: /kb/235/Q235504/
---

## Q235504: XFOR: Warning Event ID 31043 Logged by GroupWise Connector

{% raw %}

	Article: Q235504
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following message may be logged in the application event log by the
	Microsoft Exchange Connector for Novell GroupWise:
	
	  Event ID: 31043
	  Source: MSExchangeGWISE
	  Type: Information
	  Category: Transport to Exchange
	  Description: Warning
	
	  Message trace information inconsistent or missing.
	
	CAUSE
	=====
	
	This event is logged because the Private Management Domain (PRMD) field for the
	X.400 site proxy is empty. The empty PRMD field is a requirement for Microsoft
	Exchange Server Defense Messaging System (DMS). The event is harmless and is
	simply an indication that the trace Global Domain Identifier (GDI) information
	was generated differently than a typical piece of mail.
	
	RESOLUTION
	==========
	
	This event is only generated if Transport to Exchange logging on the Microsoft
	Exchange Connector for Novell GroupWise is set to Medium or higher. Set
	Transport to Exchange logging lower than Medium so that the connector does not
	log this event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
