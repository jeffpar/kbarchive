---
layout: page
title: "Q132904: Windows NT Upgrade Err Msg: ... NtPathToDosPath reported..."
permalink: /kb/132/Q132904/
---

## Q132904: Windows NT Upgrade Err Msg: ... NtPathToDosPath reported...

	Article: Q132904
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT, the following error message appears in the
	graphical user interface (GUI) portion of Windows NT Setup:
	
	  External library procedure NtPathToDosPath reported the following error.
	  'Unable to open the specified symbolic link object.'
	
	CAUSE
	=====
	
	This error indicates that the path to the installation media is no longer
	accessible. This error occurs when you have added new hardware to the computer
	(for example, a SCSI controller, a SCSI CD-ROM drive, or a ATAPI- compatible
	CD-ROM drive) before running Setup, but without adding the device drivers in the
	original Windows NT installation first. When Windows NT Setup reboots the
	computer to continue the GUI portion of setup, Windows NT finds only devices
	installed under the previous version of Windows NT (because you are running in
	the context of the original Windows NT installation.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- If you are upgrading a previous version of Windows NT, ensure the hardware
	  you are using operates correctly under the previous version.
	
	- Run WINNT /B. The /B switch instructs Windows NT Setup to perform a diskless
	  installation, eliminating the need for installation media (such as a CD-ROM),
	  after rebooting into the GUI portion of Setup.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5,3.51
	
	=============================================================================
	
