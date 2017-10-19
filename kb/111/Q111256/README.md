---
layout: page
title: "Q111256: PRB: ODBC Icon Does Not Appear in Windows Control Panel"
permalink: /kb/111/Q111256/
---

## Q111256: PRB: ODBC Icon Does Not Appear in Windows Control Panel

	Article: Q111256
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.5b,2.6
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installation of the Microsoft FoxPro Connectivity Kit should place an ODBC icon
	in the Control Panel group, but sometimes this icon does not appear.
	
	CAUSE
	=====
	
	The [MMCPL] section of the CONTROL.INI file does not contain the line:
	
	     ODBC=C:\WINDOWS\SYSTEM\ODBCINST.DLL
	
	RESOLUTION
	==========
	
	Reinstalling the Connectivity Kit should write this line to the CONTROL.INI
	file. If the ODBC kit has been installed properly except for the icon, manually
	adding this line to the CONTROL.INI file (which is located in the Windows
	directory) will cause the icon to appear.
	
	Additional query words: FoxWin 2.50 CK
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b
	Version           : WINDOWS:2.5,2.5a,2.5b,2.6
	Issue type        : kbprb
	
	=============================================================================
	
