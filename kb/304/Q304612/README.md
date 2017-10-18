---
layout: page
title: "Q304612: PRB: IViewObject Interface Error Previewing RTF File In Report"
permalink: kb/304/Q304612/
---

## Q304612: PRB: IViewObject Interface Error Previewing RTF File In Report

	Article: Q304612
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbAutomation kbContainer kbReportWriter kbCodeSnippet
	Last Modified: 04-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Office 2000 is installed on your computer and you preview a
	Visual FoxPro report that has an OLE Bound control that displays a Rich Text
	Format (.rtf) file that is stored in a general field, you may receive the
	following error message:
	
	  OLE error code 0x8004006d: Object doesn't support IViewObject interface.
	
	CAUSE
	=====
	
	Enable Script Blocking is selected in Norton 2001 Anti-Virus.
	
	NOTE: Script Blocking is not available in the original version of Norton 2001
	Anti-Virus. The error message does not occur until a Norton LiveUpdate is run.
	The Norton LiveUpdate accesses Norton's Web site and downloads the updated files
	that add Script Blocking.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. In Norton 2001 Anti-Virus, click Options, then select Script Blocking.
	
	2. Clear Enable Script Blocking and close the dialog box.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a computer that has Norton 2001 Anti-Virus installed, make sure that
	  Norton's LiveUpdate has been run so that the newest update has been installed
	  from the Web site.
	
	2. In Word 2000, create an .rtf file and name it Myrtf.rtf. Add some text to the
	  file, then save the file.
	
	3. Run the following code to create a table and a report:
	
	  CREATE TABLE mygen (gen_fld G)
	  APPEND BLANK
	  APPEND GENERAL gen_fld FROM myrtf.RTF
	  CREATE REPORT myrtf
	
	4. Using the Report Controls toolbar, add an OLE Bound control to the report
	  based on the mygen.gen_fld field.
	
	5. Preview the report.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbContainer kbReportWriter kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :5.0,5.0a,6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	
