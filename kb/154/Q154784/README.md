---
layout: page
title: "Q154784: Windows NT Operating System SNMP OID Incorrect"
permalink: /kb/154/Q154784/
---

## Q154784: Windows NT Operating System SNMP OID Incorrect

	Article: Q154784
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.00
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.00 
	- Microsoft Windows NT Server versions 3.51, 4.00 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNMP traps generated on Windows NT Workstation and Server provide an object ID
	(OID). Where you expect to find the OID designating the Microsoft operating
	system, Inetmib1 sets as EnterpriseOID in the SNMP trap packet the following
	string:
	
	  1.3.6.1.2.1.11
	
	Also the OID length is set to a greater value than the actual length, and three
	more unnecessary values are always attached to the OID.
	
	CAUSE
	=====
	
	Inetmib1 sets the incorrect value for EnterpriseOID and an incorrect length for
	the OID.
	
	MORE INFORMATION
	================
	
	When the update below is applied to the Windows NT computer, the following IDs
	can be used to identify the type of Windows NT computer via SNMP:
	
	  3.1.1 for workstation
	  3.1.2 for servers
	  3.1.3 domain controllers (DCs)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and 4.0.
	This problem was corrected in the latest Windows NT 3.51 U.S. Service Pack and
	in the latest Windows NT 4.0 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt SysObjectID
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.00
	
	=============================================================================
	
