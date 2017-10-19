---
layout: page
title: "Q174404: BUG: Field Aliases Options in Expression Builder Dialog Disabled"
permalink: /kb/174/Q174404/
---

## Q174404: BUG: Field Aliases Options in Expression Builder Dialog Disabled

	Article: Q174404
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Report Writer, all the options in the Field Aliases section of the
	Expression Builder Options dialog box are disabled. Therefore, the Report Writer
	always adds alias names to the report field objects. This is not a problem in
	the Visual FoxPro 3.0x.
	
	RESOLUTION
	==========
	
	There are two workarounds for this problem. First, issue a CREATE REPORT command
	and select Quick Report from the Report menu bar. In the Quick Report dialog
	box, clear the Add Alias option. Second, use the Report Wizard to create the
	report. The Report Wizard does not place alias names on the field objects.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following in the Command window:
	
	        CREATE REPORT Zjunk
	
	2. Add a field from the Report Controls toolbar to the Report.
	
	3. In the Report Expression dialog box, click Expression.
	
	4. In the Expression Builder, click Options.
	
	5. All the options within the Field Aliases section of the Expression Builder
	  Options dialog box are disabled.
	
	Additional query words: Report writer
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
