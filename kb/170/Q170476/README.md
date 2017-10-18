---
layout: page
title: "Q170476: Illegal Operation Error Message When Emptying Recycle Bin"
permalink: kb/170/Q170476/
---

## Q170476: Illegal Operation Error Message When Emptying Recycle Bin

	Article: Q170476
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to empty the Norton Protected Recycle Bin, you may receive the
	following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	When you click Details, the following details are displayed:
	
	  Explorer.exe caused an invalid page fault in module kernel32.dll.
	
	If you have Microsoft Plus! installed, you may not be able to change the icon for
	the empty Recycle Bin by choosing another icon on the Plus! tab in Display
	properties.
	
	CAUSE
	=====
	
	The Msvcrt40.dll file in the Windows\System folder is damaged or has been
	replaced by another program.
	
	RESOLUTION
	==========
	
	To resolve this issue, find and rename all occurrences of the Msvcrt40.dll file.
	To do so, follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  F8, and then choose Safe Mode Command Prompt Only.
	
	2. Rename all copies of the Msvcrt40.dll file to Msvcrt40.bak.
	
	3. Restart your computer normally.
	
	4. Extract a new copy of the Msvcrt40.dll file into the Windows\System folder.
	
	  For information about using the Extract tool, type "extract" (without the
	  quotation marks) at a command prompt, or see the following article in the
	  Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	NOTE: The Msvcrt40.dll file is included with Microsoft Windows 95 OEM Service
	Release version 2; Microsoft Internet Explorer versions 3.01 and later;
	Microsoft Office for Windows 95 versions 7.0, 7.0a, and 7.0b; Microsoft
	Publisher 97 for Windows; and Windows 95 Service Pack 1 (only if you are not
	using Windows 95 OEM Service Release 2).
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : kberrmsg win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
