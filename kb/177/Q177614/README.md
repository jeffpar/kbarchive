---
layout: page
title: "Q177614: What Is the Game Compatible Audio Device?"
permalink: /kb/177/Q177614/
---

## Q177614: What Is the Game Compatible Audio Device?

	Article: Q177614
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Your computer may have an audio device named Game Compatible listed in the
	Multimedia tool in Control Panel. This is an audio device installed by some
	voice-capable modems. This device is listed in the Multimedia tool in the
	Preferred Device list.
	
	MORE INFORMATION
	================
	
	Certain modems install a Wave Device For Modem device that appears in Device
	Manager. With this driver, wave input/output (I/O) data is sent through the PC's
	communications (COM) port to the modem. This serial wave driver supports IMA
	ADPCM and Rockwell ADPCM formats, as well as 8 kHz, mono, and 16-bit PCM format
	wave data. Some drivers may also support 11.025 kHz, 22.05 kHz and 44.1 kHz,
	mono, and 8- and 16-bit PCM format wave data. This is separate from, but similar
	to, the usual Sound wave I/O device used by most Windows-based games.
	
	The Game Compatible audio playback device is a component of this driver.
	
	
	The Wave Device For Modem device may also include other components, such as:
	
	- Voice Modem Wave #00 Handset
	- Voice Modem Wave #00 Line
	
	The exact components names may vary from modem to modem.
	
	If the Game Compatible device is not available in the Preferred Device box on the
	Audio tab in Multimedia properties, follow these steps:
	
	1. Click Start, point to Settings, double-click Control Panel, and then
	  double-click Multimedia.
	
	2. Click the Advanced or Devices tab, double-click the Audio Devices branch to
	  expand it, and then double-click the installed modem wave device.
	
	3. Click "Use audio features on this device."
	
	4. Click the "Do not map through this device" check box to clear it, and then
	  click OK.
	
	5. When you are prompted to restart Windows, do so.
	
	6. Click Start, point to Settings, double-click Control Panel, and then
	  double-click Multimedia.
	
	7. On the Audio tab, in the Playback area, click Game Compatible in the
	  Preferred Device box.
	
	8. Click OK, and then close Control Panel.
	
	Additional query words: directx directsound MS-DOS games
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch
	Version           : WINDOWS:95
	Issue type        : kbinfo
	
	=============================================================================
	
