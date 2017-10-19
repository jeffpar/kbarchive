---
layout: page
title: "Q104650: INFO: Default Assignment Used, Not User-Defined operator=()"
permalink: /kb/104/Q104650/
---

## Q104650: INFO: Default Assignment Used, Not User-Defined operator=()

	Article: Q104650
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kb
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft "C++ Language Reference" for C/C++ version 7.0 states the
	following:
	
	  ...if the class declares a user-defined operator=() that takes an argument of
	  type "reference to class-name", no default assignment operator is generated.
	
	(See the Memberwise Assignment and Initialization section of the Special Member
	Functions chapter.) This statement may be confusing. However, the term
	"argument" means formal parameter, not actual parameter.
	
	MORE INFORMATION
	================
	
	The following program outputs "Default assignment used". The default assignment
	operator is used for the assignment and not Derived::operator=() as might be
	expected. The Derived::operator(const Base &) function specifies a const
	Base & for a formal parameter. Because there is no operator=() that
	specifies a formal parameter of type "reference to class- name", the default
	assignment operator is generated and used.
	
	Some compiler vendors have interpreted the C++ language differently by using the
	term "argument" in the specification to mean actual parameter. In that case, the
	default assignment operator is not generated and the program above will output
	"Derived::operator=() called" because an object of type Derived is an object of
	type Base.
	
	Sample Code
	-----------
	
	  /* Compile Options needed: None
	  */ 
	
	  #include <iostream.h>
	
	  char* message1 = "Derived::operator=() called";
	  char* message2 = "Default assignment used";
	
	  class Base
	  {
	  public:
	     char* OperatorCalled;
	     Base() { OperatorCalled = message2; }
	  };
	
	  class Derived : public Base
	  {
	  public:
	     void operator=(const Base&) { OperatorCalled = message1; }
	     Derived() {}
	  };
	
	  void main()
	  {
	     Derived first, second;
	     first = second;
	     cout << first.OperatorCalled;
	  }
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
