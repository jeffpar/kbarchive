---
layout: page
title: "Q95835: What VSafe Manager (MWAVTSR.EXE) Does and How It Works"
permalink: kb/095/Q95835/
---

## Q95835: What VSafe Manager (MWAVTSR.EXE) Does and How It Works

	Article: Q95835
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VSafe Manager (MWAVTSR.EXE) is a Windows-based application that allows
	bidirectional communication with VSafe.
	
	VSafe is not a Windows-based application; therefore, if you are running Windows,
	the only way VSafe can inform you that there is a problem is to cause the system
	to beep. When VSafe Manager is running, VSafe can send you messages through
	VSafe Manager. In addition, VSafe Manager lets you change VSafe settings while
	Windows is running.
	
	MORE INFORMATION
	================
	
	The most common problem with VSafe Manager occurs when Windows beeps as you
	start it. This beeping occurs after you have upgraded Windows because VSafe
	checks the files that are loading against the CHKLIST.MS file in the loading
	file's directory. If they don't match, VSafe tries to prevent the file from
	loading.
	
	NOTE: The problem also occurs if you delete and then reinstall Windows.
	
	To work around this problem, do one of the following:
	
	- Rescan your disk with Microsoft Anti-Virus after upgrading to create new
	  checksum files.
	
	-or-
	
	- Delete the current checksum files.
	
	Creating New Checksum Files
	---------------------------
	
	To create new checksum files:
	
	1. From the Options menu, choose Set Options.
	
	2. Select the Create New Checksums check box and choose the OK button.
	
	3. Select the drive you want to scan and choose the Detect button.
	
	Deleting the Current Checksum Files
	-----------------------------------
	
	To delete the checksum files:
	
	1. Select the drive from which you want to delete the checksum files.
	
	2. From the Scan menu, choose Delete CHKLIST Files.
	
	3. Choose the Delete button.
	
	Additional query words: 6.22 6.00 6.20 win30 MSAV
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
