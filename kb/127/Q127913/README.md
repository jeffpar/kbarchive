---
layout: page
title: "Q127913: Artist: Saved Documents Are Black with ATI Mach 64"
permalink: /kb/127/Q127913/
---

## Q127913: Artist: Saved Documents Are Black with ATI Mach 64

	Article: Q127913
	Product(s): Microsoft Home Kids Products
	Version(s): 1.00 1.10 1.10a
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 21-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a previously saved document in Fine Artist, it may appear on the
	screen as solid black if you are using a computer with an ATI Mach 64 card or
	STB Vision Meta driver.
	
	CAUSE
	=====
	
	This behavior occurs when the video display driver is set for 32,000 colors or
	more, and/or when the WinSwitch utility is turned on (enabled)
	
	RESOLUTION
	==========
	
	To resolve the problem, use the following steps:
	
	Check to see that the video display driver is set to 256 colors:
	
	1. In Program Manager, open the ATI DeskTop program group.
	
	2. Run ATI DeskTop, then click ATI FlexDesk.
	
	3. If 256 Colors is not already selected, select 256 Colors.
	
	4. Choose the Advanced button.
	
	5. Choose Color Palette, then choose OK.
	
	6. Choose OK to close FlexDesk.
	
	7. When you receive the message to restart Windows, choose Continue instead.
	
	Once 256-color video mode has been selected, do the following to turn off
	(disable) ATI's WinSwitch (if installed):
	
	1. In Program Manager, go to the ATI DeskTop group.
	
	2. Run ATI DeskTop, then click ATI FlexDesk.
	
	3. Choose the WinSwitch button. WinSwitch is turned on (enabled) if the
	  WinSwitch Enable box is selected.
	
	4. Turn off WinSwitch by clearing the WinSwitch Enable check box.
	
	5. Choose OK to close WinSwitch.
	
	6. Restart Windows when prompted to do so.
	
	After following these steps, you should be able to save Fine Artist documents in
	color successfully. Previously saved documents still appear as solid black and
	are not recoverable.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q120546 Artist: Saved Documents Are Black
	
	MORE INFORMATION
	================
	
	WinSwitch is an ATI utility that allows you to use keyboard commands to
	dynamically change the number of colors available on the screen in Windows. To
	do this, however, it loads all 64,000 colors so they can be made available as
	needed.
	
	When the 256-color option is selected in combination with WinSwitch, the color
	palette is not in use.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 1.0 1.1 win mskids white solid win display wm_artist black background kids mczee desk flex top picture pictures screen win switch 1.10a
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword2 kbFineArtist100 kbFineArtist110 kbFineArtist110a
	Version           : 1.00 1.10 1.10a
	
	=============================================================================
	
