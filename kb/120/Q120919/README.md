---
layout: page
title: "Q120919: Visual C++ Vers 2.0 README.WRI, Part 3 Compiler"
permalink: /kb/120/Q120919/
---

## Q120919: Visual C++ Vers 2.0 README.WRI, Part 3 Compiler

{% raw %}

	Article: Q120919
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 2.0, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is based on the Visual C++ version 2.0 README.WRI file:
	
	/W4 Warning Messages from Including WINDOWS.H
	---------------------------------------------
	
	Specifying warning level 4 (/W4) when you compile any program that includes
	WINDOWS.H may generate many warnings. Most of these are benign warnings caused
	by non-standard extensions used in Windows NT header files such as WINDOWS.H and
	files that WINDOWS.H includes. To eliminate these warnings, create a "dummy"
	header file that uses the #pragma warning directive to selectively turn off
	warnings you don't need to see. Then include this header file in any source file
	that also includes WINDOWS.H, or use the /FI compiler option to force its
	inclusion.
	
	For example:
	
	  // FILE NOWARN.H<7F>
	  #pragma warning(disable:4201)
	  #pragma warning(disable:4214)
	
	  //FILE MYMOD.C
	  #include "NOWARN.H"
	  #include <windows.h>
	  void main(void) {}
	
	For further examples, see AFX.H, located in the MFC\INCLUDE subdirectory of your
	Visual C++ version 2.0 installation. AFX.H uses #pragma warning to disable
	specific level 4 warnings when compiling MFC applications.
	
	Passing Structures by Value
	---------------------------
	
	A pass by value of a structure greater than or equal to 4096 (4K) bytes may cause
	an access violation if the current stack allocation is exceeded. If the
	structure size is greater than or equal to 8192 (8K) bytes, an access violation
	is likely unless you ensure that new stack pages are not being accessed.
	
	The __purecall function
	-----------------------
	
	The __purecall function is a special function (defined with C linkage) that is
	defined in the default run-time library, and may be called at run time if there
	is an error referencing the object's virtual function table. This will usually
	happen as a result of a program error. The following code causes this error:
	
	  struct A;
	  void x(A*);
	  struct A
	  {
	      virtual void f() = 0;
	      A() { x(this); }
	  };
	
	  struct B : A
	  {
	      void f() { }
	  };
	
	  void x(A*p) { p->f(); }
	
	  void main()
	  {
	      B aB;    // calls B::B calls A::A calls
	  }            // x calls A::f (pure virtual function)
	
	Because such errors cannot be caught at compile time, the __purecall function is
	called, generating the following run-time error:
	
	  runtime error R6025
	  - pure virtual function call
	
	If an application (such as a device driver) must be compiled without using the
	standard run-time libraries (compiler option /Zl or linker option
	/NODEFAULTLIB), but requires virtual function calls, you will get an "undefined
	symbol" linker error on __purecall. You can work around this error in one of two
	ways:
	
	- Define your own __purecall function and compile with the /Gd option (specify
	  __cdecl calling convention). The following is a minimal example:
	
	        int __purecall( void )
	        {
	            /* insert your own error reporting code here */ 
	            return 0;
	        }
	
	  If __purecall is redefined in exactly this way, no run time error is generated
	  if the user calls a pure virtual function. The custom __purecall function
	  should contain appropriate error checking and recovery code, (for example,
	  calling _exit or printing a fatal error message) as noted in the sample.
	
	  -or-
	
	- Extract the object module that contains __purecall from the LIBC.LIB library,
	  and link the object explicitly. Using this method, all other symbols in the
	  object module will be included. To avoid this potentially undesirable
	  side-effect, the first method is recommended.
	
	Additional query words: 2.00 9.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	
	=============================================================================
	

{% endraw %}
