---
layout: page
title: "Q167213: FIX: Invalid Page Fault When Shutting Down Visual Basic 5.0"
permalink: kb/167/Q167213/
---

## Q167213: FIX: Invalid Page Fault When Shutting Down Visual Basic 5.0

	Article: Q167213
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbVBp500 kbVS97sp2fix kbFAQ kbvbp500sp2fix kbVBP500FAQ
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
	
	When you exit Visual Basic 5.0, an Invalid Page Fault may occur.
	
	CAUSE
	=====
	
	This crash is caused by a problem in the way Visual Basic 5.0 destroys command
	bars during shut down.
	
	RESOLUTION
	==========
	
	There are several workarounds for this problem. However, they may not work in
	all cases.
	
	Re-order the Entries in the VBADDIN.INI
	---------------------------------------
	
	This is a trial-and-error process where you open up the VBADDIN.INI in a text
	editor such as notepad.exe and change the order of the lines. This causes Visual
	Basic to load and shut down the add-ins in a different order and may bypass the
	problem. However, if you add or remove an add-in at any later time, the problem
	could resurface. The VBADDIN.INI file is located in your Windows directory.
	
	For instance, you may have a VBADDIN.INI that looks something like this:
	
	     [Add-Ins32]
	     TabOrder.Connect=0
	     DataFormDesigner.DFDClass=0
	     VBSDIAddIn.Connect=0
	     DataToolsAddIn.Connect=0
	     AppWizard.Wizard=0
	     WizMan.Connect=0
	     ClassBuilder.Wizard=1
	     AddInToolbar.Connect=1
	     ControlWiz.Wizard=1
	     DataFormWizard.Wizard=0
	     ActiveXDocumentWizard.Wizard=0
	     PropertyPageWizard.Wizard=1
	     APIDeclarationLoader.Connect=0
	     VisualCompMgr.Connect=0
	     RVBAddInMenus.Connector=1
	     RVBAddIn.Connector=0
	
	Through trial and error, you may find that the problem goes away when the
	VBADDIN.INI is arranged as follows:
	
	     [Add-Ins32]
	     RVBAddInMenus.Connector=1
	     AddInToolbar.Connect=1
	     TabOrder.Connect=0
	     DataFormDesigner.DFDClass=0
	     VBSDIAddIn.Connect=0
	     DataToolsAddIn.Connect=0
	     AppWizard.Wizard=0
	     WizMan.Connect=0
	     ClassBuilder.Wizard=1
	     ControlWiz.Wizard=1
	     DataFormWizard.Wizard=0
	     ActiveXDocumentWizard.Wizard=0
	     PropertyPageWizard.Wizard=1
	     APIDeclarationLoader.Connect=0
	     VisualCompMgr.Connect=0
	     RVBAddIn.Connector=0
	
	Unfortunately, this workaround doesn't always work. When you are testing out your
	changes to the VBADDIN.INI, make sure you use the following procedure. In order
	for your changes to take effect, you must start Visual Basic after saving your
	changes to the VBADDIN.INI:
	
	1. Shut-down Visual Basic 5.0.
	
	2. Save changes to the VBADDIN.INI.
	
	3. Start Visual Basic 5.0.
	
	4. Shut-down Visual Basic 5.0.
	
	Move Add-In Command Bars to the Main Toolbar
	--------------------------------------------
	
	Drag all Add-In toolbar buttons to the Standard toolbar using the toolbar
	customize feature of the Visual Basic development environment. This gets rid of
	some command bars and may by-pass the problem:
	
	1. Launch Visual Basic 5.0.
	
	2. From the Add-Ins menu, select the Add-In Manager and ensure that the Add-In
	  Toolbar is selected.
	
	3. From the View menu, select Toolbars > Customize.
	
	4. Drag each of the Add-In toolbar buttons to the Standard toolbar.
	
	5. Deselect the Add-In toolbar from the Customize dialog box.
	
	6. Close the Customize dialog box.
	
	7. From the Add-Ins menu, select the Add-In Manager and ensure that the Add-In
	  Toolbar is deselected.
	
	8. Close Visual Basic 5.0.
	
	Disable Add-Ins Before Exiting Visual Basic 5.0
	-----------------------------------------------
	
	It may be possible to work around the problem by shutting down all the active
	add-ins manually prior to exiting Visual Basic 5.0. To shut down an add-in, use
	the following procedure:
	
	1. Select the "Add-Ins\Add-In Manager..." menu to bring up the Add-In Manager.
	
	2. De-select the add-ins that you wish to unload.
	
	3. Press OK to unload the add-ins.
	
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
	
	MORE INFORMATION
	================
	
	This problem can occur with many combinations of add-ins. A few of the common
	scenarios and the steps to reproduce the problem are listed below.
	
	Source Code Control Add-In and Visual Basic Add-In Toolbar
	----------------------------------------------------------
	
	1. Install Visual Basic 5.0.
	
	2. Install Visual SourceSafe 5.0.
	
	3. Launch Visual Basic 5.0.
	
	4. With the Add-In Manager, select the Add-In Toolbar and the Source Code
	  Control add-in.
	
	5. Click OK to load the add-ins.
	
	6. Close Visual Basic.
	
	7. Restart Visual Basic.
	
	8. Close Visual Basic.
	
	Visual Modeler Menus Add-In and Visual Basic Add-In Toolbar
	-----------------------------------------------------------
	
	1. Install Visual Basic 5.0.
	
	2. Install Visual Modeler.
	
	3. Launch Visual Basic 5.0.
	
	4. With the Add-In Manager, select the Add-In Toolbar and the Visual Modeler
	  Menus add-in.
	
	5. Click OK to load the add-ins.
	
	6. Close Visual Basic.
	
	7. Restart Visual Basic.
	
	8. Close Visual Basic.
	
	Visual Modeler Menus Add-In and Source Code Control Add-In
	----------------------------------------------------------
	
	1. Install Visual Basic 5.0.
	
	2. Install Visual SourceSafe 5.0.
	
	3. Install Visual Modeler.
	
	4. Launch Visual Basic 5.0.
	
	5. With the Add-In Manager, select the Visual Modeler Menus add-in and the
	  Source Code Control add-in.
	
	6. Click OK to load the add-ins.
	
	7. Close Visual Basic.
	
	8. Restart Visual Basic.
	
	9. Close Visual Basic.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbVBp500 kbVS97sp2fix kbFAQ kbvbp500sp2fix kbVBP500FAQ 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
