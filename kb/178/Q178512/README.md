---
layout: page
title: "Q178512: FIX: C1001 in Third-Party STL Code Using Visual Studio 97 SP3"
permalink: /kb/178/Q178512/
---

## Q178512: FIX: C1001 in Third-Party STL Code Using Visual Studio 97 SP3

{% raw %}

	Article: Q178512
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0sp3
	Operating System(s): 
	Keyword(s): kbCompiler kbvfp600fix kbVS97sp3bug
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp3 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp3 
	   - Microsoft Visual Studio 97sp3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using a third-party Standard Template Library (STL) (such as the
	Hewlett-Packard implementation), and compile after applying Visual Studio 97
	Service Pack 3, the following error may be generated:
	
	  testerr.cpp bstring.h(2322) : fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'E:\utc\src\\P2\main.c', line 379)
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more Information.
	
	RESOLUTION
	==========
	
	The following are suggested workarounds:
	
	- Separate the construction and return of a temporary object. In the example
	  below, replace the return statement with the respective commented
	  statements:
	
	         if (length())
	        {
	             return basic_string<charT>(data()+pos, (n > (length()-pos)) ?
	                    (length()-pos) : n);
	
	             //basic_string<charT> bt(data()+pos, (n > (length()-pos)) ?
	             //     (length()-pos) : n);
	             //return bt;
	        }
	         else
	        {
	         return basic_string<charT>();// C1001 on this line
	             // basic_string<charT> bt;
	             // return bt;
	        }
	     }
	
	- Use Visual Studio 97 SP2.
	
	- Instead of using the Hewlett-Packard STL, use the STL provided in Visual C++
	  5.0. See any STL sample in the Visual C++ Online documentation for usage
	  information. You may also read the comprehensive information provided on the
	  Web at: http://www.microsoft.com/visualc/stl.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbvfp600fix kbVS97sp3bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:5.0sp3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
