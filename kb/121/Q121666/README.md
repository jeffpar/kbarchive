---
layout: page
title: "Q121666: CONN: Err Msg: Error [20] Insufficient Memory"
permalink: kb/121/Q121666/
---

## Q121666: CONN: Err Msg: Error [20] Insufficient Memory

	Article: Q121666
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection Gateway, version 1.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using version 1.0b of the Mail Connection Gateway and if a Microsoft Mail
	for PC Networks mail message sent to a user on the Microsoft Mail for AppleTalk
	Networks becomes corrupt, the PC side of the Mail Connection Gateway will return
	an error message:
	
	  Error [20] Insufficient Memory Returned from FFAPI Program
	
	The PC MACGATE.EXE program will exit to MS-DOS and display the above error
	message. As a result, Mail will not be transferred between the Macintosh and the
	PC Mail systems.
	
	CAUSE
	=====
	
	There are two possible causes for this error.
	
	One possible cause is a corrupt PC mail message waiting to be delivered to the
	Macintosh. This keeps any of the messages that come later from being delivered
	through the Gateway.
	
	Another possibility is that a lot of names are on the TO: field. This may cause
	MACGATE.EXE to run out of memory. This happens because Connection 1.0b uses an
	older version of FFAPI and was compiled using a small memory model. Version 3.2
	of Microsoft Mail Connection for PC and AppleTalk Networks uses the large memory
	model and is less likely to encounter out-of- memory problems than version 1.0b.
	
	RESOLUTION
	==========
	
	Delete or return the oldest message in the MSMail queue on the Mail Connection
	Gateway postoffice. This message may not necessarily be at the bottom of the
	queue.
	
	NOTE: There may be multiple messages in the queue with the same time stamp.
	
	You may have to delete or return all mail with this time stamp in order to remove
	the corrupt message.
	
	If the problem is frequent, then the cause for the corruption should be checked.
	It is likely a network issue and may require a network trace or sniffer reading
	to see why the messages are corrupt.
	
	
	Additional query words: 1.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailConn100b
	Version           : :1.0b
	
	=============================================================================
	
