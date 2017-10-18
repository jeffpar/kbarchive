---
layout: page
title: "Q258532: FIX:All Characters in Report Don't Print Under Localized Windows"
permalink: kb/258/Q258532/
---

## Q258532: FIX:All Characters in Report Don't Print Under Localized Windows

	Article: Q258532
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbReportWriter kbvfp600bug kbVS600sp4fix kbVS600sp4 kbVS600sp5fix
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You create a report in Visual FoxPro 6.0 running on localized or Hebrew or
	Arabic-enabled Windows 9x or Windows NT. When previewing, printing to a print
	device, or directing output to the screen, the report does not print all
	characters. The characters are omitted at random; therefore, different
	characters may appear or disappear each time the report runs.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run Visual FoxPro 6.0 on Hebrew or Arabic Windows 98.
	
	2. Create a Quick Report based on the Customer sample table.
	
	3. Add some fields to the Detail Band of the report.
	
	4. Print or preview the report.
	
	NOTE: In the output of the report, you should see that some random characters are
	missing from the report. If you do not see this behavior the very first time,
	repeat step 4 several times.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbprint kbPrinting kbReportWriter kbvfp600bug kbVS600sp4fix kbVS600sp4 kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
