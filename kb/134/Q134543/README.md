---
layout: page
title: "Q134543: Unable to Set Up New PCMCIA Card on Single-Socket System"
permalink: /kb/134/Q134543/
---

## Q134543: Unable to Set Up New PCMCIA Card on Single-Socket System

	Article: Q134543
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
	
	On a computer with only one PCMCIA socket, Windows 95 cannot set up a new PCMCIA
	card if the original PCMCIA card is being used to access the Windows 95 source
	files.
	
	CAUSE
	=====
	
	If you remove the PCMCIA card that is providing access to the Windows 95 source
	files to set up a new card, Windows 95 cannot access the source files. When you
	are prompted to provide the source files, you cannot remove the new card and
	insert the original card because Windows 95 does not detect the removal and
	insertion of PCMCIA cards during the configuration of the new card.
	
	RESOLUTION
	==========
	
	Use the Add New Hardware Wizard to manually install the new PCMCIA card. This
	process preinstalls the necessary driver files, so that you can set up the new
	card without accessing the Windows 95 source files.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
