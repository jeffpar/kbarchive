---
layout: page
title: "Q174895: XCON: Messages Are Lost When MTA Size Limit Is Exceeded"
permalink: /kb/174/Q174895/
---

## Q174895: XCON: Messages Are Lost When MTA Size Limit Is Exceeded

{% raw %}

	Article: Q174895
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Administrators of Microsoft Exchange Server will notice the following problem.
	Messages that exceed the size limit imposed on the message transfer agent (MTA)
	"disappear." The message clears the client's outbox and leaves the MTA work
	queue but is not delivered to the target recipient. No over-limit notice is
	returned to the sender. Message tracking does not locate the message. If a
	message under 5 MB is sent, the message is received normally, and message
	tracking locates the message. Event log shows Event ID 62, showing the message
	being handed back to the store.
	
	CAUSE
	=====
	
	It appears the MTA does not recognize the messages that exceed the size limit
	and hands the messages back to the store. A message that exceeds the size limit
	on the MTA still leaves the outbox. The non-delivery report (NDR) message is
	created when you look at the event viewer, but no NDR arrives at the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  SERVPACK
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
