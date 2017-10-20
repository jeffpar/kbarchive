---
layout: page
title: "Q255181: Exchange Server 5.5 Service Pack 2 Installation Stops"
permalink: /kb/255/Q255181/
---

## Q255181: Exchange Server 5.5 Service Pack 2 Installation Stops

{% raw %}

	Article: Q255181
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp2 exc55sp3
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Exchange Server 5.5 Service Pack 2 or
	Service Pack 3, the upgrade may stop and you may receive the following error
	message:
	
	  Processing file d:\sp2\eng\server\setup\i386\shared.ins at or near line 48
	  Access is denied
	  NT ID: 0xC002005
	
	When you restart the Exchange Server computer, Event Viewer displays the
	following event in the Application log:
	
	  Event ID: 7028
	  Source: Service control manager
	  Description: The winreg registry key denied access to system account programs.
	  The Service Control Manager took ownership of the registry key.
	
	CAUSE
	=====
	
	This behavior can occur when the Exchange Service Account and the Microsoft
	Windows NT System Account do not have Full Control access rights to the
	CurrentControlSet key under the registry key HKEY_LOCAL_MACHINE.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this behavior, modify the registry to give Full Control permissions to
	the Exchange Service Account and the Windows NT System Account:
	
	1. Start Windows NT Registry Editor (Regedt32.exe), and locate the following
	  registry key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet
	
	2. On the Security menu, click Permissions.
	
	3. Click to select the Replace Permission On Existing Subkeys check box.
	
	4. In the Name box, click System, and then click Full Control in the Type Of
	  Access box.
	
	5. In the Name box, click the Exchange Service Account, and then click Full
	  Control in the Type Of Access box.
	
	6. Click OK, and then quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
