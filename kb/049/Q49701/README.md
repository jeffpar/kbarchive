---
layout: page
title: "Q49701: MASM Err Msg: A2056: Immediate Mode Illegal"
permalink: /kb/049/Q49701/
---

## Q49701: MASM Err Msg: A2056: Immediate Mode Illegal

{% raw %}

	Article: Q49701
	Product(s): See article
	Version(s): 5.00 5.10 | 5.00 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 29-MAR-1990
	
	The following information is from Page 437 of the "Microsoft Macro
	Assembler 5.0 for the MS-DOS Operating System: Programmer's Guide":
	
	   An immediate operand was supplied to an instruction that cannot use
	   immediate data. For example, the following statement is illegal:
	
	      mov ds,DGROUP
	
	   You must move the segment address into a general register and then
	   move it from that register to DS.

{% endraw %}
