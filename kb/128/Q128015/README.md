---
layout: page
title: "Q128015: Presario CDS633 Does Not Support 16- or 24-Bit Color Palette"
permalink: /kb/128/Q128015/
---

## Q128015: Presario CDS633 Does Not Support 16- or 24-Bit Color Palette

	Article: Q128015
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
	
	If you are using a Compaq Presario CDS633 and you select the High Color (16-
	bit) or True Color (24-bit) color palette in the property sheet for the display,
	the system falls back to Standard VGA and prompts you to choose another display
	setting. The 16-bit and 24-bit color palettes are still shown as available but
	you cannot implement them.
	
	CAUSE
	=====
	
	Although Windows 95 correctly detects the Tseng ET4000/W32 chip set in the
	built-in display circuitry of the CDS633, the video BIOS in this system does not
	provide support for these display modes.
	
	RESOLUTION
	==========
	
	Choose the 16 Color or 256 Color color palette. You may want to contact Compaq
	for information about a possible video BIOS upgrade, or install a display
	adapter that fully supports the display mode you want to use.
	
	MORE INFORMATION
	================
	
	High Color is a 16-bit display mode that supports a 65,536-color palette. True
	Color is a 24-bit display mode that supports up to 16.7 million colors.
	
	Additional query words: w32 et4000
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
