---
layout: page
title: "Q171065: FIX: Breakpoint Skip Count Resets to Zero After First Pass"
permalink: kb/171/Q171065/
---

## Q171065: FIX: Breakpoint Skip Count Resets to Zero After First Pass

	Article: Q171065
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set a breakpoint with a skip count, the debugger behaves correctly and
	stops at the breakpoint for the first time after skipping the breakpoint the
	number of counts specified. However, after the first pass the breakpoint is hit
	every time without skipping the breakpoint for the specified counts.
	
	CAUSE
	=====
	
	The debugger resets the skip count to 0 after the first pass.
	
	RESOLUTION
	==========
	
	See the MORE INFORMATION section for a workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The skip count feature is very useful in a loop where you want to stop inside
	the loop after skipping a line of code for a certain number of times. The
	following sample describes a situation of this nature.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Build the following code with debug information.
	
	  // File name test.cpp
	
	   #include <iostream.h>
	
	   int main()
	   {
	       cout << "Start debugging" << endl;
	
	       for( int i = 0; i < 100; ++i )
	           cout << i << "\n";        //SET A BREAKPOINT HERE
	
	     return 0;
	   }
	
	Set a breakpoint on the line shown and press the F5 key (Debug Go). The debugger
	will stop at this line of code. The Auto window will show the value of i to be
	0. Press the F5 key. Again, the debugger stops at the breakpoint and the value
	of i is shown to be 1.
	
	1. From the Edit menu select "Breakpoints...".
	
	2. You will see in the dialog box for the Location tab that the breakpoint is
	  set "at{,test.cpp",}.line#". Highlight this breakpoint, and Condition is
	  enabled. Click Condition.
	
	3. A dialog box with an edit box entitled "Enter the number of times to skip
	  before stopping" appears. Enter number 5 and click OK.
	
	4. Click OK again to close the dialog box.
	
	5. From the Edit menu select "Breakpoints..." again. You will see that the text
	  in the Breakpoints box now reads "at{,test.cpp",}.line#,skip 5 time(s),(5
	  remaining)".
	
	6. Click Cancel or OK to close the dialog box.
	
	7. With the above setting, you want to skip the line of code with the breakpoint
	  the specified number of times. Press the F5 key, and you will find that the
	  breakpoint has been skipped 5 times and the value of i is now 7.
	
	8. Again, from the Edit menu select "Breakpoints...". This time you will notice
	  that the text in the Breakpoints box reads "at{,test.cpp",}.line#,skip 5
	  time(s),(0 remaining)".
	
	9. Click Condition button, and notice that the skip count is still 5.
	
	10. If you press the F5 key again, the breakpoint is not skipped 5 times.
	  Instead it stops for every increment of i.
	
	Workaround
	----------
	
	Change the skip count to a value other than the last set using Condition. For
	example set it to 0, click OK, and go back to main dialog box. Set Condition to
	5, click OK, and click OK again to close the main dialog box. Press the F5 key,
	and the breakpoint is skipped 5 times. You must repeat this process every time
	you want to skip more than once.
	
	Alternatively, if your loop has a count variable like "i" in the sample code
	above, you can use conditional breakpoint to get the same effect. Set breakpoint
	to break when 'i % 5 == 0' is true.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbide kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
