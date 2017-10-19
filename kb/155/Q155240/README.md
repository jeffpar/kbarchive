---
layout: page
title: "Q155240: Err Msg: Some Control Panel or Device Settings Have Changed..."
permalink: /kb/155/Q155240/
---

## Q155240: Err Msg: Some Control Panel or Device Settings Have Changed...

	Article: Q155240
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbsetup win95 appscomp kbAppCompatibility
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run Windows 95 Setup or Windows 95 OEM Service Release 2
	(OSR2) Setup from within Windows 95 or OSR2, you may receive the following error
	message:
	
	  Some Control Panel or device settings have changed since you last started
	  Windows. Close all of your programs, restart Windows, and then run Setup
	  again.
	
	CAUSE
	=====
	
	This error message occurs when Diamond In Control Tools is loaded or a
	Winmodem.cpl file is installed on your computer by a third-party modem driver.
	
	
	RESOLUTION
	==========
	
	Quit In Control Tools before you run Windows 95 or OSR2 Setup, or rename the
	Winmodem.cpl file to Winmodem.bak, and then run Windows 95 Setup again. For
	information about how to rename a file, click Start, click Help, click the Index
	tab, type "renaming" (without the quotation marks), and then double-click the
	"Renaming files" topic.
	
	MORE INFORMATION
	================
	
	This error message can also occur if you have a modem connected to a Hayes ESP
	high speed serial port. This port uses a program named Espcfgmg.exe to set the
	port, address, and so on. Disable this program in Task Manager to resolve the
	issue. In Control Tools is a product of Diamond Multimedia, WinModem is a
	product of US Robotics.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbsetup win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
