---
layout: page
title: "Q263287: VFP6 Sample: Sets Print Options Without Printer Prompt Command"
permalink: kb/263/Q263287/
---

## Q263287: VFP6 Sample: Sets Print Options Without Printer Prompt Command

	Article: Q263287
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbfile kbprint kbSample kbPrinting kbReportWriter kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ReportFormPrompt.exe is a sample that contains a Visual FoxPro form that
	demonstrates how you can control the print options for a printer without the
	REPORT/LABEL FORM ... TO PRINTER PROMPT command.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  ReportFormPrompt.exe
	  (http://download.microsoft.com/download/vfox60/sample/6.0/w9x2k/en-us/ReportFormPrompt.exe)
	
	Release Date: May-19-2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	HOW TO USE THE REPORTFORMPROMPT.EXE SAMPLE
	
	NOTE: This code is intended for use with Visual FoxPro 6.0 only.
	
	At times, you may need to control the print options for a printer. The options
	may include the list of printers to which you print a report/label, the number
	of copies you need to print, or any other options that are available with the
	REPORT FORM...PROMPT command.
	
	There is a Visual FoxPro form in the ReportFormPrompt.exe sample that
	demonstrates how you can control these print options by using the Windows
	Spooler API and Windows API.
	
	The sample form also demonstrates how you can hide printers from the user so that
	unsupported printers do not display.
	
	Copy the ReportFormPrompt.exe sample to a folder and run the .exe file.
	
	The ReportFormPrompt.exe file contains the following files:
	
	+----------------------+
	| foxwingdi.h          | 
	+----------------------+
	| getversion.vct       | 
	+----------------------+
	| getversion.vcx       | 
	+----------------------+
	| landscape.bmp        | 
	+----------------------+
	| landscape.msk        | 
	+----------------------+
	| portrait.bmp         | 
	+----------------------+
	| portrait.msk         | 
	+----------------------+
	| readme.txt           | 
	+----------------------+
	| reportformprompt.sct | 
	+----------------------+
	| reportformprompt.scx | 
	+----------------------+
	
	Syntax:
	
	  DO FORM ReportFormPrompt [WITH [cReportName] [, cForWhile] [, cScope]]
	
	PARAMETERS:
	
	+----------------------------------------------------------------------------------------------------+
	| cReportName | If empty, user is prompted. If a file extension is not supplied, it defaults to FRX. | 
	+----------------------------------------------------------------------------------------------------+
	| cForWhile   | Add any "FOR <expr>" and/or "WHILE <expr>".                                          | 
	+----------------------------------------------------------------------------------------------------+
	| cScope      | Default to ALL                                                                       | 
	+----------------------------------------------------------------------------------------------------+
	
	RETURNS:
	Nothing
	
	EXAMPLE:
	
	  DO FORM ReportFormPrompt WITH "MyReport.frx", "FOR CustID = 3 WHILE OrderID = 2", "Next 100"
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q162798 HOWTO: Use SET PRINTER TO NAME to Specify Report Destination
	
	  Q131201 Print Setup Options Saved with the Report
	
	  Q251236 HOWTO: Programmatically Set the Number of Copies for a Report
	
	Contributions by:
	
	Tom Zeller
	DSN, Inc.
	821 B Street,
	Centralia, WA 98531
	
	(C) Microsoft Corporation 2000, All Rights Reserved
	
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: ReportFormPrompt
	
	======================================================================
	Keywords          : kbfile kbprint kbSample kbPrinting kbReportWriter kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
