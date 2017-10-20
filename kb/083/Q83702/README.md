---
layout: page
title: "Q83702: UltraStor 22CA ESDI Controller Needs /Double_Buffer+ Line"
permalink: /kb/083/Q83702/
---

## Q83702: UltraStor 22CA ESDI Controller Needs /Double_Buffer+ Line

{% raw %}

	Article: Q83702
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an UltraStor 22CA ESDI hard drive controller with version 1.02 or
	earlier of the UltraStor Virtual DMA Services (VDS) driver UVDS.SYS, Microsoft
	Windows version 3.1 may return to the MS-DOS command prompt when you start
	Windows in 386 enhanced mode.
	
	WORKAROUND
	==========
	
	To correct this problem, do the following:
	
	1. Edit the CONFIG.SYS file with a standard ASCII text editor.
	
	2. Add the following line:
	
	  device=c:\windows\smartdrv.exe /double_buffer+
	
	NOTE: You do not need to modify the existing SMARTDRV.EXE entry in the
	AUTOEXEC.BAT file.
	
	MORE INFORMATION
	================
	
	Some ESDI hard drives require the VIRTUALHDIRQ=OFF line in the [386enh] section
	of the SYSTEM.INI file. To test if this line is needed in Windows 3.1, start
	Windows with the following command:
	
	  win /d:v
	
	If Windows starts successfully, the VIRTUALHDIRQ=OFF line is necessary.
	
	The 22CA ESDI hard drive controller is manufactured by UltraStor, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.10 "Error Loading GDI.EXE"
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
