---
layout: page
title: "Q154281: Microsoft Plus! Logo Screen Does Not Appear at Startup"
permalink: /kb/154/Q154281/
---

## Q154281: Microsoft Plus! Logo Screen Does Not Appear at Startup

	Article: Q154281
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, the Microsoft Plus! logo screen may no longer
	appear.
	
	CAUSE
	=====
	
	This behavior can occur if the Logo.sys file is missing from the root folder of
	the physical boot drive.
	
	RESOLUTION
	==========
	
	Extract a new copy of the Logo.sys file from your original Microsoft Plus! disks
	or CD-ROM to the root folder of the physical boot drive. For example, if your
	hard disk is compressed with DriveSpace, extract the Logo.sys file to the root
	folder of drive H.
	
	For information about using the Extract tool, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	MORE INFORMATION
	================
	
	When you run DriveSpace to compress your hard disk, the Logo.sys file is moved
	to the root folder of the compressed volume, and is no longer available in the
	root folder of the physical boot drive.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
