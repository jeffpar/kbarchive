---
layout: page
title: "Q167346: FIX: GPF Occurs When Starting Visual Basic 5.0"
permalink: /kb/167/Q167346/
---

## Q167346: FIX: GPF Occurs When Starting Visual Basic 5.0

	Article: Q167346
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbui kbVBp500 kbVS97sp2fix kbFAQ kbvbp500sp2fix kbVBP500FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Visual Basic starts and the IDE is displayed, a GPF (General Protection
	Fault) occurs and Visual Basic does not load.
	
	CAUSE
	=====
	
	This problem may be caused by faulty Visual Basic 4.0 add-ins or invalid command
	bar configuration information in the system registry.
	
	RESOLUTION
	==========
	
	To prevent add-ins from being loaded when Visual Basic starts:
	
	1. Start Notepad.exe.
	
	2. Edit the VBAddin.INI file in your Windows directory and set all of the
	  entries to zero (0). For example:
	
	   - Original: AppWizard.Wizard=1
	   - Modified: AppWizard.Wizard=0
	
	3. Save VBAddin.INI.
	
	4. Restart Visual Basic.
	
	To deduce which add-in is causing the problem:
	
	1. Click on Add-In Manager.
	
	2. Check a single Add-In and click the OK button.
	
	3. Restart Visual Basic.
	
	4. Repeat this process until Visual Basic produces a GPF.
	
	5. The last Add-In checked before Visual Basic produces the GPF is the faulty
	  Add-In. You should remove the Add-In from your system and follow the
	  instructions in step 1 above to remove the entry from the VBAddin.INI file.
	
	To fix invalid command bar references in the registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Regedit.exe.
	
	2. Delete the following key:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Visual Basic\5.0
	
	3. Close Regedit.
	
	4. Restart Visual Basic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	Q170365INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbtool kbui kbVBp500 kbVS97sp2fix kbFAQ kbvbp500sp2fix kbVBP500FAQ 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
