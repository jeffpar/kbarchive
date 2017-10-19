---
layout: page
title: "Q169363: DOC Err: SNMP OIDs Leave off Leading Dot"
permalink: /kb/169/Q169363/
---

## Q169363: DOC Err: SNMP OIDs Leave off Leading Dot

	Article: Q169363
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In chapter 11 of the Windows NT 4.0 Server Resource Kit, several example OIDs
	for simple network management protocol (SNMP) are given without the leading
	dot.
	
	For example table 11.3 gives an example of:
	
	  Internet MIB-II      iso.org.dod.internet.mgmt.mib-2     1.3.6.1.2.1
	
	This should be listed as:
	
	  Internet MIB-II      iso.org.dod.internet.mgmt.mib-2     .1.3.6.1.2.1
	
	When you query using an incorrect oid you will receive the following error:
	
	  Error: Invalid oid, x.x.x.x, specified.
	
	When you use SNMP Monitor (Snmpmon.exe) from the Windows NT Resource Kit, SNMP
	monitor will simply not collect data.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the syntax above that includes the leading dot (.)
	
	Additional query words: winnt snmp ntreskit
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
