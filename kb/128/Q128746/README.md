---
layout: page
title: "Q128746: Removing SNMP leaves SNMP Counters in Performance Monitor"
permalink: kb/128/Q128746/
---

## Q128746: Removing SNMP leaves SNMP Counters in Performance Monitor

	Article: Q128746
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Simple Network Management Protocol (SNMP) under
	Windows NT 3.5, 3.51 and 4.0, the following objects are added to Performance
	Monitor:
	
	  ICMP
	  IP
	  Network Interface
	  TCP
	  UDP
	
	When you remove SNMP, the objects added to Performance Monitor during
	installation are not removed, and continue to be available.
	
	CAUSE
	=====
	
	This behavior is by design. The objects are not removed in order to preserve the
	integrity of the performance monitor counters.
	
	Additional query words: counter prodnt perfmon.exe
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
