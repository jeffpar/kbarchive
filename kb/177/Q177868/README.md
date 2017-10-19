---
layout: page
title: "Q177868: SnmpMgrTrapListen API Returns ERROR_SERVICE_NOT_ACTIVE Error"
permalink: /kb/177/Q177868/
---

## Q177868: SnmpMgrTrapListen API Returns ERROR_SERVICE_NOT_ACTIVE Error

	Article: Q177868
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix kbAPI kbSDKPlatform kbSNMP kbGrpDSNet
	Last Modified: 21-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you write programs that call the SnmpMgrTrapListen API, an error number
	1062 (ERROR_SERVICE_NOT_ACTIVE) may be returned if the caller is not a member of
	the Administrators group. This error can occur whether or not the Simple Network
	Management Protocol (SNMP) trap service is started.
	
	CAUSE
	=====
	
	This problem can occur because the SnmpMgrTrapListen API has been opening the
	service control manager database for all access (SC_MANAGER_ALL_ACCESS) to query
	the status of the SNMP trap service. This level can only be granted to members
	of the Administrators group.
	
	RESOLUTION
	==========
	
	The SnmpMgrTrapListen API now opens the service control manager database for
	SC_MANAGER_ENUMERATE_SERVICE to query the status of the SNMP trap service. If
	the service is not started, the API attempts to start it. The user of the API
	still needs to be part of the Administrators group to start the service if it is
	not started when the API runs. Or, the user can use the SetServiceObjectSecurity
	API to change the security for the SNMP trap service.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix kbAPI kbSDKPlatform kbSNMP kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
