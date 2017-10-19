---
layout: page
title: "Q43002: Return Values for _remapallpalette and _remappalette"
permalink: /kb/043/Q43002/
---

## Q43002: Return Values for _remapallpalette and _remappalette

	Article: Q43002
	Product(s): See article
	Version(s): 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | S_QuickC docerr | mspl13_c
	Last Modified: 17-MAY-1989
	
	The function _remapallpalette returns (short) -1 when successful and
	(short) 0 on error.
	
	The function _remappalette returns (long) previous color number of the
	pixel on success and (long) -1 on error.
	
	Their return values are incorrectly stated on Page 488 in the
	"Microsoft C for the MS-DOS Operating System: Run-Time Library
	Reference" for both C Version 5.10 and QuickC Version 1.01, the C 5.10
	README.DOC, and QuickC 2.00 Advisor (on-line help screens titled
	"Help: _remapallpalette" and "Help: _remappalette).
