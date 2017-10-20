---
layout: page
title: "Q271542: XADM: Directory Service Does Not Start with Event ID 1171"
permalink: /kb/271/Q271542/
---

## Q271542: XADM: Directory Service Does Not Start with Event ID 1171

{% raw %}

	Article: Q271542
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server directory service may not start and the following event ID
	1171 error message may be logged in the application event log:
	
	  Event ID: 1171
	  Source: MSExchangeDS
	  Type: Error
	  Category: Internal Processing
	
	  Description:
	  Exception e0010002 has occurred with parameters 9 and 2 (internal ID 30c043f).
	  Contact Microsoft Technical Support for assistance.
	
	CAUSE
	=====
	
	This issue can occur if a directory is restored from backup on a server (for
	this example, server A) and the directory contains knowledge of a server in the
	directory's site that has been deleted (for this example, server B).
	
	After the tape restoration, when server A starts, server A attempts to
	synchronize with the other servers in the site and determines that server B has
	been deleted from the site, but server A maintains a reference to the deleted
	server.
	
	
	While server A is in this state (this state persists until server A runs the
	knowledge consistency checker process), if server B is re-installed in the site
	with the same name, another reference to server B is added to the directory on
	server A (which results in two references to server B). This inconsistency may
	prevent the directory service on server B from starting.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
