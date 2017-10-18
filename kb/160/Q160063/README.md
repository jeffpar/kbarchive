---
layout: page
title: "Q160063: BUG: Printing Unconverted 2.x Report from Preview Causes Fault"
permalink: kb/160/Q160063/
---

## Q160063: BUG: Printing Unconverted 2.x Report from Preview Causes Fault

	Article: Q160063
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0, using the Print button in the Report Preview toolbar to
	print an unconverted FoxPro 2.x report causes Visual FoxPro to terminate with an
	Invalid Page Fault.
	
	WORKAROUND
	==========
	
	To work around this problem, convert the 2.x report into Visual FoxPro 5.0
	format before using the Print button in the Report Preview toolbar to print the
	report.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Visual FoxPro 5.0 allows you to preview or print an unconverted report that was
	created using previous versions of FoxPro. Visual FoxPro 5.0 terminates,
	however, if you try to print an unconverted FoxPro 2.x report in the preview
	mode using the Print button on the toolbar. This behavior does not happen in
	Visual FoxPro 3.0 because Visual FoxPro 3.0 does not have the Print button for
	the report preview toolbar.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a quick report in FoxPro 2.x. (Using the customer table in the
	  \Tutorial folder.)
	
	2. Run Visual FoxPro 5.0.
	
	3. Without converting the 2.x report, in the Command window, type in the
	  following command:
	
	  " REPORT FORM <2.x reportname> PREVIEW " (without the quotation marks)
	
	4. When the preview comes up, press the Print button on the Report Preview
	  toolbar to print the report.
	
	NOTE: Visual FoxPro terminates at this point with an Invalid Page Fault.
	
	
	Additional query words: kbdse vfoxwin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
