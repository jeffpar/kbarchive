---
layout: page
title: "Q263609: BUG: Bad Code for Unsigned and Signed Comparisons with /Og"
permalink: /kb/263/Q263609/
---

## Q263609: BUG: Bad Code for Unsigned and Signed Comparisons with /Og

{% raw %}

	Article: Q263609
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCodeGen kbCompiler kbVC600bug
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler may generate incorrect code for a signed comparison following an
	unsigned same comparison when the /Og optimization is enabled.
	
	Please refer to the sample code in the "More Information" section for details.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the bug:
	
	  // Test.cpp
	  // Compiler option needed: /Og
	  #include <stdio.h>
	  int a=-1;
	  void main() {
	  	if ((unsigned int)a > 5U) {
	  		if (a > 5) {
	  			printf("%d > 5\n", a);
	  		} else {
	  			printf("%d < 0\n", a);
	  		}
	  	} else {
	  		printf("0 <= %d <= 5\n", a);
	  	}
	  }
	
	Program Output:
	-1 > 5
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCodeGen kbCompiler kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
