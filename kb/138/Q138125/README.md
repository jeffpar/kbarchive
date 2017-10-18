---
layout: page
title: "Q138125: How to Set Replication Interval to Minimum"
permalink: kb/138/Q138125/
---

## Q138125: How to Set Replication Interval to Minimum

	Article: Q138125
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be of value to have replication occur as frequently as possible. For
	example, this may be the case when implementing and testing logon scripts.
	Replication can be configured to occur a minimum value of one minute.
	
	NOTE: This can significantly increase network traffic, and possibly impact
	network performance.
	
	MORE INFORMATION
	================
	
	To set the export server's replication interval at it's minimum value of one
	minute:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \System\CurrentControlSet\Services\Replicator\Parameters
	
	3. Add an entry as follows:
	
	  Value: Interval
	  Data Type: REG_DWORD
	  Data(hex): 1
	
	To set the export server's guard time interval, the number of minutes an export
	directory must be stable (no change to any files) before being replicated, to
	the minimum value of zero:
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \System\CurrentControlSet\Services\Replicator\Parameters
	
	3. Add an entry as follows:
	
	  Value: GuardTime
	  Data Type: REG_DWORD
	  Data(hex): 0
	
	Note: Reducing the guard time to zero while in the process of replicating may
	generate error messages in the System Log. This is caused by the system
	attempting to access open files.
	
	Additional query words: prodnt 3.10 replicate force
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
