---
layout: page
title: "Q138743: Free Disk Space Reported Incorrectly with Norton Utilities 95"
permalink: kb/138/Q138743/
---

## Q138743: Free Disk Space Reported Incorrectly with Norton Utilities 95

	Article: Q138743
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Norton Utilities 95 and you have enabled the Protected
	Recycle Bin feature of Norton Utilities, the amount of free disk space reported
	by Windows Explorer and the DIR and CHKDSK commands may be incorrect. The amount
	of reported free disk space may greatly exceed the amount of actual free disk
	space.
	
	CAUSE
	=====
	
	The Protected Recycle Bin feature protects deleted files by copying them to a
	hidden folder and maintaining a log file that contains an entry for each file in
	the hidden folder. The problem described in this article can occur if the
	Protected Recycle Bin encounters an error while attempting to protect a file,
	causing an invalid entry to be added to the log file.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Disable the Protected Recycle Bin feature and then restart your computer.
	
	- You may be able to resolve this problem by emptying the Windows 95 Recycle
	  Bin and the Protected Recycle Bin. For information about emptying the
	  Protected Recycle Bin, or for additional information about this problem,
	  please contact Symantec.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
