---
layout: page
title: "Q132587: Verify Mode Setup Asks for Files that Are Already Present"
permalink: kb/132/Q132587/
---

## Q132587: Verify Mode Setup Asks for Files that Are Already Present

	Article: Q132587
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
	
	During a Verify mode Setup, Windows 95 may ask for the original installation
	disks or CD-ROM in order to copy files that are already present on the hard
	disk.
	
	CAUSE
	=====
	
	During a Verify mode Setup, Setup deletes a registry key that contains the list
	of files that have been installed by Plug and Play. Since the list is empty,
	when Windows 95 sets up the computer's hardware, it does not know the driver
	files are present and copies them again.
	
	RESOLUTION
	==========
	
	Provide the requested installation disks or CD-ROM, or choose to skip the
	requested files. If the files must be copied, perform a normal Setup (not using
	Verify mode).
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
