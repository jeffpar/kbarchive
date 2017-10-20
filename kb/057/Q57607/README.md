---
layout: page
title: "Q57607: Exemod Shows Min Alloc Greater Than Max Alloc with Link /CP:1"
permalink: /kb/057/Q57607/
---

## Q57607: Exemod Shows Min Alloc Greater Than Max Alloc with Link /CP:1

{% raw %}

	Article: Q57607
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | cvpack | mspl13_c
	Last Modified: 15-JAN-1990
	
	Problem:
	
	Looking at the header of a .EXE file, compiled with C Version 5.10
	with the following
	
	   cl foo.c
	
	and linked with
	
	   link /CP:1 /E foo;
	
	EXEMOD shows that the value of the minimum allocation(para) is higher
	than the value for maximum allocation(para).
	
	The description of EXEMOD implies that this is not possible (Page 323
	of the Microsoft "CodeView and Utilities, Microsoft Editor,
	Mixed-Language Programming Guide" manual, under the description of
	/MAX).
	
	Response:
	
	Under normal circumstances, the minimum allocation size cannot be
	larger than the maximum allocation size. However, on Page 324 of the
	Microsoft "CodeView and Utilities, Microsoft Editor, Mixed-Language
	Programming Guide" manual, it states the following:
	
	   If either the /MIN or the /STACK option is used, the value is
	   CORRECTED as necessary to accommodate unpacking of the modified
	   stack. The /MAX option operates as it would for unpacked files.
	
	In other words, the minimum allocation value listed in a packed file
	is corrected to allow for the unpacked stack space. Since the maximum
	allocated value does not change for packed files, this COULD result in
	the minimum value being much larger than the maximum value. Note that
	this is the same whether the file is packed using the /E switch with
	LINK, or separately with EXEPACK.

{% endraw %}
