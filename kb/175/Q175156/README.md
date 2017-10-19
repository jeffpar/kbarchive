---
layout: page
title: "Q175156: PRB: Class Not Registered Error and Empty Components Dialog"
permalink: /kb/175/Q175156/
---

## Q175156: PRB: Class Not Registered Error and Empty Components Dialog

	Article: Q175156
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose to view the Component dialog in Microsoft Visual Basic, either
	by clicking on the Project menu and selecting Components or by using the
	activation keys CTRL+T, the following error appears:
	
	  Class not registered
	  Looking for object with CLSID: {0002E005-0000-0000-C000-000000000046}
	
	After clicking OK, the Component dialog opens and no components are displayed.
	
	CAUSE
	=====
	
	The Microsoft Component Category Manager Library, ComCat.DLL, is incorrectly
	registered.
	
	RESOLUTION
	==========
	
	Correctly register ComCat.DLL using RegSvr32.Exe, a utility program that ships
	with Visual Basic and allows you to register DLL's and other files into the
	system registry.
	
	To correctly register ComCat.DLL, follow the steps below:
	
	1. Verify that ComCat.DLL is located in the Windows 95 or Windows 98
	  Windows\System folder or in the Windows NT Windows\System32 folder. If
	  ComCat.DLL can not be located, copy it from the Visual Basic installation
	  media into the appropriate folder.
	
	2. From the Start menu, choose Run.
	
	3. Type the following command into the Run dialog, replacing <Path To
	  Windows\System(32)> with the full path to your Windows\System folder:
	
	  RegSvr32.Exe <Path To Windows\System(32)>\ComCat.DLL
	
	MORE INFORMATION
	================
	
	OLE groups all components into functional categories called Component
	Categories. ComCat.DLL is used to identify the areas of functionality that a
	component may support and provides the functionality to register and unregister
	components into specific Component Categories. Therefore, when Visual Basic
	opens the Components dialog it can categorize the components into Controls,
	Designers and Insertable Objects without displaying every object and class
	registered on the system.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Unregister ComCat.DLL using RegSvr32.Exe:
	
	  RegSvr32.Exe /U <Path To Windows\System(32)>\ComCat.DLL
	
	2. Start Visual Basic, and create a new Standard EXE project.
	
	3. From the Project menu, choose Components. The error message described above
	  occurs. Note that when you click OK, no components are displayed.
	
	REFERENCES
	==========
	
	For additional information, please click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q183370 PRB: System Error "No Such Interface Supported"
	
	Additional query words: 80004002
	
	======================================================================
	Keywords          : kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : WINDOWS:5.0,6.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
