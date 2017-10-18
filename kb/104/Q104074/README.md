---
layout: page
title: "Q104074: Err Msg: Incorrect Function... When Accessing a CD-ROM"
permalink: kb/104/Q104074/
---

## Q104074: Err Msg: Incorrect Function... When Accessing a CD-ROM

	Article: Q104074
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under Windows NT, if there is an audio disc in a CD-ROM drive, a non_PC format
	disk, rather than a data disc, or a dirty CD data Disk trying to be accessed,
	the following misleading error message appears in File Manager when you try to
	access the drive either locally or over a network:
	
	  Incorrect Function
	
	This error message may also appear in other applications trying to access the
	CD-ROM drive, such as Windows NT Setup. From a virtual MS-DOS machine (VDM), a
	different misleading error message appears:
	
	  The system cannot find the drive specified.
	
	
	CAUSE
	=====
	
	
	This error may be caused by either hardware or software issues. It is most
	commonly caused by a dirty CD-ROM disk, or by attempting an incorrect function
	such as attempting to access a data disk with the CD Player applet.
	
	If these conditions are ruled out, the cause will be either a faulty CD-ROM disk
	or faulty hardware.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	  - Replace the audio disc with the desired data disc.
	
	  - Clean the data CD disk with a CD cleaning solution.
	
	  - Verify that the hardware is functioning correctly.
	
	  - Try another disk to see if the problem can be reproduced.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1 and
	Windows NT Advanced Server version 3.1. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
