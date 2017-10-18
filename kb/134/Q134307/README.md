---
layout: page
title: "Q134307: PRB: Invalid or Missing EXE Error When Starting Visual FoxPro"
permalink: kb/134/Q134307/
---

## Q134307: PRB: Invalid or Missing EXE Error When Starting Visual FoxPro

	Article: Q134307
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After launching Visual FoxPro for Windows, you see this error:
	
	  Invalid or Missing EXE
	
	This message is displayed immediately following the Visual FoxPro logo screen.
	Clicking the OK button returns control to Windows.
	
	CAUSE
	=====
	
	This error occurs because of a conflict between SHARE.EXE and VSHARE.386. During
	setup, Visual FoxPro installs VSHARE.386. If SHARE.EXE is already being loaded
	from the AUTOEXEC.BAT file, a conflict can occur.
	
	RESOLUTION
	==========
	
	Visual FoxPro does not require SHARE.EXE to be loaded. If no other applications
	on the system require SHARE.EXE, remove SHARE.EXE from the AUTOEXEC.BAT file. If
	SHARE.EXE must be loaded, the VFP.EXE file must be marked with the read-only
	attribute. This can be done either with the Attrib command, or by changing the
	file properties in File Manager.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	See page 64 of the Installation Guide and Master Index for more information.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
