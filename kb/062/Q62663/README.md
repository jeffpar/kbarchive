---
layout: page
title: "Q62663: PRB: CodeView May Appear to Hang on gets() If Screen Swap Is Off"
permalink: /kb/062/Q62663/
---

## Q62663: PRB: CodeView May Appear to Hang on gets() If Screen Swap Is Off

	Article: Q62663
	Product(s): Microsoft Programming Utilities
	Version(s): 3.0,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for OS/2, versions 3.0, 3.11, 3.12, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft CodeView Debugger will appear to hang when you step or execute
	past a call to the gets() run-time routine if the Screen Swap option is turned
	off.
	
	CAUSE
	=====
	
	The apparent lock-up results because the gets() call causes focus to shift to
	the debuggee's screen and there is no way for CodeView to get to that screen
	with Screen Swap off.
	
	Since in MS-DOS, the debuggee's screen still displays CodeView, you may be able
	to type in the information and press Return to continue. This will temporarily
	display the debuggee's input over CodeView's screen. A better method in MS-DOS
	is to break execution with CTRL+C so that you may turn swapping back on.
	
	RESOLUTION
	==========
	
	To get past this deadlock with CVP under OS/2, manually switch screen groups to
	the one labeled "CVP app appname.EXE". Once there, you can provide a response to
	the waiting gets() call. After entering a string, you can switch back to the
	screen group running CVP and continue debugging.
	
	MORE INFORMATION
	================
	
	The sample code below illustrates this situation. Compile the code as indicated
	and bring up the .EXE in CodeView. Select the Option menu and turn off Screen
	Swap if it is on. Next, step past the gets() call. In MS-DOS, you will need to
	press CTRL+C to regain control. In OS/2, you will need to switch screen groups
	to provide the necessary input to the program.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Zi /Od
	  */ 
	
	  #include <stdio.h>
	
	  char string[256];
	
	  void main (void)
	  {
	      printf ( "Enter a string: ") ;
	      gets ( string ) ;
	      printf ( "Echoing : %s\n", string) ;
	  }
	
	Additional query words: 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300OS2 kbCodeView311OS2 kbCodeView312OS2 kbCodeView350OS2
	Version           : :3.0,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	
	=============================================================================
	
