---
layout: page
title: "Q99118: PC Forms: E-Form Causes GP Fault"
permalink: /kb/099/Q99118/
---

## Q99118: PC Forms: E-Form Causes GP Fault

	Article: Q99118
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,2.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	- Microsoft Visual Basic Standard Edition for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access a custom form created using version 1.0 of Microsoft
	Electronic Forms Designer, a Windows general protection fault (GP fault) may
	occur.
	
	CAUSE
	=====
	
	This problem occurs when you choose the Run command from within Visual Basic
	before the executable file (EXE) is built.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Visual Basic version 2.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If you create a custom form within Visual Basic and issue the Run command from
	the Toolbar (or if you choose Start from the Run menu), the executable file
	created using the Make .EXE command may be corrupted. If you run the project at
	design time, perform the following steps before you create an executable file:
	
	1. From the File menu, choose Save Project to save the project.
	
	2. From the File menu, choose Exit to close Visual Basic.
	
	3. Re-launch Visual Basic and open the E-form project.
	
	4. From the File menu, choose Make EXE to build the project.
	
	Additional query words: 1.00 2.00 gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,2.0,3.0,3.2
	
	=============================================================================
	
