---
layout: page
title: "Q145874: XCLN: Schedule+ Free/Busy Connector Mailbox Is in Address Book"
permalink: kb/145/Q145874/
---

## Q145874: XCLN: Schedule+ Free/Busy Connector Mailbox Is in Address Book

	Article: Q145874
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Schedule+ Free/Busy Connector recipient (ADMINSCH) is not hidden
	from the Global Address List so that this address is exported along with other
	recipients during Directory Synchronization with Microsoft Mail postoffices.
	
	The Microsoft Mail Schedule+ distribution program (SCHDIST.EXE) needs to find an
	ADMINSCH mailbox in the user list of each remote postoffice and this includes
	Exchange. If this mailbox is not found in the user list of a postoffice, that
	postoffice is not included in Schedule Distribution.
	
	Similarly, the Free/Busy gateway in Microsoft Exchange also requires an ADMINSCH
	account in the user list received from each Microsoft Mail Postoffice during
	Directory Synchronization. If you check the properties for the Sched+ Free/Busy
	Connector you can see the Alias name is ADMINSCH.
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	
