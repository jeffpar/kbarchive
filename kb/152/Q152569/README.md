---
layout: page
title: "Q152569: SNMP Agent Does Not Respond After Suspend Power Is Invoked"
permalink: kb/152/Q152569/
---

## Q152569: SNMP Agent Does Not Respond After Suspend Power Is Invoked

	Article: Q152569
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbSDKPlatform kbSNMP kbGrpDSNet
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	On a computer system that has advanced power management features or a manual
	power standby button (commonly found on portable computers), invoking this power
	feature will disable the SNMP agent. After the computer returns from the power
	saving mode, the SNMP agent does not respond.
	
	CAUSE
	=====
	
	The SNMP agent does not reset after a power saving mode has been released.
	
	
	RESOLUTION
	==========
	
	The computer must be restarted to reinitialize the SNMP agent. If you use SNMP
	frequently, you may also want to disable any automatic power saving mode that is
	scheduled on the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51,
	and 4.0 and Windows 95. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbSDKPlatform kbSNMP kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.5,3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
