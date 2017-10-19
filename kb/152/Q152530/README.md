---
layout: page
title: "Q152530: XCLN: SMAPI/MAPIFindNext Can't Find IPC Messages"
permalink: /kb/152/Q152530/
---

## Q152530: XCLN: SMAPI/MAPIFindNext Can't Find IPC Messages

	Article: Q152530
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the simple MAPI MAPIFindNext function to locate an IPC (hidden)
	message using the Microsoft Exchange client, MAPIFindNext may fail to return the
	IPC message.
	
	CAUSE
	=====
	
	This behavior can occur if the default inbox delivery location is configured for
	a personal folder (.pst), or an offline folder (.ost) that is being used
	offline.
	
	The reason MAPIFindNext fails to locate the IPC message is that MAPIFindNext
	looks in the default inbox for a message. The Microsoft Exchange client does not
	move IPC messages from the server-based inbox Folder to a PST file, or into an
	OST file during folder synchronization.
	
	WORKAROUND
	==========
	
	To work around this problem, you must be connected to the computer running
	Microsoft Exchange Server and have the default delivery set to the Microsoft
	Exchange Server mailbox to access an IPC message.
	
	To set the default delivery to the Microsoft Exchange Server store:
	
	- In the Microsoft Exchange client, on the Tools menu, click Options and click
	  Delivery.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	We are researching the problem and will post new information here as it becomes
	available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
