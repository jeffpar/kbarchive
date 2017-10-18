---
layout: page
title: "Q116461: BUG: Conditional Breakpoint with Pass Count Breaks Incorrectly"
permalink: kb/116/Q116461/
---

## Q116461: BUG: Conditional Breakpoint with Pass Count Breaks Incorrectly

	Article: Q116461
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
	
	When using conditional breakpoints with a pass count in CodeView for MS-DOS,
	CodeView may initially break at the wrong time.
	
	RESOLUTION
	==========
	
	To work around the problem, run your program beyond the point where the
	variables in the expression are declared or initialized; then set the
	conditional breakpoint and resume the program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in CodeView for MS-DOS, versions 4.0,
	4.01, and 4.1. We are researching the problem and will post new information in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The sample program below demonstrates this problem. Build a debug version, load
	it into CodeView for MS-DOS, and then type the following commands in the
	CodeView command window:
	
	  >bp ?{main}j>2 /p4
	  >g
	  >g
	
	The first g command stops before i and j are initialized; the second g command
	stops at the proper breakpoint location.
	
	Sample Code
	-----------
	
	  /* Compile options needed:   /Zi
	  */ 
	
	     int a[10][10] = {0};
	
	     void main( void )
	     {
	         int i, j;
	
	         for ( i = 0; i < 10; i++ )
	             for ( j = 0; j < 10; j++ )
	                 a[i][j] = i * j;
	     }
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView410DOS
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	
