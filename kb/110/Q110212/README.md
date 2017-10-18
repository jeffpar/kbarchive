---
layout: page
title: "Q110212: Repair Utility Fails if Computer Name is More Than 8 Characters"
permalink: kb/110/Q110212/
---

## Q110212: Repair Utility Fails if Computer Name is More Than 8 Characters

	Article: Q110212
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT Resource Kit includes a utility, REPAIR.EXE, that lets you create
	a new Emergency Repair Disk from current registry settings. If your computer
	name is longer than eight characters, creating a new Emergency Repair Disk
	fails.
	
	Example
	-------
	
	REPAIR /s /x /nPRODUCT /pA:
	
	This will override the default computer name with the name PRODUCT.
	
	CAUSE
	=====
	
	The utility creates a directory using the computer name. Because the disk is
	formatted as FAT, it does not accept a name longer than eight characters for a
	directory name.
	
	WORKAROUND
	==========
	
	To avoid this problem, use the /n switch and specify an alternate name.
	
	REFERENCES
	==========
	
	Windows NT Resource Kit, Tool Help
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbother 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : 3.1
	
	=============================================================================
	
