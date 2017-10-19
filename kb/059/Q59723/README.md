---
layout: page
title: "Q59723: OS/2 DosFindFirst Code Example Correction; Missing Comma"
permalink: /kb/059/Q59723/
---

## Q59723: OS/2 DosFindFirst Code Example Correction; Missing Comma

	Article: Q59723
	Product(s): See article
	Version(s): 7.00 7.10
	Operating System(s): OS/2
	Keyword(s): ENDUSER | docerr | mspl13_basic
	Last Modified: 8-JAN-1991
	
	On Page 525 of the "Microsoft BASIC 7.0: Programmer's Guide" for
	Microsoft BASIC Professional Development System (PDS) Versions 7.00
	and 7.10, the code example given is missing a comma to delimit the
	VARSEG and SADD parameters when invoking the function DosFindFirst%.
	
	The incorrect syntax documented in the manual is as follows:
	
	   x = DosFindFirst%(VARSEG(flname$) SADD(flname$), dirh,_
	                    atr, buffer, bufflen, searchcount, reserved)
	
	The correct syntax of the CALL is as follows:
	
	   x = DosFindFirst%(VARSEG(flname$), SADD(flname$), dirh,_
	                    atr, buffer, bufflen, searchcount, reserved)
	
	A comma is needed between VARSEG(flname$) and SADD(flname$).
