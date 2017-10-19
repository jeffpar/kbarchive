---
layout: page
title: "Q90020: &quot;Cannot Find SETUP.INF&quot; During Windows Sound System Setup"
permalink: /kb/090/Q90020/
---

## Q90020: &quot;Cannot Find SETUP.INF&quot; During Windows Sound System Setup

	Article: Q90020
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the following error message is displayed, a disk other than disk 1 of the
	Windows Sound System may be in the floppy drive:
	
	  Cannot find the file SETUP.INF
	
	If this is the case, replace the disk with disk 1.
	
	MORE INFORMATION
	================
	
	Windows Sound System Setup will ask to restart Windows in order to activate the
	sound driver. Before Setup allows you to exit Windows, it puts a Windows Sound
	System Setup icon in the Startup group. Once Windows is restarted, the Setup
	program looks for the SETUP.INF file from disk 1. If another disk is in the
	drive, it will display the above error message.
	
	To resolve the problem, insert disk 1 into the disk drive and choose the Retry
	button. Setup should then find the SETUP.INF file and continue with the Windows
	Sound Systems installation.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a
	
	=============================================================================
	
