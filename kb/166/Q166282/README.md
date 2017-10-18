---
layout: page
title: "Q166282: FIX: C2440 Caused by Template Function with Const Pointer"
permalink: kb/166/Q166282/
---

## Q166282: FIX: C2440 Caused by Template Function with Const Pointer

	Article: Q166282
	Product(s): Microsoft C Compiler
	Version(s): 4.2 4.2b 5.0
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbCompiler kbCPPonly kbLangCPP kbVC kbVC420bug kbVC500bug kbVS97sp
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler generates the error C2440, when compiling a template function with
	a const pointer of class T as an argument, where class T is a template
	parameter.
	
	  C2440: 'conversion' : cannot convert from 'type1' to 'type2'
	
	RESOLUTION
	==========
	
	Starting with Visual C++ 5.0, explicitly specify the template arguments when
	calling the template function.
	
	The sample code below demonstrates the problem and the workaround.
	
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
	
	The following sample code demonstrates the problem.
	
	Sample Code
	-----------
	
	     /*
	     * Compiler Options: None
	     */ 
	
	     template <class T> T* func(const T*p)
	     {
	        return 0;
	     }
	
	     int main()
	     {
	        const int *i=0;
	        int*j = func(i);    // erroneous C2440 here
	
	        return 0 ;
	     }
	
	The following sample code demonstrates the workaround for Visual C++ 5.0.
	
	Sample Code
	-----------
	
	     /*
	     * Compiler Options: None
	     */ 
	
	     template <class T> T* func(const T*p)
	     {
	        return 0;
	     }
	
	     int main()
	     {
	        const int *i=0;
	        int*j = func<int>(i);
	
	        return 0 ;
	     }
	
	Additional query words: CL
	
	======================================================================
	Keywords          : kbcode kbProgramming kbCompiler kbCPPonly kbLangCPP kbVC kbVC420bug kbVC500bug kbVS97sp1fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 4.2 4.2b 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
