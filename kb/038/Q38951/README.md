---
layout: page
title: "Q38951: QuickC Version 2.00 Supports CodeView Information"
permalink: /kb/038/Q38951/
---

## Q38951: QuickC Version 2.00 Supports CodeView Information

{% raw %}

	Article: Q38951
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): enduser | s_codeview | mspl13_c
	Last Modified: 31-OCT-1989
	
	QuickC Version 2.00 contains support for CodeView's symbolic
	information in the QuickC environment. If you choose the Options
	menu and the "Make" selection, you will get a pop-up menu that will
	allow you to choose the compilation flags. Once you have chosen the
	<compiler flags> selection, you can set the Option for CodeView
	information. This process will allow you to use the debugger within
	QuickC as well as using the same executable in CodeView, thus
	eliminating a required recompilation by the QCL command line compiler.
	
	If you intend to use CodeView on your QuickC executable, you will have
	to ensure that you have disabled the Incremental Compile and the
	Incremental Link options. The Incremental Compile option is found
	under <compiler flags> selection. The Incremental Link option can be
	found under <linker flags> selection.
	
	The current CodeView release is unable to understand Incrementally
	compiled/linked executables. If you try to use CodeView on an EXE file
	that was Incrementally compiled and/or linked, you will be unable to
	trace through the code. The trace will "fall" through to the end of
	your program.

{% endraw %}
