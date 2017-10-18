---
layout: page
title: "Q104646: When Setup Configures SMARTDrive 5.0 for Read-Only Caching"
permalink: kb/104/Q104646/
---

## Q104646: When Setup Configures SMARTDrive 5.0 for Read-Only Caching

	Article: Q104646
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS Setup adds the SMARTDRV /X command to the AUTOEXEC.BAT file if:
	
	- The version of SMARTDrive currently in use is earlier than 4.0.
	
	-or-
	
	- SMARTDrive is not currently loaded in memory and there is no SMARTDRV command
	  line in the AUTOEXEC.BAT file.
	
	MORE INFORMATION
	================
	
	The following is a list of the five scenarios Setup may encounter and whether or
	not Setup modifies your configuration files:
	
	- A version of SMARTDrive earlier than version 4.0 is loaded in memory.
	
	  Setup removes the SMARTDRV.SYS command from the CONFIG.SYS file and adds
	  SMARTDRV /X to the AUTOEXEC.BAT file.
	
	- SMARTDrive is not loaded in memory and there is no command for SMARTDRV in
	  the AUTOEXEC.BAT file.
	
	  Setup adds SMARTDRV /X to the AUTOEXEC.BAT file
	
	- SMARTDrive is not in memory and there is a SMARTDRV command in the
	  AUTOEXEC.BAT file.
	
	  Setup does not change the SMARTDRV command in the AUTOEXEC.BAT file.
	
	- SMARTDrive is in memory and there is no command for SMARTDRV in the
	  AUTOEXEC.BAT file.
	
	  Setup does not add a SMARTDRV command to the AUTOEXEC.BAT file.
	
	- SMARTDrive is loaded in memory and there is a command for SMARTDRV in the
	  AUTOEXEC.BAT file.
	
	  Setup leaves the SMARTDRV command in the AUTOEXEC.BAT file unchanged.
	
	
	Additional query words: 6.22 6.20 stepup Upgrade Step-Up
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
