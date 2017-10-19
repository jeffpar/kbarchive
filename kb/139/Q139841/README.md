---
layout: page
title: "Q139841: SNMP Returns Corrupt MAC Address"
permalink: /kb/139/Q139841/
---

## Q139841: SNMP Returns Corrupt MAC Address

	Article: Q139841
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNMP on Windows NT Workstation return a corrupt value when the Interface
	Object's MAC address is read. SNMP returns four or five bytes of the six byte
	address.
	
	MORE INFORMATION
	================
	
	The following command line entries will reproduce the problem. Notice that the
	Windows NT server returns a correct value for ifPhysAddress.2 while the two
	workstations return corrupt information.
	
	  C:\users\default>snmputil walk <computernmae> public .1.3.6.1.2
	
	Windows NT Server 3.51 Service Pack 2:
	
	  Variable = interfaces.ifTable.ifEntry.ifDescr.2
	  Value = OCTET STRING - Intel EtherExpress PRO Adapter
	
	  Variable = interfaces.ifTable.ifEntry.ifPhysAddress.2
	  Value = OCTET STRING -
	  <0x0><0xaa><0x0><0xb5><0x1a><0x95>
	
	Windows NT Workstation 3.51 Service Pack 1:
	
	  Variable = interfaces.ifTable.ifEntry.ifDescr.2
	  Value = OCTET STRING - Intel EtherExpress 16 Miniport/
	
	  Variable = interfaces.ifTable.ifEntry.ifPhysAddress.2
	  Value = OCTET STRING - <0x0><0xaa><0x0>7?<0xce>
	
	Windows NT Workstation 3.51 Service Pack 2:
	
	  Variable = interfaces.ifTable.ifEntry.ifDescr.4
	  Value = OCTET STRING - Intel EtherExpress PRO Adapter
	
	  Variable = interfaces.ifTable.ifEntry.ifPhysAddress.2
	  Value = OCTET STRING -
	  <0x0><0xaa><0x0>`<0xd3><0xce>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation version
	3.51 We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt tcpip sp1 sp2 media access control
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351
	Version           : 3.51
	
	=============================================================================
	
