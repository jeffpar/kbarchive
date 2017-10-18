---
layout: page
title: "Q139929: SNMP Queries of Very Long OIDs May Cause SNMP Service to Hang"
permalink: kb/139/Q139929/
---

## Q139929: SNMP Queries of Very Long OIDs May Cause SNMP Service to Hang

	Article: Q139929
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An SNMP 'get' or 'get next' request of an extremely long OID (object identifier)
	causes the SNMP service to stop responding (hang) on the target computer. This
	results in 100% CPU utilization, SNMP request time outs, and possible
	application errors in SNMP.EXE.
	
	WORKAROUND
	==========
	
	Avoid performing extremely long SNMP queries of non-existent OID's. If the SNMP
	agent is hung, the SNMP service can be stopped and started from the Services
	icon in Control Panel. This returns CPU utilization to normal.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
