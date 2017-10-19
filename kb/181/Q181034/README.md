---
layout: page
title: "Q181034: INFO: Misleading Location for VBCE Application Install Wizard"
permalink: /kb/181/Q181034/
---

## Q181034: INFO: Misleading Location for VBCE Application Install Wizard

	Article: Q181034
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The source code project for the VBCE Application Install Wizard is located in
	the same folder as sample VBCE projects. However, the Application Install Wizard
	is not a VBCE sample application and is designed to run on the regular Windows
	desktop.
	
	MORE INFORMATION
	================
	
	Sample VBCE projects are located in the following subfolders:
	
	- Visual Basic 6.0: <Microsoft Visual Studio>\VB98\VBCE\Samples
	
	The Setup subfolder is also in the Samples folder, which has the source code
	project (Setup1.vbp) for the Application Install Wizard. The Application Install
	Wizard can be used to create a custom installation program for VBCE
	applications.
	
	The Application Install Wizard project is a regular Visual Basic 6.0 project, not
	a VBCE project. Many of the components in the Application Install Wizard, such
	as non-variant variables, etc., are not usable in VBCE projects.
	
	REFERENCES
	==========
	
	Microsoft Windows CE Toolkit for Visual Basic 6.0 Help
	
	Additional query words: setup.vbp vbce vbce6 wince wce
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
