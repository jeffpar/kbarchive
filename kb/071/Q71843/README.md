---
layout: page
title: "Q71843: MS-DOS Reserved Words in File Manager's File Search Command"
permalink: kb/071/Q71843/
---

## Q71843: MS-DOS Reserved Words in File Manager's File Search Command

	Article: Q71843
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you search for a file in the Microsoft Windows File Manager program, using
	some MS-DOS reserved words with the File Search command, File Manager finds
	those reserved word in all directories because MS-DOS character devices are
	defined as files in all directories. This is standard MS-DOS behavior.
	
	Examples of MS-DOS reserved words are:
	
	  CON   COM1 - COM4
	  PRN   AUX    LPT1
	
	MORE INFORMATION
	================
	
	MS-DOS reserved words identify devices attached to the system. The following
	describes some of these devices:
	
	  CON - The display monitor
	  PRN - Default value is LPT1; this value can be changed
	  AUX - Serial port 1 (COM1)
	
	Although File Manager finds reserved words, if an attempt is made to delete any
	of these reserved words by choosing Delete from the File menu, you will receive
	the following error message for each reserved word, respectively:
	
	Using Windows 3.1
	
	  Cannot delete <path\reserved word>; access denied.
	
	Using Windows 3.0
	
	  Cannot delete <path\reserved word> Cannot find file; check to ensure
	  the path and filename are correct.
	
	An exception is "CON," which produces a different error message:
	
	  Cannot delete C:\CON: Access denied
	
	Additional query words: 3.00 3.00a 3.0 3.1 3.10 err msg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
