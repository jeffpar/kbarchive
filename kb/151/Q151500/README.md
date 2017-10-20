---
layout: page
title: "Q151500: FIX: /Og Causes vfptr Initialization Problems"
permalink: /kb/151/Q151500/
---

## Q151500: FIX: /Og Causes vfptr Initialization Problems

{% raw %}

	Article: Q151500
	Product(s): Microsoft C Compiler
	Version(s): 4.2 5.0
	Operating System(s): 
	Keyword(s): kbcode kbtool kbCompiler kbVC420bug kbVC500bug kbVS97sp1fix
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under some circumstances, virtually calling a class member function from within
	the class's constructor may cause the wrong version of the member function to be
	called when global optimizations are enabled (/Og or #pragma optimize("g",on) ).
	Virtually calling a class member function means assigning the value of this to a
	pointer variable and attempting to call virtual member functions via that
	pointer. Please see the sample code in the More Information Section below.
	
	CAUSE
	=====
	
	The vfptr is not being properly initialized. In the sample code below, p in
	effect becomes an A* instead of a B*.
	
	RESOLUTION
	==========
	
	One workaround is to disable global optimizations for the class constructor.
	Please note the sections of code that compile conditionally for the constant
	'WORKAROUND' in the sample code below.
	
	Another workaround is not to call the member function(s) virtually. That is call
	them directly via the this pointer, ( this->f() ), or to simply call the
	function using the implied this pointer, ( f() ).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	     /* Compile Options: /Og
	     // uncomment the following to illustrate the workaround which
	     // disables global optimizations for the constructor
	     //#define WORKAROUND
	
	     class A
	     {
	     public:
	     virtual void f() = 0;
	     virtual void g();
	     };
	
	     void A::g()
	     {
	     }
	
	     class B : public A
	     {
	     public:
	     B();
	     virtual void f();
	     virtual void g();
	     };
	
	     void B::f()
	     {
	     }
	
	     void B::g()
	     {
	     }
	
	     #ifdef WORKAROUND
	     #pragma optimize("g",off)
	     #endif   // WORKAROUND
	
	     B::B()
	     {
	     B* p = this;
	     // If p->g() is changed to this->g(), or simply g(), the
	     // correct member function (B::g) is called.
	     p->g();  // Actually calls A::g()
	     // if p->f() is changed to this->f(), or simply f(), the
	     // correct member function (B::f) is called.
	     p->f();  // Actually calls A::f(), which causes a runtime error
	     }
	
	     #ifdef WORKAROUND
	     #pragma optimize("g",on)
	     #endif   //WORKAROUND
	
	     int main()
	     {
	     B b;
	     return 0;
	     }
	
	Additional query words: /Og Global Optimization
	
	======================================================================
	Keywords          : kbcode kbtool kbCompiler kbVC420bug kbVC500bug kbVS97sp1fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 4.2 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
