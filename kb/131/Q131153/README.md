---
layout: page
title: "Q131153: Problems Retrieving Colors Using Video Capture Card"
permalink: /kb/131/Q131153/
---

## Q131153: Problems Retrieving Colors Using Video Capture Card

	Article: Q131153
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
	
	When you are trying to retrieve the color palette using an ATI video card and a
	video capture card, the colors on the screen appear incorrect or scrambled.
	
	CAUSE
	=====
	
	The video capture card queries the digital-to-analog converter (DAC) on the
	video card to retrieve the palette. Most VGA cards contain one DAC while ATI
	cards contain two.
	
	RESOLUTION
	==========
	
	Add the following line to the [DISPLAY] section of the SYSTEM.INI file:
	
	  VGADAC=1
	
	Note that this setting applies to all ATI cards and can affect other video
	functionality.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
