---
layout: page
title: "Q141737: BUG: Invalid Page Fault When Form Released in Error Event"
permalink: /kb/141/Q141737/
---

## Q141737: BUG: Invalid Page Fault When Form Released in Error Event

	Article: Q141737
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A formset contains a command that releases the form in the form's error event.
	If the formset is run multiple times and released due to errors, Visual FoxPro
	will cause an Illegal Operation under Windows 95 and exit to the operating
	system.
	
	WORKAROUND
	==========
	
	Place RELEASE THISFORMSET in the Error Event of the form instead of using
	RELEASE THISFORM. Then the form will run successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a Formset containing one form.
	
	2. In the Activate Event of the form enter the following lines of code:
	
	     ERROR(1705)
	     ERROR(1705)
	
	3. Add a command button, and add the following command to its Click event:
	
	     THISFORM.RELEASE
	
	4. In the Forms Error event, enter the following code:
	
	     ? nerror,MESSAGE()
	     WAIT
	     RELEASE THISFORM
	
	5. Run the form two or three times. Visual FoxPro will return an Invalid Page
	  Fault error and exit to the operating system.
	
	Additional query words: VFoxWin page fault buglist3.00 kbvfp300 kbvfp300b kbvfp500 buglist3.00b
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500
	Version           : WINDOWS:3.0,3.0b,5.0
	
	=============================================================================
	
