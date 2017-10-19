---
layout: page
title: "Q140892: World Atlas Stops Responding with Ensoniq Card"
permalink: /kb/140/Q140892/
---

## Q140892: World Atlas Stops Responding with Ensoniq Card

	Article: Q140892
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1996
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 World Atlas for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Microsoft Windows 95/98-based computers, Microsoft Encarta 96 World Atlas may
	stop responding (hang) at the title screen when you press ENTER.
	
	-or-
	
	When you play a sound clip from Microsoft Encarta 96 World Atlas, the program may
	hang after you click Stop.
	
	CAUSE
	=====
	
	This problem can occur if you are using the Ensoniq Soundscape or Soundscape
	Elite sound card with the Ensoniq Windows 95 driver installed.
	
	Windows 95 does not supply drivers for the Soundscape sound card. To obtain
	Windows 95 drivers, contact Ensoniq.
	
	This problem occurs when the Use Single Mode DMA setting is disabled. By default,
	this setting is turned on.
	
	RESOLUTION
	==========
	
	To change the Use Single Mode DMA setting, do the following:
	
	1. With your right mouse button, click My Computer, and then click Properties.
	
	2. Click the Device Manager tab.
	
	3. Double-click Sound, Video And Game Controllers.
	
	4. Click Ensoniq Soundscape, and then click Properties.
	
	5. Click the Settings tab.
	
	6. Click Advanced Settings.
	
	7. Select Use Single Mode DMA.
	
	8. Click OK.
	
	9. Click OK.
	
	For more information, contact Ensoniq at:
	
	  - (610) 647-3930, Main number
	  - (800) 942-0096, Soundscape/multimedia Tech Support
	  - (610) 647-3195, BBS
	
	The Ensoniq products discussed here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	Additional query words: crash freeze stop responding encarta press push ensonic
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaWorldAtlas1996
	Version           : 1996
	
	=============================================================================
	
