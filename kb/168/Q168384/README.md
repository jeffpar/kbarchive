---
layout: page
title: "Q168384: PRB: C2248: No Access for Friend Class in a Template Class"
permalink: /kb/168/Q168384/
---

## Q168384: PRB: C2248: No Access for Friend Class in a Template Class

	Article: Q168384
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbCompiler kbCPPonly kbLangCPP kbVC kbVC500 kbVC600kbbuglist
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Declaring a template parameter type as a friend class of a template class,
	causes the compiler error C2248:
	
	  error C2248: 'xx' : cannot access private member declared in class
	  'XX<class T>'
	
	Member access is not granted to friend class T, where T is a template parameter
	of the template class XX.
	
	CAUSE
	=====
	
	The compiler treats typename T as a regular C++ class and not a template
	parameter type. This implies the following:
	
	- typename T, where T is a template parameter type is not granted access to
	  private members of the template class.
	
	- A regular C++ class named class T is granted access to private members of the
	  template class.
	
	RESOLUTION
	==========
	
	Do not declare a template parameter type as a friend of a template class.
	Specify the friend class using the regular C++ class name.
	
	STATUS
	======
	
	This behavior is by design as per C++ standard section 7.1.5.3 paragraph 2.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem.
	
	Sample Code
	-----------
	
	    /*
	     * Compiler Options: none
	     */ 
	
	     template <typename T>
	     class Test
	     {
	        //template parameter T declared as friend class
	        friend class T ;
	        int m_i ;
	     } ;
	
	     class B
	     {
	     public:
	        //Cannot access private member of template class Test
	        //since class B is not recognized as friend class of
	        //template class Test
	        B() { tB.m_i = 0 ;} //C2248 here
	        Test<B> tB ;
	     } ;
	
	     int main()
	     {
	        B bObj ;
	        return 0 ;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool kbCompiler kbCPPonly kbLangCPP kbVC kbVC500 kbVC600 kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
