---
layout: page
title: "Q66250: Novell NetWare Drag and Drop in Windows 3.0 File Manager"
permalink: /kb/066/Q66250/
---

## Q66250: Novell NetWare Drag and Drop in Windows 3.0 File Manager

	Article: Q66250
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are using File Manager, it is not possible to drag and drop a file into
	a directory on the Novell server in which you have all rights if you do not have
	at least the Search (S) right in the directory above the current directory. The
	following messages occur
	
	  Error Copying/Moving File
	  Cannot replace <drive>:\<directory>: Access Denied
	
	where <drive> and <directory> are the drive and directory into which
	you are trying to drag and drop the file.
	
	NOTE: That this behavior also occurs when using the keyboard to copy or move a
	file if you do not give the full pathname AND filename in the To box.
	
	MORE INFORMATION
	================
	
	Workarounds
	-----------
	
	There are several workarounds to this behavior, as follows:
	
	1. Have the system administrator grant the Search (S) right in the directory
	  above the one you are trying to drop the file into.
	
	2. Use the keyboard to copy or move the file, and give the full pathname AND
	  filename in the To box.
	
	3. Change the drive mappings so that the directory to which the file is being
	  copied/moved appears to be a root directory rather than a subdirectory.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
