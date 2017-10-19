---
layout: page
title: "Q61995: Updating the File System in MS-DOS Shell"
permalink: /kb/061/Q61995/
---

## Q61995: Updating the File System in MS-DOS Shell

	Article: Q61995
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.0,4.01,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Files and/or directories you create when shelled out of MS-DOS Shell will not
	display when you exit back to Shell. To have Shell display the file created at
	the DOS prompt, place the cursor over the drive letter to select the drive where
	the file or directories were created. This will force the Shell to reread the
	drive information.
	
	If using MS-DOS version 5.0, you can also force the DOSSHELL to reread a disk by
	choosing the Refresh option under the View menu or pressing F5. The current
	directory can be reread by pressing <ctrl-F5>.
	
	When you shell out to the command prompt from Shell, a temporary file is created
	to store status information while you are shelled out. Returning to Shell by
	typing "exit" (without the quotation marks) at the command prompt causes Shell
	to read this status information. This temporary file will not reflect any
	changes made at the command prompt.
	
	For more information on this process, query in this knowledge base on the
	following words:
	
	  " dosshell and temporary and files " (without the quotation marks)
	
	Additional query words: 4.00 4.01 4.01a 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS500 kbMSDOS401
	Version           : MS-DOS:4.0,4.01,5.0
	
	=============================================================================
	
