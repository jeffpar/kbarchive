---
layout: page
title: "Q39088: C1004: Unexpected EOF"
permalink: /kb/039/Q39088/
---

## Q39088: C1004: Unexpected EOF

{% raw %}

	Article: Q39088
	Product(s): See article
	Version(s): 4.00  5.00  5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_quickc | mspl13_c
	Last Modified: 12-DEC-1988
	
	The fatal-compiler error "C1004: Unexpected EOF" can be caused by
	failing to end a line with a <CR>.  On pure C language statements the
	compiler ignores white space, but on statements with directives a <CR>
	is needed.
	
	This will occur if the following include file is used in a program:
	
	    #include <stdio.h><CR>
	    #define YES 1<CR>
	    #define NO  0
	
	Without the <CR> after the third line, error C1004 will be produced by
	the compiler.

{% endraw %}
