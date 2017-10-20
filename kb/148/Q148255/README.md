---
layout: page
title: "Q148255: FIX: C1001 on Cast to Base from Derived Friend Class"
permalink: /kb/148/Q148255/
---

## Q148255: FIX: C1001 on Cast to Base from Derived Friend Class

{% raw %}

	Article: Q148255
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbProgramming kbtool kbCompiler kbCPPonly kbVC
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an argument in a function call is passed by value and is cast to a base
	class from a derived class that is also a friend of the base class, the compiler
	generates this error:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file '\school.tp3\test\c10\src\P2\386\codegen.c', line 359)
	
	This occurs only when C++ exception handling is enabled (/GX) and the base class
	defines a destructor.
	
	RESOLUTION
	==========
	
	There are several workarounds:
	
	- Pass the class by reference.
	
	-or-
	
	- Remove the cast. It is unnecessary.
	
	-or-
	
	- Do not use the /GX compiler option if exception handling isn't required.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	    /* Compile options needed: /GX
	     */ 
	
	     class  Cbase {
	        friend class Cfriend;
	     public:
	        ~Cbase( void ) {}
	     };
	
	     class Cfriend : public Cbase {};
	
	     void f(Cbase z){}
	     //   Workaround 1,pass by reference instead of by value
	     //void f(Cbase& z) {}
	
	     void main() {
	        Cfriend P;
	        // INTERNAL COMPILER ERROR on the following line
	        f((Cbase)P);
	     //   Workaround 2, do not use a cast.
	     //   f(P);
	     };
	
	Additional query words: 10.00 10.10 10.20 utilities
	
	======================================================================
	Keywords          : kbProgramming kbtool kbCompiler kbCPPonly kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
