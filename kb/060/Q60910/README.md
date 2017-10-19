---
layout: page
title: "Q60910: _ERESNOCOLOR Should Be Typed M/G, Not M/T"
permalink: /kb/060/Q60910/
---

## Q60910: _ERESNOCOLOR Should Be Typed M/G, Not M/T

	Article: Q60910
	Product(s): See article
	Version(s): 5.10 6.00 | 5.10 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_quickc docerr | mspl13_c
	Last Modified: 1-MAY-1990
	
	On Page 680 of the "Microsoft C Run-Time Library Reference" (published
	by Microsoft Press) for C version 6.00 and on Page 539 of the
	"Microsoft C 5.1 Optimizing Compiler Run-Time Library Reference,"
	_ERESNOCOLOR is incorrectly listed as type M/T, indicating that this
	mode only supports monochrome text. _ERESNOCOLOR should be typed M/G,
	indicating monochrome graphics. The following code demonstrates that
	graphics can be generated when the video mode is set to _ERESNOCOLOR:
	
	Code Example
	------------
	
	 #include <graph.h>
	 #include <conio.h>
	
	 void main(void)
	 {
	  _setvideomode(_ERESNOCOLOR);
	  _ellipse(_GFILLINTERIOR, 80, 50, 240, 150);
	  getch();
	  _setvideomode(_DEFAULTMODE);
	 }
