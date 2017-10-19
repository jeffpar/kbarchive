---
layout: page
title: "Q150885: FIX: C2321 Expanding Template with a Pointer to a Nested Class"
permalink: /kb/150/Q150885/
---

## Q150885: FIX: C2321 Expanding Template with a Pointer to a Nested Class

	Article: Q150885
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	At the point where a class template is expanded using the new operator to a
	nested class, the compiler reports the following errors:
	
	  [FileName](10) : error C2321: syntax error : unexpected 'A::B'
	
	  [FileName](27) : fatal error C1004: unexpected end of file found
	
	STATUS
	======
	
	This bug was corrected in Microsoft Visual C++, version 6.0.
	
	RESOLUTION
	==========
	
	There are two possible workarounds to this problem. Each is stated in terms of
	the sample code below:
	
	- Remove t(new T()) from the initializer list and add t = new T(); to the body
	  of the constructor. This workaround assumes class T is not a reference or a
	  constant pointer.
	
	- Change the definitions of class A and class B so that B is no longer nested
	  in the definition of A.
	
	Sample Code
	-----------
	
	  /* Compile options needed: None */ 
	  template <class T> class C
	  {
	  public:
	     C();
	  private:
	     T *t;
	  };
	
	  template <class T> C<T>::C() : t(new T())  // error
	  {
	  }
	
	  lass A
	  {
	  public:
	
	     class B
	     {
	     };
	
	  };
	
	  main()
	  {
	
	     C<A::B> c;
	     return 0;
	
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
