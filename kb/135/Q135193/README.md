---
layout: page
title: "Q135193: Q&amp;E Version 2.6.2 Causes Lost Network Functionality"
permalink: kb/135/Q135193/
---

## Q135193: Q&amp;E Version 2.6.2 Causes Lost Network Functionality

	Article: Q135193
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Q&E version 2.6.2 by InterSolve, your computer may lose
	all network functionality.
	
	CAUSE
	=====
	
	The installation procedure for this program overwrites the Windows 95 Netapi.dll
	file with an older version of the file.
	
	RESOLUTION
	==========
	
	Extract a new copy of the Netapi.dll file from the original Windows 95 disks to
	the Windows\System folder on the hard disk. To do so, follow these steps:
	
	1. Insert disk 2 of the original Windows 95 disks in the appropriate floppy disk
	  drive.
	
	2. At an MS-DOS prompt, change to the drive containing disk 2, and then type the
	  following command:
	
	  " extract /a /d win95_02.cab netapi.dll " (without the quotation marks)
	
	  Note the name of the cabinet file containing the Netapi.dll file.
	
	3. Once you have located the Netapi.dll file, insert the appropriate disk in the
	  drive, and type the following command
	
	  " extract /l c:\<windows>\system <filename.cab> netapi.dll "
	  (without the quotation marks)
	
	  where <windows> is the name of your Windows folder, and
	  <filename.cab> is the name of the cabinet file containing the
	  Netapi.dll file.
	
	4. Remove the floppy disk and restart Windows 95.
	
	NOTE: These steps restore network functionality, but disable Q&E. You may
	want to contact InterSolve to inquire about a possible upgrade to the program
	that functions in Windows 95.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	REFERENCES
	==========
	
	For more information about using the Extract tool, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
