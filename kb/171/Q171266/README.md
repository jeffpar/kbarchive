---
layout: page
title: "Q171266: PRB: Report to File Command Launches WinFax Application"
permalink: /kb/171/Q171266/
---

## Q171266: PRB: Report to File Command Launches WinFax Application

	Article: Q171266
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro, issuing a REPORT FORM to FILE command sends the contents of
	the report to a file with the selected printer driver's control codes. The file
	can then be copied to the selected printer. With WinFax (version 8.0) selected
	as the printer, issuing a REPORT FORM to FILE command behaves the same if REPORT
	FORM to PRINTER. Rather than going to a file, WinFax is launched and the report
	is sent as a fax.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install WinFax 8.0. WinFax should appear as a Printer option.
	
	2. In Visual FoxPro, create and save a report as "FAXTEST." Select "WinFax" as
	  the printer from the File, Page Setup menu option.
	
	3. From the Command window, issue the following code:
	
	        REPORT FORM faxtest TO FILE test.fax
	
	The WinFax application starts and proceeds to process the report as if it had
	been sent to PRINTER rather than send the report to a file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
