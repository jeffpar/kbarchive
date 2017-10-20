---
layout: page
title: "Q117147: BUG: Break When Expression Has Changed Fails On Struct Members"
permalink: /kb/117/Q117147/
---

## Q117147: BUG: Break When Expression Has Changed Fails On Struct Members

{% raw %}

	Article: Q117147
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.1 
	- Microsoft CodeView for Windows, versions 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using "Break when Expression has changed" breakpoints which include
	structure members in the expression, the breakpoints may fail and/or break many
	times in the exit and startup code following a program restart. In Codeview for
	Windows, a General Protection Fault may also occur, followed by a system hang.
	
	RESOLUTION
	==========
	
	To work around this problem, run the program to termination at the end of the
	first debugging session, clear the offending breakpoints, restart the program,
	and then reset the breakpoints. If you have Visual C++ and your program is a
	Windows-based application, you can use the Visual Workbench debugger instead.
	Note that for some MS-DOS programs you may also be able use the Visual Workbench
	debugger if the program can be rebuilt as a QuickWin application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The sample program below can be used to demonstrate this problem. Build a debug
	version of the program, load it into Codeview, and enter these commands in the
	Codeview command window:
	
	For an MS-DOS target                For a Windows target
	---------------------------------   ---------------------------------
	p2       // step into code          p2       // step into code
	bp =A.s  // BP when A.s changes     bp =A.s  // BP when A.s changes
	g        // break hit correctly     g        // break hit correctly
	g        // break in exit code      g        // break in exit code
	g        // program terminates      g        // hit 3 more times
	l        // restart                 g        // program terminates
	g        // break in startup code   l        // restart
	g        // hit 19 times to finish  g        // breakpoint missed
	bc*      // clear all breakpoints   bc*      // clear all breakpoints
	l        // restart                 l        // restart
	p2                                  p2
	bp =A.s  // break when A.s changes  bp =A.s  // break when A.s changes
	g        // repeat of above         g        // repeat of above
	
	Note that the problem is not as severe for static structures. (substitute bp =
	B.i in the steps above).
	
	Sample Code
	-----------
	
	  /* Compile options needed:  /Zi /Od
	  */ 
	
	  #ifdef _WINDOWS
	  #include <windows.h>
	  #endif
	
	  void main( void )
	  {
	      struct tagA {
	          short s;
	      } A;
	
	      static struct tagB {
	          int  i;
	      } B;
	
	      A.s = 1;
	      B.i = 2;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView410DOS kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	

{% endraw %}
