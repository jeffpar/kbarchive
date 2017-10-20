---
layout: page
title: "Q109510: Err Msg Changing Virtual Memory Setting: 32-Bit File Access..."
permalink: /kb/109/Q109510/
---

## Q109510: Err Msg Changing Virtual Memory Setting: 32-Bit File Access...

{% raw %}

	Article: Q109510
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to change your virtual memory configuration using the Enhanced
	button in Control Panel, you may receive one of the following error messages:
	
	  32-bit File Access is not running because you started a real-mode network
	  redirector before starting Windows.
	
	-or-
	
	  32-bit File Access was unable to run. This may be because you started the
	  network before starting Windows, because Windows could not find the
	  IFSHLP.SYS driver, or your hard disk(s) may be incompatible with 32-bit File
	  Access.
	
	CAUSE
	=====
	
	This error can occur when:
	
	- Windows for Workgroups 3.11 32-bit file access (VCACHE) is enabled but the
	  IFSHLP.SYS driver is not loading properly (or at all) from the CONFIG.SYS
	  file. IFSHLP.SYS must be loaded in order for 32-bit file access to function.
	
	- You are using Windows for Workgroups without network functionality, no
	  network card is installed, and you have an IDE hard disk. To work around this
	  problem remove POWER.EXE.
	
	- If the VSHARE.386 line in the SYSTEM.INI file is missing or not enabled.
	  Verify that the following line exists in the [386ENH] section of the
	  SYSTEM.INI file:
	
	       Device=VSHARE.386
	
	- If you enable 32-bit File Access and do not exit and restart Windows and then
	  choose the Virtual Memory button again in the same Windows session.
	
	RESOLUTION
	==========
	
	Make sure that IFSHLP.SYS is being loaded from the CONFIG.SYS file. For example,
	if your Windows directory is called WINDOWS and is located on drive C,
	CONFIG.SYS should contain the following line:
	
	       device=c:\windows\ifshlp.sys
	
	If the IFSHLP.SYS driver is already being loaded from the CONFIG.SYS file, verify
	that it is being loaded into memory with the MEM /C /P command. IFSHLP should
	take up approximately 4 kilobytes of memory.
	
	NOTE: If you are using Multi-Config commands in your CONFIG.SYS file, add the
	above device statement to the [COMMON] section of your CONFIG.SYS file.
	
	Additional query words: 3.11 vfat stand alone nic
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
