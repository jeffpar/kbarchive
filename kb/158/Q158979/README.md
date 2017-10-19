---
layout: page
title: "Q158979: STOP 0x0000000A Running Netmon on Token Ring Networks"
permalink: /kb/158/Q158979/
---

## Q158979: STOP 0x0000000A Running Netmon on Token Ring Networks

	Article: Q158979
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT using Network Monitor may blue screen with the
	following stop error message:
	
	  STOP: 0x0000000A (0x0000002e, 0x00000002, 0x00000000, 0xff0d9c07)
	  IRQL_NOT_LESS_OR_EQUAL - NDIS.SYS
	
	NOTE: The first parameter and second parameter will be the same on each computer.
	The fourth address will fall within the Ndis.sys driver.
	
	CAUSE
	=====
	
	This STOP error may occur when you start a capture using Network Monitor Tools
	and agent in Windows NT Server 4.0 on Token Ring networks.
	
	
	RESOLUTION
	==========
	
	Do not run Network Monitor on the affected computer. Alternately, install
	Network Monitor 1.2 that ships with Systems Management Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	MORE INFORMATION
	================
	
	The Windows NT 4.0 Network Monitor is installed in the
	<SystemRoot>\System32\netmon directory. The Systems Management Server
	Network Monitor installation location by default is C:\NM.
	
	If the Windows NT 4.0 Network Monitor Tools and Agent is installed in the
	Winnt\System32\Netmon directory before installing Network Monitor off the
	Systems Management Server CD, during the Systems Management Server Network
	Monitor installation, specify the <SystemRoot>\System32\Netmon directory
	as the installation location. Note, however, that two menu options for Network
	Monitor are placed on the Start Menu, one under Administrative Tools and one
	under Network Analysis Tools. It is possible to remove one of these by changing
	the Taskbar properties.
	
	If the Windows NT 4.0 Network Monitor is installed, and the System Management
	Server Network Monitor is installed into a directory other than the
	<SystemRoot>\System32\Netmon location, then two menu options for Network
	Monitor are placed on the Start Menu. One menu option is placed in
	Administrative Tools and one in Network Analysis Tools and both run different
	versions of the program.
	
	To remove the Windows NT version, perform the following steps:
	
	1. From the Start Menu, point to Settings, click Control Panel, and then
	  double-click Services.
	
	2. Select the Network Monitor Tools and Agent, and then click Remove.
	
	3. Click Add, and then select Network Monitor Agent.
	
	4. Shutdown and Restart your computer.
	
	Additional query words: 0xA
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
