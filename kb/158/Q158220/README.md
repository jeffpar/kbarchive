---
layout: page
title: "Q158220: Mac Encarta 97: Problems Using Non-Apple CD-ROM Drivers"
permalink: /kb/158/Q158220/
---

## Q158220: Mac Encarta 97: Problems Using Non-Apple CD-ROM Drivers

	Article: Q158220
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1997 edition; MACINTOSH:1.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbmm kbHardwarekbfaq
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Macintosh 
	- Microsoft SideWinder 3D Pro for Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You experience one of the following symptoms:
	
	- Setup hangs
	- Sound or music skips
	- Program hangs
	- Disc swapping fails
	
	This occurs if you are using an FWB CD-ROM ToolKit.
	
	CAUSE
	=====
	
	You are not using an Apple CD-ROM driver to access your CD-ROM drive.
	
	
	NOTE: These symptoms can also occur if you are running the program over the
	network and you do not have an Apple CD-ROM driver loaded.
	
	Additional Causes:
	
	The memory settings are not optimal for the Macintosh.
	
	In 68000 Macintoshes, this can occur if:
	
	- Virtual Memory is off.
	- 32 bit addressing is off.
	- Disk Cache is set too high.
	- RAM Disk is on.
	
	In Power Macintosh Computers, this can occur if:
	
	- Virtual Memory is off.
	- Modern Memory Manager is off.
	- Disk Cache is set too high.
	- RAM Disk is on.
	
	RESOLUTION
	==========
	
	Upgrade to the newest version of your CD-ROM driver. For more information about
	updated drivers, contact the manufacturer of your CD-ROM.
	
	  -Or-
	
	Adjust your computer memory settings:
	
	1. On the Apple Menu, click Control Panels.
	
	2. Double-click the Memory Control Panel.
	
	3. In the Memory Control Panel, make sure the settings match the following:
	
	  68000 Macintosh Computers
	  -------------------------
	
	   - Disk Cache: 96K
	   - 32 Bit Addressing: On (you may not see this option)
	   - Virtual Memory: On
	   - RAM Disk: Off
	
	  Power Macintosh Computers
	  -------------------------
	
	   - Disk Cache: 96K
	   - Modern Memory Manager: Off (you may not see this option)
	
	     NOTE: You may also try to turn this option On if it was previously Off
	
	   - Virtual Memory: On
	   - RAM Disk: Off
	
	NOTE: If the program works after making the changes above, try to increase the
	Cache size to equal 32K for each MB of RAM installed.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1997 multi media multimedia multi-media mmtitles kbmm FWB CDROM CD ROM CD-ROM Toolkit Power Computing Power-Computing macmm
	
	======================================================================
	Keywords          : kbenv kbhw kbmm kbHardware kbfaq
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbMSHardwareSearch kbEncartaSearch kbSideWinder3DProMac kbEncartaEnCyc1997Mac kbSidewinderSearch
	Version           : :1997 edition; MACINTOSH:1.0
	Issue type        : kbprb
	
	=============================================================================
	
