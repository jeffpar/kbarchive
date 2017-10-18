---
layout: page
title: "Q117887: PRB: L1035 Linking MOVE Application Using a Fastcall Function"
permalink: kb/117/Q117887/
---

## Q117887: PRB: L1035 Linking MOVE Application Using a Fastcall Function

	Article: Q117887
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.3,5.31,5.5,5.6
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.3, 5.31, 5.5, 5.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK generates the
	following error message:
	
	  fatal error L1035: syntax error in module-definition file
	
	CAUSE
	=====
	
	The application is using MOVE overlays and has a function that uses the fastcall
	calling convention in an overlay. The name of the function is specified in the
	module-definition (.DEF) file, with the preceding @ character.
	
	RESOLUTION
	==========
	
	Enclose the name of the function in the module-definition (.DEF) file in double
	quotes ("").
	
	MORE INFORMATION
	================
	
	The following sample code can be used to reproduce the problem:
	
	Sample Code
	-----------
	
	  /* Compile options needed: /AM (or /AL) /Gy /Gs
	  */ 
	
	  // TEST.C - implementation file
	
	     #include <stdio.h>
	
	     void sub1(void);
	     void __fastcall sub2(void);
	
	     void main(void)
	     {
	          printf("This is main\n");
	          sub1();
	          sub2();
	          printf("This is main, again\n");
	     }
	
	     void sub1(void)
	     {
	          printf("This is sub1\n");
	     }
	
	     void __fastcall sub2(void)
	     {
	          printf("This is sub2\n");
	     }
	
	     // TEST.DEF - module-definition file
	
	     NAME TEST.EXE
	
	     FUNCTIONS:1 _sub1
	     FUNCTIONS:2 @sub2           ; L1035 Error !
	     ; FUNCTIONS:2 "@sub2"       ; use this line to avoid the error
	
	Additional query words: 5.30 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK530DOS kbLINK531DOS kbLINK550DOS kbLINK560DOS
	Version           : MS-DOS:5.3,5.31,5.5,5.6
	
	=============================================================================
	
