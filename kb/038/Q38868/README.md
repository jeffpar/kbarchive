---
layout: page
title: "Q38868: Illegal Instruction in CodeView"
permalink: /kb/038/Q38868/
---

## Q38868: Illegal Instruction in CodeView

{% raw %}

	Article: Q38868
	Product(s): See article
	Version(s): 1.x 2.00 2.10 2.20 | 2.20
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | S_C h_fortran S_PASCAL | mspl13_basic
	Last Modified: 6-DEC-1988
	
	Question:
	
	When I compile and link my C program and try to run it under CodeView,
	execution stops on the open curly brace of main. The view then goes to
	assembly, and the message "Illegal instruction" appears in the dialog
	window. Is there something wrong with the startup code?
	
	Response:
	
	This error can be produced when the main module of a program is
	compiled for one memory model and is then explicitly linked with a
	library for a different model. When the startup code is linked to the
	entry point of the program, different size instructions are used for
	the different memory models. If the program expects one size and the
	linker links in a different size, the startup instructions will be
	misinterpreted and result in this error.

{% endraw %}
