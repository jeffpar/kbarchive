---
layout: page
title: "Q152854: XADM: Using Bulk Import to Remove Data"
permalink: /kb/152/Q152854/
---

## Q152854: XADM: Using Bulk Import to Remove Data

	Article: Q152854
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use the Bulk Import functionality of the Microsoft
	Exchange Administrator program to remove data from specific fields of the user
	properties.
	
	MORE INFORMATION
	================
	
	To remove data from specific fields, use ~DEL as the value of that field in the
	import file (.CSV file). When the Import is performed, the data in the fields
	with ~DEL as the value will be removed.
	
	For example, say the Office field for each user needed to be cleared out. The
	following import file shows how this can be done.
	
	Obj-Class,  Directory Name,  Office
	Mailbox,  Admin,  ~DEL
	Mailbox,  User1,  ~DEL
	Mailbox,  User2,  ~DEL
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
