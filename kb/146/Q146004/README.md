---
layout: page
title: "Q146004: SNMP Counter Values Are Unreliable in SMP Computers"
permalink: /kb/146/Q146004/
---

## Q146004: SNMP Counter Values Are Unreliable in SMP Computers

{% raw %}

	Article: Q146004
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbSDKPlatform kbSNMP kbGrpDSNet
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT simple network management protocol (SNMP) counters, such as output
	queue length, may yield unlikely results in symmetric multiprocessor (SMP)
	computers. The SNMP counters can be viewed using Snmputil.exe from the Windows
	NT Resource Kit, or Performance Monitor using the Network Interface object. For
	example:
	
	  snmputil getnext <server> public 2.2.1.21.1
	  Variable = interfaces.ifTable.ifEntry.ifOutQLen.2
	  Value = Gauge - 3749
	
	NOTE: In normal operation, the output queue length counter should rarely rise
	above zero, when it does, it should return to zero very quickly.
	
	CAUSE
	=====
	
	This problem occurs because Windows NT TCP/IP does not use interlocked
	operations to maintain its statistics counters. The SNMP counters are maintained
	in the TCP/IP code.
	
	
	In the case of output queue length, the counter is incremented every time a
	packet is indicated to NdisSend(), and decremented when NDIS completes the send
	successfully by returning a status of success, or returning status pending and
	later calling ARPSendComplete().
	
	Because spinlocks are not used in this code to guarantee the integrity of the
	counters, SMP computers can affect the counter values during retrieval, causing
	unlikely values to be reported.
	
	The decision to not implement spinlocks to guarantee the integrity of the SNMP
	counters is based on performance concerns and will not be changed.
	
	STATUS
	======
	
	Spinlocks were left out of the TCP/IP code for counter operations intentionally
	for performance reasons. This will not be fixed.
	
	Additional query words: perfmon
	
	======================================================================
	Keywords          : kbnetwork kbSDKPlatform kbSNMP kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
