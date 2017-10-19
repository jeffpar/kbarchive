---
layout: page
title: "Q83583: Windows 3.1 Does Not Allow Swap File on Stacker Drive"
permalink: /kb/083/Q83583/
---

## Q83583: Windows 3.1 Does Not Allow Swap File on Stacker Drive

	Article: Q83583
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows versions 3.1 and 3.11 and Microsoft Windows for Workgroups
	versions 3.1 and 3.11 do not allow a temporary or permanent swap file to be set
	up on a STAC Electronics Stacker drive or a RAMdrive. To illustrate this, follow
	the steps below:
	
	1. Run the Control Panel.
	
	2. Choose the 386 Enhanced icon.
	
	3. Choose the Virtual Memory button in the 386 Enhanced dialog box.
	
	The Virtual Memory option shows nonstacked drives only.
	
	MORE INFORMATION
	================
	
	With Windows 3.0, you can set up a temporary swap file on a Stacker drive. By
	default, Windows 3.1 or 3.11 or Windows for Workgroups 3.1 or 3.11 does not
	allow this. The following two problems occur if you attempt to put a temporary
	swap file on a Stacker drive in Windows 3.1 or 3.11 or Windows for Workgroups
	3.1 or 3.11:
	
	- Windows cannot be certain how much space is available because of the Stacker
	  compression software.
	
	- Swap files may fragment the Stacker drive in a short amount of time. If you
	  must use Stacker, use version 2.0. By default, Stacker 2.0 leaves only 1 MB
	  of non-stacked hard drive space available. This is not enough space for a
	  swap file.
	
	Run the Stacker 2.0 SDEFRAG.EXE /G command, and decrease the size of the Stacker
	drive to free additional non-stacked drive space. For more information on this
	command, refer to your Stacker manual, or contact STAC technical support.
	
	The following are additional suggestions:
	
	1. Use the SDEFRAG command to make 10 MB of nonstacked hard drive space
	  available.
	
	2. Create a permanent swap file of 6 MB.
	
	3. Leave 4 MB free and point the SET TEMP variable there.
	
	RAMdrive
	--------
	
	Setting up a swap file on a RAMdrive is not an efficient use of resources. If you
	have a software package that requires a swap file, you must use real,
	uncompressed hard drive space with 512 byte sectors.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	KBCategory: kb3rdparty kbenv
	KBSubcategory: win31 winmem
	
	Additional query words: 3.10 RAM drive 1024 SCSI non-stacked stacked non
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.1,3.11
	
	=============================================================================
	
