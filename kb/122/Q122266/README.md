---
layout: page
title: "Q122266: BUG: Line Number Information Incorrect with /DEBUGTYPE:both"
permalink: /kb/122/Q122266/
---

## Q122266: BUG: Line Number Information Incorrect with /DEBUGTYPE:both

{% raw %}

	Article: Q122266
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Linker (LINK.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Format (CV) and COFF debugging formats can be used at the same time.
	To get both formats, use the /DEBUGTYPE:both linker switch or in the development
	environment, go to the Project menu, select Settings, choose the Link tab,
	choose the Debug category, and select Both Formats.
	
	When both Microsoft Format (CV) and COFF debugging formats are used in the same
	application, incorrect line number information will be generated for functions
	that are not in the main .CPP file. Usually these are inline functions, included
	in header (.H) or inline (.INL) files by using #include.
	
	Incorrect line number debugging information will show up when stepping through
	the program in the integrated debugger. As you step through the functions
	included in other files, the debugger will continue to show the current file.
	
	RESOLUTION
	==========
	
	You can work around this problem by including either Microsoft Format (CV) or
	COFF debugging formats, but not both, in the same executable. The integrated
	debugger uses Microsoft Format (CV), so it is the preferred format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem. If you build the file with
	/link /DEBUGTYPE:both, and then press the F8 key while inside, the integrated
	debugger will not step into the Test1() or Test2() functions. Instead, it skips
	around within TEST.CPP.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Zi
	        Be sure to link with /DEBUGTYPE:both
	  */ 
	
	  /****** test.cpp ******/ 
	
	  #include "test.inl"
	
	  void main(void)
	  {
	  Test1(Test2(2));
	  }
	
	  /****** test.inl ******/ 
	
	  int Test1(int i)
	  {
	      return i*i;
	  }
	
	  int Test2(int j)
	  {
	      return j*j+j;
	  }
	
	Additional query words: 2.00 2.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbLINKSearch kbLINK100
	Version           : winnt:
	
	=============================================================================
	

{% endraw %}
