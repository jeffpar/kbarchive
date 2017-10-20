---
layout: page
title: "Q123298: RAS Errors 611 and 720 With PPP or SLIP"
permalink: /kb/123/Q123298/
---

## Q123298: RAS Errors 611 and 720 With PPP or SLIP

{% raw %}

	Article: Q123298
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to dial out from a Windows NT Remote Access Service (RAS)
	client using the Remote Access protocol Serial Line Internet Protocol (SLIP) or
	Point to Point Protocol (PPP) to a TCP/IP server, you receive one of the
	following error messages:
	
	Using SLIP
	----------
	
	  Error 611: Route is not available
	
	Using PPP
	---------
	
	  Error 720: No PPP control protocols configured.
	
	CAUSE
	=====
	
	This problem may have several different causes. Two known causes are the NetBIOS
	interface not being installed and the NetBIOS binding being disabled. The
	NetBIOS interface is required for establishing logical names and sessions on the
	network for Windows NT.
	
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To correct this problem, select the Network option from Control Panel and do the
	following:
	
	1. Verify that the NetBIOS interface is installed.
	
	2. Verify that the bindings of the NetBIOS interface are enabled and properly
	  established with the NDISWAN drivers. To do so:
	
	  a. Start Registry Editor, and locate the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Class\{4D36E972-E325-11CE-BFC1-08002BE10318}\00xx
	
	     <00xx> is the subkey that is defined in "DriverDesc" as "WAN
	     Miniport(IP)".
	
	  b. Click the LinKage subkey.
	
	  c. In the detail pane, you should have a "RootDevice" of "NdisWanIp". In
	     addition, there will be an "UpperBind" key, which needs to have a value of
	     Tcpip.
	
	MORE INFORMATION
	================
	
	For additional information about RAS Error 720, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q152605 RAS Error 720 When Dialing Out
	
	  Q122748 Err Msg: Error 720: No PPP Control Protocols Configured
	
	Additional query words: directhosting prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search
	Version           : :2000,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
