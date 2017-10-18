---
layout: page
title: "Q168385: BUG: The &quot;this&quot; Pointer Is Incorrect in Destructor of Base Class"
permalink: kb/168/Q168385/
---

## Q168385: BUG: The &quot;this&quot; Pointer Is Incorrect in Destructor of Base Class

	Article: Q168385
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbtool kbCompiler kbVC500bug kbVC600bugkbbuglist
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "this" pointer is incorrectly set up in the destructor of a base class. This
	problem occurs when the array delete is called and there is a class that
	inherits from two base classes that have virtual functions and the second base
	class has a virtual destructor.
	
	RESOLUTION
	==========
	
	One workaround is to make the base classes virtual base classes. Another option
	is to use something other than array new and array delete to allocate and
	deallocate the memory. For example, declare the array statically.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following is example code:
	
	     #include <iostream>
	         using namespace std;
	         class A {
	         public:
	            A(){}
	            ~A(){}
	            virtual void A1() {}
	         };
	
	         class B {
	         public:
	            B();
	            virtual ~B();
	            int marker;
	         };
	
	         B::B() {
	            marker = 10;
	            cout << "In constructor, this is " << this << endl;
	         }
	
	         B::~B() {
	            cout << "In destructor, this is " << this << endl;
	            if ( this->marker != 10)
	               cout << "Data has been corrupted" << endl;
	         }
	
	         class C: public A, public B
	         // class C: public A, virtual public B // Workaround
	         {public:
	            C(){}
	            ~C(){}
	         };
	
	         int main() {
	            C * pC;
	            pC = new C[2];
	            delete [] pC;
	                 return 0 ;
	         }
	
	     /* Sample Program Output */ 
	     In constructor, this is 00460DA8
	     In constructor, this is 00460DB4
	     In destructor, this is 00460DB0
	     Data has been corrupted
	     In destructor, this is 00460DA4
	     Data has been corrupted
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbCompiler kbVC500bug kbVC600bug kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
