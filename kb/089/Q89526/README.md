---
layout: page
title: "Q89526: Setup Errors With Productivity Pack on Removable Media"
permalink: /kb/089/Q89526/
---

## Q89526: Setup Errors With Productivity Pack on Removable Media

	Article: Q89526
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install the Windows Productivity Pack 3.1 on removable media, such as a
	Bernoulli or SyQuest drive, you receive the following error message:
	
	  The location you have chosen to install Microsoft Productivity Pack is
	  invalid or not allowed. Please check the drive and/or directory name.
	
	This message appears even if Windows is installed on the removable drive and
	there is sufficient disk space.
	
	MORE INFORMATION
	================
	
	Setup only allows you to install on a fixed disk. When you install Windows
	Productivity Pack 3.1 on removable media, such as a Bernoulli or Syquest drive,
	SETUP.EXE fails. Setup incorrectly assumes that you are installing to a floppy
	disk, and determines that there is insufficient disk space for the
	installation.
	
	This was tested with the Bernoulli driver RCD.SYS 7.0 and 7.04.
	
	WORKAROUND
	==========
	
	1. Install Productivity Pack to a directory on a fixed disk.
	
	2. Create a new ProdPack directory on the removable drive and copy the files
	  from the fixed disk directory to the new directory.
	
	3. Change Program Item Properties to reflect the new program location. You
	  receive this message:
	
	  The specified path points to a file that may not be available during later
	  Windows sessions. Do you want to continue?
	
	4. Choose OK to dismiss this message.
	
	Additional query words: 3.10 3.11 3rdparty err msg Hardcard
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
