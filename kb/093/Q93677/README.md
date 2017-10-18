---
layout: page
title: "Q93677: Windows Sound System Will Not Load on Diskless Workstations"
permalink: kb/093/Q93677/
---

## Q93677: Windows Sound System Will Not Load on Diskless Workstations

	Article: Q93677
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing Microsoft Windows Sound System on a diskless workstation either
	from a network share directory or from the original floppy disks, the following
	error message appears:
	
	  Setup cannot find a drive with enough space to install
	
	MORE INFORMATION
	================
	
	This error occurs because the SETUP.EXE program for the Windows Sound System is
	hard coded to look at the local hard drive for available space. This message
	will also appear when installing to a drive that physically does not contain
	enough free disk space. The Windows Sound System requires between 1 and 10 MB of
	free disk space, depending upon the configuration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows Sound System version
	1.0, 1.0a, and 2.0. We are researching this problem and will post new
	information here as it becomes available.
	
	Additional query words: 1.00 Window network
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
