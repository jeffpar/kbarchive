---
layout: page
title: "Q87242: Drive Mapped at MS-DOS Prompt Not Recognized in File Manager"
permalink: kb/087/Q87242/
---

## Q87242: Drive Mapped at MS-DOS Prompt Not Recognized in File Manager

	Article: Q87242
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you map a drive at a command prompt using MS-DOS Prompt on a Novell network,
	the drive will not be recognized in File Manager if the NWShare Handles option
	is not selected in the Control Panel Networks option. After mapping a drive at a
	command prompt using MS-DOS Prompt and then exiting MS- DOS Prompt, the mapped
	drive will be lost.
	
	CAUSE
	=====
	
	This situation occurs because the NWShare Handles option is not activated, which
	sets all virtual machines to independent mapping. Independent mapping does not
	affect other virtual machines (VMs). The default for the "NWShare Handles" is
	false (unmarked).
	
	RESOLUTION
	==========
	
	To initialize global mapping in a virtual machine (VM):
	
	1. Run Control Panel.
	
	2. Choose the Network icon.
	
	3. In the 386 Enhanced Section, select the option NWShare Handles.
	
	4. Choose OK to save settings.
	
	Now, if you map a drive at a command prompt using MS-DOS Prompt, File Manager
	will recognize the drive because the mapping has been made global.
	
	The Novell products included here are manufactured Novell, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: nwshare vm share handles 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
