---
layout: page
title: "Q155160: FIX: Debugger Sees Only One Variable of Two with Same Name"
permalink: /kb/155/Q155160/
---

## Q155160: FIX: Debugger Sees Only One Variable of Two with Same Name

{% raw %}

	Article: Q155160
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCompiler kbVC500fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If there are two global scope variables of the same name in a project, only one
	symbol appears to exist when viewed in the debugger. The correct value is
	displayed for one of the symbols. All other symbols with the same name are
	displayed with that same value.
	
	RESOLUTION
	==========
	
	The two resolutions are:
	
	- Don't use the same name for variables of global scope in different files.
	
	- Link with /pdb:none.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	For example, in the sample code below, the debugger shows the same value for the
	two variables, "i" in main.cpp and "i" in Func1.cpp. To watch the two variables
	in the same Watch window, use the context operator. Add the following two
	expressions in the Watch window:
	
	     {,main.cpp,}i
	
	     {,Func1.cpp,}i
	
	Single-step through the code and notice that even though the two variables
	actually contain different values at all times, they are always displayed with
	the same value--the value of "i" in Main.cpp.
	
	Sample Code
	-----------
	
	     // file main.cpp
	     // Compile options needed: /Zi
	     // main.cpp
	
	     void Func1(int);
	
	     int i=1;
	
	     int main()
	     {
	         i = 200;
	
	         Func1 (i);
	
	         return 0;
	     }
	     // end of file main.cpp
	
	     // file Func1.cpp
	     // Compile options needed: none
	     // Func1.cpp
	
	     #include <stdio.h>
	
	     float i=2.0f;
	
	     void Func1(int n)
	     {
	         printf("\n n= %d",n);
	         i = float(n+2);
	         printf("\n hPf= %f", i);
	     }
	
	     // end of file Func1.cpp
	
	Additional query words: kbVC420bug 10.20
	
	======================================================================
	Keywords          : kbCompiler kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
