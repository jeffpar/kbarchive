---
layout: page
title: "Q121889: PRB: Error C2858: Command-line Options Inconsistent"
permalink: /kb/121/Q121889/
---

## Q121889: PRB: Error C2858: Command-line Options Inconsistent

{% raw %}

	Article: Q121889
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC100 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building a file from an existing application that uses precompiled header
	files, the compiler produces the following error if the source drive letter has
	changed:
	
	  error C2858: command-line option 'program database name
	  (/FdN:\test.pdb)' inconsistent with precompiled header,
	  which used '/FdM:\test.pdb'
	
	CAUSE
	=====
	
	The compiler stores and uses an absolute path to the precompiled header file,
	not a relative path.
	
	RESOLUTION
	==========
	
	Microsoft recommends that you rebuild an application when moving its source code
	or when connecting with a different drive letter.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the behavior. If the two files shown
	below are compiled from the M: drive and later TEST2.CPP is compiled from the N:
	drive, the error will occur.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Zi /Fp"test.pch" /Yc
	     TEST1.CPP
	  */ 
	
	  #include <iostream.h>
	
	  void main()
	  {
	  }
	
	  /* Compile options needed: /Zi /Fp"test.pch" /Yu"iostream.h"
	     TEST2.CPP
	  */ 
	
	  #include <iostream.h>
	
	  void sub()
	  {
	  }
	
	Additional query words: 9.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC100 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,2.0,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
