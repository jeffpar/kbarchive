---
layout: page
title: "Q117141: Err Msg Installing DeskJet 500 4.0 Driver: COMMCTRL.DLL Is..."
permalink: /kb/117/Q117141/
---

## Q117141: Err Msg Installing DeskJet 500 4.0 Driver: COMMCTRL.DLL Is...

	Article: Q117141
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the version 4.0 printer driver for the Hewlett-Packard (HP)
	DeskJet 500 Series by running the HP-supplied installation program (HPSETUP.EXE)
	from File Manager, you receive the following error message:
	
	  The module, COMMCTRL.DLL, is in use.
	  Close down all applications and reinstall.
	
	No other applications appear to be running. The load= and run= lines in the
	WIN.INI file are blank.
	
	
	CAUSE
	=====
	
	The HP installation program replaces PRINTMAN.EXE and COMMCTRL.DLL. COMMCTRL.DLL
	contains internal custom control user interface functions. In Windows for
	Workgroups versions 3.1 and 3.11, COMMCTRL.DLL is used by Windows File Manager.
	This error occurs if Print Manager, File Manager, or Control Panel is running at
	the same time as HPSETUP.EXE.
	
	RESOLUTION
	==========
	
	Make sure you run HPSETUP.EXE from Program Manager and that File Manager is not
	running.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In Windows, open File Manager.
	
	2. Double-click HPSETUP.EXE, or choose Run from the File menu and type
	  HPSETUP.EXE in the Command Line box and then choose OK.
	
	The products included here are manufactured by Hewlett-Packard, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.10 3.1 desk-jet desk jet abort HP DeskJet PLUS 500 510 520 500C 540 550C 560C setup 560
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
