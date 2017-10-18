---
layout: page
title: "Q216063: DHCP MIB Returns Incorrect OID for SNMP GetNext Command"
permalink: kb/216/Q216063/
---

## Q216063: DHCP MIB Returns Incorrect OID for SNMP GetNext Command

	Article: Q216063
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Simple Network Management Protocol (SNMP) GETNEXT command from
	an SNMP management system to return OIDs from the DHCP MIB, the first instance
	of the subsequent object is returned rather than the first instance of the
	actual object requested.
	
	CAUSE
	=====
	
	This problem occurs because the DHCP subagent does not do correct lexicographic
	ordering. The example below displays the problem. The GETNEXT command should
	return 2.157.55.80.0. However, GETNEXT actually returns 3.157.55.80.0.
	
	  C:\>snmputil getnext rhino1 public 1.3.6.1.4.1.311.1.3.2.1.1.2.0
	  OID :1.3.6.1.4.1.311.1.3.2.1.1.3.157.55.80.0
	  .iso.org.dod.internet.private.enterprises.microsoft.software.dhcp
	  .dhcpScope.scopeTable.scopeTableEntry.noAddFree.157.55.80.0
	  COUNTER: 459
	
	  C:\>snmputil getnext rhino1 public 1.3.6.1.4.1.311.1.3.2.1.1.2.
	  157.55.80.0
	  OID :1.3.6.1.4.1.311.1.3.2.1.1.2.172.31.200.0
	  .iso.org.dod.internet.private.enterprises.microsoft.software.dhcp
	  .dhcpScope.scopeTable.scopeTableEntry.noAddInUse.172.31.200.0
	  COUNTER: 9
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
