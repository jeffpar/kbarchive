---
layout: page
title: "Q217180: HOWTO: Delete and Re-Register TypeLib GUID for ActiveX Control"
permalink: kb/217/Q217180/
---

## Q217180: HOWTO: Delete and Re-Register TypeLib GUID for ActiveX Control

	Article: Q217180
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbRegistry kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	This article demonstrates how to delete and re-register the TypeLib GUID of an
	Active X Control. This procedure should be performed whenever you install and
	remove different Visual Basic versions so that your Visual Basic program can use
	the correct ActiveX control Type Library information. You may also wish to
	implement this procedure if you get the following error message:
	
	  <ActiveX Control File Name> Could Not Be Loaded - Adding component to
	  project
	
	This article assumes that you are familiar with editing the registry using the
	Registry Editor (Regedt32.exe or Regedit.exe) and with using the Run dialog.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To remove the Typelib GUID from the registry, you need to find the appropriate
	TypeLib GUID for your ActiveX control in the HKEY_CLASSES_ROOT\TypeLib folder.
	Once you find the GUID, delete the GUID and then register the control again
	using REGSVR32.EXE.
	
	The following section demonstrates how to delete and re-register the ActiveX
	Control Microsoft Windows Common Controls 5.0 (comctl32.ocx).
	
	Step by Step Instructions
	-------------------------
	
	1. On the Start menu, click Run. Enter REGEDIT in the Open field and click OK to
	  start the Registry Editor. Open the HKEY_CLASSES_ROOT\TypeLib folder.
	
	2. Right-click the folder, and then click Find on the sub-menu. The Find dialog
	  box is displayed.
	
	3. In the Find what: field, enter the file name of the ActiveX Control you want
	  to delete, and click OK.
	
	  In this example, enter comctl32.ocx in the field and click OK. The folder key
	  with the GUID for your control should appear in the left pane of the Registry
	  Editor. Note that this folder may contain other folders with version numbers
	  used as folder names. In our example, the GUID for comctl32.ocx is
	  6B7E6392-850A-101B-AFC0-4210102A8DA7. This folder may contain the folders
	  1.0, 1.1, 1.2, and/or 1.3, depending upon what has been installed on the
	  system.
	
	4. Select the folder key and then press the DELETE key to delete this folder. In
	  our example, select the 6B7E6392-850A-101B-AFC0-4210102A8DA7 folder and then
	  press the DELETE key. You have just deleted the folder key for comctl32.ocx.
	
	5. Search for and delete other registry keys that refer to the ActiveX control.
	
	6. Close the Registry Editor. On the Start menu, click Run.
	
	7. Enter the following in the Open field, and then press the ENTER key:
	
	  Regsvr32 <ActiveX Control File Name>
	
	  RegSvr32 displays a message box indicating that the registration process was
	  successful.
	
	  In our example, you would type the following in the Run dialog and press the
	  ENTER key:
	
	  Regsvr32 comctl32.ocx
	
	  The RegSvr32 message box is displayed with the following message:
	
	  DllRegisterServer in comctl32.ocx succeeded.
	
	  Click OK to close the RegSvr32 message box. The registration process is
	  complete. If you do not see the message above, make sure that the ActiveX
	  control file exists in your system directory and then run this step again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbRegistry kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
