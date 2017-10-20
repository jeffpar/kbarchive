---
layout: page
title: "Q105671: Media Player: CD Audio Device Missing from Device Menu"
permalink: /kb/105/Q105671/
---

## Q105671: Media Player: CD Audio Device Missing from Device Menu

{% raw %}

	Article: Q105671
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Media Player for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may occasionally find that when you start Media Player, the Drivers menu no
	longer lists your CD Audio device. When you check your MPLAYER.INI file, you may
	find that the CD Audio line appears as "CD Audio=0" instead of "CD Audio=17". A
	zero in the [Devices] section of the MPLAYER.INI file indicates that the device
	is not available.
	
	RESOLUTION
	==========
	
	To correct the immediate problem, edit the MPLAYER.INI file in Notepad and
	replace the "0" on the CD Audio line with "17". When you restart Media Player,
	the CD Audio device will again be listed under the Device menu.
	
	To find out why this problem occurs, you may need to do some troubleshooting with
	the following in mind.
	
	1. Media Player only writes changes to the MPLAYER.INI file in the following two
	  situations:
	
	  - A change has been made to the SYSTEM.INI file
	
	  -or-
	
	  - You have installed a new WAVE, MIDI, or AUX driver using the Drivers section
	  of the Windows Control Panel.
	
	2. If a device listed in the [MCI] section of SYSTEM.INI cannot be loaded while
	  Media Player is writing to the MPLAYER.INI file, Media Player will set the
	  parameter for that device to 0.
	
	3. Some reasons why the CD Audio device driver (MCICDA.DRV) might not be able to
	  load include the following:
	
	  - MSCDEX is not installed
	  - Another application is using MCICDA.DRV
	  - The CD-ROM driver is not installed
	  - The SCSI bus for the CD-ROM drive may be locking up
	  - Media Player may have problems loading MCICDA.DRV while other
	  applications are communicating with the CD-ROM driver
	
	4. Some CD-ROM controllers are known to randomly lock the SCSI bus for no
	  apparent reason, but work fine after you turn off your computer and then
	  restart it. This problem has been found to occur with some older Media Vision
	  boards.
	
	Additional query words: multi media multimedia multi-media gone not listed can't find mmtitles kbmm sound
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMediaPlayerSearch kbWinMediaPlayer95
	Version           : :
	
	=============================================================================
	

{% endraw %}
