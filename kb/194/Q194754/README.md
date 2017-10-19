---
layout: page
title: "Q194754: PRB: SETUP.EXE File Linked to Missing Export OLEAUT32.DLL:185"
permalink: /kb/194/Q194754/
---

## Q194754: PRB: SETUP.EXE File Linked to Missing Export OLEAUT32.DLL:185

	Article: Q194754
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a setup program that was created using the Package and Deployment
	Wizard (PDW), you receive the following error message:
	
	  The SETUP.EXE file is linked to missing export OLEAUT32.DLL:185.
	
	When you click OK, you receive the following error message, where <Path> is
	the location of Setup.exe:
	
	  <Path>\Setup.exe
	  A device attached to the system is not functioning.
	
	CAUSE
	=====
	
	Setup packages built with the Package and Deployment Wizard will not run on the
	original version of Windows 95 due to lack of support for an API function in the
	file Oleaut32.dll, version 2.1. The failure does not occur on later versions of
	Windows 95, Windows 98, Windows Me, or any versions of Windows NT 4.0 or Windows
	2000. Further, this failure does not occur if another program installation, such
	as installation programs for Microsoft Office 97, Internet Explorer 3.0, or
	Internet Explorer 4.0, has updated Oleaut32.dll to a newer version.
	
	RESOLUTION
	==========
	
	To resolve the problem, the latest Automation files must be installed onto the
	client machine before SETUP.EXE can run successfully. The latest Automation
	files may be installed by using VBRUN60.EXE. VBRUN60.EXE installs the Microsoft
	Visual Basic 6.0 run-time library (MSVBVM60.EXE) and updates required Automation
	files used by Visual Basic 6.0 applications (including OLEAUT32.DLL).
	
	After VBRUN60.EXE is run successfully, the SETUP.EXE program may be run to
	install your Visual Basic application successfully. VBRUN60.EXE may be located
	on your Visual Basic 6.0 installation CD-ROM or it may be downloaded from the
	Microsoft Web Site.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q192461 FILE: VBRUN60.EXE Installs Visual Basic 6.0 Run-Time Files
	
	  Q190046 INFO: VB6 Readme: Part 6 Wizard Issues
	
	  Q158238 HOWTO: Determine the Version of Windows 95/98/Me in Use
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
