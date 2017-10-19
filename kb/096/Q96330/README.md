---
layout: page
title: "Q96330: MS-DOS 6.x Upgrade Does Not Update SHELL= in CONFIG.SYS"
permalink: /kb/096/Q96330/
---

## Q96330: MS-DOS 6.x Upgrade Does Not Update SHELL= in CONFIG.SYS

	Article: Q96330
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Unlike previous versions of Microsoft MS-DOS, when you install MS-DOS 6.x
	Upgrade, the Shell command in the CONFIG.SYS file is not updated if you are not
	using COMMAND.COM.
	
	MORE INFORMATION
	================
	
	If you are using a third-party shell with MS-DOS 6.0 or 6.2, you may have
	problems with multiple-configuration menus, MemMaker, and the startup function
	keys (F5 and F8).
	
	To correct these problems, either use COMMAND.COM or contact your third-party
	shell manufacturer for an updated version.
	
	The default Shell command for MS-DOS 6 Upgrade or MS-DOS 6.2 is as follows:
	
	     shell=c:\dos\command.com c:\dos /p
	
	If the current Shell is COMMAND.COM, Setup updates the path, keeps the /E
	parameter (if there is one), and adds the /P parameter if it does not already
	exist.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
