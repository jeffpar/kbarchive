---
layout: page
title: "Q242499: HOWTO: Install ADOCE When Windows CE Services Is Not Present"
permalink: /kb/242/Q242499/
---

## Q242499: HOWTO: Install ADOCE When Windows CE Services Is Not Present

	Article: Q242499
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbATM kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB kbGrpDSVBDB kbGrpDSMDAC kbDSupport k
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you attempt to install the Microsoft ADO for Windows CE SDK (ADOCE) onto a
	machine where Windows CE Services has not been installed, you receive the
	following error message:
	
	  Setup could not find Windows CE Services 2.0 installed on your system. Please
	  install Windows CE Services before installing this application.
	
	This occurs even if ActiveSync 3.0, the upgrade to Windows CE Service 2.x, has
	been previously installed.
	
	MORE INFORMATION
	================
	
	You can override this behavior as long as ActiveSync 3.0 is installed. To work
	around this problem, open the ADOCE.STF file using Notepad.exe or a similar
	text-only editor, and change the following line:
	
	2 Windows CE Services 2.0 CustomAction "adosetup.dll,
	AddAppSrch,""Required,C:\,ceappmgr.exe,2.0,3 4"""
	
	to:
	
	2 Windows CE Services 2.0 CustomAction "adosetup.dll,
	AddAppSrch,""Required,C:\,ceappmgr.exe,3.0,3 4"""
	
	REFERENCES
	==========
	
	For additional information, please click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q238947 FILE: Msadoce2.exe Installs ADO for Windows CE SDK
	
	  Q241402 HOWTO: Get ADOCE Running on a Palm-size PC Device
	
	Additional query words: vbce vbce6 wce adoce
	
	======================================================================
	Keywords          : kbATM kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	
