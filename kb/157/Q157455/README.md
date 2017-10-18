---
layout: page
title: "Q157455: PRB: Import Wizard Fails Reporting &quot;No Fields Were Found&quot;"
permalink: kb/157/Q157455/
---

## Q157455: PRB: Import Wizard Fails Reporting &quot;No Fields Were Found&quot;

	Article: Q157455
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Import Wizard in Visual FoxPro fails with the message "No fields were found
	to copy" when trying to import a Microsoft Excel 5.0 workbook.
	
	CAUSE
	=====
	
	The active sheet in the workbook is empty.
	
	RESOLUTION
	==========
	
	Make the sheet with the data to be imported the active sheet when the Excel
	workbook is saved.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Import Wizard looks at only the active sheet in the Excel workbook.
	
	Another way to import a sheet from an Excel 5.0 workbook is to use the Import
	command on the File menu. The dialog box displayed by the Import command has a
	drop-down list box where you can choose a specific sheet from an Excel workbook.
	Of course, the sheet containing the data would have to be known. The Import
	command echoes the following command into the Visual FoxPro Command window
	assuming an Excel file named Abc.xls and Sheet 7 is chosen in the Sheet
	drop-down list box.
	
	  IMPORT FROM abc.xls TYPE XL5 SHEET "Sheet7"
	
	You can then issue this command either in the Command window or in a program.
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on the Import command.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	
