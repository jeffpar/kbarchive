---
layout: page
title: "Q167321: FIX: Wrong Namespace Member Selected for Qualified ID"
permalink: /kb/167/Q167321/
---

## Q167321: FIX: Wrong Namespace Member Selected for Qualified ID

{% raw %}

	Article: Q167321
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbCPPonly kbLangCPP kbVC kbVC500bug kbVC600bug kbNoUpdatekbbuglist
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The wrong member function is called if you:
	
	- define a class with the same name, in different scopes;
	
	- create a temporary object, as shown in the sample, of that class type;
	
	- call a member function of that class.
	
	See the MORE INFORMATION section for a sample that demonstrates the problem and
	the workaround.
	
	RESOLUTION
	==========
	
	Do not create a temporary object. Instead create a local object, and then call
	the member functions through the local object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The following sample demonstrates the problem and the workaround.
	
	Sample Code
	-----------
	
	  /*
	  Compile Options: /GX
	  */ 
	  # include <iostream>
	  using namespace std ;
	
	  struct CMyClass
	  {
	     virtual void DoSomething()
	     {
	        cout << "::CMyClass::DoSomething()\n";
	     }
	  };
	
	  namespace MyNameSpace
	  {
	     struct CMyClass
	     {
	        virtual void DoSomething()
	        {
	           cout << "MyNameSpace::CMyClass::DoSomething()\n";
	        }
	     };
	  }
	
	  int main()
	  {
	     MyNameSpace::CMyClass().DoSomething() ;
	     // Workaround: Comment the line above,
	     // Uncomment the following lines
	     // MyNameSpace::CMyClass C1 ;
	     // C1.DoSomething();
	     return 0;
	  }
	
	Additional query words: namespace
	
	======================================================================
	Keywords          : kbcode kbCompiler kbCPPonly kbLangCPP kbVC kbVC500bug kbVC600bug kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
