---
layout: page
title: "Q116316: BUG: Conditional Breakpoint Doesn't Break on CodeView Restart"
permalink: /kb/116/Q116316/
---

## Q116316: BUG: Conditional Breakpoint Doesn't Break on CodeView Restart

{% raw %}

	Article: Q116316
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
	
	When you (1) use "Break At Location If Expression Has Changed", (2) run your
	application in CodeView for Windows, and then (3) restart the debugging session,
	you may find that the conditional breakpoint is no longer hit.
	
	RESOLUTION
	==========
	
	To work around this problem, clear the breakpoint and reset it after restarting
	the debugging session. If you have Visual C++, you can also use its integrated
	debugger because it does not have this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in CodeView for Windows. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as soon as it becomes available.
	
	This problem does not occur under CodeView for MS-DOS or the Visual Workbench
	debugger.
	
	MORE INFORMATION
	================
	
	The sample program below demonstrates this bug. After building a Windows debug
	version, load the program into CodeView for Windows and type these commands into
	the command window:
	
	  >p2
	  >bp .16,=S.uc
	  >g
	  >l
	  >g
	
	The bp command sets a breakpoint at line 16 if S.uc has changed; g runs the
	application; the l command restarts the application.
	
	Sample Code
	-----------
	
	  /* Compile options needed:  /G2 /GA /Zi /Od
	  */ 
	
	     #include <windows.h>
	
	     #define UCHAR unsigned char
	
	     void main( void )
	     {
	      struct tagS
	      {
	       UINT  ui;
	       UCHAR uc;
	       LONG  li;
	      } S;
	
	      S.ui = 45;
	      S.uc = 65;
	      S.li = 100000L;
	     }
	
	Additional query words: 4.00 4.01 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	

{% endraw %}
