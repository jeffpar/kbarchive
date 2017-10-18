---
layout: page
title: "Q95859: Extra Tools Menu Added to Norton Desktop for Windows"
permalink: kb/095/Q95859/
---

## Q95859: Extra Tools Menu Added to Norton Desktop for Windows

	Article: Q95859
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If Windows is installed on your computer when you run the MS-DOS 6 Upgrade Setup
	program, Setup installs a Tools menu in the File Manager toolbar. If you use
	Norton Desktop for Windows, you have two Tools menus after you install the
	MS-DOS Upgrade.
	
	CAUSE
	=====
	
	This problem occurs because Norton Desktop for Windows has one Tools menu and
	inherits a second one from File Manager by reading the WINFILE.INI file.
	
	WORKAROUND
	==========
	
	You can keep both Tools menus in Norton Desktop for Windows or you can remove
	the second Tools menu by telling Norton Desktop for Windows to ignore the
	add-ins section in the File Manager information file (WINFILE.INI).To configure
	Norton Desktop for Windows to ignore File Manager add-ins, set the
	MaxWinFileExtensions line to "0" (without the quotation marks) (zero) in your
	NDW.INI file, for example:
	
	  " MaxWinFileExtensions=0 " (without the quotation marks)
	
	This disables all of the add-ins inherited from File Manager.
	
	MORE INFORMATION
	================
	
	The two tools menus have different functions. The Tools menu in File Manager and
	the Tools menu in Norton Desktop for Windows give you the following options:
	
	 Command               Description
	  ---------------------------------
	
	  Backup                Runs Microsoft Backup
	  Antivirus             Runs Microsoft Anti-Virus
	  DoubleSpace Info      Provides DoubleSpace statistics if you have
	                        DoubleSpace installed
	
	Norton Desktop for Windows is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3rdparty ndw 6.00 6.20 6.21 6.22 dblspace mwav mwbackup drvspace drive space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
