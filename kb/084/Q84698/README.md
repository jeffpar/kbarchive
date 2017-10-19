---
layout: page
title: "Q84698: Windows Err Msg: Directory &lt;dir&gt; Does Not Exist..."
permalink: /kb/084/Q84698/
---

## Q84698: Windows Err Msg: Directory &lt;dir&gt; Does Not Exist...

	Article: Q84698
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Trying to rename a file on a floppy disk in Microsoft Windows File Manager may
	result in the following error message:
	
	  
	
	  Directory <dir> does not exist
	   Do you want to create it?
	         YES       NO
	
	CAUSE
	=====
	
	This error message occurs when the disk is write-protected.
	
	RESOLUTION
	==========
	
	To correct this problem, remove the disk from the floppy drive, remove the
	write-protect feature, and reinsert the disk into the drive. The rename
	operation can then be performed successfully.
	
	MORE INFORMATION
	================
	
	The other commands from the File Manager's File menu, such as Copy, Delete,
	Move, and Create Directory, correctly alert you to the possible presence of
	write-protection on the disk.
	
	This problem does not exist in the Microsoft Windows version 3.0 File Manager.
	The following error message results in the Windows 3.0 File Manager if you try
	to rename a file on a write-protected floppy disk:
	
	  
	
	               System Error
	       Write protected disk in drive <x>
	             Cancel     Retry
	
	Additional query words: 3.10 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
