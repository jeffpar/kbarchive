---
layout: page
title: "Q108152: 32-Bit File Access and Stacker 3.1 Utilities"
permalink: kb/108/Q108152/
---

## Q108152: 32-Bit File Access and Stacker 3.1 Utilities

	Article: Q108152
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	- The utilities that STAC Electronics Stacker 3.1 installs in Windows for
	  Workgroups 3.11 File Manager do not work when 32-bit file access is enabled.
	
	  -or-
	
	- When you are using Stacker version 4.0, you cannot use 32-bit file access on
	  any compressed drive.
	
	NOTE: 32-bit disk access is still available on any compressed or uncompressed
	drive.
	
	WORKAROUND
	==========
	
	To work around this problem with Stacker 3.1, disable 32-bit file access while
	you are using the utilities. To do this, choose the 386 Enhanced icon in Control
	Panel, choose the Virtual Memory button, choose Change, and then clear the
	32-Bit File Access check box. You can restore 32-bit file access when you are
	finished using the utilities without causing any damage to the disk.
	
	If you are using Stacker version 4.0, you can work around this problem by
	obtaining a file that enables the use of 32-bit file access on Stacker-
	compressed drives. This self-extracting file (S32BFA.EXE) is available on the
	STAC Electronics bulletin board service (BBS). Although this file has been
	tested by STAC Electronics, as of 8/29/94, the beta test is not yet complete.
	S32BFA.EXE can be downloaded from LIB:1 in the STAC forum on the STAC
	Electronics BBS. For more information, contact STAC Electronics.
	
	STAC Electronics also suggests that you can work around this problem by loading
	SMARTDrive from your AUTOEXEC.BAT file. You can use the 386 Enhanced icon in
	Control Panel to set up a swap file and 32-bit file access for any uncompressed
	drive. Stacker adds an icon called Virtual Memory to Control Panel. You can set
	up a swap file on any drive and enable 32-bit disk access with this icon.
	
	Stacker 3.1 adds the following menu to File Manager:
	
	  Stacker
	  -------
	
	  File Info
	  Disk Info
	
	If you try to choose one of these menu items, the following error message is
	displayed:
	
	  Stacker not installed
	
	The Stacker volume file still functions properly with 32-bit file access enabled,
	and all files are available normally.
	
	Additional query words: 3.11 UPDATE.EXE Stackometer Stacker File Manager "Stacker not installed" "Error calculating fragmentation" stac compression VFAT stackvol
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
