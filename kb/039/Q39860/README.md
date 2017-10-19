---
layout: page
title: "Q39860: Cannot Nest ON ERROR GOTO Error-Trapping Routines in BASIC"
permalink: /kb/039/Q39860/
---

## Q39860: Cannot Nest ON ERROR GOTO Error-Trapping Routines in BASIC

	Article: Q39860
	Product(s): See article
	Version(s): 2.00 2.01 3.00 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | B_BasicCom SR# G881215-8171 | mspl13_basic
	Last Modified: 14-DEC-1989
	
	After control is passed to an error handler in a Microsoft QuickBASIC
	program, additional errors cannot be trapped until a RESUME, RESUME
	label, or RESUME NEXT occurs. This behavior is by design and applies
	to Microsoft QuickBASIC Versions 2.00 2.01 3.00 4.00 4.00b and 4.50,
	to Microsoft BASIC Compiler Versions 6.00 and 6.00b for MS-DOS and MS
	OS/2.
	
	This also applies to Microsoft BASIC PDS for MS-DOS and MS OS/2 when
	using global or "module level" error trapping. However, error trapping
	is possible inside a local error handler invoked with an ON LOCAL
	ERROR statement available in Microsoft BASIC PDS Version 7.00 for
	MS-DOS and MS OS/2.
	
	Error-trapping routines perform best when they help notify you or the
	program of an error condition, allow for the error to be corrected,
	and then RESUME back into the program.
	
	For example, the following error-trapping structure could be used when
	attempting to open a user-supplied filename. If more coding was used
	and an error occurred while in the TRAP routine, the error would not
	be trapped by the program.
	
	The following is a code example:
	
	ON ERROR GOTO TRAP
	10  INPUT "Enter a FileName: ";a$
	20  OPEN a$ for input as #1
	END
	TRAP:
	   IF ERL = 20 THEN
	      RESUME 10
	   ELSE
	      Print "The error Number is: ";err
	      RESUME NEXT
	   END IF
