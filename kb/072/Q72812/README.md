---
layout: page
title: "Q72812: Multimedia Installable Driver SYSTEM.INI Entries"
permalink: /kb/072/Q72812/
---

## Q72812: Multimedia Installable Driver SYSTEM.INI Entries

	Article: Q72812
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	Microsoft Windows uses installable device drivers for hardware-specific
	support. In addition to the standard device entries in the SYSTEM.INI file,
	Windows introduces another convention: the use of "driver specific"
	parameters on the driver entry. For example, an entry in the SYSTEM.INI
	file might look like the following:
	
	  [mci]
	  cdaudio=mcicda.drv
	  waveaudio=mciwave.drv 4
	
	The "waveaudio=" entry has both the driver name, MCIWAVE.DRV, and an
	extra parameter that is specific to the MCI Wave driver (4). In this
	example, "4" is the number of seconds of wave data the MCI Wave driver
	buffers.
	
	Because the driver can store the parameter on the same line of the
	SYSTEM.INI file as the driver name, a new section of the SYSTEM.INI
	file to store driver parameters is not required.
	
	The user can change this parameter through the Drivers application in
	the Control Panel by performing the following three steps:
	
	1. In the Control Panel window, choose the Drivers icon
	
	2. Select the MCI Wave driver
	
	3. Choose the Setup button.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
