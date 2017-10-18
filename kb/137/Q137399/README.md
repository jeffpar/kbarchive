---
layout: page
title: "Q137399: Hung Server Service, Event 7022 w/ Many DLC Printers Connected"
permalink: kb/137/Q137399/
---

## Q137399: Hung Server Service, Event 7022 w/ Many DLC Printers Connected

	Article: Q137399
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you configure your Windows NT computer to connect to many network print
	devices using the DLC protocol, one or both of the following symptoms occur:
	
	- The following event appears in the System Log (as seen in the Event Viewer):
	
	  Event ID: 7022
	  Source: Service Control Manager
	  Type: Error
	  Description: Server service hung on startup.
	
	  -or-
	
	- The Server service stops responding (hangs) in a "start pending" state and
	  the Netlogon and Browser services do not start. This error message appears
	  when you log in:
	
	  Can not contact the domain controller for this domain
	
	CAUSE
	=====
	
	The server service does not initially start due to delays caused by the spooler
	service.
	
	The spooler service attempts to connect to all the network printers. Usually, you
	encounter this problem only on servers attempting to connect to over 25 network
	printers using the DLC protocol. The number of connections required to trigger
	this event varies according to hardware and network performance.
	
	This problem can also occur if network connectivity is lost between the print
	server and printers even with less than 25 networked printers.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	Start the Server service manually and then verify connectivity with your network
	printers. If connectivity is not an issue, proceed with the following registry
	modifications.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\Spooler
	
	3. From the Edit menu, select Add Value.
	
	4. Add the following:
	
	  Value Name: DependOnService
	  Data Type: REG_MULTI_SZ
	  Data: LanmanWorkstation<CR>LanmanServer<CR>LmHosts
	
	  NOTE: <CR> Indicates you should press ENTER on the keyboard
	
	
	5. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\NetLogon
	
	6. Select the DependOnService entry
	
	7. From the Edit menu, select Multi String.
	
	8. Add the necessary services to make your data look like this:
	
	  Value Name: DependOnService
	  Data Type: REG_MULTI_SZ
	  Data: LanmanServer
	
	
	9. Click OK and quit Registry Editor.
	
	10. Shut down and restart Windows NT.
	
	Adding these lines holds the spooler service from loading until the
	LanmanWorkstation, LanmanServer, and LmHosts services have loaded and holds the
	netlogon service from loading until spooler, LanmanWorkstation, LanmanServer,
	and LmHosts has loaded.
	
	
	Additional query words: JetDirect hang crash
	
	======================================================================
	Keywords          : kberrmsg kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
