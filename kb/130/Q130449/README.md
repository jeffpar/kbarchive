---
layout: page
title: "Q130449: PC DirSync: Err Msg: Fatal 113 Failure to Send Mail..."
permalink: /kb/130/Q130449/
---

## Q130449: PC DirSync: Err Msg: Fatal 113 Failure to Send Mail...

	Article: Q130449
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the T1 phase of automatic directory synchronization (Dir-Sync) or when
	the requestor transmit process REQMAIN -t is run manually, the following error
	may be displayed:
	
	  Fatal 113 Failure to send mail to Network/PO/$SYSTEM
	  Requestor process failed.
	
	CAUSE
	=====
	
	This error may be caused by a missing INQUEUE.MBG and/or a missing INQUEUE.KEY.
	
	This error message can also be caused by insufficient disk space on the server
	hosting the postoffice (PO).
	
	RESOLUTION
	==========
	
	Create a new INQUEUE.KEY and INQUEUE.MBG file.
	
	To create a new INQUEUE.KEY file
	--------------------------------
	
	  debug INQUEUE.KEY
	  -rcx
	  CX 0000
	  :230
	  -f100,32f,0
	  -w
	  -q
	
	To create a new INQUEUE.MBG file
	--------------------------------
	
	  M:\MBG> type nul > INQUEUE.MBG
	
	Verify that the file was created by using the MS-DOS DIR command to check for the
	existence of a zero-byte INQUEUE.MBG file, and a 560K INQUEUE.KEY file.
	
	Additional query words: 3.20 3.20a 3.50 requester null dirsync
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	
