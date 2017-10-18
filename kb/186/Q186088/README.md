---
layout: page
title: "Q186088: BUG: Report Variable Not Released After Report Runs"
permalink: kb/186/Q186088/
---

## Q186088: BUG: Report Variable Not Released After Report Runs

	Article: Q186088
	Product(s): Microsoft FoxPro
	Version(s): 3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, a variable defined within a report is not released
	after closing the report or after printing.
	
	RESOLUTION
	==========
	
	Here are two resolutions:
	
	- Issue a RELEASE ALL LIKE <variable name> command after the report
	  completes printing or after previewing the report.
	
	-or-
	
	- Place the code to modify, to print, or to preview the report in a program or
	  procedure. Because the scope of variable is private, the variable disappears
	  when the procedure or program finishes running.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	In the example below, a report variable remains in memory after closing or
	printing the report.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Employee.dbf table.
	
	2. Create a Quick Report based on the Employee table.
	
	3. Add a memory variable named Leftover to the report.
	
	4. Save the report with the name Ztest.frx and close the report.
	
	5. A reference to the variable appears on the desktop after you type the
	  following code in the Command window and press ENTER:
	
	        DISPLAY MEMORY LIKE Leftover
	
	6. Next, type the following in the Command window:
	
	  " CLEAR ALL
	  REPORT FORM Ztest PREVIEW" (without the quotation marks)
	
	7. Close the Preview window without printing the report and repeat step 5.
	
	  A reference to the Leftover memory variable appears on the desktop but the
	  variable does not remain in memory.
	
	Additional query words: kbDSupport KBDSE kbVFp500bug kbVFp500 kbVFp300bug kbVFp300b kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
