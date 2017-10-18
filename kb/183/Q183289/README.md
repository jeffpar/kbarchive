---
layout: page
title: "Q183289: Download of Self-Extracting File Expands Into the Root Folder"
permalink: kb/183/Q183289/
---

## Q183289: Download of Self-Extracting File Expands Into the Root Folder

	Article: Q183289
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you download a self-extracting file and then choose "Run this program from
	its current location", some of the files may be placed into the root folder of
	your hard disk and others may be placed into the Windows\Temporary Internet
	Files folder.
	
	CAUSE
	=====
	
	This issue can occur because you can not specify a path during the extraction
	process of an MS-DOS self-extracting executable. When this occurs, the
	extraction location defaults to the root folder of your hard disk.
	
	RESOLUTION
	==========
	
	To resolve this issue, when you download a file, choose Save This Program To
	Disk, and then specify the folder you want to save the file to.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
