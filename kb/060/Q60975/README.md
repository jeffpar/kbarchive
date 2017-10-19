---
layout: page
title: "Q60975: -Za and OS2.H Are Incompatible"
permalink: /kb/060/Q60975/
---

## Q60975: -Za and OS2.H Are Incompatible

	Article: Q60975
	Product(s): See article
	Version(s): 6.00 6.00a
	Operating System(s): OS/2
	Keyword(s): ENDUSER | buglist6.00 buglist6.00a | mspl13_c
	Last Modified: 19-JAN-1991
	
	The -Za compile option, which enforces the ANSI standard, CANNOT be
	used when the include files OS2.H or OS2DEF.H are included.
	
	This option cannot be used because the Microsoft extensions (near,
	far, cdecl, etc.) do not have the leading underscore (_) in front of
	them indicating that they are non-ANSI extensions.
	
	To successfully compile with the -Za compiler option, place an
	underscore (_) in front of these extensions.
	
	Microsoft is researching this problem and will post new information
	here as it becomes available.
