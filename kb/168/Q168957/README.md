---
layout: page
title: "Q168957: FIX: C1001, file 'msc1.cpp', line 1188, Caused by Name Hiding"
permalink: kb/168/Q168957/
---

## Q168957: FIX: C1001, file 'msc1.cpp', line 1188, Caused by Name Hiding

	Article: Q168957
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbcode kbtool kbCompiler kbCPPonly kbLangCPP kbVC kbVC500bug kbVS97sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Name hiding caused by similar-named variables and user-defined types in the same
	scope may cause the compiler to generate the following error:
	
	  C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 1188)
	
	RESOLUTION
	==========
	
	Use the elaborated type specifier to name the user-defined type. For example,
	use "class a::b" instead of "b" to identify the class b nested in class a.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	The sample below demonstrates the problem and the workaround.
	
	SAMPLE
	------
	
	     /*
	     Compile Options: None
	     */ 
	     struct a
	     {
	        struct b;
	        int b;
	        a::b* x; //C1001 here
	        //Workaround: Comment the line above
	        //Uncomment the line below
	        //struct a::b* x;
	     };
	
	======================================================================
	Keywords          : kbcode kbtool kbCompiler kbCPPonly kbLangCPP kbVC kbVC500bug kbVS97sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
