---
layout: page
title: "Q122325: Gateway 2000 Sound Board Not Compatible with WSS Drivers"
permalink: /kb/122/Q122325/
---

## Q122325: Gateway 2000 Sound Board Not Compatible with WSS Drivers

	Article: Q122325
	Product(s): Miscellaneous Windows Products
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Gateway 2000 sound cards may behave erratically when used with the drivers
	that ship with the Microsoft Windows Sound System. Drivers that are available
	from Gateway should be used in place of the drivers installed by Setup.
	
	MORE INFORMATION
	================
	
	During installation of the Windows Sounds System software, the Gateway 2000
	sound boards are often incorrectly detected as Microsoft (or compatible) audio
	hardware, Creative Labs Sound Blaster Pro, or Creative Labs Sound Blaster 16 or
	16 ASP sound board. If you confirm that this is the type of sound board you
	have, Windows Sound System Setup installs drivers that are incompatible with the
	Gateway 2000 sound board.
	
	To attempt to use the Windows Sound System with these sound boards, the drivers
	installed by the Setup program should be manually removed and replaced with
	drivers available from Gateway. The process for doing so is described below.
	This should provide some Windows Sound System functionality; however, such
	configurations are not supported by Microsoft.
	
	Replacing the Drivers Installed by Setup
	----------------------------------------
	
	NOTE: You should run the Windows Sound System Setup and select a sound board from
	the list that appears before attempting this procedure. After you have run Setup
	at least once, proceed with step 1.
	
	1. After exiting Windows, make a backup copy of your SYSTEM.INI file by typing
	  the following at an MS-DOS command prompt
	
	  " copy c:\windows\system.ini c:\windows\system.bak " (without the quotation
	  marks)
	
	2. Using a text editor such as the MS-DOS Editor (EDIT.COM), remove the drivers
	  that were installed by Setup from the SYSTEM.INI file. The drivers installed
	  will vary in each case depending on the sound board that was selected during
	  Setup. (One the following groups will appear.)
	
	     Microsoft (or Compatible) Audio Hardware
	     ----------------------------------------
	
	     wave=sndsys.drv
	     aux=sndsys.drv
	     midi=sndsys.drv
	     mixer=sndsys.drv
	     device=vsndsys.386
	
	     -or-
	
	     Creative Labs Sound Blaster Pro
	     -------------------------------
	
	     wave=wsssbpro.drv
	     aux=wsssbpro.drv
	     midi=wsssbpro.drv
	     mixer=wsssbpro.drv
	     device=wsssbpro.386
	
	     -or-
	
	     Creative Labs Sound Blaster 16 or 16 ASP
	     ----------------------------------------
	
	     wave=wsssb16.drv
	     aux=wsssb16.drv
	     midi=wsssb16.drv
	     mixer=wsssb16.drv
	     device=wsssb16.386
	
	3. Install the drivers provided by Gateway according to manufacturer's
	  instructions.
	
	
	The Gateway 2000 sound board is manufactured by Gateway 2000, independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3rdparty 2.00 2.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200 kbWinSoundSys200a
	Version           : :2.0,2.0a
	
	=============================================================================
	
