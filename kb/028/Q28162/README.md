---
layout: page
title: "Q28162: Missing END IF in FOR NEXT Gives Different Errors in QB and BC"
permalink: /kb/028/Q28162/
---

## Q28162: Missing END IF in FOR NEXT Gives Different Errors in QB and BC

	Article: Q28162
	Product(s): See article
	Version(s): 6.00 6.00b 7.00   | 6.00 6.00b 7.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 2-FEB-1990
	
	The following program gives a "NEXT without FOR" error in QB.EXE and
	the QBX.EXE environment shipped with Microsoft BASIC Professional
	Development System (PDS) Version 7.00 for MS-DOS, and a "BLOCK IF
	WITHOUT END IF" error from an EXE compiled in BC.EXE (the following is
	a code example):
	
	   for i=1 to 10
	      if x=10 then
	        a=c
	      else
	         d=c
	    next i
	
	Both error messages are correct, depending on how you view the program.
	This feature will not be changed.
