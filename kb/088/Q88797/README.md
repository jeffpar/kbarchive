---
layout: page
title: "Q88797: CalComp Wiz Mouse Drivers for Windows"
permalink: /kb/088/Q88797/
---

## Q88797: CalComp Wiz Mouse Drivers for Windows

	Article: Q88797
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CalComp Wiz Mouse requires a special driver to work properly with Windows.
	If you use the CalComp Wiz Mouse with any of the mouse drivers that ship with
	Windows, you may experience slow hard disk access time (for example, 3 to 5
	minutes to load Microsoft Excel) or programs may return to an MS-DOS Prompt
	unexpectedly.
	
	MORE INFORMATION
	================
	
	CalComp technical support has confirmed that the CalComp Wiz Mouse does not work
	properly with any mouse drivers supplied with Windows. They have developed and
	tested a mouse driver for use with Windows 3.0 and 3.0a. This driver will also
	allow you to use the Wiz Mouse with Windows 3.1, but is not 100-percent
	compatible. CalComp is currently developing a new driver for use with Windows
	3.1.
	
	WORKAROUND
	==========
	
	According to CalComp, the following temporary workaround allows the Wiz Mouse to
	be used with Windows 3.0 until you can obtain the CalComp driver:
	
	1. From Windows Setup, install the Mouse Systems serial mouse on either your
	  COM1 or COM2 driver.
	
	2. Using a text editor, insert the following two lines in your AUTOEXEC.BAT
	  file:
	
	        mode comx: 9600,n,8,1
	
	  (where comx = com1, com2, com3..)
	
	        echo 2 m>comx:
	
	  (where comx = com1, com2, com3..)
	
	3. Restart the computer.
	
	Obtaining the CalComp Driver
	----------------------------
	
	To obtain the Wiz Mouse driver for Windows 3.0 and 3.0a, call CalComp technical
	support or call the CalComp BBS. The driver for Windows is WIZ11D- W.ZIP and the
	driver for MS-DOS is WIZ11D-D.ZIP.
	
	Once downloaded, these files must be unzipped and the files WIZ-DRV1.DRV and
	WIZ-DRV2.DRV should be copied to the WINDOWS\SYSTEM subdirectory.
	
	To install the Wiz Mouse Windows drivers, use a text editor such as Notepad to
	change the following lines in the SYSTEM.INI file:
	
	     [Boot]
	     mouse.drv=wiz-drv1.drv
	
	(for mouse on Com1)
	
	  -or-
	
	     mouse.drv=wiz-drv2.drv
	
	(for mouse on Com2)
	
	     [Boot.description]
	     mouse.drv=WIZ driver 1.01 for Windows(R) 3.00 Feb. 4. 1991
	
	The CalComp Wiz Mouse is manufactured by a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.10 3.00 3.00a 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
