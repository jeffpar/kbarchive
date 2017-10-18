---
layout: page
title: "Q121256: PC MMTA: Err Msg: Drive Connection Failure. Unable..."
permalink: kb/121/Q121256/
---

## Q121256: PC MMTA: Err Msg: Drive Connection Failure. Unable...

	Article: Q121256
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the FLAG.GLB file size is zero and a remote client dials in to send mail, the
	Microsoft Mail Multitasking Message Transfer Agent (MTA) generates the following
	error message:
	
	  Drive connection failure. Unable to prompt for a remote user login ID.
	
	Although the Multitasking MTA generates an error, the MS-DOS version of the MTA
	works correctly.
	
	RESOLUTION
	==========
	
	The FLAG.GLB file is normally 2 bytes in length and is used to prevent more than
	one Mail administrator running the ADMIN.EXE program on the same postoffice at
	one time.
	
	Create a new FLAG.GLB file by copying one from another postoffice.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailMMTA320
	Version           : :3.2
	
	=============================================================================
	
