---
layout: page
title: "Q67271: CodeView Asks for Path to a Source File Without Extension"
permalink: /kb/067/Q67271/
---

## Q67271: CodeView Asks for Path to a Source File Without Extension

	Article: Q67271
	Product(s): See article
	Version(s): 2.x 3.00 3.10 3.11 3.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | s_lib s_utility | mspl13_basic
	Last Modified: 4-DEC-1990
	
	If an old version of the LIB utility is used to store OBJ modules in a
	library, the extension may not be stored. This can cause a problem if
	a module is compiled with debug information and an .EXE is built for
	CodeView to debug. When CodeView attempts to open the source file for
	the module in the library, it will fail because there is no extension.
	It will then prompt you for the filename.
	
	This is a problem with the Microsoft LIB utilities earlier than version
	3.08 and some third-party library managers. Beginning with LIB version
	3.08, the full filename is stored in the library.
