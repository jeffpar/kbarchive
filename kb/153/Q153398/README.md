---
layout: page
title: "Q153398: FIX: Namespace and Typedef Cause C1001:'msc1.cpp',line 1090"
permalink: kb/153/Q153398/
---

## Q153398: FIX: Namespace and Typedef Cause C1001:'msc1.cpp',line 1090

	Article: Q153398
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbcode kbprogramming kbusage kbCompiler kbCPPonly kbLangCPP kbVC kbVC400bug kbVC410bug
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A program that uses a namespace including a typedef name for the base class name
	may cause the compiler to generate the following error message:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	
	In addition, this error will be followed by a message similar to this:
	
	  
	
	 (compiler file 'msc1.cpp', line 899)  <if using version 4.0>
	 (compiler file 'msc1.cpp', line 1090) <if using version 4.1>
	 (compiler file 'msc1.cpp', line 1089) <if using version 4.2>
	 Please choose the Technical Support command on the Visual C++
	 Help menu, or open the Technical Support help file for more information
	 Error executing cl.exe.
	
	RESOLUTION
	==========
	
	Avoid a typedef name for the base class within a different derived class
	namespace.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed:
	     */ 
	     //messages.cpp
	
	     namespace X {
	         class A{};
	         typedef A B;
	     }
	     namespace Y{
	         class C: public X::B{};
	     //  Work around:  replace the above line with  the following:
	     //  class C : public X::A{};
	
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbprogramming kbusage kbCompiler kbCPPonly kbLangCPP kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 4.0 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
