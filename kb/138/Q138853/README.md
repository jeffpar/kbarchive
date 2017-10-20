---
layout: page
title: "Q138853: PerfMon, Run Remotely, Fails to Show all Logical Drive Instances"
permalink: /kb/138/Q138853/
---

## Q138853: PerfMon, Run Remotely, Fails to Show all Logical Drive Instances

{% raw %}

	Article: Q138853
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a Windows NT 3.5 computer remotely using Performance Monitor
	(PERFMON.EXE), the number of Physical and Logical Disk instances may be
	incorrect. One or more NTFS drives may be missing from the instance list
	returned. This problem does not occur on systems with only FAT drives.
	
	CAUSE
	=====
	
	When you connect to another system over the network, Performance Monitor
	connects to the HKEY_Performance_Data registry key, which is handled by
	Winlogon.exe. In Windows NT 3.5, Winlogon does not correctly impersonat the user
	connecting to performance registry key. Even though the user running Performance
	Monitor has the correct permissions to see the root of NTFS drive, that is, the
	user could connect to the root directory and view the directory remotely,
	Performance Monitor fails to return the drive instance and its performance
	counters.
	
	Winlogon uses the default accounts of the administrators group, domain users
	group and Everyone. If none of these groups have read permissions to the root of
	a drive, Performance Monitor fails to return the drive instance.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT Workstation or Server version 4.0.
	
	
	
	
	Additional query words: prodnt 3.50 advapi32.dll
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	

{% endraw %}
