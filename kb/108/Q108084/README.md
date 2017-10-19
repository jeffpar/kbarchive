---
layout: page
title: "Q108084: Server Fails, Internal Processing Error RMN:SFT LCK"
permalink: /kb/108/Q108084/
---

## Q108084: Server Fails, Internal Processing Error RMN:SFT LCK

	Article: Q108084
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	A LAN Manager file server being used as an MS-Mail 3.X post office can fail with
	this error message:
	
	  Internal Processing Error
	
	followed by a memory location in the form 0220:59cb, 0220:5E56. If the OS/2
	kernel debugger is installed, a second error message also is displayed on the
	monitor of the failing system:
	
	  RMN:SFT LCK Field not 0
	
	This can occur during execution of a batch file that deletes the mail postoffice
	share before backing it up. It can also occur if a user system is powered off
	while a mail file still is open on the server. If the user immediately attempts
	to open the mail file again, the locks may not have been properly cleaned up.
	
	CAUSE
	=====
	
	Although a file was closed, the server did not close its file locks, causing a
	problem with the system file table when the file was reopened.
	
	RESOLUTION
	==========
	
	OS2KRNL has been fixed to detect the appropriate file locks and force them
	closed.
	
	STATUS
	======
	
	The fix is included in the latest update for LAN Manager 2.2b.
	
	
	Additional query words: 2.10 2.1 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
