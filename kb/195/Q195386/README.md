---
layout: page
title: "Q195386: PRB: C4786 After Porting from Version 5.0 to Version 6.0"
permalink: /kb/195/Q195386/
---

## Q195386: PRB: C4786 After Porting from Version 5.0 to Version 6.0

{% raw %}

	Article: Q195386
	Product(s): Microsoft C Compiler
	Version(s): WINNT:6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbSTL kbVC600
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building a project with Visual C++ 6.0 that compiles without a C4786
	warning in Visual C++ 5.0, you may receive C4786 warnings, sometimes followed
	by:
	
	  Fatal Error C1033: cannot open program database 'vc60.pdb'.
	
	RESOLUTION
	==========
	
	In Visual C++ 5.0, using the following
	
	     #pragma warning (disable : 4786)
	
	after including STL headers, disables the warning:
	
	  C4786:'identifier' : identifier was truncated to 'number' characters in the
	  debug information.
	
	However, this method does not disable all such warnings in Visual C++ version
	6.0. The occurrence of many C4786 warnings may result in the following:
	
	  C1033 error: cannot open program database 'vc60.pdb'.
	
	Use the pragma directive before you include any STL headers to disable the
	warnings.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	     // compile options required: /Zi /GX
	     #include <iostream>
	     #include <string>
	     #include <map>
	
	     // move this pragma before the includes above to disable the
	     //C4786 warnings
	     #pragma warning (disable : 4786)
	
	     int main () {
	        using namespace std;
	        map<int,string> m;
	        m[0] = "hello world";
	        cout << m[0] << endl;
	
	        return 0;
	     }
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q122539 BUG: C4786 or C1067 Caused by Long Identifier and /Zi
	
	  Q167355 BUG: C4786 Warning Is Not Disabled with #pragma Warning
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbCompiler kbSTL kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbVCPE600 kbVCEE600 kbVCLE600
	Version           : WINNT:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
