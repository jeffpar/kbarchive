---
layout: page
title: "Q221926: TCP/IP Forwarding Buffer Grows to Use Available Kernel Memory"
permalink: /kb/221/Q221926/
---

## Q221926: TCP/IP Forwarding Buffer Grows to Use Available Kernel Memory

	Article: Q221926
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The forward buffer used with TCP/IP to buffer routed packets between interfaces
	can grow to use all available kernel memory in Windows NT computers running
	Windows NT 4.0 Service Pack 4.
	
	Or, you may see the following event information in the System log in Event
	Viewer:
	
	  Event ID: 2019
	  Description: The server was unable to allocate from the system nonpaged pool
	  because the pool was empty.
	
	CAUSE
	=====
	
	The default maximum forwarding buffer size is 0xFFFFFFF bytes. Therefore, the
	buffer can grow to use all available system resources in this configuration.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem, add the following registry entries to the server
	running Windows NT 4.0 and modify the values to disallow memory usage to degrade
	system performance:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	
	- MaxForwardBufferMemory (REG_DWORD: 74240)
	
	  Establishes the maximum number of bytes of memory that the IP can allocate to
	  store packet data in the router packet queue. This value must be greater than
	  or equal to the value of ForwardBufferMemory.
	
	  This registry entry is a decimal value.
	
	- MaxNumForwardPackets (REG_DWORD: 50)
	
	  Establishes the maximum number of IP packet headers that can be allocated to
	  the router packet queue. This value must be greater than or equal to the
	  value of NumForwardPackets.
	
	  This registry entry is a decimal value.
	
	These values can be modified in accordance with the instructions to allocate more
	resources for the forwarding buffer, but increasing them excessively will have a
	negative effect on other system resources.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	Additional query words: TCPu UPCT poolmon
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
