---
layout: page
title: "Q152437: XCLN: Err Msg: Unexpected Error Has Occurred MAPI 1.0"
permalink: kb/152/Q152437/
---

## Q152437: XCLN: Err Msg: Unexpected Error Has Occurred MAPI 1.0

	Article: Q152437
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to synchronize your offline folders, you may receive an error
	that appears as a mail message in your Deleted Items folder. The message has
	following format:
	
	  Subject: Synchronization Log:
	  Priority: High
	
	  9:15:00 Synchronizing Mailbox '<Mailbox Name>'
	  9:15:00 Terminated in error
	  9:15:00 [8004010F-583-0-0]
	  9:15:00 An unexpected error has occurred.
	  9:15:00 MAPI 1.0
	
	  [8004010f-583-0-0] unexpected error has occured MAPI 1.0
	  - synchronization with offline folder file could not be completed.
	
	
	WORKAROUND
	==========
	
	Set the message delivery to the personal folder, login and synchronize, then go
	back and change the delivery to the Microsoft Exchange Server store location.
	
	
	Additional query words: OST Offline folders Win95
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
