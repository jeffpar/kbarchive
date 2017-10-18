---
layout: page
title: "Q116370: BUG: EE: &quot;CXX0058: Error: Overloaded Operator Not Found&quot;"
permalink: kb/116/Q116370/
---

## Q116370: BUG: EE: &quot;CXX0058: Error: Overloaded Operator Not Found&quot;

	Article: Q116370
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
	
	When attempting to evaluate overloaded functions in Codeview's command window,
	you may receive the following error message:
	
	  CXX0058: Error: Overloaded Operator Not Found
	
	CAUSE
	=====
	
	Codeview's expression evaluator requires exact argument matches in order to
	evaluate overloaded functions. In addition, for the purpose of argument
	matching, top level modifiers (i.e., const, volatile) are ignored.
	
	RESOLUTION
	==========
	
	Use appropriate type casts when specifying function parameters so that they
	exactly match the function's formal parameter list. See the next section for
	more details.
	
	MORE INFORMATION
	================
	
	To demonstrate this problem, build a debug version of the HELLO sample in the
	\msvc\mfc\samples\hello directory. Start a debugging session using Codeview for
	Windows and enter the following commands in the command window:
	
	  >p2
	  >?afxDump << "Hello\n"
	  >g CMainWindow::OnAbout
	  >p2
	  >?afxDump << about
	
	Both afxDump calls will return the CXX0058 error. The g instruction tells
	Codeview to go until it reaches the CMainWindow::OnAbout() function.
	
	Restart HELLO and enter the following commands using the appropriate type casts
	(these will evaluate correctly):
	
	  p2
	  ?afxDump << (char far *)"Hello\n"
	  g CMainWindow::OnAbout
	  p2
	  ?afxDump << (CObject *)&about
	
	Additional query words: 4.00 4.01 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView410DOS kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	
