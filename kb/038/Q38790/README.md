---
layout: page
title: "Q38790: Error L1081 Out of Space for Run File"
permalink: /kb/038/Q38790/
---

## Q38790: Error L1081 Out of Space for Run File

{% raw %}

	Article: Q38790
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_pascal h_fortran h_masm s_quickc s_link s_error | mspl13_c
	Last Modified: 7-DEC-1988
	
	The following error is from "Linker Error Messages" in the manual
	"CodeView and Utilities," Section C.2, Page 364, and in the "Microsoft
	QuickC Compiler Programmer's Guide," Section D.4, Page 369:
	
	L1081       out of space for run file
	
	            The disk on which the .EXE file was being written was
	            full.
	
	            Free more space on the disk and restart the linker.
	
	Fatal errors cause the linker to stop execution. Fatal error messages
	have the following format:
	
	   location : fatal error L1xxx: messagetext
	
	In these messages, location is the input file associated with the
	error, or LINK if there is no input file. If the input file is an OBJ
	or LIB file and has a module name, the module name is enclosed in
	parentheses.

{% endraw %}
