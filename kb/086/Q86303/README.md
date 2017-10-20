---
layout: page
title: "Q86303: Media Player Err Msg: There Are No MIDI Devices Installed"
permalink: /kb/086/Q86303/
---

## Q86303: Media Player Err Msg: There Are No MIDI Devices Installed

{% raw %}

	Article: Q86303
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Windows version 3.1 Media Player and attempt to play a MIDI
	file with the Roland MPU401, you may receive the following error message:
	
	  There are no MIDI devices installed on the system. Use the Drivers option in
	  Control Panel to install the driver.
	
	CAUSE
	=====
	
	This message can be caused because the MIDI driver is not installed properly or
	the MIDIMAP.CFG is corrupt or missing.
	
	RESOLUTION
	==========
	
	To install the MIDI driver, start Control Panel, choose the Drivers icon, and
	then select and install the driver.
	
	If your MIDI driver is installed, run Control Panel MIDI Mapper to determine if
	your MIDIMAP.CFG file is corrupt or missing. If MIDI Mapper displays the
	following error message, then the MIDIMAP.CFG is corrupt or missing:
	
	  MIDI Mapper could not find a valid MIDIMAP.CFG file in your Windows SYSTEM
	  directory. It cannot run without this file. Do you want to create and
	  initialize a new MIDIMAP.CFG file?
	
	If this message is displayed, do not allow Windows to rebuild the MIDIMAP.CFG
	because MIDIMAP.CFG will have limited functionality. Instead, use the Windows
	EXPAND.EXE program to install a working copy of MIDIMAP.CFG from the origional
	Windows floppy disks, as follows.
	
	  expand a:\midimap.cf_ c:\windows\system\midimap.cfg
	
	NOTE: This command does not work on a network (/A) configuration. This command
	looks for the system directory.
	
	MIDIMAP.CF_ is located on disk 4 of the 1.44-MB disks, and disk 6 on the 1.2-MB
	disks.
	
	Additional query words: 3.10 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
