---
layout: page
title: "Q102629: TCP, IP, ICMP, UDP Counters with PERFMON.EXE"
permalink: /kb/102/Q102629/
---

## Q102629: TCP, IP, ICMP, UDP Counters with PERFMON.EXE

	Article: Q102629
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbSDKPlatform kbSNMP kbGrpDSNet
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	To get the TCP, IP, ICMP, and UDP counters to appear in the
	Performance Monitor utility (PERFMON.EXE), you must install and start
	the \WINNT\SYSTEM32\SNMP.EXE service.
	
	This service is not installed by default when you install TCPIP. To
	install the service, choose the Network icon in Control Panel.
	
	Windows NT 3.x
	--------------
	
	- Select Add Software button
	
	- Select SNMP Service, and then choose the Continue button.
	
	Windows NT 4.0
	--------------
	
	- Select Services folder menu
	
	- Select SNMP service
	
	When you exit the Network settings dialog box, it asks you to shut
	down the system. This is not necessary, simply use the NET START SNMP
	command at the command line.
	
	These counters are also installed by the Microsoft Windows NT 4.0 Resource Kit.
	
	Additional query words: prodnt simple network management protocol missing disappeared
	
	======================================================================
	Keywords          : kbenv kbnetwork kbSDKPlatform kbSNMP kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:4.0
	
	=============================================================================
	
