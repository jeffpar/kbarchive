---
layout: page
title: "Q139296: BUG: C2955 Error Generated If Using Same Name as Template"
permalink: kb/139/Q139296/
---

## Q139296: BUG: C2955 Error Generated If Using Same Name as Template

	Article: Q139296
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500bug
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the name of a template class as a void * parameter to a function, as
	illustrated in this article results in this error:
	
	  C:\test.cpp(6) : error C2955: 'a' class template name expecting parameter
	  list
	
	WORKAROUND
	==========
	
	The resolution to this problem depends on which version of Visual C++ is being
	used. For Visual C++ 2.x, either change the parameter name, change the parameter
	type from a void * to non pointer data type, or do not use a template class.
	
	For Visual C++ version 4.0 and later, you may use one of the version 2.x
	workarounds, or use namespaces. Consult your Visual C++ documentation for more
	information on how to use namespaces.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	     template<class T>
	     class a
	     {
	     };
	
	     void fn( void* a );
	
	Additional query words: kbVC400bug name space
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500bug 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0
	Issue type        : kbbug
	
	=============================================================================
	
