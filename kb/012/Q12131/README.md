---
layout: page
title: "Q12131: Use Timer Interrupt to Maintain Time Independent of CPU Speed"
permalink: /kb/012/Q12131/
---

## Q12131: Use Timer Interrupt to Maintain Time Independent of CPU Speed

{% raw %}

	Article: Q12131
	Product(s): See article
	Version(s): 3.00 4.00 5.00 5.10 6.00 6.00a
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | s_quickc | mspl13_c
	Last Modified: 15-JAN-1991
	
	Question:
	
	Is there a way to set up a function that will pause for n units of
	time without being altered on a faster or slower machine (for example,
	from a PC to an AT).
	
	Response:
	
	Set up a routine to handle the timer tick interrupt. This will be the
	same on all machines (about 18.2 times per second with interrupts
	enabled). The timer tick is interrupt 1C and can be modified for
	access by your own routine.

{% endraw %}
