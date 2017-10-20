---
layout: page
title: "Q85659: Removing Unnecessary Sound Drivers in Windows 3.1"
permalink: /kb/085/Q85659/
---

## Q85659: Removing Unnecessary Sound Drivers in Windows 3.1

{% raw %}

	Article: Q85659
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can reduce the amount of disk space used by Windows by removing unnecessary
	sound drivers.
	
	MORE INFORMATION
	================
	
	To remove unnecessary sound drivers:
	
	1. Open Control Panel.
	
	2. Select the Drivers icon.
	
	3. In the Installed Drivers box, select the driver(s) that are not being used.
	  (Note: You cannot select multiple drivers for removal at the same time.)
	
	4. Choose the Remove button.
	
	  A dialog box will appear with the following message:
	
	  This driver is required by the system. If you remove it, your system may not
	  work properly. Are you sure you want to remove it?
	
	  This message will appear even though the system may not have any sound device
	  installed. It will not affect the operation of the system to remove these
	  drivers if the system has no sound device installed. However, this process
	  does not delete the corresponding file from the hard drive. You must use File
	  Manager or MS-DOS to delete the file from the \WINDOWS\SYSTEM subdirectory.
	
	The following are the sound driver files included with Windows 3.1:
	
	Description                      Driver File
	-----------                      -----------
	
	Ad Lib                           MSADLIB.DRV
	Creative Labs Sound Blaster 1.0  SNDBLST.DRV
	Creative Labs Sound Blaster 1.5  SNDBLST2.DRV
	Media Vision Thunder Board       SNDBLST2.DRV
	Midi Mapper                      MIDIMAP.DRV
	Roland LAPCI                     MPU401.DRV
	Roland MPU_401                   MPU401.DRV
	Timer                            TIMER.DRV
	[MCI] CD Audio                   MCICDA.DRV
	[MCI] MIDI Sequencer             MCISEQ.DRV
	[MCI] Sound                      MCIWAVE.DRV
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
