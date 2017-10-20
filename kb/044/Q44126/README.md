---
layout: page
title: "Q44126: Finding the COM1: Serial Port on a PC/XT/AT Machine"
permalink: /kb/044/Q44126/
---

## Q44126: Finding the COM1: Serial Port on a PC/XT/AT Machine

{% raw %}

	Article: Q44126
	Product(s): See article
	Version(s): 1.00   | 1.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 31-AUG-1989
	
	When connecting the Microsoft Mouse serial interface cable to your
	computer, you must first determine the location of the serial port.
	
	On a PC- or XT-class computer, the serial port is normally the male,
	25-pin, D-shaped connection in the back of the machine.
	
	On an AT-class computer, the serial connection is normally the male,
	9-pin, D-shaped connection on the back of the computer.
	
	There are exceptions, but these descriptions are a good rule of thumb.
	
	Note: If the machine has only one serial port, it should be set up as
	COM1: using IRQ4. If the serial port is set up as COM2: and it is the
	only serial port in the machine, the Microsoft Mouse driver might
	install, but the mouse might not function properly.
	
	COM3: and COM4: is not supported by the mouse driver.

{% endraw %}
