---
layout: page
title: "Q244976: XADM: Event ID 1197 and 1005 When Starting the Information Store"
permalink: /kb/244/Q244976/
---

## Q244976: XADM: Event ID 1197 and 1005 When Starting the Information Store

	Article: Q244976
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the information store (Store.exe), it does not start,
	and the following events appear in the event log:
	
	  Event ID: 1197
	  Source: MSExchangeIS Private
	  Type: Error
	  Category: General
	  Description: Database is too new to be upgraded.
	
	  Event ID: 1005
	  Source: MSExchangeIS Private
	  Type: Error
	  Category: General
	  Description: Unable to start the Microsoft Exchange Information Store. Error
	  0x451.
	
	Although the information store does not start, the information store databases
	are not damaged.
	
	CAUSE
	=====
	
	This problem occurs when you perform one of the following actions:
	
	- You restore a Store.exe file earlier than version 5.5.2651.32 after the
	  information store databases have already been upgraded to version 2.45.
	
	- You restore a Store.exe file earlier than version 5.5.2652.68 after the
	  information store databases have already been upgraded to version 2.46.
	
	These earlier versions of the Store.exe file do not support the new database
	formats.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- If the information store databases have already been upgraded to version
	  2.45, restore version 5.5.2651.32 or later of the Store.exe file, and then
	  attempt to start the information store again.
	
	- If the information store databases have already been upgraded to version
	  2.46, restore version 5.5.2652.68 or later of the Store.exe file, and then
	  attempt to start the information store again.
	
	MORE INFORMATION
	================
	
	When you apply version 5.5.2651.32 or later of the Store.exe file on an Exchange
	Server computer, and then start the information store, the information store
	databases are automatically upgraded to a new format, and the following events
	appear in the event log:
	
	  Event ID: 1185
	  Source: MSExchangeIS Private
	  Type: Information
	  Category: General
	  Description: Successfully upgraded database to version <version>.
	
	  Event ID: 1185
	  Source: MSExchangeIS Public
	  Type: Information
	  Category: General
	  Description: Successfully upgraded database to version <version>.
	
	where <version> is 2.45 if you applied a Store.exe file earlier than
	version 5.5.2652.68, or 2.46 if you applied version 5.5.2652.68 or later.
	
	After the databases have been upgraded to version 2.45, you can restore an
	earlier version of the Store.exe file on the server, but only if it is version
	5.5.2651.32 or later. Similarly, after the databases have been upgraded to
	version 2.46, you can restore an earlier version of the Store.exe file on the
	server, but only if it is version 5.5.2652.68 or later. If you restore a
	Store.exe file earlier than the above versions, and then attempt to start the
	information store, you experience the behavior described in the "Symptoms"
	section, but the information store databases are not damaged.
	
	Additional query words: upgrader
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
