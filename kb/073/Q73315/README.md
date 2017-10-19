---
layout: page
title: "Q73315: Using Microsoft Mouse Menu Software with MS-DOS 4.x - 6.0"
permalink: /kb/073/Q73315/
---

## Q73315: Using Microsoft Mouse Menu Software with MS-DOS 4.x - 6.0

	Article: Q73315
	Product(s): Microsoft Disk Operating System
	Version(s): 4.0,4.01,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	User-written Microsoft Mouse menus that worked correctly under MS-DOS version
	3.x may not work with later MS-DOS versions.
	
	CAUSE
	=====
	
	MenuMaker is not compatible with the extended key codes that can be loaded by
	ANSI.SYS.
	
	WORKAROUND
	==========
	
	To allow Microsoft Mouse menus software to function correctly under later MS-DOS
	versions, be sure to load ANSI.SYS with the /K switch.The /K switch forces
	ANSI.SYS to ignore extended keys.
	
	REFERENCES
	==========
	
	For more information on ANSI.SYS, see pages 593-599 of the version 5.0
	"Microsoft MS-DOS User's Guide and Reference."
	
	Additional query words: 6.22 4.00 4.01 5.00 5.00a 6.00 6.20 menu maker
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : :4.0,4.01,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
