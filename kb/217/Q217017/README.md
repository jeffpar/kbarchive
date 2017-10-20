---
layout: page
title: "Q217017: INFO: Visual Basic 5.0 and 6.0 Compatibility Issues"
permalink: /kb/217/Q217017/
---

## Q217017: INFO: Visual Basic 5.0 and 6.0 Compatibility Issues

{% raw %}

	Article: Q217017
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp500 kbVBp600
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
	
	This article summarizes the compatibility issues between Visual Basic version 5.0
	and 6.0.
	
	MORE INFORMATION
	================
	
	Following are the known compatibility issues between Visual Basic 5.0 and 6.0:
	
	- Running the Visual Basic 5.0 Setup Wizard on a system with both Visual Basic
	  5.0 and Visual Basic 6.0 installed.
	
	  While you can develop a Visual Basic 5.0 application in a system with both
	  Visual Basic 5.0 and 6.0 installed, you should only create a deployment
	  package for your Visual Basic 5.0 application on a clean system with only
	  Visual Basic 5.0 installed.
	
	  When Visual Basic 6.0 is installed on the same system as Visual Basic 5.0, all
	  the controls installed by Visual Basic 5.0 are updated. The updated controls
	  may cause a problem when you run the Visual Basic 5.0 Setup Wizard to create
	  a deployment package for your Visual Basic 5.0 application due to different
	  dependencies.
	
	  To create a deployment package for a Visual Basic 5.0 application, run the
	  Visual Basic 5.0 Setup Wizard on a system containing only Visual Basic 5.0 so
	  that the appropriate controls are included in your deployment package.
	
	For additional information about other potential conflicts, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q190253 INFO: VB6 Designers Do Not Work in VB5
	
	  Q190080 PRB: VBCE 5.0 on Same Machine as VB6 Causes Application Error
	
	  Q192934 PRB: Error "The Jet VBA File...Failed to Initialize When Called"
	
	- The following error message displays when you attempt to use the Microsoft
	  Windows Common Controls 5.0 (Comctl32.ocx) in a Visual Basic 5.0 project. The
	  system once had Visual Basic 6.0 installed:
	
	  Could Not Be Loaded - Adding component to project
	
	  This error message occurs when you install a newer version of an ActiveX
	  control, uninstall it, and then install an older version of the same ActiveX
	  control. The registry key for the newer version of the ActiveX control
	  remains in the registry and Visual Basic 5.0 is now trying to use that
	  registry key.
	
	  WARNING: If you use Registry Editor incorrectly, you may cause serious
	  problems that may require you to reinstall your operating system. Microsoft
	  cannot guarantee that you can solve problems that result from using Registry
	  Editor incorrectly. Use Registry Editor at your own risk.
	
	  To resolve this issue:
	
	   - Delete the TypeLib Registry Key for the ActiveX Control and then
	     re-register the control using RegSvr32.exe.
	
	For additional information about how to delete a registry key and re-register an
	ActiveX control, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q217180 HOWTO: Delete and Re-register the TypeLib GUID for an ActiveX Control
	
	- When attempting to create a Visual Basic Application Wizard project in the
	  Visual Basic 6.0 Learning Edition you receive the following message:
	
	  You do not have the proper license to load the VB 98 Application Wizard. You
	  must have the Learning, Professional, or Enterprise edition of Visual Basic
	  installed.
	
	  This is caused by having the Visual Basic 5.0 Control Creation Edition
	  installed on the same system.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q220816 BUG: Application Wizard License Not Found
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Arsenio
	Locsin, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q190211 PRB: Problems With Visual Basic 5.0 and 6.0 on Same System
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp500 kbVBp600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
