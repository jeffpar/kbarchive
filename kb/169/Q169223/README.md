---
layout: page
title: "Q169223: XADM: Bad Message Causes Dr. Watson in Store.exe"
permalink: kb/169/Q169223/
---

## Q169223: XADM: Bad Message Causes Dr. Watson in Store.exe

	Article: Q169223
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 06-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a bad message is trying to be delivered from the Imcdata\In queue to the
	information store, the following Dr. Watson error message occurs:
	
	  Application error has occurred and an application log is being generated.
	  Store.exe exception: 0xc0000005, address:0x0064897c
	
	The event log shows the following:
	
	  Event ID: 4097
	  Source: DrWatson
	  Type: Information
	  Category: None
	  Description: The application, store.dbg, generated an application error.
	  The error occurred on <date>@<timestamp>. The exception generated
	  was c0000005 at address <memory address> (<nosymbols>)
	
	  Event ID: 4117
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Internal Processing
	  Description: An error was returned from the messaging software the
	  Internet Mail Service uses to process messages on the Microsoft Exchange
	  Server.  As a result, the message in spool file <servername> failed to be
	  delivered. The message has been moved to the IMCDATA\IN\ARCHIVE
	  directory.
	
	  Event ID: 4116
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Internal Processing
	  Description: An error was returned from the messaging software the
	  Internet Mail Service uses to process messages on the Microsoft Exchange
	  Server.  It is possible that the piece of mail being processed at the
	  time will not be delivered. The message that was being processed has
	  been moved to the "BAD" folder.  Use the appropriate utilities found in
	  the SUPPORT directory of your Exchange CD to view and manipulate these
	  messages.
	
	  Event ID: 4023
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Initialization/Termination
	  Description: Unable to start the Internet Mail Service because the work
	  threads could not be initialized.
	
	  Event ID: 4037
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Internal processing
	  Description: An exception has occurred which was handled internally by
	  the Internet Mail Service.  This may have resulted in a message not
	  being delivered. Code: 0xc0000005 Flags: 0x00000000 Address: <memory location>
	
	CAUSE
	=====
	
	This occurs when a bad message is trying to be delivered from the Imcdata\In
	queue to the information store.
	
	WORKAROUND
	==========
	
	To work around this problem, move the messages from the Imcdata\In queue. Delete
	the Queue.dat file from the Imcdata folder, and then restart the information
	store and the Internet Mail Service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Microsoft
	Exchange Server 5.5 Service Pack 3.
	
	MORE INFORMATION
	================
	
	The individual message that is causing the problem can be located by performing
	the following steps:
	
	1. Stop the Internet Mail Service.
	
	2. Place the individual files that were removed from the Imcdata\In folder one
	  at a time, or in small groups.
	
	3. Delete the Queue.dat file from the Imcdata folder.
	
	4. Restart the Internet Mail Service.
	
	The information store will stop responding again if you have located the bad
	file.
	
	Additionally, this method can be used to deliver the good messages that were
	removed from the Imcdata folder.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
