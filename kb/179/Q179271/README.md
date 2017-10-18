---
layout: page
title: "Q179271: FIX: C1001 Error for More Than One Explicit Instantiation"
permalink: kb/179/Q179271/
---

## Q179271: FIX: C1001 Error for More Than One Explicit Instantiation

	Article: Q179271
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtemplate kbCompiler kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error C1001 is produced when more than one explicit instantiation of member
	template function is implemented. The compiler generates the following error
	message:
	
	  test.cpp(13) : fatal error C1001: INTERNAL COMPILER ERROR
	
	  (compiler file 'msc1.cpp', line 1188)
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information
	
	CAUSE
	=====
	
	Member template implementation is not supported in this product.
	
	RESOLUTION
	==========
	
	Do not use explicit instantiation for class member template functions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code produces the error message described in the SYMPTOMS
	section:
	
	  // test.cpp
	  #include <iostream.h>
	  lass A
	  {
	  public:
	    template <class T> int getit(int i , T * it )
	    {
	       cout << "template getit\n" ;
	       return i;
	    }
	  // explicit instantiations
	  template  int getit(int i, double * it);
	
	  template   int getit (int i, char * it);// C1001 error on this line
	  };
	
	
	Additional query words: ICE
	
	======================================================================
	Keywords          : kberrmsg kbtemplate kbCompiler kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
