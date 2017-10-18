---
layout: page
title: "Q158520: NwSapAgent Service Will Not Start with DiscPort CD-ROM Tower"
permalink: kb/158/Q158520/
---

## Q158520: NwSapAgent Service Will Not Start with DiscPort CD-ROM Tower

	Article: Q158520
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install NwSapAgent on a Windows NT Server computer that has a DiscPort
	CD-ROM tower attached, the NwSapAgent service will not start and the following
	errors will appear in Event Viewer:
	
	  Event ID: 7023
	  Source: Service Control Manager
	  Description: The Sap Agent terminated with the following error: The service
	  has not been started.
	
	  Event ID: 8504
	  Source: NwSapAgent
	  Description: The description for Event ID "8504" in source "NwSapAgent" could
	  not be found.
	
	CAUSE
	=====
	
	The DiscPort CD-ROM tower software loads as a service in Windows NT. When the
	DiscPort service starts prior to NwSapAgent, NwSapAgent fails to start. When
	attempting to start NwSapAgent after the Windows NT Server computer is running,
	the service will still fail to start.
	
	RESOLUTION
	==========
	
	To correct this problem, the NwSapAgent must be started prior to the DiscPort
	CD-ROM tower service. Use Registry Editor (Regedt32.exe) to change the DiscPort
	service to start after the NwSapAgent, as follows:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe), and locate the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MTDPServices
	
	2. From the Edit menu, click Add Value. Type "DependOnService" (without the
	  quotation marks) in the Value Name field. Select REG_MULTI_SZ for the Data
	  Type. Type "NwSapAgent" (without the quotation marks) in the String field,
	  and then click OK.
	
	3. Quit Registry Editor.
	
	4. Shutdown and restart your computer.
	
	
	MORE INFORMATION
	================
	
	DiscPort CD-ROM towers are manufactured by Microtest, Inc., a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 7001
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
