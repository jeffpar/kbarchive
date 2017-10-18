---
layout: page
title: "Q105673: Media Player: Err Msg: There Is an Undetectable Problem..."
permalink: kb/105/Q105673/
---

## Q105673: Media Player: Err Msg: There Is an Undetectable Problem...

	Article: Q105673
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Media Player for Windows 95 
	- the operating system: Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to play an audio CD from Media Player under Windows 3.1, you may
	receive the following error message:
	
	  There is an undetectable problem loading the specified device driver.
	
	This error message been reported to occur with the Magnavox CDD-461 CD-ROM drive,
	and may occur with other CD-ROM drives as well.
	
	RESOLUTION
	==========
	
	To troubleshoot this problem, try the following suggestions:
	
	1. Does the CD-ROM drive support audio?
	
	2. Can you play CDs using the MusicBox or Jukebox utilities for Windows?
	
	  NOTE: MusicBox is a Windows utility shipped with Magnavox MPC upgrade kits.
	  Jukebox is a Windows utility shipped with Sound Blaster MPC upgrade kits.
	  These utilities are on the sound card installation disks with which the kits
	  ship.
	
	3. What is the CDAudio entry in the MPLAYER.INI file set to?
	
	  The CDAudio line should be set to 17. If this line is set to 0 (zero), Media
	  Player does not recognize the CD Audio device as being available. You can use
	  Notepad to edit the MPLAYER.INI file and set this line to 17 instead of 0.
	  However, you should also try to determine why it was set to 0 in the first
	  place.
	
	  Media Player updates the MPLAYER.INI file in the following two situations:
	
	   - A change has been made to the SYSTEM.INI file
	
	  -or-
	
	   - You have installed a new waveform, MIDI, or AUX driver using the Drivers
	     section of the Windows Control Panel.
	
	If, while Media Player is updating the MPLAYER.INI file, Windows is unable to
	detect the presence of the CD-ROM player, Media Player sets the CDAudio line to
	0.
	
	NOTE: Windows may have trouble detecting the CD-ROM player if there is a problem
	with the CD-ROM drivers (MSCDEX) while Windows is loading.
	
	MORE INFORMATION
	================
	
	The key sections of the MPLAYER.INI file are explained below:
	
	[Options]
	
	SysIni=22797        This number indicates the date on which the
	                   SYSTEM.INI file was last changed. If the
	                   SYSTEM.INI file has been changed since the last
	                   time you started Media Player, Media Player will
	                   check all the devices listed in the [MCI] section
	                   of the SYSTEM.INI file to make sure they are
	                   still available.
	
	Scale=1             This line keeps track of the last chosen
	                   selection in the Scale menu.
	
	[Devices]           This section lists the devices from the [MCI]
	                   section of the SYSTEM.INI file. The number
	                   following the equals sign on each line indicates
	                   type and status of the device:
	
	                      17 = simple device
	                      22 = compound device
	                       0 = device not present
	
	                   A simple device does not require a filename to play
	                   a sound. A compound device requires a filename (for
	                   example, the name of a waveform [.WAV] file). A "0"
	                   (zero) indicates that the device is not present or
	                   has not been detected. The text at the end of each
	                   entry is what is displayed in the Media Player
	                   Device menu.
	
	WaveAudio=22, Sound
	Sequencer=22, MIDI Sequencer
	AVIVideo=22, AVI Video
	CDAudio=17, CD Audio
	
	Additional query words: multi media multimedia multi-media kbmm sound
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbZNotKeyword6 kbWinMediaPlayerSearch kbWinMediaPlayer95 kbOSWin310
	Version           : :3.1
	
	=============================================================================
	
