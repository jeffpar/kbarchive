---
layout: page
title: "Q139529: Aztech and Reveal Cards: Poor Sound with Windows 32-Bit Drivers"
permalink: kb/139/Q139529/
---

## Q139529: Aztech and Reveal Cards: Poor Sound with Windows 32-Bit Drivers

	Article: Q139529
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbmm kbsound kbHardware
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer, versions 2.0, 2.0a 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play compressed audio on some computers using the Aztech
	16-bit or Reveal SC400 sound card (Aztech SG16/NX Pro 16), you experience sound
	problems. Some of the problems include poor audio quality, scratchy sound, or
	other sound-related symptoms.
	
	CAUSE
	=====
	
	The Windows 95/98 drivers for Aztech 16-bit sound cards have 2 Low DMA
	channels:0, 1, or 3. You can not disable the second channel and there is only
	one Basic Configuration to choose from.
	
	
	RESOLUTION
	==========
	
	Use the Windows 3.x Aztech drivers. The Windows 3.x drivers for Aztech cards
	have an 8-bit and 16-bit DMA setting. The HDMA can be set to 5, 6, 7 or None.
	
	Selecting the 16-bit DMA setting may help resolve scratchy or poor sound
	problems. Selecting None may help resolve system crashes or General Protection
	Fault problems.
	
	Replacing Windows 95/98 Driver with Windows 3.x Driver
	------------------------------------------------------
	
	To remove the 32-bit driver and install the original Windows 3.1 driver, follow
	these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the System icon, and then click the Device Manager tab.
	
	3. Double-click Sound, video and game controllers, and then click your sound
	  card.
	
	4. Click Remove.
	
	5. Click Start, and then click Shut Down.
	
	6. Click Restart Windows, and then click Yes.
	
	7. Reinstall the original Aztech drivers from your vendor-provided disks. Follow
	  the instructions provided by the manufacturer.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q119660 Compressed Audio Doesn't Play on Aztech Labs (AZI) Sound Cards
	
	The products discussed here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	REFERENCES
	==========
	
	For more information on using, installing, or configuring Aztech drivers in
	Windows 95/98, please contact your hardware vendor, or contact Aztech:
	
	- Technical Support (800) 886-8879
	
	- BBS (510) 623-8933
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm gateway packard bell galaxy freeze fuzzy buzz noise washed-out garbled silent quiet none
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbmm kbsound kbHardware 
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	Issue type        : kbprb
	
	=============================================================================
	
