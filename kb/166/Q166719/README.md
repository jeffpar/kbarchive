---
layout: page
title: "Q166719: FIX: Wrong Exception Rethrown with Global Optimization"
permalink: /kb/166/Q166719/
---

## Q166719: FIX: Wrong Exception Rethrown with Global Optimization

{% raw %}

	Article: Q166719
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbcode kbtool kbVC500bug kbVC600fixkbbuglist
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The wrong exception is rethrown when global optimization (/Og) is enabled. For
	example, in the following sample, the correct output is:
	
	  A 1st throw
	  B 2nd throw
	  C 1st throw
	
	However, if global optimization (/Og) is enabled, the output is:
	
	  A 1st throw
	  B 2nd throw
	  C 2nd throw
	
	RESOLUTION
	==========
	
	To work around the problem, disable the global optimization on the command line
	or use the optimize pragma to disable the optimization for the function where
	the problem occurs. For example:
	
	      #pragma optimize("g", off)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Microsoft
	Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	      //test.cpp
	      /* Compiler options needed : /GX  */ 
	      #include <iostream>
	      using namespace std;
	      #pragma optimize("g", on)
	      void main() {
	          try
	          {
	              char* pStr = NULL;
	              try
	              {
	                  throw "1st throw\n";
	              }
	              catch( char* str )
	              {
	                  cout << "A " << str;
	                  try
	                  {
	                      throw "2nd throw\n";
	                  }
	                  catch( char* str )
	                  {
	                      cout <<"B "<< str;
	                  }
	                  throw;
	              }
	          }
	          catch ( char* str )
	          {
	              cout <<"C "<< str;
	          }
	      }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbtool kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
