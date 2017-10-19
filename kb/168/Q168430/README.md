---
layout: page
title: "Q168430: FIX: Using Referenced Integer to Access Array Generates CXX0034"
permalink: /kb/168/Q168430/
---

## Q168430: FIX: Using Referenced Integer to Access Array Generates CXX0034

	Article: Q168430
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbDebug kbide kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual C++ debugger generates the following error while using a referenced
	integer to access array.
	
	  Error: CXX0034: types incompatible with operator
	
	The MORE INFORMATION section below contains a sample showing this behavior.
	
	RESOLUTION
	==========
	
	The workaround is not to use referenced integer a[i] to access array as shown in
	the sample. Use index value instead, as a[1].
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Build the following sample with debug information:
	
	     //test.cpp
	     int func(int& i, int a[])
	       {
	        return 0;
	       }
	
	     int main(void)
	       {
	       int a[] = {1, 2, 3};
	       int  i = 1;
	       func(i, a);// SET A BREAKPOINT HERE
	         return 0;
	       }
	
	Start the debugger with a breakpoint shown. If you now step into func() by
	hitting the F11 key and put a watch on "a[i]," you will get the error mentioned
	above. However, evaluating "i" and "a[1]" works just fine.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbDebug kbide kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
