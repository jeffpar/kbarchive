---
layout: page
title: "Q116183: BUG: Step-After-Return in CodeView &quot;Hangs&quot; in a Large Function"
permalink: kb/116/Q116183/
---

## Q116183: BUG: Step-After-Return in CodeView &quot;Hangs&quot; in a Large Function

	Article: Q116183
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
	
	Using the PR command (Stop After Return) on a large function, or on a function
	with long iterative loop, causes CodeView to appear to hang.
	
	CAUSE
	=====
	
	The PR command is inefficient when used on large functions because it is too
	slow. In the case of the example below, there is no activity. Locals and watch
	expressions do not get updated, and IP tracking is inactive. Furthermore,
	CTRL+BREAK, CTRL+C, AND CTRL+ALT+SYSREQ do not terminate the PR command because
	CodeView is receiving single step notifications fast enough that the system is
	likely not getting a chance to process them.
	
	RESOLUTION
	==========
	
	To work around this problem, refrain from using the PR command on large
	functions, or those with long iterative loops. Instead, set a breakpoint at the
	location you wish CodeView to stop, or move the cursor to that location and
	press F7 to Run-To-Cursor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be problem with CodeView for MS-DOS, versions
	4.0, 4.01, and 4.1, and CodeView for Windows, versions 4.0, 4.01, and 4.1. We
	are researching this problem and will post more information in the Microsoft
	Knowledge Base as soon as it becomes available.
	
	MORE INFORMATION
	================
	
	The sample code below may be used to reproduce the problem. After starting
	CodeView, enter these commands in the command window:
	
	  g f
	  p
	  pr
	
	At this point any attempts to break into CodeView are ignored.
	
	Sample Code
	-----------
	
	  /* Compile options needed:  /Zi
	  */ 
	     #ifdef _WINDOWS
	     #include <windows.h>
	     #endif
	
	     void f(void);
	
	     void main(void)
	     {
	      f();
	     }
	
	     void f(void)
	     {
	      int t;
	      int x;
	
	      for (t=32767; t>0; --t)
	      {
	       x = t;
	      }
	     }
	
	     #ifdef _WINDOWS
	     int WINAPI WinMain (HANDLE hInstance, HANDLE hPrevInstance,
	                         LPSTR lpszCmdParam, int nCmdShow)
	     {
	      main();
	      return( TRUE );
	     }
	     #endif
	
	Additional query words: 4.00 4.01 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView410DOS kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	
