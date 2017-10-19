---
layout: page
title: "Q27803: _remapallpalette Example Causes C4049 Warning"
permalink: /kb/027/Q27803/
---

## Q27803: _remapallpalette Example Causes C4049 Warning

	Article: Q27803
	Product(s): See article
	Version(s): 5.00 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 26-SEP-1988
	
	Problem:
	
	I get a warning C4049 when I run the example on Page 489 of the C
	Versions 5.00 and 5.10 "Run-Time Library Reference," in the section on
	_remapallpalette and _remappalette.
	
	Response:
	
	There is an error in the example program. The following line:
	
	_remapallpalette((char *)(&(colorsarray[0])));
	
	should read as follows to avoid the warning message:
	
	_remapallpalette((long far *)(&(colorsarray[0])));
