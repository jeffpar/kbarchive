---
layout: page
title: "Q156642: PRB: Upper Report Expression Causes String Too Long to Fit"
permalink: kb/156/Q156642/
---

## Q156642: PRB: Upper Report Expression Causes String Too Long to Fit

	Article: Q156642
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After changing the format of a memo field to upper case in the Report Writer,
	the error "String Too Long to Fit" appears when attempting to print or preview
	the report.
	
	CAUSE
	=====
	
	The Report Writer's expression builder cannot convert fields larger than 256
	characters to upper case. You must use the UPPER() function to convert those
	fields.
	
	WORKAROUND
	==========
	
	In the Report Expression box for the field, use the UPPER() function to
	transform the memo-field contents to upper case.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a report called Test.
	
	2. Add the Employee table to the Data Environment. The Employee table is in
	  Testdata.dbc located in the \Samples\Data folder.
	
	3. Place the Notes field in the detail band.
	
	4. Double-click the field and open the Format dialog. Check to "To upper case"
	  check box. Close the dialog boxes and save the report.
	
	5. Type the following in the Command window:
	
	     REPORT FORM Test PREVIEW
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	
