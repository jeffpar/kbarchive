---
layout: page
title: "Q146256: XCLN: User w/ Delete Permissions Cannot Delete Messages"
permalink: kb/146/Q146256/
---

## Q146256: XCLN: User w/ Delete Permissions Cannot Delete Messages

	Article: Q146256
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When UserA tries to delete an item from a folder in UserB's mailbox in which
	Delete permissions have been enabled, UserA will receive the following error
	message:
	
	  An item could not be deleted. You do not have permission to create a message
	  in this folder.
	
	CAUSE
	=====
	
	This is by design.
	
	UserB must give UserA Create Items permission on the Deleted Items folder in
	addition to the Delete Items permission on the desired folder.
	
	RESOLUTION
	==========
	
	UserB must log into the client and select his/her Deleted Items folder. Click
	Properties on the File menu, and select Permissions. Enable the Create Items
	permission for UserA.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
