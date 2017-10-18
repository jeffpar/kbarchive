---
layout: page
title: "Q90198: WFWG Setup Updates MSCDEX and adds LANMAN10.386 for CD-ROM"
permalink: kb/090/Q90198/
---

## Q90198: WFWG Setup Updates MSCDEX and adds LANMAN10.386 for CD-ROM

	Article: Q90198
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the Windows for Workgroups Setup program detects a CD-ROM drive, it updates
	the MSCDEX.EXE file and modifies the corresponding entry in your AUTOEXEC.BAT
	file. Setup also copies the virtual device driver (VxD) file named LANMAN10.386
	to your WINDOWS\SYSTEM directory and adds an entry to your SYSTEM.INI file.
	
	MORE INFORMATION
	================
	
	MSCDEX is a system file required to run a CD-ROM drive.
	
	The LANMAN10.386 virtual device driver is required to enable a CD-ROM to be used
	in the Windows environment.
	
	
	KBCategory: kbsetup kbmm
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
