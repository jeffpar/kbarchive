---
layout: page
title: "Q63574: Installing Windows 3.0 for Different Graphic Resolutions"
permalink: /kb/063/Q63574/
---

## Q63574: Installing Windows 3.0 for Different Graphic Resolutions

	Article: Q63574
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To install Microsoft Windows version 3.00 on a machine with different graphic
	resolutions, install the program as if you were installing from a network
	server.
	
	MORE INFORMATION
	================
	
	1. After expanding all of the files in a directory on your hard drive, type
	  SETUP/N from the directory in which the expanded files are located.
	
	2. During this setup, have the Setup program install Windows 3.0 into a
	  different directory while selecting the graphic resolution that you want to
	  install. When the screen asks if you want to modify the CONFIG.SYS and
	  AUTOEXEC.BAT files, select the option that allows you to modify them
	  yourself.
	
	3. Repeat step 2 for each different resolution that you want to install.
	
	4. Modify the CONFIG.SYS to include the HIMEM.SYS and SMARTDRV.SYS device
	  drivers.
	
	5. Modify the PATH in the AUTOEXEC.BAT file to include the Windows directory in
	  which the files were expanded.
	
	To start Windows 3.0 with the desired graphic resolution, change directories to
	where you installed Windows with the desired resolution and type WIN.
	
	REFERENCES
	==========
	
	For further information on setting up Windows 3.00 from a network server, refer
	to Pages 553-556 in Chapter 14 of the "Microsoft Windows User's Guide."
	
	Additional query words: 3.00 3.00a 3.0 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
