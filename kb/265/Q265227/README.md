---
layout: page
title: "Q265227: XADM: Setup Won't Work w. &quot;The Required Privilege...&quot; Err. Mssg."
permalink: /kb/265/Q265227/
---

## Q265227: XADM: Setup Won't Work w. &quot;The Required Privilege...&quot; Err. Mssg.

{% raw %}

	Article: Q265227
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Exchange Server 5.5, Setup may not work and you may
	receive the following error message:
	
	  The required privilege is not held by the client.
	
	The only option available is to click OK. When you click OK, you quit Setup.
	
	CAUSE
	=====
	
	This issue can occur if the Exchange Server Setup program is trying to write to
	the Microsoft Windows NT Event Viewer application event log. To determine if
	Setup is writing to the application event log, look at the Exchange Server
	Setup.log file (located by default at the root of the drive).
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Stop the Event Log service.
	
	2. Navigate to the Winnt\System32\Config folder.
	
	3. Rename the *.evt files.
	
	4. Restart the server to re-create the *.evt log files.
	
	After you perform these steps, the Exchange Server Setup program should run
	properly.
	
	Additional query words: 7022, 7023, client
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
