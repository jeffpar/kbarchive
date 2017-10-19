---
layout: page
title: "Q50334: atexit() Returns Zero if Successful"
permalink: /kb/050/Q50334/
---

## Q50334: atexit() Returns Zero if Successful

	Article: Q50334
	Product(s): See article
	Version(s): 5.00 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER| | docerr S_QuickC | mspl13_c
	Last Modified: 30-NOV-1989
	
	Question:
	
	The "Microsoft C for the MS-DOS Operating System: Run-Time Library
	Reference" has conflicting statements regarding the return code from
	atexit(). What is the proper return code?
	
	Response:
	
	There is an error in the run-time library reference for the atexit()
	function (Page 124) under DESCRIPTION. The correct return values are
	described in the RETURN VALUE section. atexit() should return a value
	of zero (0) if successful and nonzero (-1) on error.
