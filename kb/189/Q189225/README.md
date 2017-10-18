---
layout: page
title: "Q189225: LMMIB2 Unable to &quot;Walk&quot; from .1.3.6.1.4.1.77.1.4.4"
permalink: kb/189/Q189225/
---

## Q189225: LMMIB2 Unable to &quot;Walk&quot; from .1.3.6.1.4.1.77.1.4.4

	Article: Q189225
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix kbSDKPlatform kbSNMP kbGrpDSNet
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An SNMP-based application (such as SNMPUTIL) receives an Error 5 Index 1 error
	message from the SNMP Service when it "walks" through .1.3.6.1.4.1.77.1.4.4 in
	the LANMAN II MIB.
	
	CAUSE
	=====
	
	This problem occurs because Lmmib2.dll does not return the correct error
	message.
	
	
	RESOLUTION
	==========
	
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
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix kbSDKPlatform kbSNMP kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
