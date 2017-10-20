---
layout: page
title: "Q58658: Quick Libraries in BASIC 7.00 Don't Use Expanded Memory"
permalink: /kb/058/Q58658/
---

## Q58658: Quick Libraries in BASIC 7.00 Don't Use Expanded Memory

{% raw %}

	Article: Q58658
	Product(s): See article
	Version(s): 7.00 7.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | SR# S900207-70 | mspl13_basic
	Last Modified: 27-JUL-1990
	
	When using a Quick library in QBX.EXE, the programming environment
	included with Microsoft BASIC Professional Development System (PDS)
	version 7.00 or 7.10, the Quick library is always placed in
	conventional memory. If you have expanded memory (as defined in the
	LIM 4.0 EMS), QBX.EXE utilizes this expanded memory for loaded source
	code segments that are smaller than 16K; however, Quick libraries are
	always placed in conventional memory.
	
	Microsoft BASIC PDS 7.00 or 7.10 is the only Microsoft BASIC product
	that supports expanded memory, so this is not a consideration in
	earlier versions of Microsoft BASIC Compiler or QuickBASIC.
	
	Note: (LIM 4.0 EMS is an acronym for the Lotus/Intel/Microsoft version
	4.0 Expanded Memory Specification for MS-DOS.)

{% endraw %}
