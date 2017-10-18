---
layout: page
title: "Q149720: Files May Be Deleted with Norton Protected Recycle Bin Enabled"
permalink: kb/149/Q149720/
---

## Q149720: Files May Be Deleted with Norton Protected Recycle Bin Enabled

	Article: Q149720
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kb3rdparty diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you type "dir *.*" at a command prompt within Windows 95, all the files in
	the current folder may be deleted.
	
	CAUSE
	=====
	
	This behavior can occur if the Norton Protected Recycle Bin is activated.
	
	RESOLUTION
	==========
	
	If more than 10 percent of the drive containing the deleted files is free, you
	can recover the files using the Norton Protected Recycle Bin. Please consult the
	program's documentation or manufacturer for assistance.
	
	You may also want to contact the program's manufacturer (Symantec) to inquire
	about an updated version that prevents this problem.
	
	MORE INFORMATION
	================
	
	If you type the "dir *.*" command at a command prompt in MS-DOS mode or real
	mode without the Norton Protected Recycle Bin enabled, you receive the following
	message and no files are deleted:
	
	  File creation error
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
