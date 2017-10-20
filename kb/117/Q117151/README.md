---
layout: page
title: "Q117151: BUG: Conditional Breakpoints On Double Variables Fail"
permalink: /kb/117/Q117151/
---

## Q117151: BUG: Conditional Breakpoints On Double Variables Fail

{% raw %}

	Article: Q117151
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Codeview for Windows may not break at the right location or may not break at all
	if a conditional breakpoint is set on a variable of type double. Conditional
	breakpoints include breakpoints such as "Break when Expression has Changed" and
	"Break when Expression is True". Codeview for MS-DOS does not have this problem.
	
	RESOLUTION
	==========
	
	If you have Visual C++, use the Visual Workbench debugger instead of Codeview
	for Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Codeview for Windows version
	4.0, 4.01, and 4.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The program listed below can be used to demonstrate the problem. Build a debug
	version of the program, load it into Codeview for Windows, and enter the
	following commands in Codeview's command window:
	
	  bp = x
	  bp = y
	  bp = z
	  g ; breaks are either missed or break at wrong location
	
	Sample Code
	-----------
	
	  /* Compile options needed:  /Zi /Od
	  */ 
	
	  #include <windows.h>
	
	  double x, y, z;
	
	  void f( void )
	  {
	      x++;
	      y++;
	      z++;
	  }
	
	  int PASCAL WinMain (HANDLE hInstance, HANDLE hPrevInstance,
	             LPSTR lpszCmdLine, int nCmdShow)
	  {
	      f();
	      return 0;
	  }
	
	Additional query words: 4.00 4.01 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	

{% endraw %}
