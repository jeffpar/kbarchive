---
layout: page
title: "Q38382: CodeView Instruction Pointer Miscounts Very Long Lines"
permalink: /kb/038/Q38382/
---

## Q38382: CodeView Instruction Pointer Miscounts Very Long Lines

{% raw %}

	Article: Q38382
	Product(s): See article
	Version(s): 2.20
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist2.20 | mspl13_basic
	Last Modified: 1-DEC-1988
	
	CodeView may display the "current instruction" highlight on the wrong
	line if the source file contains lines that are very long.
	
	The compiler counts the long lines as one line, but CodeView counts
	the very long lines as two lines. This makes the line number
	calculations incorrect and causes the "current line" highlight to
	appear on the wrong line. This problem does not occur if the source
	lines are less than 251 characters in length.
	
	Because the Microsoft Editor breaks lines that are longer than 250
	characters, this problem does not occur if you create and maintain
	your source files with the Microsoft Editor.
	
	Microsoft has confirmed this to be a problem in CodeView Version 2.20.
	We are researching this problem and will post new information as it
	becomes available.

{% endraw %}
