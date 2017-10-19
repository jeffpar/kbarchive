---
layout: page
title: "Q60391: Operator Missing in C 6.00 A.P.T. Manual's /Oz Example"
permalink: /kb/060/Q60391/
---

## Q60391: Operator Missing in C 6.00 A.P.T. Manual's /Oz Example

	Article: Q60391
	Product(s): See article
	Version(s): 6.00   | 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 17-DEC-1990
	
	The example for the command-line compiler switch /Oz on Page 18 of
	"Microsoft C Advanced Programming Techniques" is missing a "<" sign in
	a FOR statement. The incorrect line of code in the manual appears as
	follows:
	
	   for( i = 0; i  100; ++i )
	
	The correct code should read as follows:
	
	   for( i = 0; i <100; ++i )
