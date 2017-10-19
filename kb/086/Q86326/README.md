---
layout: page
title: "Q86326: PC Cillin Anti-Virus Software May Hang Windows Applications"
permalink: /kb/086/Q86326/
---

## Q86326: PC Cillin Anti-Virus Software May Hang Windows Applications

	Article: Q86326
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the PC Cillin anti-virus program is in memory on your system while Microsoft
	Windows version 3.1 or a Windows-based application is running, you may receive
	the following error messages and your system may stop responding (hang):
	
	  Divide overflow
	
	  -or-
	
	  Sharing Violation
	
	PC Cillin may cause the following message to appear if you use the 32-bit disk
	access Virtual memory option in Windows 3.1:
	
	  The Microsoft Windows 32-bit disk driver (WDCTRL) cannot be loaded. There is
	  unrecognizable disk software installed on this computer.
	
	PC Cillin may cause the Windows application Setup program to fail at 7 percent
	completion with the following message:
	
	  The following disk error was detected:
	  The listed file was not copied - error writing UNINSTALL.EXE
	
	You may receive these error messages when running the Setup program for such
	Windows-based applications as Microsoft Word for Windows or Microsoft Excel for
	Windows.
	
	WORKAROUND
	==========
	
	If you remove the references to PC Cillin from your system's AUTOEXEC.BAT and
	CONFIG.SYS files, and restart your computer, these error messages should not
	occur.
	
	The PC Cillin product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 2.00 2.00a 4.00 3.10 3.11 hang crash lock reboot 3rdparty third err msg w4werror
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
