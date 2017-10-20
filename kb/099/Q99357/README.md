---
layout: page
title: "Q99357: Hardware Interrupt Priorities--Background and Usage"
permalink: /kb/099/Q99357/
---

## Q99357: Hardware Interrupt Priorities--Background and Usage

{% raw %}

	Article: Q99357
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	IBM PC-compatible computers (EISA-based or on the AT bus standard) use the
	equivalent of two Intel-8259 style interrupt controllers. Each 8259 has eight
	interrupt request (IRQ) inputs and a consolidated interrupt output. The two
	8259s are arranged in a master/slave configuration. The interrupt output of the
	slave 8259 is cascaded through master controller IRQ input 2, leaving a total of
	15 interrupts available.
	
	Controller priority works this way: if two simultaneous interrupts come in on
	different interrupt lines, the interrupt request with the LOWER number has
	HIGHER priority and is serviced first.
	
	The master/slave configuration changes interrupt priority so that any interrupt
	coming in on the slave interrupt controller has higher priority then any
	interrupts on the master interrupt controller that are downstream of IRQ 2.
	
	MORE INFORMATION
	================
	
	The original IBM PC architecture used only one 8259 interrupt controller with
	eight interrupt inputs--six available on the PC-bus, and the other two used for
	keyboard and interval timers (on the system board). The AT and EISA
	architectures added a second 8259, using one of the interrupts for use as the
	cascade from the slave to the master interrupt controller. To maintain
	compatibility with old PC cards, the pin that used to be called IRQ 2 on the bus
	was changed to IRQ 9 and reserved for use by the slave interrupt controller.
	Older drivers and documentation still refer to this interrupt as IRQ 2. You can
	use the terms interchangeably, because they refer to the same pin on the
	ISA/EISA bus.
	
	In AT and EISA style machines, five interrupts are unavailable--IRQ2/9 (for the
	slave controller) plus four others used for dedicated system purposes:
	
	- IRQ 0--for the tick counter
	
	- IRQ 1--for the keyboard controller
	
	- IRQ 8--as the interrupt for the real time clock
	
	- IRQ 13--to signal coprocessor error
	
	Here is a list of the interrupts on the bus showing priority (highest is at the
	top) and common usage.
	
	  IRQ 9  (IRQ 2)
	  IRQ 10
	  IRQ 11
	  IRQ 12
	  IRQ 14     fixed disk     (non-SCSI-style)
	  IRQ 15
	  IRQ 3          COM2
	  IRQ 4          COM1
	  IRQ 5          LPT2
	  IRQ 6          diskette drives
	  IRQ 7          LPT1, sound card
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
