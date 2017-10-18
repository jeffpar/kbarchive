---
layout: page
title: "Q153801: BUG: C2352 Error for Reference to Nested Class Member"
permalink: kb/153/Q153801/
---

## Q153801: BUG: C2352 Error for Reference to Nested Class Member

	Article: Q153801
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbLangCPP kbVC kbVC500bug
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to build the sample code below, you will get an error message
	similar to the following:
	
	  error C2352: 'A::AA::m' : illegal call of nonstatic member function
	
	CAUSE
	=====
	
	This behavior occurs because you are attempting to access a member of a nested
	class that has been used as a base class. It is valid to do this. The compiler
	should not be reporting an error, and, in this case, the error that is being
	reported is misleading.
	
	RESOLUTION
	==========
	
	To work around the problem, you can use a typedef to refer to the nested class
	that is being used as a base class. This is illustrated in the sample code
	below.
	
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
	
	The following code reproduces the problem:
	
	     class A
	     {
	     public:
	
	         class AA
	         {
	         public:
	             void m();
	         };
	     };
	
	     class B : public A::AA
	     {
	     public:
	         void m() { A::AA::m(); }
	     };
	
	     void main()
	     {
	         B b;
	     }
	
	The following code works around the problem (note the use of the typedef):
	
	     class A
	     {
	     public:
	
	         class AA
	         {
	         public:
	             void m();
	         };
	     };
	
	     typedef A::AA NestedBase;
	
	     class B : public NestedBase
	     {
	     public:
	         void m() { NestedBase::m(); }
	     };
	
	     void main()
	     {
	         B b;
	     }
	
	Additional query words: kbVC400bug 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbLangCPP kbVC kbVC500bug 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0
	Issue type        : kbbug
	
	=============================================================================
	
