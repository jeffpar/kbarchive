---
layout: page
title: "Q171111: Audio Options Disabled with Gravis Sound Card"
permalink: kb/171/Q171111/
---

## Q171111: Audio Options Disabled with Gravis Sound Card

	Article: Q171111
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbsound win95 kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Gravis Ultrasound Classic, Max, or Ace sound card in Windows 95,
	the following audio options are disabled:
	
	- The Volume Control option in the Volume Control tool.
	
	- The "Show volume control on the taskbar" check box in the Multimedia tool.
	
	CAUSE
	=====
	
	The Gravis Ultrasound Classic, Max, and Ace sound cards do not support master
	volume control.
	
	MORE INFORMATION
	================
	
	The Gravis Ultrasound Classic, Max, and Ace sound cards are based on the GF1
	chip set. The Gravis drivers for the GF1 chip set automatically disable the
	master volume control options in Windows 95 because these sound cards do not
	support this feature.
	
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbsound win95 kbHardware 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
