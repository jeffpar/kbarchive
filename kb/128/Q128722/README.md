---
layout: page
title: "Q128722: Windows Hangs After Installing TCP/IP with WDCDRV.386"
permalink: /kb/128/Q128722/
---

## Q128722: Windows Hangs After Installing TCP/IP with WDCDRV.386

	Article: Q128722
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you exit to MS-DOS, your computer stops responding (hangs) when you try to
	restart Windows for Workgroups version 3.11.
	
	CAUSE
	=====
	
	The system is configured with both the Microsoft protect-mode TCP/IP protocol
	and the Western Digital 32-bit disk access driver (WDCDRV.386). Version 2.5 of
	this driver does not work properly with the Microsoft protect-mode TCP/IP
	protocol.
	
	RESOLUTION
	==========
	
	Use any one of the following methods to correct the problem:
	
	Disable 32-Bit Disk Access
	--------------------------
	
	To disable 32-bit disk access, follow these steps:
	
	1. Start Control Panel.
	
	2. Double-click the Enhanced icon.
	
	3. Click the Virtual Memory button.
	
	4. Click the Change button.
	
	5. Clear the Use 32-Bit Disk Access check box.
	
	Modify the SYSTEM.INI File
	--------------------------
	
	Follow these steps to modify the SYSTEM.INI file:
	
	1. Use any text editor (such as Notepad) to open the SYSTEM.INI file.
	
	2. Add the following lines to the end of the SYSTEM.INI file:
	
	        [wdcdrv]
	        DMAFlag=OFF
	        BlockingFactor=0
	        ScatterGather=OFF
	
	3. Save the file and then close it.
	
	4. Exit and then restart Windows.
	
	Use an Updated Driver
	---------------------
	
	Contact Western Digital for an updated 32-bit disk access driver.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
