---
layout: page
title: "Q194748: Modem Call Cancellation Timeout Value Defaults to 55 Seconds"
permalink: /kb/194/Q194748/
---

## Q194748: Modem Call Cancellation Timeout Value Defaults to 55 Seconds

{% raw %}

	Article: Q194748
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change the default value of the "Cancel the call if not connected
	within <XX> secs" check box on the Connection tab in the Modem tool in
	Control Panel, the Modemlog.txt file still shows the modem's S7 register set to
	55 seconds. Regardless of the value you enter, the value is still set to 55
	seconds.
	
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
	
	MORE INFORMATION
	================
	
	The minimum value for this field is 55 seconds. Any number less than that
	results in the modem's S7 register being set to 55 seconds. To set the register
	to a value greater than 55 seconds, apply Windows NT 4.0 Service Pack 4 to the
	computer before changing the default value.
	
	Additional query words: RAS DUN timeout
	
	======================================================================
	Keywords          : kbenv kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
