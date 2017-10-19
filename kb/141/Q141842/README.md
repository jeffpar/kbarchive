---
layout: page
title: "Q141842: Sounds Played Repeatedly with Sigma Designs ReelMagic Board"
permalink: /kb/141/Q141842/
---

## Q141842: Sounds Played Repeatedly with Sigma Designs ReelMagic Board

	Article: Q141842
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Sigma Designs' ReelMagic (also called RealMagic) drivers, the
	system startup sound is played repeatedly when you restart your computer. If you
	open the Sounds tool in Control Panel and play a wave (.wav) file, the sound is
	played repeatedly.
	
	CAUSE
	=====
	
	Sigma Designs' software looks for an "Int=" line in the [Sound] section of the
	Fmpdrv.ini file in the folder in which you installed the ReelMagic software. If
	this line is not present, the software defaults the audio IRQ setting to 5,
	instead of using the IRQ setting you may have specified. Note that the
	"Interrupt=" line in the Fmpdrv.ini file is not used to set the interrupt.
	
	RESOLUTION
	==========
	
	Use any text editor (such as Notepad) to edit the Fmpdrv.ini file and add the
	line
	
	  Int=<x>
	
	to the [Sound] section of the file, where <x> is an available interrupt,
	and then restart your computer.
	
	MORE INFORMATION
	================
	
	The ReelMagic board is manufactured by Sigma Designs, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
