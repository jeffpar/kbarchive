---
layout: page
title: "Q64102: BASIC 7.0 Documentation Correction for Compiling OS/2 Programs"
permalink: /kb/064/Q64102/
---

## Q64102: BASIC 7.0 Documentation Correction for Compiling OS/2 Programs

{% raw %}

	Article: Q64102
	Product(s): See article
	Version(s): 7.00 7.10
	Operating System(s): OS/2
	Keyword(s): ENDUSER | SR# S900719-162 docerr | mspl13_basic
	Last Modified: 1-AUG-1990
	
	The second sentence in the "Compiling OS/2 Programs" section on Page
	527 of the "Microsoft BASIC 7.0: Programmer's Guide" manual for
	Microsoft BASIC Professional Development System (PDS) versions 7.00
	and 7.10 incorrectly states the following:
	
	   For protected-mode programs, make sure to specify the /LP option
	   to LINK.
	
	This sentence should refer to the BASIC compiler (BC.EXE) instead of
	to the BASIC linker (LINK.EXE), as follows:
	
	   For protected-mode programs, make sure to specify the /LP option
	   to compile with BC.EXE.

{% endraw %}
