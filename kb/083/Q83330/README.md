---
layout: page
title: "Q83330: System Error with HP NewWave under Windows 3.1"
permalink: /kb/083/Q83330/
---

## Q83330: System Error with HP NewWave under Windows 3.1

{% raw %}

	Article: Q83330
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using Hewlett-Packard (HP) NewWave version 3.0 or earlier with Microsoft
	Windows operating system version 3.1, you will receive the following error
	message:
	
	  System error: Incorrect System version: reinstall 386 using Setup.
	
	HP NewWave is invoked with a batch file that detects the version of the Windows
	video drivers being used. It does not copy the correct video drivers.
	
	This problem does not occur with HP NewWave version 4.0.
	
	MORE INFORMATION
	================
	
	HP technical support suggests editing the "NewWave batch file" and deleting
	everything from the beginning of the file to the line that says:
	
	  :std
	
	This will skip the version detection portion of the batch file. WARNING: This
	workaround might cause some problems concerning driver versions with some
	applications.
	
	Alternatively, you can replace the display driver and video grabber by replacing
	the existing Display= line in the [386 Enh] section of the SYSTEM.INI file
	with:
	
	     Display=VDDVGA30.386
	
	In addition, you will need to replace the existing 386Grabber= line in the [boot]
	section of the SYSTEM.INI file with:
	
	     386Grabber=VGA30.3GR
	
	For additonal information on HP NewWave, please contact Hewlett-Packard.
	
	The HP product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 new wave
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
