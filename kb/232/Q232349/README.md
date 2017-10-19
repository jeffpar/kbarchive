---
layout: page
title: "Q232349: XFOR:Meeting Updates Cause Multiple Meeting Requests w/GWC"
permalink: /kb/232/Q232349/
---

## Q232349: XFOR:Meeting Updates Cause Multiple Meeting Requests w/GWC

	Article: Q232349
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a meeting update is sent to a GroupWise user, the original meeting
	scheduled in the GroupWise user's calendar will not be updated correctly.
	Ideally, the original meeting will be deleted and replaced with the new updated
	meeting. However, all meeting updates are sent as new meeting requests. The
	meeting update will be a new meeting request with a prefix "Updated:
	<original subject>" in the subject line.
	
	CAUSE
	=====
	
	This behavior is caused by a limitation in the interoperability between the
	Microsoft Exchange Connector for Novell GroupWise and the API Gateway.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	Note that this problem does not affect the Web 3 version of the GroupWise
	Connector, only the next version of this connector.
	
	Additional query words: meetings, multiple updates
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
