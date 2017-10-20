---
layout: page
title: "Q234918: XADM: No Access to Diagnostics Logging Tab on Server Properties"
permalink: /kb/234/Q234918/
---

## Q234918: XADM: No Access to Diagnostics Logging Tab on Server Properties

{% raw %}

	Article: Q234918
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use the Exchange Server Administrator program, you may not be able to
	access the Diagnostics Logging tab on the properties of the server object. The
	following Event ID may be logged in the System log:
	
	  Event ID: 7028
	  Source: Service control manager
	  Description:
	  The winreg registry key denied access to system account programs. The Service
	  Control Manager took ownership of the registry key.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	To resolve this issue:
	
	1. Start Registry Editor (Regedt32.exe) and locate the following subkey:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\SecurePipeServers\Winreg
	
	2. Select the Winreg registry key, and on the Security menu, click Permissions.
	
	3. Add the Local Administrators Group with Full Control to the registry key
	  Permissions page.
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q170472 XADM: Access Denied Error When Starting Exchange Administrator
	
	Additional query words: SMTP Extension
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
