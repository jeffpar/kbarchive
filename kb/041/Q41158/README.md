---
layout: page
title: "Q41158: C Versions 3.00, 4.00 Do Not Require Semicolon in Structure"
permalink: /kb/041/Q41158/
---

## Q41158: C Versions 3.00, 4.00 Do Not Require Semicolon in Structure

	Article: Q41158
	Product(s): See article
	Version(s): 3.00 4.00 5.00 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 16-MAY-1989
	
	Microsoft C Versions 3.00 and 4.00 do not require a semicolon to be
	put after each field in the structure declaration. The following piece
	of code does not produce any errors in C Versions 3.00 and 4.00:
	
	struct one
	{
	   int i
	};
	
	Microsoft C Versions 5.00 and 5.10 do require a semicolon after each
	field and will generate the following error if the semicolon
	is not there:
	
	error C2143
	syntax error: missing ';' before '}'
	
	Note: According to the Kernighan and Ritchie, semicolons are required
	after each field in the structure declaration.
