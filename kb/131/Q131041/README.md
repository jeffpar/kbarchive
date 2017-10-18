---
layout: page
title: "Q131041: PRB: Programs Crash After Installing Visual FoxPro"
permalink: kb/131/Q131041/
---

## Q131041: PRB: Programs Crash After Installing Visual FoxPro

	Article: Q131041
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing the new versions of the 32-bit files for Visual FoxPro,
	products such as Microsoft Word, Microsoft Excel, and Microsoft FoxPro start
	crashing.
	
	CAUSE
	=====
	
	The computer may have a third-party virtual-device driver installed.
	
	RESOLUTION
	==========
	
	In the [386Enh] section of the SYSINI.INI file, set the MaxBPs to 400 or
	greater.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following information was taken from the Microsoft Windows for Workgroups
	version 3.11 SYSINI.WRI.
	
	  [386Enh] Section Settings
	
	  The [386Enh] section contains information used for virtual-memory
	  page swapping; virtual-memory network drivers; and 32-bit disk
	  -----------------------------------------------------------------
	  The [386Enh] section can contain the following setting
	
	  MaxBPs=<number>
	
	  Default: 200
	
	  Purpose: Specifies the maximum number of break points (a method for
	  transferring control to Windows running in 386 enhanced mode) that
	  can be used by the virtual-memory manager. You may need to increase this
	  value if you are using a third-party virtual-device driver that requires
	  more break points than the default value.
	
	Additional query words: VFoxWin 3rd party VxD
	
	======================================================================
	Keywords          : kb3rdparty kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
