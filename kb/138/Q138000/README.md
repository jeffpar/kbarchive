---
layout: page
title: "Q138000: Error Connecting to an Attachmate Gateway with a Cisco Router"
permalink: /kb/138/Q138000/
---

## Q138000: Error Connecting to an Attachmate Gateway with a Cisco Router

{% raw %}

	Article: Q138000
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to an Attachmate gateway from a Windows 95 workstation,
	you may receive the following error message:
	
	  Error 598: Server not found
	
	CAUSE
	=====
	
	This error can occur with the following combination of hardware and software:
	
	- Cisco Model 7000 Router using either software version 10.2.4 or 9.1.7
	
	- Attachmate Zip! SNA Gateway version 4.0
	
	- Attachmate for Windows Client version 4.1
	
	The use of a Cisco router with DECNet routing enabled causes the Ethernet address
	of the destination gateway workstation to change slightly, resulting in an
	invalid address.
	
	This problem also occurs in Windows for Workgroups 3.11.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For information about other issues resolved by this update, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q166321 Configuring Maximum IPX Packet Size in Windows 95
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
