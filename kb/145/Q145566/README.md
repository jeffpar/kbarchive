---
layout: page
title: "Q145566: FIX: App Error Occurs After Saving a Changed Module Name"
permalink: kb/145/Q145566/
---

## Q145566: FIX: App Error Occurs After Saving a Changed Module Name

	Article: Q145566
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbide kbVBp kbVBp400bug kbVBp500fix kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application error occurs when you save a module if you change the module's
	name in the property sheet and use the keyboard shortcut CTRL+S to save the
	module before pressing the ENTER key. This behavior does not occur when you save
	the module by clicking Save File on the File menu.
	
	RESOLUTION
	==========
	
	Use one of the following methods to work around this behavior:
	
	- Change the module name and press the ENTER key before saving the module using
	  the shortcut key CTRL+S.
	
	- Save the module by clicking Save File on the File menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual Basic
	version 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 4.0, or if it is already running, click New Project on the
	  File menu.
	
	2. On the Insert menu, click Module to insert a module into the project.
	
	3. On the File menu, click Save File to save the module as TEST.BAS.
	
	4. On the module's property sheet, change the name property to Test and press
	  CTRL+S. An application error occurs with one of the following messages and
	  Visual Basic ends:
	
	
	  32-bit Visual Basic
	
	  Windows NT 3.51
	
	  An application error has occurred and an application error log is being
	  generated. VB32.exe, Exception: access violation (0xc0000005), Address:
	  0x004b788b.
	
	  Windows 95 or Windows 98
	
	  This program has performed an illegal operation and will be shut down. VB32
	  caused an invalid page fault in module VB32.EXE at 0137:004b788b.
	
	  16-bit Visual Basic under all operating systems
	
	  VB caused a General Protection Fault in module VB.EXE at 003E:05CED. Choose
	  Close. VB will close.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVBp kbVBp400bug kbVBp500fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
