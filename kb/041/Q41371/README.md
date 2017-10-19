---
layout: page
title: "Q41371: Removing CodeView Information from .LIBs and .EXEs"
permalink: /kb/041/Q41371/
---

## Q41371: Removing CodeView Information from .LIBs and .EXEs

	Article: Q41371
	Product(s): See article
	Version(s): 2.20   | 2.20
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | SR# G890207-11424 | mspl13_basic
	Last Modified: 2-MAR-1989
	
	Question:
	
	Is there a way to remove CodeView symbols from a .LIB or .EXE file?
	
	Response:
	
	Although there is no utility that removes CodeView information from
	libraries, EXEPACK will remove CodeView information from .EXE files in
	the course of packing them. You can also remove information from an
	.EXE file by relinking it without the /CODEVIEW option.
	
	The only way to remove CodeView information from a library is to
	recompile the source modules and use the LIB utility to rebuild the
	library.
