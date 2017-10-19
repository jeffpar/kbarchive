---
layout: page
title: "Q248445: XADM: SP Upgrade Won't Work w. &quot;Access Is Denied&quot; Event ID 7028"
permalink: /kb/248/Q248445/
---

## Q248445: XADM: SP Upgrade Won't Work w. &quot;Access Is Denied&quot; Event ID 7028

	Article: Q248445
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you perform an upgrade to an Exchange Server 5.5 service pack, the
	following error message may be displayed:
	
	  Processing file [SP install path]\sp2\eng\server\setup\i386\shared.ins at or
	  near line 48
	  Access is denied
	  NT ID: 0xC0020005
	
	The following event ID may be logged in the System log:
	
	  Event ID: 7028
	  Source: Service control manager
	  Description:
	  The winreg registry key denied access to system account programs. The Service
	  Control Manager took ownership of the registry key.
	
	CAUSE
	=====
	
	This issue can occur if the account that you use to log on to Microsoft Windows
	NT Server does not have sufficient permissions to modify the Winreg registry
	key.
	
	RESOLUTION
	==========
	
	To resolve this issue, you need to edit the registry:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and select the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\SecurePipeServers\Winreg
	
	3. On the Security menu, click Permissions.
	
	4. Add the Local Administrators group with Full Control permissions to the
	  registry key Permissions page.
	
	5. Quit Registry Editor.
	
	
	MORE INFORMATION
	================
	
	For additional information about event ID 7028, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q234918 XADM: No Access to Diagnostics Logging Tab on Server Properties
	
	Additional query words: sp4 sp 4 sp-4
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
