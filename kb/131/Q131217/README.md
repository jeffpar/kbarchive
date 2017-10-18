---
layout: page
title: "Q131217: REPORT FORM Command Uses Temp File for Unsaved Report"
permalink: kb/131/Q131217/
---

## Q131217: REPORT FORM Command Uses Temp File for Unsaved Report

	Article: Q131217
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro uses a temporary file when you print or preview an unsaved new
	Report file. This is different from version 2.6 where it used the file name
	Untitled.frx.
	
	MORE INFORMATION
	================
	
	If you create a new report file in Visual FoxPro, it will be named Report1. When
	you select Run Report from the Report menu, this command is generated:
	
	     REPORT FORM C:\WINDOWS\TEMP\08824737.TMP NOEJECT NOCONSOLE TO PRINTER
	
	In FoxPro version 2.x the same type of procedure (choosing Report from the
	Database menu) generates this command:
	
	     REPORT FORM C:\fpw\untitled.frx ENVIRONMENT TO PRINTER
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
