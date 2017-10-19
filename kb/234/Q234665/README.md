---
layout: page
title: "Q234665: XFOR: Event 238 During Lotus cc:Mail Migration"
permalink: /kb/234/Q234665/
---

## Q234665: XFOR: Event 238 During Lotus cc:Mail Migration

	Article: Q234665
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you migrate users from Lotus cc:Mail to Exchange Server 5.5, the following
	critical stop event ID may be logged:
	
	  Event Id: 238
	  Source: MSExchangeMigDS
	  Type: Error
	  Category: None
	
	  Description:
	
	  The e-mail address specified for import object "User" is not unique.
	  ccmail:User at PostOffice has already been assigned to Address Book entry
	  /o=xxxx/ou=xxxx/cn=Recipients/cn=CCMAIL/cn=DB14168E.
	
	MORE INFORMATION
	================
	
	The event ID 238 in the "Summary" section of this article is a misleading event
	ID that may be related to the sequence of the add and delete transactions during
	the migration.
	
	Even though the event 238 is generated as a critical stop, the cc:Mail user is
	actually correctly migrated; an Exchange Server mailbox is created for the user,
	and the user's cc:Mail custom recipient is deleted from the Exchange Server
	global address list.
	
	In Exchange Server 5.5, the mailbox is added and the cc:Mail custom recipient is
	deleted. This process is different than the migration process in Microsoft
	Exchange Server version 5.0, where the cc:Mail custom recipient is not deleted.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
