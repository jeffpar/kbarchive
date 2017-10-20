---
layout: page
title: "Q267995: XCLN: Outlook 8.03 Cannot Connect to Exchange Server 5.5"
permalink: /kb/267/Q267995/
---

## Q267995: XCLN: Outlook 8.03 Cannot Connect to Exchange Server 5.5

{% raw %}

	Article: Q267995
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to Exchange Server 5.5, using Microsoft Outlook 8.03
	running on a Microsoft Windows NT 4.0-based client computer, the server may not
	be able to resolve your mailbox name during the name-checking process, and you
	cannot connect.
	
	CAUSE
	=====
	
	This issue can occur when the Remote Procedure Call (RPC) service is not running
	on the client computer.
	
	RESOLUTION
	==========
	
	To resolve this behavior, install the RPC service, and then restart the client
	computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Component         : RPC
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
