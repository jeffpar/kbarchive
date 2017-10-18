---
layout: page
title: "Q113710: Err Msg: &quot;Access Denied&quot; on Backup or Update of RAS Temp File"
permalink: kb/113/Q113710/
---

## Q113710: Err Msg: &quot;Access Denied&quot; on Backup or Update of RAS Temp File

	Article: Q113710
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Remote Access Service (RAS) Server is running, and you attempt to either
	backup the root directory using NTBackup or update the Emergency Repair Disk
	using REPAIR.EXE from the Windows NT 3.1 Resource Kit, the following error
	message appears:
	
	  Copy %systemroot%\System32\RAS41766.TEM
	
	  Access Denied.
	
	  Abort or Retry.
	
	CAUSE
	=====
	
	The RAS Server initialization code creates the temporary file RAS41766.TEM in
	the %systemroot%\System32 directory when starting RAS and deletes it when RAS is
	stopped. The location for this temporary file is not user selectable. When you
	perform a disk backup or an update to the Emergency Repair Disk, Windows NT
	tries to access this file. Because Windows NT security only allows access to
	this file by the RAS Server initialization code (the file's parent process),
	NTBACKUP.EXE or REPAIR.EXE are denied access resulting in the above error.
	
	RESOLUTION
	==========
	
	To work around this problem, stop RAS before attempting to backup your disk with
	NTBackup or update the Emergency Repair Disk.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5.
	
	Additional query words: prodnt admin manager
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
