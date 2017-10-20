---
layout: page
title: "Q41478: Library Sizes for QuickC 2.00"
permalink: /kb/041/Q41478/
---

## Q41478: Library Sizes for QuickC 2.00

{% raw %}

	Article: Q41478
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | SLIBCE MLIBCE CLIBCE LLIBCE SLIBC7 MLIBC7 CLIBC7 LLIBC7 | mspl13_c
	Last Modified: 28-FEB-1989
	
	The following are sizes for QuickC Version 2.00 libraries, as created
	by LIB.EXE 3.14:
	
	                                          Standard
	                               Standard   +Graphics
	   Library        Standard    +Graphics    +Pgchart
	
	   SLIBCE.LIB     206343       279679       331119
	   MLIBCE.LIB     208391       282239       333679
	   CLIBCE.LIB     216635       290483       341923
	   LLIBCE.LIB     219195       293043       344483
	
	   SLIBC7.LIB     193543       267391       318831
	   MLIBC7.LIB     196103       269439       320879
	   CLIBC7.LIB     204347       278195       329635
	   LLIBC7.LIB     206907       280755       332195
	
	Standard libraries are combined component libraries, where "x" is any
	of the memory models S, M, C, or L, as follows:
	
	   xLIBC.LIB + xLIBFP.LIB + [ EM.LIB | 87.LIB ] + LIBH.LIB

{% endraw %}
