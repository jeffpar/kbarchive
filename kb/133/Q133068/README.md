---
layout: page
title: "Q133068: BUG: Deleting a Struct Typedef Causes C1059, C1063, or C1001"
permalink: /kb/133/Q133068/
---

## Q133068: BUG: Deleting a Struct Typedef Causes C1059, C1063, or C1001

	Article: Q133068
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,4.0,4.1,4.2,7.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC21
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++ 32-bit Edition, versions 1.0, 2.0, 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The sample code fragment listed at the end of this article incorrectly deletes a
	typedef of a pointer to a structure, which generates the following compiler
	errors:
	
	- For Visual C++ 4.2 for Windows NT:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file 'toil.c', line
	  4094)
	
	- For Visual C++ 4.1 for Windows NT:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file 'toil.c', line
	  4051)
	
	- For Visual C++ 4.0 for Windows NT:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file 'toil.c', line
	  3128)
	
	- For Visual C++ 2.x for Windows NT:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file 'toil.c', line
	  2847)
	
	- For Visual C++ 1.0 for Windows NT:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file '@(#)main.c:1.82',
	  line 289)
	
	- For Visual C++ version 1.5x for Windows:
	
	  fatal error C1059: compiler is out of near heap space
	
	- For Visual C++ version 1.0 for Windows:
	
	  fatal error C1063
	
	- For C/C++ version 7.0:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file '2pass/getattr.c',
	  line 346) Contact Microsoft Product Support Services
	
	RESOLUTION
	==========
	
	The above error messages are misleading and do not point out the real problem,
	which is that you cannot delete a typedef. Additionally, the operand of delete
	must be a pointer returned by the new operator. Using delete on a pointer to an
	object not allocated with new gives unpredictable results.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* Compile options needed: none
	  */ 
	
	  typedef struct {
	     int x;
	  }MY_STRUCT, *LPMY_STRUCT;
	
	  LPMY_STRUCT  pMyStruct = new MY_STRUCT;
	
	  void MyTestFunction()
	  {
	     delete pMyStruct;   // ok.
	     delete LPMY_STRUCT; // Can not delete a type.
	  }
	
	Additional query words: 8.0 8.0c 8.00 8.00c 9.0 9.00 9.1 9.10 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC420bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.51,1.52,2.0,4.0,4.1,4.2,7.0
	Issue type        : kbbug
	
	=============================================================================
	
