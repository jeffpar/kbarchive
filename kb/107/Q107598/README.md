---
layout: page
title: "Q107598: WFWG Err Msg: Warning: A Serious Disk Error Has Occurred..."
permalink: /kb/107/Q107598/
---

## Q107598: WFWG Err Msg: Warning: A Serious Disk Error Has Occurred...

	Article: Q107598
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Windows for Workgroups, you may encounter the following error
	message:
	
	  WARNING: A serious disk error has occurred while reading from/writing to your
	  hard disk. Some data may have been corrupted. Your system has been stopped to
	  prevent additional data loss. Call product support for assistance.
	
	CAUSE
	=====
	
	This error may be caused by a corrupted BLOCKDEV driver or 32-bit disk access
	driver in your SYSTEM.INI file.
	
	RESOLUTION
	==========
	
	To correct this problem, do the following:
	
	1. Disable 32-Bit Disk Access.
	
	2. Reinstall Windows for Workgroups 3.11.
	
	Additional query words: 3.11 fastdisk vfat pss error
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
