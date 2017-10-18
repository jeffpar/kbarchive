---
layout: page
title: "Q104191: NCR Wavelan Cards Need the Same Network ID Number"
permalink: kb/104/Q104191/
---

## Q104191: NCR Wavelan Cards Need the Same Network ID Number

	Article: Q104191
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NCR Wavelan wireless network cards must have the same network identification
	(ID) number to communicate with each other on the network.
	
	MORE INFORMATION
	================
	
	When you initially run the Wavelan setup software, it prompts you for a network
	ID number. If you do not supply a number, the software generates a random
	4-digit number and assigns it as the network ID. Two Wavelan cards with
	different ID numbers cannot see one another on the network.
	
	To check the current ID number under Windows for Workgroups version 3.1, press
	PAUSE when the driver is loaded from the CONFIG.SYS file. Included in the two
	lines of text displayed is NWID=<xxxx> (where <xxxx> is the network
	ID number).
	
	To check the current ID number under Windows for Workgroups version 3.11 run the
	diagnostic program that provided with these cards.
	
	If you need to change the ID number, rerun the network card setup software.
	
	NOTE: The diagnostic program that ships with these cards tests communication
	between two cards independent of their network ID numbers. Efficient
	communication during this test does not guarantee that they can communicate over
	the network.
	
	The NCR products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 radio dncrwl02.dos
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
