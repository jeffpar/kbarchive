---
layout: page
title: "Q232271: How to Optimize Windows NT Server Using the Registry"
permalink: /kb/232/Q232271/
---

## Q232271: How to Optimize Windows NT Server Using the Registry

{% raw %}

	Article: Q232271
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes procedures for manually configuring the server service.
	
	There may be times when it is necessary to configure the server service during a
	scripted, or unattended install.
	
	MORE INFORMATION
	================
	
	To configure the Server service, follow these steps:
	
	1. In Control Panel, double-click Network.
	
	2. On the Services tab, click the Server service, and then click Properties.
	
	3. There are four configuration options for the Server service listed here:
	
	  a. Minimize Memory Used
	
	  b. Balance
	
	  c. Maximize Throughput for File Sharing
	
	  d. Maximize Throughput for Network Applications
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	When you configure one of the four options for the Server service, the
	information is saved to the following two registry keys:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\lanmanserver\parameters\size
	
	Your choices for this registry key are 1,2 and 3.
	
	  1 = Minimize Memory Used
	  2 = Balance
	  3 = Maximize Throughput for File Sharing and Maximize Throughput for Network
	  Applications
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory
	  Management\LargeSystemCache
	
	Your choices for this registry key are 0 and 1.
	
	  1 = Maximize Throughput for File Sharing
	  0 = Maximize Throughput for Network Applications
	
	Some programs, such as SQL and Exchange, set this value during an installation.
	For these programs, the optimal setting is 0.
	0 = Indicates that the computer does not go outside its cache pool and use
	program memory to perform I/O functions.
	
	1 = Indicates that the computer looks outside of its cache pool and uses program
	memory to perform I/O functions. This occurs if the cache is full.
	
	The Windows NT 4.0 Resource Kit contains a tool called Regini.exe, which can be
	used to script changes to the registry. For information about this tool, please
	refer to the Regini.doc file or type "regini /?" (without the quotation marks)
	at the command prompt.
	
	REFERENCES
	==========
	
	For more information, please see the Windows NT 4.0 Resource Kit or the Windows
	NT Deployment Guide.
	
	  http://www.microsoft.com/TechNet/winnt/deploy.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
