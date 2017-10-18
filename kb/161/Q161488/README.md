---
layout: page
title: "Q161488: XADM: Factors That Determine the Size of the Directory Database"
permalink: kb/161/Q161488/
---

## Q161488: XADM: Factors That Determine the Size of the Directory Database

	Article: Q161488
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The size of the Microsoft Exchange Server directory database depends on the
	following factors:
	
	- Which Address Book fields are populated for each entry. This includes fields
	  such as the address and phone number fields. In general, if more fields are
	  populated, the Address Book entry is larger.
	
	- The number of distribution lists (DLs) that exist and the number of members
	  in each DL.
	
	- The number of languages that the Microsoft Exchange Server computer supports.
	
	In addition, DLs are larger than mailboxes and mailboxes are larger than custom
	recipients, so the exact composition of the directory database can be a factor.
	
	In general, each directory database entry is between 2-5K in size.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
