---
layout: page
title: "Q122217: PRB: offsetof() Macro Fails with Virtual Base Class"
permalink: kb/122/Q122217/
---

## Q122217: PRB: offsetof() Macro Fails with Virtual Base Class

	Article: Q122217
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbCodeGen kbCompiler kbCPPonly kbVC
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Use of the offsetof() macro may cause the compiler to generate incorrect code
	when used with classes that have virtual base classes. This incorrect code
	results in a null pointer access, which causes an access violation when the
	application is executed.
	
	This problem occurs only for members declared in the virtual base class.
	
	Note that according to the ANSI C++ Draft Working Papers, clause 18.1.5, the
	offsetof macro is restricted to POD union and POD structure types. POD types may
	not have base classes. Using the macro contrary to this restriction results in
	undefined behavior.
	
	RESOLUTION
	==========
	
	The offsetof() macro returns the offset in bytes of a member from the beginning
	of a class by casing NULL to a pointer of class/struct type. To work around this
	problem, cast the address of the object to a char *, cast the address of the
	member to a char *, and subtract the address of the object from the address of
	the member. Please see the Sample Code in the MORE INFORMATION section for an
	example.
	
	While this workaround generates code that is as efficient as the offsetof()
	macro, it does require that the class/struct be instanced, while offsetof() does
	not.
	
	STATUS
	======
	
	This is by design.
	
	MORE INFORMATION
	================
	
	The following code demonstrates the problem and the workaround.
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	     #include <stdio.h>
	     #include <iostream.h>
	     #include <stddef.h>
	
	     class A { public: int a; };
	     class B : virtual public A { public: int v_a; };
	     class C : virtual public A { public: int v_b; };
	     class D : virtual public B, virtual public C { public: int b; };
	
	     int main()
	     {
	
	        D xD;
	
	        xD.b   = 16;
	        xD.v_a = 8;
	        xD.v_b = 4;
	        xD.a   = 2;
	
	        cout << "sizeof(D) == " << sizeof(D)   << endl;
	        cout << "sizeof(C) == " << sizeof(C)   << endl;
	        cout << "sizeof(B) == " << sizeof(B)   << endl;
	        cout << "sizeof(A) == " << sizeof(A)   << endl << endl;
	
	     // The following code section works around the offsetof() problem
	        cout << "offsetof(D.b)   == " << (char *)&xD.b - (char *)&xD << endl;
	        cout << "offsetof(D.v_a) == " << (char *)&xD.v_a - (char *)&xD <<
	        endl;
	        cout << "offsetof(D.v_b) == " << (char *)&xD.v_b - (char *)&xD <<
	        endl;
	        cout << "offsetof(D.a)   == " << (char *)&xD.a - (char *)&xD << endl;
	        cout << endl;
	
	     // The following statement is generated correctly
	        cout << "offsetof(D.b)   == " << offsetof(D, b)   << endl;
	
	     // The following three statements cause access violations when executed
	        cout << "offsetof(D.v_a) == " << offsetof(D, v_a) << endl;
	        cout << "offsetof(D.v_b) == " << offsetof(D, v_b) << endl;
	        cout << "offsetof(D.a)   == " << offsetof(D, a)   << endl << endl;
	
	        cout << "Press Enter...";
	        cin.get();
	
	        return 0;
	     }
	
	Additional query words: kbVC400bug 8.00 9.00 buglist1.00 buglist2.00 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbCodeGen kbCompiler kbCPPonly kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,2.0,4.0,4.1,4.2
	Issue type        : kbprb
	
	=============================================================================
	
