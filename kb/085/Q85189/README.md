---
layout: page
title: "Q85189: Setup /I Has No Effect in Maintenance Mode or Reinstall"
permalink: kb/085/Q85189/
---

## Q85189: Setup /I Has No Effect in Maintenance Mode or Reinstall

	Article: Q85189
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Windows 3.1 in maintenance mode (Windows 3.1 is already installed)
	or reinstall Windows 3.1 over an existing installation of Windows 3.1, the /I
	switch for setup has no effect.
	
	MORE INFORMATION
	================
	
	When the maintenance mode of Setup is run or you are reinstalling Windows 3.1,
	the hardware and system settings are read from the SYSTEM.INI file. Hardware
	detection is not done and the current system configuration will be shown in the
	System Configuration dialog during setup.
	
	The Setup /T switch will work with the maintenance mode of Setup, enabling the
	detection of terminate-and-stay-resident programs (TSRs) that can cause problems
	for Windows 3.1 and/or the Setup program.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
