---
layout: page
title: "Q178381: SNMP Leaks Memory If the OID Cannot Be Decoded"
permalink: /kb/178/Q178381/
---

## Q178381: SNMP Leaks Memory If the OID Cannot Be Decoded

{% raw %}

	Article: Q178381
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix kbAPI kbSDKPlatform kbSNMP kbGrpDSNet
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Over time, the Windows NT system responsiveness appears sluggish, and Clients
	may report a gradual decrease in system performance.
	
	By tracking the amount of Private Bytes for Snmp.exe, it can be observed that,
	over time, it increases without decreasing. This is viewable using Windows NT
	Performance Monitor by selecting the following counter to monitor:
	
	  Object: Process
	  Instance: SNMP
	  Counter: Private Bytes
	
	CAUSE
	=====
	
	If SNMP cannot decode an OID from a network packet, SNMP does not free up the
	memory, resulting in a memory leak in the Snmp.exe processes. The impact of this
	leak will be more evident on a system running on a network segment that receive
	lots of SNMP broadcast traffic.
	
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
	
	
	Additional query words: SNMP debug
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix kbAPI kbSDKPlatform kbSNMP kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
