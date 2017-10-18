---
layout: page
title: "Q84492: Setup Error If SYSTEM Subdirectory Exists on Workstation"
permalink: kb/084/Q84492/
---

## Q84492: Setup Error If SYSTEM Subdirectory Exists on Workstation

	Article: Q84492
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Windows operating system version 3.1 maintenance mode of Setup may
	give the following error if it is executed from MS-DOS on a network workstation
	that contains a WINDOWS\SYSTEM subdirectory:
	
	  Setup is unable to copy the file F:\WINDOWS\SYSTEM\EGA.3GR. This file already
	  exists in the destination directory and is marked as read-only.
	
	  You must remove the read-only attributes from all the files in your Windows
	  directory in order to successfully complete Windows setup.
	
	In the above error message, F:\WINDOWS is the network shared directory that
	contains the expanded Windows 3.1 files. The driver EGA.3GR is provided here as
	an example.
	
	Running Setup from inside Windows 3.1 will not cause this error message.
	
	CAUSE
	=====
	
	Attempting to change a Windows setting by running Setup from MS-DOS on a network
	workstation can cause a file copy error if there is a SYSTEM directory located
	in the workstation's WINDOWS directory.
	
	Network workstations should not have a SYSTEM subdirectory located on either the
	local or network WINDOWS directory. Having a SYSTEM directory may confuse
	applications and cause errors.
	
	There are three ways to correct this error:
	
	1. Rename the WINDOWS\SYSTEM subdirectory on the workstation.
	
	  -or-
	
	2. Delete the WINDOWS\SYSTEM subdirectory on the workstation.
	
	  -or-
	
	3. Run the maintenance mode of Setup from the Windows Main group by selecting
	  the Windows Setup icon.
	
	Additional query words: 3.10 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
