---
layout: page
title: "Q164000: FIX: C1001 Compiler File MAIN.C Line 413"
permalink: /kb/164/Q164000/
---

## Q164000: FIX: C1001 Compiler File MAIN.C Line 413

{% raw %}

	Article: Q164000
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbCPPonly kbLangCPP kbVC kbVC500fix kbHWx86
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling typeid with a temporary object causes the following error:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file
	  'd:\backend\src\P2\main.c', line 413)
	
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information
	
	  Error executing cl.exe.
	
	RESOLUTION
	==========
	
	Instead of calling typeid with a temporary object, create a stack object and
	then call typeid, referencing the stack object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	     #include <typeinfo>
	
	     struct X {
	        X() {};
	        ~X() {};
	     };
	
	     // This main function will cause the error.
	     void main()
	     {
	         const type_info& t = typeid(X());
	     }
	
	     // For the workaround, replace main above with the following:
	     void main()
	     {
	         X y;
	         const type_info& t = typeid(y);
	     }
	
	Additional query words: kbVC420bug kbDSupport typeid RTTI
	
	======================================================================
	Keywords          : kbcode kbCompiler kbCPPonly kbLangCPP kbVC kbVC500fix kbHWx86 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
