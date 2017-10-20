---
layout: page
title: "Q246984: Tuning May Benefit RPC Programs That Use Winsock Over TCP/IP"
permalink: /kb/246/Q246984/
---

## Q246984: Tuning May Benefit RPC Programs That Use Winsock Over TCP/IP

{% raw %}

	Article: Q246984
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Remote Procedure Call (RPC) programs that use Winsock over TCP/IP and perform
	reads or writes that are over 8 KB in size may benefit from increasing the
	Windows NT Winsock driver internal receive buffer size.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The Windows NT socket driver (Afd.sys) has a default receive buffer size of 8 KB.
	When a program receives more data than this buffer is configured to hold, all
	data received up to this count must be transferred to the program before
	receiving continues. When this happens, RPC sends an acknowledgement to the
	computer that is sending the RPC data. In some cases, the program's receive
	function may experience a time-out during this period.
	
	Winsock programs can set the size of this buffer on a per-socket basis by calling
	the Windows Socket function setsockopt and specifying the new value for the
	parameter SO_RCVBUF.
	
	Because programs that use RPC over Winsock do not have access to the Winsock
	options, you must set this parameter in the Windows NT registry manually. If you
	modify this parameter in the registry, it is in effect for sockets used by all
	Winsock programs. The change causes the default receive buffer allocated for
	each socket created to be equal to the new size.
	
	NOTE: You should change this parameter only on systems that are reading more than
	8 KB of data at a time. For example, if the server side of an RPC programs is
	written so that it receives small requests and sends large responses (larger
	than 8 KB), only the Windows NT client computers need the DefaultReceiveWindow
	parameter increased.
	
	To change the default receive buffer size for Afd.sys:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Open the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Afd\Parameters
	
	3. On the Edit menu, click Add Value. Add the following value:
	
	  Value Name: DefaultReceiveWindow
	  Value Type: REG_DWORD
	  Radix: as appropriate
	  Value Data: as appropriate (the buffer size that gives optimal performance)
	
	For example, click Decimal as the radix and type "16384" (without the quotation
	marks) to set the DefaultReceiveWindow value.
	
	4. Quit Registry Editor, and then reboot the computer.
	
	
	Additional query words: tcpip tcp/ip
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
