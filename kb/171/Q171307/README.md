---
layout: page
title: "Q171307: How to Disable SAP Broadcast for RPC Service"
permalink: /kb/171/Q171307/
---

## Q171307: How to Disable SAP Broadcast for RPC Service

{% raw %}

	Article: Q171307
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbother kbWinNT400sp5fix kbWinNT4sp6fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	On a computer running Windows NT Server, if Gateway Services for NetWare (GSNW)
	is installed, a SAP Type 640 broadcasts every 60 seconds by the remote procedure
	call (RPC) service. This SAP broadcast continues even if the user disables the
	GSNW and the SAP Agent Service.
	
	On a computer running Windows NT Workstation, the RPC service does the SAP
	broadcast if the Client Services for NetWare (CSNW) and the SAP Agent service
	are installed. This SAP broadcast continues even if the user disables the SAP
	agent.
	
	CAUSE
	=====
	
	By default, the RPC service checks for the presence of Gateway Services for
	NetWare and the SAP Agent service on the computer running Windows NT Server.
	
	On the computer running Windows NT Workstation with CSNW, the RPC service checks
	for the SAP Agent service. If the services are present, RPC starts its own
	thread that does the SAP broadcast Type 640 every minute.
	
	RESOLUTION
	==========
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 6.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	
	MORE INFORMATION
	================
	
	After applying this fix, perform the steps below to create a new registry
	value.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\RPC
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	     Value Name: AdvertiseRpcService
	     Data Type:  REG_SZ
	     String:     No
	
	  Using No for the string turns RPC sapping off.
	  Using Yes for the string turns RPC sapping on.
	
	4. Restart the computer for the registry change to take effect.
	
	If the SAP broadcasts continue after following these steps, you may want to
	disable SAP broadcasts as a troubleshooting step. To disable SAP broadcasts,
	delete the Ncacn_spx string value in following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Rpc\ServerProtocols\ 
	
	NOTE: This should be used only as a troubleshooting step. Deleting this string
	value completely disables SAP broadcasts which some programs may need in order
	to function properly.
	
	For additional information about, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q142533 0x640 SAP Packets Increase Using Remote Registry Service
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother kbWinNT400sp5fix kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
