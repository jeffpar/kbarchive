---
layout: page
title: "Q99254: Problems with Compaq 486/C LTEs and Megahertz 14.4k Modems"
permalink: /kb/099/Q99254/
---

## Q99254: Problems with Compaq 486/C LTEs and Megahertz 14.4k Modems

	Article: Q99254
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The Megahertz 14.4-kb modems in the new Compaq 486/C LTEs operate correctly only
	when in the docking station. When in the expansion base, they do not respond to
	any commands during battery or AC adapter operation, not to any commands from
	RAS, Windows Terminal or MS-DOS- based terminal packages, regardless of the
	power source. They work properly only when in the docking station.
	
	Originally, this appeared to be related to power conservation, because CMOS setup
	showed the modem state as OFF. However, using Powercon from MS-DOS and setting
	the modem to ON did not fix the problem.
	
	This is caused by BIOS v1.06--a bad BIOS revision on the modem itself. BIOS v1.09
	CURES the problem.
	
	You can determine the modem's BIOS revision by typing "AT %V" (without the
	quotation marks) from a terminal program.
	
	Additional query words: 2.20 megahertz modem compaq
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
