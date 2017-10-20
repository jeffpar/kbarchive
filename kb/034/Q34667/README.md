---
layout: page
title: "Q34667: No Warning on Immediate Value Out of Range"
permalink: /kb/034/Q34667/
---

## Q34667: No Warning on Immediate Value Out of Range

{% raw %}

	Article: Q34667
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 12-JAN-1989
	
	In the following instruction MASM doesn't warn that an immediate value
	is too large:
	
	add structure.element[edi],immediate value
	
	The element is byte wide, but the immediate value is much larger than
	256. The assembler creates a byte add instruction, silently truncating
	the high part of the immediate value.
	
	MASM generally generates error messages on values out of range. MASM
	does not generate an out of range error message when the immediate
	value could be a signed number (e.g. 0ffffff75h) that is -8bH. The
	assembler can't tell if the immediate value is a negative number or an
	unsigned number that is out of bounds. In this case, MASM will not
	generate an error message.

{% endraw %}
