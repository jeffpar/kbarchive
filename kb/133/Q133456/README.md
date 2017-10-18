---
layout: page
title: "Q133456: PRB: Can't Open or Save a File Named CON or LPT1"
permalink: kb/133/Q133456/
---

## Q133456: PRB: Can't Open or Save a File Named CON or LPT1

	Article: Q133456
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
	
	Typing in a file name of CON in an open or save dialog box in Visual FoxPro
	running on Windows 3.1 or Windows for Workgroups 3.11 causes the computer to
	hang (stop responding). If you are running on Windows NT or Windows 95 you will
	receive this error:
	
	  The filename is a reserved device name. Use a different filename.
	
	CAUSE
	=====
	
	The filename CON is a valid pre-existing Device in MS-DOS. It is the same as
	trying to use LPT1 as a file name.
	
	RESOLUTION
	==========
	
	Do not use reserved words or device names as a name for a file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Type "MODIFY CLASS" (without the quotation marks) in the Command window.
	
	2. Type "CON" (without the quotation marks) in the class library name box of the
	  Open dialog box.
	
	3. Press ENTER or click Open.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
