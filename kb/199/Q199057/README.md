---
layout: page
title: "Q199057: BUG: Expansion of &#95;&#95;LINE&#95;&#95; Macro Is Incorrect When Using /ZI"
permalink: /kb/199/Q199057/
---

## Q199057: BUG: Expansion of &#95;&#95;LINE&#95;&#95; Macro Is Incorrect When Using /ZI

{% raw %}

	Article: Q199057
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC600bug
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The results of the __LINE__ macro are incorrect when you use Debug Information
	for Edit and Continue (/ZI). The problem may manifest itself as compiler,
	linker, or run-time errors.
	
	RESOLUTION
	==========
	
	To work around this problem, use the Program Database option (/Zi) instead of
	Edit and Continue (/ZI).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem:
	
	     // TEST.CPP - Compile with /GX and /Zi or /ZI.
	     #include <iostream>
	     using namespace std;
	
	     #define CONCAT(s1,s2) #s1 ## #s2
	     #define MSG(n) cout << CONCAT(Message at line\x20,n) << endl;
	
	     int main()
	     {
	     MSG(__LINE__);
	     return 0;
	     }
	
	When compiled with the /Zi option, output is correct:
	
	  Message at line 10
	
	When compiled with the /ZI option, output is incorrect:
	
	  Message at line (__LINE__Var+1)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
