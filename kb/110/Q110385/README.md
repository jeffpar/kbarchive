---
layout: page
title: "Q110385: Changes Made to CONFIG.SYS by WSSCNFG.EXE"
permalink: kb/110/Q110385/
---

## Q110385: Changes Made to CONFIG.SYS by WSSCNFG.EXE

	Article: Q110385
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows Sound System comes with an application called the Windows Sound System
	MS-DOS Configuration program (WSSCNFG.EXE). This application is run from within
	Windows to provide Creative Labs Sound Blaster emulation at the MS-DOS level.
	When you run WSSCNFG.EXE, it will add the following lines to the beginning of
	your CONFIG.SYS file:
	
	     [MENU]
	     menuitem=Default,Default Configuration
	     menuitem=SBCompat,Sound Blaster Compatibility
	
	     [SBCompat]
	     DEVICE=C:\WINDOWS\HIMEM.SYS
	     DEVICE=C:\SNDSYS\EMM386.EXE 512 RAM
	     DEVICE=C:\SNDSYS\WSSXLAT.EXE sbio=220 irq=7 dma=1
	     DOS=HIGH,UMB
	     BUFFERS=20
	     FILES=30
	
	     [Default]
	
	The rest of the lines from your pre-existing CONFIG.SYS file go here.
	
	The above lines are the default entries for a system running MS-DOS 6.0 or later,
	or a system running MS-DOS 5.0 or earlier with the addition of a third-party
	multiconfiguration program called BOOTCON. If the system is running MS-DOS 5.0
	or earlier without BOOTCON, the following changes are made.
	
	The following line is added:
	
	     DEVICE=C:\SNDSYS\WSSXLAT.EXE sbio=220 irq=7 dma=1
	
	The following line is modified if already present or added if not:
	
	    DEVICE=C:\SNDSYS\EMM386.EXE 512 RAM
	
	MORE INFORMATION
	================
	
	The DEVICE=C:\SNDSYS\EMM386.EXE line is required by the Sound Blaster emulator.
	Sound Blaster emulation will not be available if this line is not present and if
	there is not at least 512K of memory allotted to it. If you are running MS-DOS
	6.2 or later, you can use the EMM386 expanded-memory emulator (EMM386.EXE) in
	your DOS directory instead of the one in the SNDSYS directory.
	
	The DEVICE=C:\SNDSYS\WSSXLAT.EXE line is the actual Sound Blaster emulation
	driver. It will not load if the EMM386.EXE line described above is not present.
	The following parameters are valid:
	
	  sbio=<220 or 240>           Determines which I/O address the
	                              emulator should trap
	
	  irq=<7,9,10 or 11>          Determines which interrupt the
	                              emulator should check
	
	  dma=<0,1 or 3>              Determines which Direct Memory
	                              Access channel the emulator should
	                              monitor
	
	  wave=<1-9>                  Controls the volume for digitized
	                              sound in the Sound Blaster emulation
	
	  line=<1-9>                  Controls the volume for audio pass-
	                              through in the Sound Blaster mode
	
	NOTE: The WSSCNFG.EXE program will only work correctly with the Microsoft Windows
	Sound System audio board (or 100% compatible).
	
	Additional query words: 2.00 DOS Games Configuration Sound Blaster sbp soundblaster soundblast blast sb config configure sys multiple 6 5 4 2 mulit-configuration expanded memory
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	
	=============================================================================
	
