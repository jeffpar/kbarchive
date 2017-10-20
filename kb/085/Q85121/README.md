---
layout: page
title: "Q85121: Norton Desktop 2.0 Changes to the SYSTEM.INI File"
permalink: /kb/085/Q85121/
---

## Q85121: Norton Desktop 2.0 Changes to the SYSTEM.INI File

{% raw %}

	Article: Q85121
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 2.0 of Norton Desktop for Windows replaces the default shell= line in
	the [boot] section and adds four virtual device drivers to the [386Enh] section
	of the SYSTEM.INI file.
	
	MORE INFORMATION
	================
	
	The following is an explanation of the change made to the [boot] section of the
	SYSTEM.INI file:
	
	Line Changed             Description
	------------             -----------
	
	SHELL=NDW.EXE            Replaces PROGMAN.EXE as the default Windows
	                        shell.
	
	The following is an explanation of the changes made to the [386Enh] section of
	the SYSTEM.INI file:
	
	Lines Added              Description
	-----------              -----------
	
	DEVICE=VNAVD.386         Virtual Anti-virus Driver
	
	DEVICE=VFINTD.386        Virtual Floppy Interrupt Device Driver
	
	DEVICE=VNSS.386          Virtual Screen Saver Driver
	
	DEVICE=VNDWD.386         Virtual SmartErase Driver
	
	DMABufferSize=32         Sets the amount of RAM reserved for buffered
	                        direct memory access (DMA). The Windows
	                        default is 16.
	
	To deactivate Norton Desktop as the Window's shell, replace shell=ndw.exe with
	shell=progman.exe in the [boot] section of the SYSTEM.INI file.
	
	The Norton product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	reliability.
	
	Additional query words: 3.10 3.11 3.00 3.00a 2.00 ndw 3rdparty disable disabling turn off kill remove desk top
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
