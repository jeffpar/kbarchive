---
layout: page
title: "Q96495: Games Configuration Program Saves Previous Settings"
permalink: kb/096/Q96495/
---

## Q96495: Games Configuration Program Saves Previous Settings

	Article: Q96495
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the Games Configuration icon to configure Windows Sound System to
	support MS-DOS-based games to run with Windows; the previous board settings are
	recorded in the [sndsys.drv] section of the SYSTEM.INI file.
	
	MORE INFORMATION
	================
	
	For MS-DOS-based games to run in Windows, the Windows Sound System hardware has
	to be reconfigured. The Games Configuration program allows you to select a
	different IRQ and Port address. Set the Windows Sound System board to be
	compatible with most MS-DOS-based games or programs that use sound. The IRQ
	choices are 7 or 9, and the Port or I/O addresses are 210h, 220h, 230h, 240h,
	250h, and 260h. After you carefully select the new settings you need to restart
	Windows so that the new settings take effect. The old settings are recorded in
	the [sndsys.drv] section of the SYSTEM.INI file as follows:
	
	  previousIRQ=11
	  previousDMADAC=0
	  previousDMAADC=0
	  previousDMABufferSize=0
	
	The sample settings above are from a default Windows Sound System installation.
	
	Notice that there is no entry for the previous I/O address. This is because the
	port address gets remaped in memory and the I/O address being used by Windows
	Sound System is actually the one set during installation.
	
	Additional query words: 1.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100a
	
	=============================================================================
	
