---
layout: page
title: "Q91678: Read Fault Errors Accessing BackPack Drive in Windows"
permalink: kb/091/Q91678/
---

## Q91678: Read Fault Errors Accessing BackPack Drive in Windows

	Article: Q91678
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If SMARTDrive version 4.0 is running, and MicroSolutions' BackPack is run from
	MS-DOS or under Windows or Windows for Workgroups, you receive the following
	error message:
	
	  Read Fault Error
	
	NOTE: BackPack is an external floppy drive made by MicroSolutions.
	
	CAUSE
	=====
	
	MicroSolutions' technical support has confirmed that attempting to access drive
	B with BackPack does not work on a system in which SMARTDrive version 4.0 is
	loaded.
	
	WORKAROUND
	==========
	
	There are three possible solutions to this problem:
	
	- Upgrade to BackPack version 2.09. For more information, contact
	  MicroSolutions.
	
	
	  -or
	
	- Do not choose the drive B option for BackPack. Allow MS-DOS to assign the
	  next available drive letter to the BackPack drive. Rerun BACKPREP as
	  described in section 2.2 of the "BackPack User's Guide." When prompted for
	  whether you want BackPack installed as drive B, respond with "N". This will
	  assign BackPack the next available drive letter. See section 3.1 of the
	  "BackPack User's Guide" for more information on this procedure.
	
	  -or-
	
	- Do not use SMARTDRV.EXE. Locate the line in AUTOEXEC.BAT that references
	  SMARTDRV.EXE and delete that line. This allows BackPack to operate as drive
	  B, but disk caching will not be available.
	
	For additional information, contact MicroSolutions technical support.
	
	The BackPack external disk drive is manufactured by MicroSolutions, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.1 3.00 3.00a back pack micro solutions
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbMSDOSSearch kbMSDOS600
	Version           : :3.1,3.11,6.0
	
	=============================================================================
	
