---
layout: page
title: "Q253884: BUG: Printing to a Non-Default Printer May Cause an Error"
permalink: kb/253/Q253884/
---

## Q253884: BUG: Printing to a Non-Default Printer May Cause an Error

	Article: Q253884
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbReportWriter kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a print request is sent to a non-default printer with the Microsoft Visual
	FoxPro REPORT FORM ... PROMPT command, Visual FoxPro may cause an error,
	generate a GPF, quit or print to the wrong printer. The text of the error
	message is:
	
	  Error loading printer driver
	
	RESOLUTION
	==========
	
	To resolve this problem you must programmatically change the FoxPro printer.
	
	You can use code to get the name of the printer before you print, set the printer
	to that name and then issue the REPORT FORM command.
	
	The following Microsoft Knowledge Base article explains how you can specify that
	a Visual FoxPro report be sent to a particular printer:
	
	  Q162798 HOWTO: Use SET PRINTER TO NAME to Specify Report Destination
	
	In most instances, this method is acceptable. However, there may be some
	instances that require more control over the report options, such as number of
	copies, paper source, paper size, and page ranges.
	
	If you require more control over the print report options, you may want to use
	the ReportFormPrompt.exe sample.
	
	For additional information on how to download the ReportFormPrompt.exe sample,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q263287 SAMPLE: ReportForm.exe Sets Print Options without REPORT FORM ...
	  PROMPT Command
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	This problem may be reproducible with several different types of printers that
	are installed on a computer.
	
	1. Install the following printers to the computer:
	
	   HP4000 PCL
	   Kyocera FS-3500
	   Generic Text (Set this printer as default)
	
	NOTE: The actual printer does not have to exist. You can use the Printers control
	panel applet to pause printing to these printers in order to suppress "printer
	not ready" error messages. The following combination produces the most
	consistent results of failure.
	
	2. Create a report named MyReport.
	
	3. Enter the following code into the Visual FoxPro Command window, and then
	  press ENTER:
	
	  REPORT FORM MyReport TO PRINTER PROMPT
	
	4. Print to the printers in the following order:
	
		HP4000 PCL		OK
		Kyocera FS-3500		Error loading PD
		*Generic Text		OK
		HP4000 PCL		Error loading PD
		Kyocera FS-3500		Error loading PD
	
	NOTE: * Denotes the default printer
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q162798 HOWTO: Use SET PRINTER TO NAME to Specify Report Destination
	
	  Q131201 Print Setup Options Saved with the Report
	
	  Q251236 HOWTO: Programmatically Set the Number of Copies for a Report
	
	Additional query words: REPORT FORM LABEL PROMPT ERROR GPF
	
	======================================================================
	Keywords          : kbprint kbPrinting kbReportWriter kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
