---
layout: page
title: "Q113065: PRB: Extra Copies of Function Added to Library"
permalink: kb/113/Q113065/
---

## Q113065: PRB: Extra Copies of Function Added to Library

	Article: Q113065
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0 2.0 5.0
	Operating System(s): 
	Keyword(s): kbVC100 kbVC200 kbVC500 kbVC600
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Library Manager (LIB.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a function is contained in a library being added to another library, and that
	function already exists in the library being added to, LIB.EXE adds it anyway.
	The following warning is generated:
	
	  LNK4006: <function name> already defined in <library name>
	  <object module name>; second definition ignored
	
	The .OBJ file is added to the library, and can be added multiple times.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	If you add an object module that is already in the library, the new object
	module replaces the old one. However, if you combine libraries, they are always
	combined because there could be similarly named object modules in several
	different libraries that don't have any of the same functions. The above warning
	is generated to indicate conflicting function names.
	
	MORE INFORMATION
	================
	
	Examining the contents of the library with the DUMPBIN utility
	
	  DUMPBIN <library name> /symbols
	
	shows multiple copies of the function exist in the library. The DUMPBIN utility
	is in the \MSVCNT\BIN directory.
	
	Sample Code
	-----------
	
	  /* FILE A.C
	     Compile options needed: /c
	  */ 
	
	  #include <stdio.h>
	  void amain(void)
	  {
	      printf("a");
	  }
	
	  /* FILE B.C
	     Compile options needed: /c
	  */ 
	
	  #include <stdio.h>
	  void bmain(void)
	  {
	      printf("b");
	  }
	
	  /* Lib commands needed: */ 
	  /* Create the libraries TEST.LIB and TESTB.LIB   */ 
	
	     lib /out:test.lib a.obj
	     lib /out:testb.lib b.obj
	
	  /* Add the contents of TESTB.LIB (B.OBJ) to TEST.LIB:     */ 
	
	     lib test.lib testb.lib
	
	  /* List the current contents of TEST.LIB;                   */ 
	  /* it will show one copy of A.OBJ and one copy of B.OBJ.    */ 
	
	     lib test.lib /list
	
	  /* Add the contents of TESTB.LIB (B.OBJ) to TEST.LIB again. */ 
	  /* This step generates the above warning.                   */ 
	
	     lib test.lib testb.lib
	
	  /* List the current contents of TEST.LIB;            */ 
	  /* it will show two copies of B.OBJ in the library.  */ 
	
	     lib test.lib /list
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC100 kbVC200 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbLibSearch kbLibManExe
	Version           : 1.0 2.0 5.0
	Issue type        : kbprb
	
	=============================================================================
	
