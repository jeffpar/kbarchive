---
layout: page
title: "Q37928: Mac DOS: Hardware Interrupts Used by Common Devices"
permalink: /kb/037/Q37928/
---

## Q37928: Mac DOS: Hardware Interrupts Used by Common Devices

{% raw %}

	Article: Q37928
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Interrupts are the means by which the computer's circuitry outside the central
	processor reports that something (such as a keystroke) has occurred and requests
	that some action be taken. Serious problems may occur if two devices installed
	in a computer are using the same interrupt; for example, one of the devices may
	be disabled, or your computer system may stop responding (hang) because the
	computer cannot service two interrupts at one time. This problem may occur when
	you try to install an AppleTalk network card for use with Microsoft Mail (MS-DOS
	client).
	
	RESOLUTION
	==========
	
	To resolve an interrupt conflict, set one of the devices to use another
	interrupt (if possible), or remove one of the devices from your hardware
	configuration.
	
	MORE INFORMATION
	================
	
	The following is a table of hardware interrupts used by the IBM PC/XT or PC/AT
	and common devices:
	
	  Interrupt    Potential Use
	  ---------    -------------
	
	   0           System board timer
	
	   1           Keyboard
	
	   2           PC/AT hard disk*, bus mouse, some clock calendars, UBNET
	               cards (on PC/XTs), Apple LocalTalk, or TOPS FlashCard
	               network cards
	
	   3           Serial port 2, bus mouse, Apple LocalTalk, TOPS FlashCard,
	               or MacBridge ATB network cards
	
	   4           Serial port 1, bus mouse, Apple LocalTalk network card
	
	   5           PC/XT hard disk, bus mouse, UBNET card (on PC/ATs)
	
	   6           Floppy disk controller
	
	   7           Parallel port 1
	
	IBM PC/AT Only
	--------------
	
	   8           Real-time clock
	
	   9           Software redirect to IRQ2
	
	  10-12        Reserved
	
	  13           Coprocessor
	
	  14           Hard disk controller
	
	  15           Reserved
	
	* The IBM PC/AT uses IRQ2 to access interrupts 8-15 by activating a separate
	interrupt controller.
	
	
	Additional query words: 3.00 3.10 lock
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN300DOS kbMailATN310DOS
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
