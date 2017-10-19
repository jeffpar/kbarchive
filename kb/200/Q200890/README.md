---
layout: page
title: "Q200890: SNMP Security Extended by Service Pack 4"
permalink: /kb/200/Q200890/
---

## Q200890: SNMP Security Extended by Service Pack 4

	Article: Q200890
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Service Pack 4 added new security settings to SNMP. The security
	settings can be found by opening Control Panel, and double-clicking Network.
	Click the Services tab, select SNMP, click Properties, and then click Security.
	
	MORE INFORMATION
	================
	
	Service Pack 4 has added extended community security to the SNMP service. Now,
	both the community name is checked for authentication and the host can define a
	level of access. These levels of access are closely aligned with the MIB access
	variable. The community security levels are as follows:
	
	- NONE - Cannot read or write any variables.
	
	- NOTIFY - An unsolicited message issent to an SNMP management system.
	
	- READ-ONLY - Cannot set any values.
	
	- READ-WRITE - Can read or write any variables that the MIB definition allows.
	
	- READ-CREATE - Allows the creation of a new row.
	
	The interaction of the MIB access variable and the community security level can
	be seen in the following example:
	
	If your community access level is set to READ-ONLY and the MIB access variable is
	set at READ-WRITE, the following operations would be valid: get-request,
	get-next-request, get-response, and trap. Note that the set-request is blocked
	by the more restrictive community access level. So, the combination of these two
	security parameters determines the level of functionality the user has with
	SNMP.
	
	REFERENCES
	==========
	
	For additional information on this topic, see RFC 1157, "A Simple Network
	Management Protocol (SNMP)."
	
	Additional query words: snmp security sp4
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
