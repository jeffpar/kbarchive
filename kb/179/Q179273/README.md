---
layout: page
title: "Q179273: FIX: C2059 Initializing Static Data Member of a Template Class"
permalink: /kb/179/Q179273/
---

## Q179273: FIX: C2059 Initializing Static Data Member of a Template Class

{% raw %}

	Article: Q179273
	Product(s): Microsoft C Compiler
	Version(s): 5.0,5.0sp1,5.0sp2,5.0sp3,6.0
	Operating System(s): 
	Keyword(s): kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 5.0sp1, 5.0sp2, 5.0sp3, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 5.0sp1, 5.0sp2, 5.0sp3, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler generates the following errors when compiling the sample code shown
	below (the code initializes a static data member of a template class):
	
	  C2059: syntax error : syntax error : 'string'
	  C2063: 'identifier' : 'r' : not a function
	  C2040: 'operator' : 'r' : 'class Register (void)' differs in levels of
	  indirection from 'class Register'
	
	RESOLUTION
	==========
	
	To work around this problem, use the assignment operator when initializing the
	static data member of a template class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem and the workaround:
	
	     /* Compile options needed: none
	     */ 
	
	     #include <stdio.h>
	
	     class Register {
	     public:
	
	         Register( const char* class_name )
	         { printf("In Register ctor for class %s.\n", class_name); }
	         ~Register()
	         { printf("In Register dtor.\n"); }
	
	     };
	
	     template<class T>
	     class Base {
	     public:
	
	         static Register r;
	
	     };
	
	    template<class T>
	     Register Base<T>::r( "Base<T>" ); //Cause of C2059, C2063 and C2040
	
	     // To work around the problem, comment the line above and
	     // uncomment the following line:
	     // Register Base<T>::r = Register("Base<T>");
	
	     int main() {
	         return 0;
	     }
	
	Additional query words: initializer
	
	======================================================================
	Keywords          : kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500SP1 kbVC500SP2 kbVC500SP3 kbVC500Search
	Version           : :5.0,5.0sp1,5.0sp2,5.0sp3,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
