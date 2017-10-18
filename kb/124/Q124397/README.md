---
layout: page
title: "Q124397: HP 4V, 4MV, &amp; Epson Stylus Drivers Don't Install Off Floppy Disk"
permalink: kb/124/Q124397/
---

## Q124397: HP 4V, 4MV, &amp; Epson Stylus Drivers Don't Install Off Floppy Disk

	Article: Q124397
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you download the printer drivers for Hewlett-Packard (HP) 4V and 4MV
	LaserJet and Epson Stylus Color printers from the Microsoft Windows NT Driver
	Library (WNTDL), the drivers do not install properly from a floppy disk drive.
	
	If you copy the Epson Color Stylus printer driver, ESCP2MS.EXE, to a 3.5- inch
	disk and then attempt to install the driver on Windows NT Workstation, a prompt
	appears asking you to insert disk 16 for NT Workstation.
	
	WORKAROUND
	==========
	
	To work around this problem, copy the files to a directory on the hard disk
	drive. When the dialog box appears asking you to insert the disk in drive A,
	instead, enter the path where the files are stored on the hard disk. The printer
	driver installs properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Windows NT version 3.5. We are
	researching this problem and will post any new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	Issue type        : kbbug
	
	=============================================================================
	
