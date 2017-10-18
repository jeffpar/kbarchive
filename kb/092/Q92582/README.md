---
layout: page
title: "Q92582: HP DeskJet 550C Black Output Appears Green"
permalink: kb/092/Q92582/
---

## Q92582: HP DeskJet 550C Black Output Appears Green

	Article: Q92582
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print on a Hewlett-Packard (HP) DeskJet 550C color printer, black
	output may appear green.
	
	CAUSE
	=====
	
	Hewlett-Packard ships a printer driver with the HP DeskJet 550C for use with
	Windows version 3.1 that has Print Mode options in the Setup dialog box. (This
	dialog box is accessed by choosing the Printer icon in Control Panel and
	choosing the Setup button). According to Hewlett-Packard, the HP DeskJet 550C
	prints using two ink cartridges: Black and Color. When Print Mode is set to All
	Color, only the color cartridge is used to print. Black is created using yellow,
	magenta, and cyan inks, giving a black/green color.
	
	RESOLUTION
	==========
	
	Set the Print Mode to Black And Color or Black/Greyscale.
	
	1. Choose the Printer icon in Control Panel.
	
	2. Choose the Setup button.
	
	3. Set the Print Mode to Black And Color or Black/Greyscale.
	
	This will cause the printer to use the black ink cartridge rather than the color
	cartridge for printing black.
	
	MORE INFORMATION
	================
	
	The HP DeskJet 550C printer driver is manufactured by Hewlett-Packard, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	Additional query words: 3.10 550 C desk jet DJ
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
