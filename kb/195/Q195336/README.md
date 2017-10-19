---
layout: page
title: "Q195336: Resource Kit Perfmib.dll Cannot Read Some SNMP Counters"
permalink: /kb/195/Q195336/
---

## Q195336: Resource Kit Perfmib.dll Cannot Read Some SNMP Counters

	Article: Q195336
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing the Perf2Mib utility from the Windows NT Resource Kit, SNMP
	queries to various Performance Monitor Object Counters return a value of zero.
	
	CAUSE
	=====
	
	The Perfmib.dll does not handle object instances correctly.
	
	RESOLUTION
	==========
	
	A new version of Perfmib.dll that resolves this problem is available on:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/<Platform>
	
	Please note that the Perf2Mib utility has been removed from the Resource Kit as
	of Supplement2 and, consequently, future issues concerning the tool will not be
	addressed.
	
	MORE INFORMATION
	================
	
	Using Perf2mib.exe, the Performance Monitor MIB Builder Tool, developers can
	create new ASN.1 syntax MIBs for their applications, services, or devices that
	use Performance Monitor counters. Administrators can then track performance of
	these components by using any system-management program that supports SNMP.
	
	This tool also creates a .mib file that can be used by an SNMP-based management
	console to perform SNMP requests for the performance data in question and, thus,
	to monitor performance remotely. This allows all performance data available
	through the HKEY_PERFORMANCE_DATA registry key to be exposed through SNMP.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
