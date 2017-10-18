---
layout: page
title: "Q216587: BUG: Previewing Report Writer Causes Memory Leak"
permalink: kb/216/Q216587/
---

## Q216587: BUG: Previewing Report Writer Causes Memory Leak

	Article: Q216587
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbReportWriter kbvfp500aBUG kbvfp600bug kbVS600sp3 kbGrpDSFox
	Last Modified: 22-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing a REPORT FORM <formname> PREVIEW with the Status Bar set ON causes
	Visual FoxPro to leak one memory handle each time you close the Preview window.
	
	RESOLUTION
	==========
	
	Issue a SET STATUS BAR OFF before previewing the report.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. The Visual Studio 6.0 Service Pack 3 readme
	erroneously lists this bug as being fixed. Service Pack 3 did not fix this bug.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a report, called mytest, containing a label in the Detail line saying
	  "Test." (This is not a field from a table.)
	
	2. Open the Employee table and place the following code in a program and run
	  it:
	
	  SET STATUS BAR ON
	  FOR i=1 to 10
	    ? SYS(1011)
	    REPORT FORM mytest.frx PREVIEW 
	  NEXT
	
	3. Run the program.
	
	4. When the Preview window appears, close it.
	
	As the code runs, the notice that the number of memory handles increases by one
	after the first few iterations of the For.. Next loop. The problem occurs
	regardless of whether you close the window using the Close button on the toolbar
	or the Close box of the Preview form window.
	
	The SYS(1011) function is used to determine how many memory handles are being
	used up by a process within FoxPro. This is an undocumented SYS function.
	
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbReportWriter kbvfp500aBUG kbvfp600bug kbVS600sp3 kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
