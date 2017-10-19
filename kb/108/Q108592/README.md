---
layout: page
title: "Q108592: Flight Simulator: Lockup Using Mouse and SoundBlaster on IRQ2"
permalink: /kb/108/Q108592/
---

## Q108592: Flight Simulator: Lockup Using Mouse and SoundBlaster on IRQ2

	Article: Q108592
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	kbusage kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Flight Simulator 5.0 with a mouse and a Creative Labs SoundBlaster
	Pro configured for Interrupt 2 (IRQ2), the Flight Simulator program will stop
	responding (hang) when you use the mouse.
	
	RESOLUTION
	==========
	
	To avoid this, configure the sound card for a different interrupt. See the
	Creative Labs manual for alternative interrupts.
	
	MORE INFORMATION
	================
	
	This problem may not be specific to SoundBlaster sound cards. Other sound cards
	or devices configured for IRQ2 may cause the same problem.
	
	IRQ2 is reserved for the second Programmable Interrupt Controller (PIC) and is
	not recommended for a sound card.
	
	Additional query words: 5.00 flightsim fltsim dos hang irq lock-up lockup lock up freeze crash fs5
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
