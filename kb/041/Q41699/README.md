---
layout: page
title: "Q41699: Filenames Starting with &quot;-&quot; Cause ILINK Errors"
permalink: /kb/041/Q41699/
---

## Q41699: Filenames Starting with &quot;-&quot; Cause ILINK Errors

	Article: Q41699
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 2-MAY-1989
	
	Building programs under QuickC Version 2.00 can result in errors when
	filenames begin with the dash character "-".  These same programs
	compile under Version 1.0x and under Version 2.00 when incremental
	link is turned off.
	
	This behavior is caused by ILINK interpreting the dash of the
	filename as the beginning of a switch argument. A filename with a dash
	in the middle of it avoids the problem because ILINK interprets the
	entire filename as a single argument.
