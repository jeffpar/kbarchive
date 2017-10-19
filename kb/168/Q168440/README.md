---
layout: page
title: "Q168440: FIX: Stream Operator &lt;&lt; Cannot Handle &#95;&#95;int64 Type"
permalink: /kb/168/Q168440/
---

## Q168440: FIX: Stream Operator &lt;&lt; Cannot Handle &#95;&#95;int64 Type

	Article: Q168440
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCRT kbVC kbVC500bug kbVC600bug kbNoUpdatekbbuglist
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to pass an __int64 variable to the ostream operator <<, you get
	the following error:
	
	  error C2593: 'operator <<' is ambiguous
	
	CAUSE
	=====
	
	There is no operator << for __int64 type defined for the ostream class.
	
	RESOLUTION
	==========
	
	Define your own version of operator <<. The following sample code section
	shows a simple solution for << operator that converts the __int64 variable
	to a char * type and passes it to the ostream << operator.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The following sample program demonstrates the problem and workaround:
	
	  //Sample.cpp
	  // Compiler Options : /GX
	
	  //#define WORKAROUND   //Uncomment this line to workaround
	
	  #include<iostream>
	  using namespace std;
	
	  #ifdef WORKAROUND
	  std::ostream& operator<<(std::ostream& os, __int64 i )
	  {
	      char buf[20];
	      sprintf(buf,"%I64d", i );
	      os << buf;
	      return os;
	  }
	
	  #endif
	
	  int main(){
	  __int64  i64;
	
	  cout << i64 ;
	
	  return 0;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbCRT kbVC kbVC500bug kbVC600bug kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
