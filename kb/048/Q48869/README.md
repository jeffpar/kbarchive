---
layout: page
title: "Q48869: Long TMP Environment Variable Causes L1089"
permalink: /kb/048/Q48869/
---

## Q48869: Long TMP Environment Variable Causes L1089

	Article: Q48869
	Product(s): See article
	Version(s): 5.03   | 5.03
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | h_fortran | mspl13_basic
	Last Modified: 6-DEC-1989
	
	L1089 occurs when the LINK Utility Version 5.03 is called from FORTRAN
	Version 5.00 and the TMP environment variable is set to a long
	pathname.
	
	Normal troubleshooting indicates that the TMP variable is corrupt, but
	this is not the case. It seems that the temporary filename is being
	truncated.
	
	The following sequence produces the error if the subdirectory
	D:\COMPILER\FORTRAN5\TMP\ already exists:
	
	SET TMP=d:\compiler\fortran5\tmp
	fl sieve.for
	
	LINK : fatal error L1089: D:\COMPILER\FORTRAN5\TMP\000054l
	: cannot open response file
	
	This problem occurs in FORTRAN 5.00 and Link 5.03.
