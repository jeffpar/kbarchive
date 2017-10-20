---
layout: page
title: "Q84607: &quot;Setup Unable to Copy...WIN.SRC,&quot; &quot;Setup Error #5&quot; Messages"
permalink: /kb/084/Q84607/
---

## Q84607: &quot;Setup Unable to Copy...WIN.SRC,&quot; &quot;Setup Error #5&quot; Messages

{% raw %}

	Article: Q84607
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing Microsoft Windows operating system version 3.1, you may get the
	
	  Setup is unable to copy the file win.src...
	
	or
	
	  Setup Error #5 - Setup either cannot open or cannot create the file
	  CPWIN386.CPL...
	
	message if you have a RAM drive that is assigned to logical drive C. Booting
	without the RAM drive or running a custom installation will allow you to
	complete the Windows 3.1 Setup program.
	
	MORE INFORMATION
	================
	
	Setup may fail on the first file it attempts to copy if you run Setup from a
	network drive, and if the following conditions are true:
	
	- No hard drive is installed.
	
	- A RAM drive is installed and is assigned to logical drive C.
	
	- Setup is executed from the directory where all Windows files reside.
	
	- Express install is selected.
	
	When the Setup /N command is executed under these circumstances, you may get the
	message:
	
	  Setup is unable to copy the file win.src.
	
	This file already exists in the destination directory and is marked read-only.
	
	You must remove the read-only attributes from all files in your Windows directory
	to successfully complete Windows Setup.
	
	When "Setup" is executed under the same circumstances, you may get the message:
	
	  Setup Error #5
	
	  Setup either cannot open or cannot create the file CPWIN386.CPL, which is
	  needed to set up Windows. Setup cannot continue.
	
	Any one of the following will allow you to complete Windows Setup:
	
	1. Choose Custom install instead of Express install.
	
	  -or-
	
	2. Remark out the RAM drive from the CONFIG.SYS file, by placing REM before the
	  RAM drive entry, and then restart the system.
	
	  -or-
	
	3. Create the directory into which you would like to install Windows, then run
	  Setup from this directory. For example, if you would like to set up Windows
	  3.1 in Y:\WINDOWS and all of the Windows files are in Y:\WINSETUP, change
	  your current directory to Y:\WINDOWS after creating it. Then type
	  Y:\WINSETUP\SETUP.EXE .
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
