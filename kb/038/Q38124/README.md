---
layout: page
title: "Q38124: Turning Off Cursor in Text Mode"
permalink: /kb/038/Q38124/
---

## Q38124: Turning Off Cursor in Text Mode

{% raw %}

	Article: Q38124
	Product(s): See article
	Version(s): 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | s_c | mspl13_c
	Last Modified: 17-NOV-1988
	
	Question:
	
	How do I turn off the cursor in text mode? I can do it in graphics
	mode but that doesn't work in text mode.
	
	Response:
	
	There is no function in the run-time library to do that; however, you
	can do it with a bios function call.
	
	Use INT 10 FUNCTION 1. Set the CH register to 20h and call the
	interrupt to turn off the cursor. The following is a sample program:
	
	 #include <dos.h>
	
	 void main(void)
	 {
	     union REGS regs;
	
	     regs.h.ah = 1;
	     regs.h.ch = 20;
	     int86 ( 0x10, &regs, &regs );
	
	 }

{% endraw %}
