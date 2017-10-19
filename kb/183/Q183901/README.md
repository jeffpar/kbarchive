---
layout: page
title: "Q183901: Microsoft DNS Server Depends on the WINS Client Binding"
permalink: /kb/183/Q183901/
---

## Q183901: Microsoft DNS Server Depends on the WINS Client Binding

	Article: Q183901
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When your Domain Name Service (DNS) starts on your computer running Windows NT
	Server, you may receive the following error:
	
	  Could not start the Microsoft DNS Server service <server name>.
	  Error 1068: The dependency service or group failed to start.
	
	Event Viewer on your DNS server may also log one or more of the following event
	messages in the System log:
	
	  Event ID   : 7001
	  Source     : ServiceControlManager
	  Description: The Microsoft DNS Server service depends on the WINS Client
	               (TCP/IP) service which failed to start because of the
	               following error: A device attached to the system is not
	               functioning.
	
	-or-
	
	  Event ID   : 7000
	  Source     : ServiceControlManager
	  Description: The WINS Client(TCP/IP) service failed to start due to the
	               following error: A device attached to the system is not
	               functioning.
	
	-or-
	
	  Event ID   : 4315
	  Source     : NetBT
	  Description: Unable to read the driver's exported linkage configuration
	               information.
	
	CAUSE
	=====
	
	The DNS service will not start because the Windows Internet Name Service (WINS)
	client is not bound to a network interface card in that computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	- Verify that the WINS client is bound to at least one network interface card
	  (NIC) on your server:
	
	  1. Click Start, point to Settings, click Control Panel, and double- click
	     Network.
	
	  2. Click the Bindings tab and double-click NetBIOS Interface to expand it.
	
	  3. Double-click WINS Client (TCP/IP) to expand it.
	
	  4. Verify that at least one of the adapters listed is enabled.
	
	  NOTE: If you need to ensure that all NetBIOS traffic is removed from the
	  network while still using Microsoft DNS, you can install the MS Loopback
	  Adapter and have the WINS Client bound to it.
	
	  -or-
	
	- Disable the NetBT dependency from DNS in the registry:
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the "Changing Keys And
	  Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	  Information in the Registry" and "Edit Registry Data" Help topics in
	  Regedt32.exe. Note that you should back up the registry before you edit it.
	  If you are running Windows NT, you should also update your Emergency Repair
	  Disk (ERD).
	
	  1. Start Registry Editor (Regedt32.exe).
	
	  2. Go to the following subkey:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS
	
	  3. Click the DependOnService value.
	
	  4. On the Edit menu, click Multi String and then delete NetBT from the data.
	
	  5. Click OK.
	
	  6. Close Registry Editor and restart your computer.
	
	  NOTE: If you are using WINS reverse look up on any zones the DNS server will
	  fail to start.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
