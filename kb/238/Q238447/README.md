---
layout: page
title: "Q238447: XADM: Event 6206 after Lotus Notes Directory Synchronization"
permalink: /kb/238/Q238447/
---

## Q238447: XADM: Event 6206 after Lotus Notes Directory Synchronization

	Article: Q238447
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you perform a directory synchronization (dirsync) with Lotus Notes, there
	may be 6206 events in the event log similar to the following:
	
	  Source: MSExchangeNOTES
	  Event ID: 6206
	  Type: Warning
	
	  MS Exchange Reports: Unable to process custom recipient
	  f7afa2e9-b053f1db-852567be-4a3f83 because target address NOTES:Ralph
	  Jones/LotusOrg@LotusOrg has already been assigned to Address Book entry
	  /o=Ibiza/ou=Shuffletown/cn=Notes Recipients/cn=RalphJ.
	
	CAUSE
	=====
	
	This event occurs because an Exchange Server custom recipient has been created
	for this Lotus Notes user prior to the dirsync process. When the
	Notes-to-Exchange Server dirsync is started, Exchange Server cannot create a
	custom recipient because a custom recipient already exists in Exchange Server
	for that user.
	
	MORE INFORMATION
	================
	
	This problem only occurs after you perform a Notes-to-Exchange Server dirsync,
	and occurs after both an immediate full reload and an immediate update.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
