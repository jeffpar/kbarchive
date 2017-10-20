---
layout: page
title: "Q130668: Mapping Netware Drives with the AT Scheduler"
permalink: /kb/130/Q130668/
---

## Q130668: Mapping Netware Drives with the AT Scheduler

{% raw %}

	Article: Q130668
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT AT command to schedule a process that requires a
	drive to be mapped to a NetWare volume (through Gateway or Client Service for
	NetWare), the drives that are mapped by the scheduled process are not accessible
	to any user or application except those started under the scheduler service.
	Similarly, the scheduled process cannot access Netware mapped drives that were
	not established by the scheduler service. If you attempt to map that drive, the
	following message appears:
	
	  System Error 85: The local device name is already in use.
	
	If you attempt to delete the connection, an error message appears, stating that
	the network connection could not be found.
	
	The mapped drive does not show up as a valid drive in File Manager, but in some
	cases it may show up in the disconnect network drive list from the toolbar. If
	you try to disconnect that connection from within File Manager, the following
	error message appears:
	
	  Access Denied
	
	RESOLUTION
	==========
	
	The scheduled command or batch file that establishes the connection should also
	terminate that connection by adding a NET USE <drive> /DELETE command to
	the end of the file. The drive will be unusable for any other application or
	process until the system is restarted if the drive is not disconnected by the
	originating process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.5, 3.51, and 4.0. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	

{% endraw %}
