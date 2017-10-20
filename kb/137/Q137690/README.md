---
layout: page
title: "Q137690: Encarta: Hangs When Playing Sound With Ensoniq Card"
permalink: /kb/137/Q137690/
---

## Q137690: Encarta: Hangs When Playing Sound With Ensoniq Card

{% raw %}

	Article: Q137690
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On computer systems using the Ensoniq Soundscape or Soundscape Elite sound card,
	Encarta stops responding (hangs) at the title screen.
	
	-or-
	
	When playing a sound clip from Media Galley, Encarta hangs after you click Stop
	or Close.
	
	NOTE: This article applies to the Ensoniq Windows 95 driver. Windows 95 and
	Windows 98 do not include drivers for the Soundscape sound card. To obtain
	updated Soundscape drivers, contact Ensoniq.
	
	CAUSE
	=====
	
	This problem can occur if the Use Single Mode DMA setting is turned off. By
	default, the Use Single Mode DMA setting is turned on.
	
	RESOLUTION
	==========
	
	To change the Use Single Mode DMA setting, follow these steps:
	
	1. Right-click My Computer, and then click Properties.
	
	2. On the Device Manager tab, double-click Sound, Video And Game Controllers.
	
	3. Double-click ENSONIQ Soundscape.
	
	4. On the Settings tab, in the Advanced Settings area, click Use Single Mode
	  DMA.
	
	5. Click OK, and then click OK again.
	
	For more information on the Ensoniq Soundscape, contact Ensoniq at:
	
	- (610) 647-3930, Main number
	
	- (800) 942-0096, Soundscape/multimedia Tech Support
	
	- (610) 647-3195, BBS
	
	The Ensoniq products discussed here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: multi media multimedia multi-media mmtitles hangs hanging hanged crashed crash crashes freeze frozen locked locked-up lock hang hanged bombed bomb down ensonic soundblaster sound blaster enter
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncarta1995 kbEncartaEnCyc1996 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del
	
	=============================================================================
	

{% endraw %}
