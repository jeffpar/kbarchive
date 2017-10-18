---
layout: page
title: "Q132764: Sound Card Is Not Detected If Network Card Uses Same Address"
permalink: kb/132/Q132764/
---

## Q132764: Sound Card Is Not Detected If Network Card Uses Same Address

	Article: Q132764
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you upgrade from Windows version 3.1 or Windows For Workgroups version 3.11
	to Windows 95 and have the Media Vision Windows 3.1 sound card drivers
	installed, Setup may display a message during hardware detection that it is
	receiving no response from one of the hardware components it is looking for. In
	Windows 95, neither the Setup program nor the Add New Hardware program detects
	the Media Vision MV-1100 Blue Light Special sound card when a DEC DE201
	Etherworks Turbo/TP network card is also installed on the computer.
	
	CAUSE
	=====
	
	Both the network card and the sound card are configured to use the same address.
	When Windows 95 hardware detection writes to a particular address that is being
	used by a sound card, the network card's response hides the sound card's
	response, causing a conflict.
	
	RESOLUTION
	==========
	
	Reconfigure the network card to use a different address, and then have Windows
	detect the hardware again using the Add New Hardware program.
	
	MORE INFORMATION
	================
	
	The DEC DE201 Etherworks Turbo/TP network card uses Input/Output address ranges
	200h-20Fh. The Media Vision MV-1100 Blue Light Special sound card also use this
	range. The same problem may occur with computers that have both a network card
	and a sound card that use overlapping addresses.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: etherwrks lite
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
