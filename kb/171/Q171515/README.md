---
layout: page
title: "Q171515: FIX: Crash on Customization of Design Environment Menus"
permalink: /kb/171/Q171515/
---

## Q171515: FIX: Crash on Customization of Design Environment Menus

	Article: Q171515
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under the scenarios described in the MORE INFORMATION section below involving
	menu customization, Visual Basic 5.0 will crash with the message:
	
	  "VB5 caused an invalid page fault in module VB5.EXE at 0137:004dbff8"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Scenario 1
	----------
	
	1. Start a Standard EXE project in Visual Basic 5.0.
	
	2. Close the design window for Form1.
	
	3. Select View...Toolbars...Customize from the Menubar.
	
	4. Select "Shortcut Menus."
	
	5. Select Forms...Forms...Update UserControls and drag it to any other menu on
	  the main menu.
	
	6. Click the Close button to close the Customize dialog box. The following error
	  occurs:
	
	  "VB5 caused an invalid page fault in module VB5.EXE at 0137:004dbff8"
	
	  NOTE: If step 2 is omitted, exiting and re-launching Visual Basic 5.0 will
	  result in the message:
	
	  "VB5 caused an invalid page fault in module VB5.EXE at 0137:0048d2d4."
	
	  This specific behavior can be corrected by running REGEDIT.EXE and deleting
	  the HKEY_CURRENT_USER\Software\Microsoft\Visual Basic\5.0\UI key and
	  re-launching Visual Basic 5. Note that this will reset all menu customization
	  to the Visual Basic defaults.
	
	Scenario 2
	----------
	
	1. Start a new Standard EXE project in Visual Basic 5.0.
	
	2. Close the design window for Form1.
	
	3. Add an add-in that would add a Menu item to the Form's right-click menu, and
	  the following error will occur:
	
	  "VB5 caused an invalid page fault in module VB5.EXE at 0137:004dbff8"
	
	  NOTE: It is recommended that add-ins not add context menus items to the forms
	  context menu.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
