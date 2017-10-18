---
layout: page
title: "Q148480: Sounds Don't Play in Fury 3 with Pro Audio Spectrum"
permalink: kb/148/Q148480/
---

## Q148480: Sounds Don't Play in Fury 3 with Pro Audio Spectrum

	Article: Q148480
	Product(s): Microsoft Home Games
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbmm kbsound kbHardwarekbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fury 3 for Windows, version 1.0 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sounds do not play in Fury 3. This occurs on computers using Windows 95 with the
	Pro Audio Spectrum 16 sound card installed.
	
	CAUSE
	=====
	
	Fury 3 uses the first sound card hardware listed in the Windows Audio Devices
	section. By default, the Pro Audio Spectrum 16 installs both the SoundBlaster
	compatible and the Pro Audio Spectrum 16 drivers. To hear sounds in Fury 3, the
	Pro Audio Spectrum 16 driver must be the first driver in the Audio Devices list.
	
	RESOLUTION
	==========
	
	To get sounds to play in Fury 3 with the Pro Audio Spectrum 16 sound card you
	need to turn off the audio features of the SoundBlaster Compatible driver.
	
	To turn off the audio features, do the following:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Click the Advanced tab.
	
	4. Click the "+" next to Audio Devices. The first sound card in this list should
	  be the SoundBlaster Compatible driver. Click the SoundBlaster driver, and
	  then click the Properties button.
	
	5. Select the Do Not Use Audio Features On This Device option. Click OK Click OK
	  again.
	
	6. Click Start and then click Shut Down.
	
	7. Select Restart the Computer.
	
	8. Click Yes
	
	You should now hear sounds in Fury 3.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: sb fury3 sound pro audio blaster
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbmm kbsound kbHardware kbfaq
	Technology        : kbOSWin95 kbOSWinSearch kbGamesSearch kbZNotKeyword kbFury3
	Version           : 1.00
	Issue type        : kbprb
	
	=============================================================================
	
