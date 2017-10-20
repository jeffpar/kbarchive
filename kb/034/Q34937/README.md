---
layout: page
title: "Q34937: Segment Combine Type AT with Equate Variable Causes Problem"
permalink: /kb/034/Q34937/
---

## Q34937: Segment Combine Type AT with Equate Variable Causes Problem

{% raw %}

	Article: Q34937
	Product(s): See article
	Version(s): 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist5.10 | mspl13_masm
	Last Modified: 12-JAN-1989
	
	The sample code below demonstrates a problem with the equate directive
	and the segment combine type AT.
	
	The segment bios_seg incorrectly evaluates to 0 in the mov
	instruction. If the equate statement is located before the bios-seg
	segment definition, the segment bios_seg correctly evaluates to 40h.
	
	Microsoft has confirmed this to be a problem in Version 5.10. We are
	researching this problem and will post new information as it becomes
	available.
	
	The following is a sample code:
	
	code segment public 'code'
	assume cs:code
	
	bios_seg segment at BIOS
	
	bios_seg ends
	
	BIOS  equ 40h
	
	start:
	  mov ax,bios_seg
	
	code ends
	end start

{% endraw %}
