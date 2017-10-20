---
layout: page
title: "Q116300: BUG: CV: Trace Does Not Step Into Some MOVE Overlay Functions"
permalink: /kb/116/Q116300/
---

## Q116300: BUG: CV: Trace Does Not Step Into Some MOVE Overlay Functions

{% raw %}

	Article: Q116300
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Codeview may not allow tracing into some functions if the order of functions
	within a project's .DEF file is not the same as the order in which the functions
	are defined in the project's source files. Once this happens, it also may not be
	possible to view the source in the corresponding module. The code itself,
	however, executes properly.
	
	RESOLUTION
	==========
	
	To work around this problem, make sure that functions are assigned to overlays
	in the .DEF file in the same order in which they are defined in the source
	files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Codeview for MS-DOS, version
	4.0, 4.01, and 4.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The sample program shown below can be used to demonstrate the problem. After
	building a debug version of the program, start Codeview, load the .EXE, and
	press F8 three times. Codeview will not step into the first function,
	Overlay1Func1(). Codeview will, however, step into Overlay1Func2() and
	Overlay1Func3. Also, at this point the VS command (View Source) does not work on
	Overlay1Func1().
	
	Sample Code
	-----------
	
	  /*  OVERLAY.H
	  */ 
	
	  int Overlay1Func1(void);
	  int Overlay1Func2(void);
	  int Overlay1Func3(void);
	  int Overlay2Func1(void);
	  int Overlay2Func2(void);
	  int Overlay2Func3(void);
	
	  ---------------------------------------------------------------------
	
	  /*  MAIN.C
	
	      Compile options needed:  /c /AL /G2 /Gy /Zi /Od
	  */ 
	
	  #include "overlay.h"
	
	  void main( void )
	  {
	      Overlay1Func1();
	      Overlay1Func2();
	      Overlay1Func3();
	      Overlay2Func1();
	      Overlay2Func2();
	      Overlay2Func3();
	  }
	
	  ---------------------------------------------------------------------
	
	  /*  OVERLAY1.C
	
	      Compile options needed:  /c /AL /G2 /Gy /Zi /Od
	  */ 
	
	  #include "overlay.h"
	
	  int Overlay1Func1(void)
	  {
	      int i = 1;
	      i = i * 2;
	      return i;
	  }
	
	  int Overlay1Func2(void)
	  {
	      int i = 2;
	      i = i * 2;
	      return i;
	  }
	
	  int Overlay1Func3(void)
	  {
	      int i = 3;
	      i = i * 2;
	      return i;
	  }
	
	  ---------------------------------------------------------------------
	
	  /*  OVERLAY2.C
	
	      Compile options needed:  /c /AL /G2 /Gy /Zi /Od
	  */ 
	
	  #include "overlay.h"
	
	  int Overlay2Func1(void)
	  {
	      int i = 1;
	      i = i * 2;
	      return i;
	  }
	
	  int Overlay2Func2(void)
	  {
	      int i = 2;
	      i = i * 2;
	      return i;
	  }
	
	  int Overlay2Func3(void)
	  {
	      int i = 3;
	      i = i * 2;
	      return i;
	  }
	
	  ---------------------------------------------------------------------
	
	  ;; OVERLAY.DEF
	
	  FUNCTIONS:1 _Overlay1Func2
	              _Overlay1Func3
	              _Overlay1Func1 ;;  Moving this above Overlay1Func2
	                             ;;  solves the problem
	  FUNCTIONS:2 _Overlay2Func1
	              _Overlay2Func2
	              _Overlay2Func3
	
	  ---------------------------------------------------------------------
	
	Additional query words: 4.00 4.01 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView410DOS
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	

{% endraw %}
