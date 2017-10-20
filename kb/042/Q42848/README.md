---
layout: page
title: "Q42848: TURTLE.C, MENU.C, TOOLS.C Not Stand-Alone Programs in QuickC"
permalink: /kb/042/Q42848/
---

## Q42848: TURTLE.C, MENU.C, TOOLS.C Not Stand-Alone Programs in QuickC

{% raw %}

	Article: Q42848
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 2-MAY-1989
	
	The sample source files TURTLE.C, MENU.C, and TOOLS.C included with
	the QuickC Version 2.00 compiler are not stand-alone programs. They
	are modules used by the programs GRDEMO.C, LIFE.C and CHRTDEMO.C.
	Attempting to compile and link one of these modules by itself will
	result in the following error message:
	
	xLIBCE.LIB(dos\crt0.asm) : error L2029 : '_main' : unresolved external
	
	In the above error message, "x" stands for the (S, M, C, L) memory
	model.
	
	Use the supplied NMAKE files to compile and link each of these three
	demo programs. To perform this procedure inside the QuickC 2.00
	environment, load the desired demo source file and set the program
	list to the corresponding NMAKE file (GRDEMO.MAK, LIFE.MAK, or
	CHRTDEMO.MAK). Outside the environment, you only need to type NMAKE
	followed by the desired NMAKE file name.

{% endraw %}
