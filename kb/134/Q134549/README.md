---
layout: page
title: "Q134549: Cannot Restart Computer with Modified File Open in AutoCadLT"
permalink: kb/134/Q134549/
---

## Q134549: Cannot Restart Computer with Modified File Open in AutoCadLT

	Article: Q134549
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
	
	If you are running AutoCadLT and you have a modified file open, you cannot
	restart your computer by clicking Shut Down on the Start menu and then clicking
	the Restart The Computer option button. Doing so causes your computer to shut
	down, but not to restart.
	
	CAUSE
	=====
	
	AutoCadLT cancels the request to shut down so that it can save the modified
	file, and then restarts the shutdown process by calling the ExitWindows()
	function. The result is a normal shutdown without restarting.
	
	RESOLUTION
	==========
	
	Make sure all modified files are closed in AutoCadLT before you restart your
	computer.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
