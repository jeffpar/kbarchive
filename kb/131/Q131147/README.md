---
layout: page
title: "Q131147: FIX: CXX0033 Error in OMF Type from Forward Class Declaration"
permalink: /kb/131/Q131147/
---

## Q131147: FIX: CXX0033 Error in OMF Type from Forward Class Declaration

{% raw %}

	Article: Q131147
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCompiler kbDebug kbidekbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Visual C++ debugger, if you debug an application built using precompiled
	header (PCH) options, the debugger's expression evaluator may generate errors
	when viewing classes that were declared but not defined in the precompiled
	header file.
	
	One of the following errors may be generated depending on the Visual C++
	version:
	
	  CXX0017 Error: symbol "xxxx" cannot be found
	
	  CXX0030 Error: expression cannot be evaluated
	
	  CXX0033 Error: error in OMF type information
	
	  CV1255 Error: no data members
	
	NOTE: The first error message is very generic, and can occur for several
	different reasons including this one.
	
	CAUSE
	=====
	
	When the compiler writes out type information into the program database (.PDB)
	file, incomplete type information is written for the forward class declaration
	when the full definition has not yet been compiled.
	
	When the module containing the full class definition is compiled, the complete
	type information is not replacing the incomplete type information in the .PDB
	file.
	
	RESOLUTION
	==========
	
	Here are three possible workarounds:
	
	- Turn off PCH usage. This avoids the problem altogether.
	
	-or-
	
	- Include the full definition of the class in .PCH file. This causes the
	  complete type information to be written to the .PDB file.
	
	-or-
	
	- Compile using C7 Compatible Debug Info switch (/Z7). This will not use a .PDB
	  file to store type information. You may also need to use the /Yd option to
	  include PCH debug information in all object modules.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	The following small sample application reproduces the problem. In the Visual C++
	integrated debugger, it is not possible to expand "A" in the locals window,
	watch window, or with a quickwatch.
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  /* PCH.H
	  */ 
	  class FwdNonPCHClass;
	
	  class PCHClass
	  {
	   public:
	     int i;
	     long l;
	     class FwdClass * FwdNonPCHClassPtr;
	  };
	
	  /*
	     STDPCH.CPP
	     Win32 Compile options needed: /Yc"pch.h" /Od /Zi /c
	     Win16 Compile options needed: /Yc"pch.h" /Od /Zi /Mq /c
	
	  */ 
	  #include "pch.h"
	
	  /*
	     TEST.CPP
	     Win32 Compile options needed: /Yu"pch.h" /Od /Zi test.cpp stdpch.obj
	     Win16 Compile options needed: /Yu"pch.h" /Od /Zi /Mq test.cpp stdpch.obj
	
	  */ 
	  #include "pch.h"
	
	  class FwdNonPCHClass
	  {
	   public:
	   int i;
	   long l;
	  };
	
	  void main(void)
	  {
	  FwdNonPCHClass A;
	  PCHClass B;
	
	  A.i = 1;
	  A.l = 17L;
	
	  B.i = 54;
	  B.l = 17L;
	  }
	
	Additional query words: 1.00 1.50 1.51 1.52 1.52a 2.00 2.10 8.0 8.00 8.0c 8.00c 9.0 9.00 9.1 9.10
	
	======================================================================
	Keywords          : kbCompiler kbDebug kbide kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
