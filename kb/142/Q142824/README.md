---
layout: page
title: "Q142824: BUG: German Windows NT 3.51 Uses Wrong SNMP-Trap Port"
permalink: kb/142/Q142824/
---

## Q142824: BUG: German Windows NT 3.51 Uses Wrong SNMP-Trap Port

	Article: Q142824
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNMP traps sent by a computer running Microsoft Windows NT will never be
	received by an SNMP management system. Also an SNMP management system running on
	German Windows NT never receives traps from any SNMP agent.
	
	CAUSE
	=====
	
	There is an incorrect entry in the %SystemRoot%\System32\Drivers\Etc\Services
	file, which states the port address for the SNMP-Trap is 167/udp instead of
	162/udp:
	
	  snmp-trap         167/udp    snmp
	
	This causes the trap to be received by the NetBIOS name service, which is unable
	to deal with the format of an SNMP-Packe, so it just times out.
	
	WORKAROUND
	==========
	
	Manually change the entry to:
	
	  snmp-trap         162/udp    snmp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt tcp snmp
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	Issue type        : kbbug
	
	=============================================================================
	
