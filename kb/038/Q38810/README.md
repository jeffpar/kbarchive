---
layout: page
title: "Q38810: Error L1089 Filename : Cannot Open Response File"
permalink: /kb/038/Q38810/
---

## Q38810: Error L1089 Filename : Cannot Open Response File

{% raw %}

	Article: Q38810
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_pascal h_fortran h_masm s_quickc s_link s_error | mspl13_c
	Last Modified: 11-JAN-1990
	
	The following error is from "Linker Error Messages" in the manual
	"CodeView and Utilities," Section C.2, Page 365, and in the "Microsoft
	QuickC Compiler Programmer's Guide," Section D.4, Page 370:
	
	L1089       filename : cannot open response file
	
	            LINK could not find the specified response file.
	
	            This usually indicates a typing error.
	
	Fatal errors cause the linker to stop execution. Fatal error messages
	have the following format:
	
	   location : fatal error L1xxx: messagetext
	
	In these messages, location is the input file associated with the
	error, or LINK if there is no input file. If the input file is an OBJ
	or LIB file and has a module name, the module name is enclosed in
	parentheses.
	
	Also, check the TMP environment variable setting and/or TSR's.

{% endraw %}
