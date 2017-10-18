---
layout: page
title: "Q139871: FIX: Error C2371 on Struct Typedef that Does Not Have a Tag"
permalink: kb/139/Q139871/
---

## Q139871: FIX: Error C2371 on Struct Typedef that Does Not Have a Tag

	Article: Q139871
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC kbVC400bug kbVC500fix
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.1, 4.2, used with:
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a typedef for a structure that doesn't have a tag, you may receive
	the following error when you compile the code:
	
	  Error C2371: '<typedef tag>' : redefinition; different basic types
	
	RESOLUTION
	==========
	
	Include a tag for the structure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	     /* Compile options needed: none
	     */ 
	
	     class A
	     {
	       public:
	         const A& operator=(const A&);
	     };
	
	     typedef struct  // add tag here
	     {
	        A a;
	     } B;
	
	     B t1, t2;
	
	     void f()
	     {
	       t2 = t1;
	     }
	
	     void main()
	     {
	        f();
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangCPP kbVC kbVC400bug kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper
	Version           : :2.0,2.1,2.2,4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
