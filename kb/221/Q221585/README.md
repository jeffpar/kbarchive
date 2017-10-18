---
layout: page
title: "Q221585: FIX: C1001 - Internal Compiler Error on String Default Argument"
permalink: kb/221/Q221585/
---

## Q221585: FIX: C1001 - Internal Compiler Error on String Default Argument

	Article: Q221585
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0sp3
	Operating System(s): 
	Keyword(s): kbVS97sp3bug
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp3 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling code with a default argument for a string parameter in a function
	declaration results in the following:
	
	  Test.cpp() : fatal error C1001: INTERNAL COMPILER ERROR
	               (compiler file 'msc1.cpp', line 1188)
	      Please choose the Technical Support command on the Visual C++
	      Help menu, or open the Technical Support help file for more information
	
	CAUSE
	=====
	
	This bug was introduced in Visual Studio 97 Service Pack 3. It was not in
	earlier versions of Visual C++ 5.0.
	
	RESOLUTION
	==========
	
	Either upgrade to Visual C++ 6.0, or define a string in the file before the
	function declaration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug was corrected in Microsoft Visual C++, version 6.0.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem and the workaround:
	
	  #include <string>
	  using namespace std ;
	
	  // Uncomment the following line to work around the problem
	  //static std::string empty = ""; 
	
	  void test( string sname = "" );
	
	  void main()
	  {
	     test( ) ;
	  }
	
	Note that the empty string declaration must be in the same translation unit as
	the function declaration.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVS97sp3bug 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbVC500SP3 kbVC500Search
	Version           : winnt:5.0sp3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
