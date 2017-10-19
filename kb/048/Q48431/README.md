---
layout: page
title: "Q48431: Macros ceil and floor Incorrectly Listed As Functions"
permalink: /kb/048/Q48431/
---

## Q48431: Macros ceil and floor Incorrectly Listed As Functions

	Article: Q48431
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 16-JAN-1990
	
	Page 94, Section 3.3.13 of the "Microsoft C 5.1 Optimizing Compiler
	User's Guide" incorrectly lists ceil and floor as functions that have
	intrinsic forms.
	
	As correctly noted in the "Microsoft C 5.1 Optimizing Compiler
	Run-Time Library Reference" on Pages 152 and 270, ceil and floor are
	macros defined in the include file MATH.H.
