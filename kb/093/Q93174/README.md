---
layout: page
title: "Q93174: FIX: CVW Does Not Trace Into QuickWin FORTRAN Subprograms"
permalink: /kb/093/Q93174/
---

## Q93174: FIX: CVW Does Not Trace Into QuickWin FORTRAN Subprograms

{% raw %}

	Article: Q93174
	Product(s): Microsoft Programming Utilities
	Version(s): 3.06,3.07,4.0,4.01
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 3.06, 3.07, 4.0, 4.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When CodeView for Windows (CVW) is running in version 3.1 of the Microsoft
	Windows graphical environment, CVW does not trace into the subprograms of an
	application written in FORTRAN and compiled as a QuickWin application. The Step
	Into key (F8) acts as a Step Over (F10) and skips to the instruction that
	follows the current routine.
	
	RESOLUTION
	==========
	
	Place a break point in the desired subprogram and continue execution. CodeView
	halts execution at the breakpoint as desired.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 3.06, 3.07,
	4.0, and 4.01 for Windows. This problem was corrected in CodeView version 4.1
	for Windows.
	
	MORE INFORMATION
	================
	
	In the sample code below, select the print statement and press the F9 key to set
	a break point. Use the F10 key to step through the code. CodeView stops on the
	print statement in the sub1 subprogram.
	
	Sample Code
	-----------
	
	  C --------------------------------------
	  C compile options: /MW /Od /Zi
	  C --------------------------------------
	
	        call sub1()
	        end
	
	        subroutine sub1()
	        print *,'Inside sub1'
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401
	Version           : :3.06,3.07,4.0,4.01
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
