---
layout: page
title: "Q116465: BUG: /N1 Switch Does Not Function Properly in CodeView"
permalink: /kb/116/Q116465/
---

## Q116465: BUG: /N1 Switch Does Not Function Properly in CodeView

	Article: Q116465
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
	
	CodeView, versions 4.0, 4.01, and 4.1, always traps non-maskable interrupts
	(NMI) in programs being debugged, regardless of whether you use the /N0 or /N1
	CodeView options, which are supposed to trap NMIs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in CodeView for MS-DOS. We are
	researching this problem and will post more information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	You can use the sample code below to demonstrate this problem. Build the
	application for debug mode and load it into CodeView, version 4.10, using the
	/N1 switch. When the program is run by pressing F5, the NMI breakpoint is
	reported and the program breaks.
	
	Sample Code
	-----------
	
	  /* Compile options needed:  /Zi
	  */ 
	
	     #include <stdio.h>
	
	     void main( void )
	     (
	         _asm int 2;
	         printf( "Hello World.\n" );
	     }
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView410DOS
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	
