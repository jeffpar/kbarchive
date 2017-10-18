---
layout: page
title: "Q168383: FIX: C1001 p2symtab.c, line 2221 In Direct Init of Static"
permalink: kb/168/Q168383/
---

## Q168383: FIX: C1001 p2symtab.c, line 2221 In Direct Init of Static

	Article: Q168383
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbCompiler kbCPPonly kbVC kbVC500bug kbVC600fix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a member of an imported class attempts direct initialization of a static
	local variable of class type with a constant string literal, the following error
	may result:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'E:\utc\src\\P2\p2symtab.c', line 2221)
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information Error executing
	  cl.exe.
	
	RESOLUTION
	==========
	
	Simplify the expression. Declare a local static constant string literal, then
	use that local to initialize the static local variable of class type.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	     // compiler options needed: /c
	
	     struct A
	     {
	
	      A(const char * a);
	
	     };
	
	     struct __declspec(dllimport) B
	     {
	
	      void f() {
	          static A isa = "...";
	
	          // A workaround is to break up the expression
	          //static const char *p = "...";
	          //static A isa = p ;
	      } ;
	     };
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool kbCompiler kbCPPonly kbVC kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
