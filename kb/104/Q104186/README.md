---
layout: page
title: "Q104186: PRB: C2250 Error Generated with Ambiguous Multiple Inheritance"
permalink: /kb/104/Q104186/
---

## Q104186: PRB: C2250 Error Generated with Ambiguous Multiple Inheritance

{% raw %}

	Article: Q104186
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
	
	SYMPTOMS
	========
	
	With the Microsoft C/C++ compiler, the error
	
	  Error C2250: 'identifier': Ambiguous Inheritance of 'class::member'
	
	may be generated when a class inherits from two or more classes, at least two of
	which derive from the same virtual base class and redefine the same base class
	virtual member.
	
	CAUSE
	=====
	
	This is expected C++ compiler behavior.
	
	In the Sample Code below, the error is generated because D::f is ambiguous. That
	is, both class B and class C redefine their member f(), inherited from the
	virtual base class A, and class D inherits from B and C. As class D has only one
	vtable slot for the virtual function f(), and both B::f and C::f cannot be put
	there, the compiler generates error C2550.
	
	RESOLUTION
	==========
	
	There are two ways to avoid the error:
	
	- Remove or change the name of the member function causing the ambiguity. In
	  the Sample Code below, the error can be fixed by removing (or commenting) the
	  declaration of either B::f(), C::f(), or both.
	
	- Override the virtual function in the most-derived class. In the Sample Code
	  below, this means adding a declaration of "void f();" to class D. Then, if so
	  desired, D::f can be defined to call f() from any of the base classes. For
	  example,
	
	  void D::f()
	  {
	     B::f();
	     C::f();
	  }
	
	MORE INFORMATION
	================
	
	Any expression that refers to a class member must make an unambiguous reference.
	Unfortunately, multiple inheritance introduces the possibility for names to be
	inherited along more than one path. The class-member names along these paths are
	not necessarily unique. These name conflicts are called "ambiguities." When the
	compiler detects an ambiguity, it generates an error message.
	
	Sample Code
	-----------
	
	  /* Compiler options needed: /c
	  */ 
	
	  class A
	  {
	  public:
	      int a;
	      virtual void e();
	      virtual void f();
	  };
	
	  class B : public virtual A
	  {
	  public:
	     void f();
	     int a;
	  };
	
	  class C : public virtual A
	  {
	  public:
	     void f();
	  };
	
	  class D : public B, public C
	  {
	  public:
	     void d();
	  };  // VC++ 4.0 - 2 C2250 errors
	      //   'D' : ambiguous inheritance of 'B::f'
	      //   'D' : ambiguous inheritance of 'C::f'
	
	  void D::d()
	  {
	    a++; // OK: only one function 'a' in class 'D'
	    e(); // OK: only one function 'e' in class 'D'
	    f(); // error C2250 or error C2385 :
	         //   two function 'f's in class 'D'
	  }
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
