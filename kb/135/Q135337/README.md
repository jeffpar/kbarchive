---
layout: page
title: "Q135337: PRB: Run-Time Error R6915 - DOSX16: Unhandled Exception"
permalink: /kb/135/Q135337/
---

## Q135337: PRB: Run-Time Error R6915 - DOSX16: Unhandled Exception

{% raw %}

	Article: Q135337
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Help Compiler (HC31.EXE or HC35.EXE) that comes with Visual FoxPro and
	FoxPro for Windows version 2.6 Professional Edition can, on occasion, return an
	error not documented by the Help Compiler. The error is:
	
	  Run-Time error R6915 - DOSX16: Unhandled Exception
	
	CAUSE
	=====
	
	This error is caused by the configuration of the computer. It may be a memory
	conflict or a device driver or TSR (Terminate and Stay Resident) program.
	
	RESOLUTION
	==========
	
	The solution to the problem is to "clean boot" the computer. This means
	restarting the computer with a minimal CONFIG.SYS and AUTOEXEC.BAT and removing
	all unnecessary drivers and TSRs from the AUTOEXEC.BAT file.
	
	MORE INFORMATION
	================
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q111263 PRB: Causes of DX1020 or R6915 Unhandled Exception Error
	
	
	  Q95314 How to Perform a "Clean Boot" for FoxPro
	
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
