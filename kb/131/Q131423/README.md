---
layout: page
title: "Q131423: PC Adm: Err Msg: Notice 162 Failed to Complete Installation..."
permalink: kb/131/Q131423/
---

## Q131423: PC Adm: Err Msg: Notice 162 Failed to Complete Installation...

	Article: Q131423
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Administrator program (ADMIN.EXE), when you modify a Requestor to be the
	Directory Synchronization (Dir-Sync) Server under Config, DirSync, Options, Yes,
	the following error may occur:
	
	  Notice 162 - Failed to complete installation of the directory server.
	
	CAUSE
	=====
	
	This error occurs if the MASTER.GLB file is locked open or flagged as read-
	only. The Admin program tries to modify the Dir-Sync server field in MASTER.GLB
	to yes(1) and is not successful.
	
	RESOLUTION
	==========
	
	Ensure that this file is not flagged as read-only. Also, check if the file is
	locked open by another user.
	
	One way to check if a file is locked open is to try and rename it. If successful,
	then the file is not locked, and it is safe to rename it back to its original
	filename.
	
	Additional query words: 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320a
	Version           : WINDOWS:3.2a
	
	=============================================================================
	
