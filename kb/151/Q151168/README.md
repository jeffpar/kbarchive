---
layout: page
title: "Q151168: FIX: Abstract Class Instantiated as a Temporary Object"
permalink: /kb/151/Q151168/
---

## Q151168: FIX: Abstract Class Instantiated as a Temporary Object

{% raw %}

	Article: Q151168
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbLangCPP kbVCkbbuglist kbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In certain cases, Visual C++ allows abstract classes to be instantiated as
	temporary objects. The sample code below demonstrates this.
	
	CAUSE
	=====
	
	An abstract class should not be allowed to be instantiated as an object. An
	abstract class is any class with at least one pure virtual function. This is
	part of the definition of the C++ language.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.1.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: /c /GX
	     */ 
	
	  class Exception    //abstract class
	  {
	
	     /* Compile options needed: /c /GX
	     */ 
	
	     class Exception    //abstract class
	     {
	         int m_nCause;
	         char * m_pszMsg;
	     public:
	         Exception();
	         Exception( int, const char * = 0);
	         Exception( const Exception &);
	         ~Exception();
	         inline virtual int Cause() = 0;           //pure virtual function
	         inline virtual const char * Msg() = 0;    //pure virtual function
	     };
	
	     int Exception::Cause()
	     {
	         return m_nCause;
	     }
	
	     const char * Exception::Msg()
	     {
	         return m_pszMsg;
	     }
	
	     void main()
	     {
	         try
	         {
	             int r = Exception(55,"no error").Cause();    //should be an
	     ERROR
	             throw Exception(-1,"error");                 //should be an
	     ERROR
	         }
	         catch (Exception&e)
	         {
	         }
	     }
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbLangCPP kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
