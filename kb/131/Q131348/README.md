---
layout: page
title: "Q131348: PRB: SET STEP ON Opens the TRACE Window Only"
permalink: /kb/131/Q131348/
---

## Q131348: PRB: SET STEP ON Opens the TRACE Window Only

{% raw %}

	Article: Q131348
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the SET STEP ON command is executed outside of a program, it brings up the
	TRACE window, but it does not step through the program unless you have a
	breakpoint set in your program.
	
	CAUSE
	=====
	
	The following information from the Visual FoxPro Help file explains how SET STEP
	works:
	
	SET STEP is used to debug programs. You can insert SET STEP ON in a program at
	the point where you want to execute individual commands. For information about
	the Trace window, see the Trace Window topic in the Visual FoxPro Help file and
	Chapter 16, "Testing and Debugging Applications," in the Developer's Guide.
	
	To pass parameters to a program and then trace its execution, follow these
	steps:
	
	1. Open the Trace window.
	
	2. From the Trace window's Program menu, choose Open and select the program to
	  trace.
	
	3. Set a breakpoint on the first executable line of the program.
	
	4. In the Command window, use DO to run the program with the parameters.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	  SET STEP ON
	  DO <a program that does not have any breakpoints>
	
	The TRACE window is activated, but stepping does not occur because there are no
	breakpoints.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
