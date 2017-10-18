---
layout: page
title: "Q135226: Sound Blaster 16 Automatic Gain Control Setting Is Lost"
permalink: kb/135/Q135226/
---

## Q135226: Sound Blaster 16 Automatic Gain Control Setting Is Lost

	Article: Q135226
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use automatic gain control (AGC) for WaveIn when you are recording using
	a microphone connected to a Sound Blaster 16 sound card, AGC is turned off when
	you restart Windows 95.
	
	CAUSE
	=====
	
	When you shut down Windows 95, the Creative Labs sound card driver overrides the
	WaveIn AGC setting with the VoiceIn AGC setting (which is turned off, by
	default).
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click the Start button, click Run, type "sndvol32.exe" (without the quotation
	  marks) in the Open box, and then click OK.
	
	  NOTE: The Sndvol32.exe tool is installed by default when Windows 95 detects a
	  sound card. If this tool is not installed, you can install it using the
	  Add/Remove Programs tool in Control Panel.
	
	2. On the Options menu, click Properties.
	
	3. Click the Other option button, and then click OK.
	
	4. If there is no Advanced button in the Microphone section, click Advanced
	  Controls on the Options menu.
	
	5. Click the Advanced button in the Microphone section.
	
	6. Click the AGC For VoiceIn check box to select it, and then click Close.
	
	7. Repeat steps 2-6, using Recording options.
	
	  NOTE: You must repeat steps 2-6 using the Recording options to retain the AGC
	  settings.
	
	8. Close the Volume Control tool.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
