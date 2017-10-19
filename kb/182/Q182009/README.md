---
layout: page
title: "Q182009: XCON: MTA Queue Slow, with Errors 2127, 2155, 2202, 2194"
permalink: /kb/182/Q182009/
---

## Q182009: XCON: MTA Queue Slow, with Errors 2127, 2155, 2202, 2194

	Article: Q182009
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After deleting a message from an Exchange Server Message Transfer Agent (MTA)
	queue, you may see a build-up of messages for that particular queue, and the
	following errors in the Application Event log:
	
	  Event 2127   MSExchangeMTA
	  An MTA database server error was encountered. Error accessing object
	  attribute (AAT) on a Read/Write operation. Filename:
	  e:\exchsrvr\mtadata\.\DB000068.DAT. File operation: 0. Operating system
	  error: 2127. Referenced object: OPEN (00000000 => N/A). Referenced
	  object error 00000000. [0 DB Server OPERATOR 22] (14)
	
	  Event 2155   MSExchangeMTA
	  An MTA database server error was encountered. Failed to read attribute
	  information (AAT) for object 01000068. Database server error code: 2127.
	  [DB Server OPERATOR 22 29] (14)
	
	  Event 2202   MSExchangeMTA
	  A fatal MTA database server error was encountered. The object
	  reservation count for object 01000000 has been decremented below zero.
	  [DB Server OPERATOR 22 14] (16)
	
	  Event 2194   MSExchangeMTA
	  An MTA database server error was encountered while getting the next
	  entry from a queue. Called from MTA. Procedure 162. Database error code:
	  ODXAATRW - I/O Error on AAT file (read/write). Queue: 01000068. [DB
	  Server OPERATOR 22 66] (14)
	
	CAUSE
	=====
	
	The Exchange Administrator program was being used to delete a message from the
	Microsoft Mail Interchange queue at the same time that the Exchange MTA was
	attempting to record the message in the Message Tracking log.
	
	For example, while the MTA was processing messages, someone used the Exchange
	Administrator program to delete a message in a queue. The message was deleted at
	the same time the MTA was trying to record it in the Message Tracking log. (This
	is a very narrow time window and should occur very rarely.) Message flow slowed
	down, because an MTA thread was tied up trying to do something to a message that
	another MTA thread had deleted, hence the build-up of messages in the queues.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
