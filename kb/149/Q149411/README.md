---
layout: page
title: "Q149411: Using Append.exe with Windows 95"
permalink: /kb/149/Q149411/
---

## Q149411: Using Append.exe with Windows 95

	Article: Q149411
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	NOTE: The Append.exe tool is not fully compatible with Windows 95.
	Microsoft does not support using the Append.exe tool with Windows 95
	
	SUMMARY
	=======
	
	You can use the Append.exe tool only in real mode with Windows 95. You can issue
	the APPEND command only once; subsequent uses of the APPEND command result in
	the following message:
	
	  Append already installed
	
	The APPEND command has no effect when it is issued in an MS-DOS session within
	Windows 95.
	
	MORE INFORMATION
	================
	
	To use the APPEND command multiple times, boot your computer to a previous
	version of MS-DOS. Or, use the PATH command instead of the APPEND command for
	programs that are not in the current folder.
	
	For additional information about using the APPEND command with Windows 95, please
	see the following articles in the Microsoft Knowledge Base:
	
	  Q137380 How Windows 95 Setup Handles SUBST, JOIN, APPEND, and ASSIGN
	
	  Q147831 How to Install Old MS-DOS Tools in Windows 95
	
	  Q89379 Append.exe Causes Problems in All Versions of Windows
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
