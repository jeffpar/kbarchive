---
layout: page
title: "Q223450: TCP Initial Retransmission Timer Adjustment Added to Windows NT"
permalink: /kb/223/Q223450/
---

## Q223450: TCP Initial Retransmission Timer Adjustment Added to Windows NT

{% raw %}

	Article: Q223450
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you establish TCP connections between computers across high-delay networks,
	connection requests and data may be retransmitted unnecessarily. This can result
	in extra congestion and slow response.
	
	CAUSE
	=====
	
	The initial TCP retransmission timer was hard-coded to three seconds.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	A new registry parameter has been added to TCP to allow the initial
	retransmission timer to be adjusted. This parameter may be useful for high-delay
	networks, where the round-trip time often exceeds three seconds.
	
	This parameter controls the retransmission time-out of the initial TCP connection
	request (SYN) and of the first data sent on a connection. It is a global value,
	which applies to all interfaces in the computer.
	
	To adjust the InitialRtt parameter, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: InitialRtt
	  Data Type: REG_DWORD
	  Value: 5000 decimal (for example, to set it to 5 seconds)
	  Valid Range: 0-65535 (decimal)
	  Default: 0xBB8 (3000 decimal)
	  Description: This parameter controls the initial retransmission timeout used
	  by TCP on each new connection. It applies to the connection request (SYN) and
	  to the first data segment(s) sent on each connection.
	
	4. Quit Registry Editor.
	
	5. Restart the computer.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	Care should be used when adjusting this value. Setting it to large values will
	dramatically increase the amount of time that it takes for a TCP connection
	attempt to fail, if the target IP address does not exist.
	
	For instance, the default value is 3,000, or 3 seconds. By default, a connection
	request is retried 2 times. The total time-out is (3+6+12) seconds, or 21
	seconds.
	
	If this registry value is set to 6,000 (6 seconds), the total timeout will be
	(6+12+24) seconds, or 42 seconds. During this time, an application can appear to
	stop responding (hang).
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
