---
layout: page
title: "Q254226: BUG: Bad Code Generation with Global Optimization"
permalink: /kb/254/Q254226/
---

## Q254226: BUG: Bad Code Generation with Global Optimization

{% raw %}

	Article: Q254226
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
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
	
	The global optimizer may generate incorrect code if two if statements have
	identical conditional clauses that create side effects. Please refer to the
	sample code in the "More Information" section for details.
	
	RESOLUTION
	==========
	
	Following are two possible ways to work around this problem:
	
	1. Use the #pragma optimize("g",off) method to turn off global optimization at
	  the function level. By making the function inline and compiling with the /Ob1
	  or /Ob2 compiler switches also alleviates this problem.
	
	2. Modify the code to avoid the construct in workaround number one. For example,
	  when you change the second if statement to else if this change generates the
	  correct code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the bug:
	
	  //bug.cpp 
	  /* compiler option: cl /Og */ 
	  #include <stdio.h>
	
	  //#pragma optimize("g",off) // Uncomment this line to workaround 1.
	  // inline void funcopt(int i) // Uncomment this line to workaround 2 and comment the function funcopt() definition.
	  void funcopt(int i)
	  {
	      if(i--==0) {
	  	    printf("Zero\n");
	      } 
	      if(i--==0) {
	  	    printf("One\n");
	      }
	      return;
	  }
	
	  int main()
	  {
	      funcopt(1);
	      return 0;
	  } 
	
	The expected output is 1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCodeGen kbCompiler kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
