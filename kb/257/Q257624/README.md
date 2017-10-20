---
layout: page
title: "Q257624: Clear Report TAG, TAG2, and  EXPR Fields Using .pjx Hooks"
permalink: /kb/257/Q257624/
---

## Q257624: Clear Report TAG, TAG2, and  EXPR Fields Using .pjx Hooks

{% raw %}

	Article: Q257624
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbProjManager kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual FoxPro developers sometimes want to distribute reports without
	the worry of possible differences between the printer information contained in
	the report and the printer on the system where the report is going to run. The
	example in this article uses the Visual FoxPro project hooks to reset
	printer-specific information within all the reports in a project.
	
	MORE INFORMATION
	================
	
	When you save a report in Visual FoxPro, the printer driver information and
	other print options are stored in the report table. To avoid any discrepancies,
	clear the printer information stored in the report before you distribute the
	application. This information is stored in the TAG, TAG2, and EXPR fields of the
	report. If you clear these fields, Visual FoxPro uses the system default printer
	to output the report.
	
	NOTE: The EXPR field also contains information about printer orientation, number
	of desired copies, and so forth. If your environment requires you to keep these
	settings, you should not clear this field. To do this, remark the line that
	reads:
	
	  Expr with cEmptyStr
	
	Also, adjust the line previous to the EXPR field by removing the comma (,) and
	semi-colon (;) to complete the REPLACE command.
	
	If you do need to clear the values from the EXPR, you can store the information
	from the EXPR field into the USER Memo field, which has no effect on the report
	settings, and then replace it back to the EXPR when needed. Note this in the
	line of code:
	
	  User with Expr,; &&Saves value of EXPR into USER Memo field
	
	The following code shows how to take advantage of Visual FoxPro project hooks to
	parse and reset the values of the TAG, TAG2, and EXPR fields on all reports
	contained in a specific project. The code assumes your reports are part of an
	existing project.
	
	1. Start Visual FoxPro.
	
	2. Create a new program (.prg).
	
	3. Paste the following code into the program and run it:
	
	  Local oFile, cEmptyStr, nReportCount
	  #Define cEmptyStr Space(0)          &&Sets cEmptyStr value
	  nReportCount = 0
	  Clear
	  Modi Project ? NoShow NoWait        &&Prompts the Project File name
	
	  *!* Loops into the Project Collection Object
	  For Each oFile In _Vfp.ActiveProject.Files 
	
	  If oFile.Type = 'R'                 &&Checks for Report File Type
	     Wait Window 'Clearing Fields in: ' +;
	     oFile.Name TimeOut 1
	     Use (oFile.Name)
	     Go Top
	     Locate For ObjType = 1 and ObjCode = 53
	
	     If Found()
	        Replace Tag  with cEmptyStr,; &&Clears the Tag, Tag2, Expr Fields
	                Tag2 with cEmptyStr,;
	                Expr with cEmptyStr   &&Remark this line to keep values in EXPR field
	        nReportCount = nReportCount + 1
	        Use
	     EndIf
	
	  EndIf
	
	  EndFor
	  *!* Displays Process Summary
	  Wait Window AllTrim(Str(nReportCount)) +; 
	       ' Report(s) Modified in Project ' +;
	        _Vfp.ActiveProject.Name
	
	REFERENCES
	==========
	
	For additional information on modifying Visual FoxPro reports, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q133163 HOWTO: Control Printer Attributes for a Report at Run Time
	
	  Q138396 HOWTO: Use the Default Windows Printer in Visual FoxPro
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Reinaldo
	Torrales, Microsoft Corporation.
	
	
	Additional query words: MODIFY PROJECT
	
	======================================================================
	Keywords          : kbProjManager kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
