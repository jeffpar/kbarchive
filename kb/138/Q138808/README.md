---
layout: page
title: "Q138808: PRB: &quot;Error Writing Winspool.drv&quot; During Visual FoxPro Setup"
permalink: /kb/138/Q138808/
---

## Q138808: PRB: &quot;Error Writing Winspool.drv&quot; During Visual FoxPro Setup

	Article: Q138808
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error "Error Writing to Winspool.drv" appears while you are:
	
	- Setting up Visual FoxPro under Windows or Windows for WorkGroups.
	
	-or-
	
	- Starting Visual FoxPro.
	
	CAUSE
	=====
	
	The LaserMaster Print Manager was installed before you ran Setup. When Visual
	FoxPro is installed under Windows or Windows for Workgroups, the Setup program
	installs Win32s. The LaserMaster drivers interfere with installing Win32s
	because the LaserMaster creates a WINSPOOL device. When the Setup program tries
	to write to Winspool.drv, it fails because it tries to write to the WINSPOOL
	device instead.
	
	WORKAROUND
	==========
	
	Disable the WINSPOOL driver before installing Visual FoxPro. Once Visual FoxPro
	and Win32s have been installed, you can reinstall the driver. You may need to
	disable the driver at all times to run Visual FoxPro. However, this should not
	prevent you from printing to the LaserMaster. To disable the driver, change the
	following three lines to comments in the [386enh] section of the System.ini
	file.
	
	     device = lmharold.386
	     device = lmmi
	     device = lmcap
	
	Then restart your computer before you install Visual FoxPro, so the changes take
	effect.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	For more information about this issue, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q106715 Troubleshooting Win32s Installation Problems
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	
