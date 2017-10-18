---
layout: page
title: "Q180064: Physical Drive Access Unavailable When Using DskProbe"
permalink: kb/180/Q180064/
---

## Q180064: Physical Drive Access Unavailable When Using DskProbe

	Article: Q180064
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Dskprobe.exe program, the "Drives Physical Drive" dialog box
	may not populate with a list of available physical drives.
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- You are not logged on the computer with administrator rights. You can verify
	  this by running Disk Administrator. If you cannot successfully get into Disk
	  Administrator, and you receive an ACCESS IS DENIED message, then you do not
	  have administrative rights.
	
	- A third-party service is running that monitors disks and maintains an open
	  handle to the physical drives.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method:
	
	Method 1
	--------
	
	Logoff and then logon with an account that has administrator rights on the local
	computer.
	
	Method 2
	--------
	
	Stop any third-party services that may monitor the disks on your computer while
	maintaining an open handle to the physical drive. For example, one such service
	is the Compaq Insight Agent which is part of the Compaq Insight Manager
	software.
	
	You can use the NET START command to display a list of services that are
	currently active. Stop the offending service, and then the physical drive dialog
	box should be populated with local physical disks.
	
	MORE INFORMATION
	================
	
	The Windows NT version 4.0 Resource Kit Utility Dskprobe.exe is used to access
	and modify data on a disk drive at the sector level. This utility requires that
	you have administrator rights to gain access to the physical drive.
	Additionally, Windows NT allows a single open handle to have access to physical
	disks to prevent problems associated with asynchronous writes.
	
	Additional query words: reskit
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
