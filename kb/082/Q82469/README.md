---
layout: page
title: "Q82469: Using Multiple CD-ROM Drives on One Machine"
permalink: kb/082/Q82469/
---

## Q82469: Using Multiple CD-ROM Drives on One Machine

	Article: Q82469
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, Microsoft Windows does not support using two CD-ROM drives to play
	CD Audio. However, by making a change to the SYSTEM.INI file, you can enable
	Windows to support using two CD-ROM drives to play CD Audio.
	
	MORE INFORMATION
	================
	
	To enable support for two CD-ROM drives, use a text editor (for example,
	Notepad) to edit your SYSTEM.INI file as follows:
	
	Under the [mci] section, which appears as
	
	     [mci]
	     CDAudio=mcicda.drv
	
	add the line
	
	  CDAudio1=mcicda.drv
	
	The edited section should appears as follows:
	
	     [mci]
	     CDAudio=mcicda.drv
	     CDAudio1=mcicda.drv1
	
	This change enables drives that require the same driver, as well as those that
	require different drivers.
	
	When you run Media Player, you should have two entries in the devices menu. You
	can select between the two entries to access your CD-ROM drives.
	
	Additional query words: 3.10 3.00a 3.0a 3.00 3.0 CD ROM cd-audio 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
