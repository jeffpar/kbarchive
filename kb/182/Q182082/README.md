---
layout: page
title: "Q182082: XADM: Event Service Won't Start If Alternate PF Server Selected"
permalink: /kb/182/Q182082/
---

## Q182082: XADM: Event Service Won't Start If Alternate PF Server Selected

	Article: Q182082
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
	
	When you configure a different server to be the Public Folder Server, the Event
	Service fails to start and logs the following sequence of events in the Windows
	NT Event Log:
	
	  Event ID   : 0
	  Source     : MSExchangeES
	  Type       : Informational
	  Category   : General
	  Description: The Microsoft Exchange Event Service (5.5.1960.3)
	               Started successfully.
	
	  Event ID   : 5
	  Source     : MSExchangeES
	  Type       : Error
	  Category   : General
	  Description: An unexpected MAPI error occurred. Error returned
	               was [0x80004005].
	
	  Event ID   : 1
	  Source     : MSExchangeES
	  Type       : Informational
	  Category   : General
	  Description: The Microsoft Exchange Event Service stopped successfully.
	
	MORE INFORMATION
	================
	
	This behavior is by design.
	
	When you change Server A's private store to use the public store on Server B,
	this change is not complete until the DS changes have replicated from Server A
	to Server B, which takes 10 to 15 minutes (or whatever the replication latency
	of your site is). After that time, the Event Service should start normally.
	
	As an alternative, you should be able to force a DS replication update in the
	site to make this happen sooner.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	
	=============================================================================
	
