---
layout: page
title: "Q64977: Using MS-DOS 5.0 Setup Rather Than MS-DOS 5 Upgrade Setup"
permalink: kb/064/Q64977/
---

## Q64977: Using MS-DOS 5.0 Setup Rather Than MS-DOS 5 Upgrade Setup

	Article: Q64977
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Microsoft MS-DOS version 5.0 installation program is run on a machine
	that had a previous system present, the program copies the CONFIG.SYS and
	AUTOEXEC.BAT files to CONFIG.OLD and AUTOEXEC.OLD, replacing them with new ones
	of its own. The Microsoft MS-DOS 5 Upgrade's Setup, however, simply modifies the
	current files. This can cause problems because the MS-DOS installation program
	changes system settings such as the "files=" and "buffers=" settings to values
	that may cause programs already installed on the machine to fail.
	
	One situation in which this is a problem is if Windows is present on the system.
	The installation program sets "files=" to 10, a value that is too low for
	Windows to run.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
