---
layout: page
title: "Q192177: XADM: Missing Entry Points in Gapi32.dll"
permalink: /kb/192/Q192177/
---

## Q192177: XADM: Missing Entry Points in Gapi32.dll

{% raw %}

	Article: Q192177
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When attempting to install Exchange Server 5.5, or running Update.exe for
	Exchange 5.5 Service Pack 1, you may receive the error message:
	
	  Missing entry points in Gapi32.dll
	
	CAUSE
	=====
	
	This occurs when there is a mismatch between an existing version of Gapi32.dll
	and the version that Update.exe or Setup.exe is expecting.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session
	     Manager\KnownDLLs
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	     Value Name: Gapi32
	     Data Type:  REG_SZ
	     Value:      Gapi32.dll
	
	4. Quit Registry Editor.
	
	You must restart your computer for this change to take effect.
	
	MORE INFORMATION
	================
	
	The error mentioned in the "Symptoms" portion of this article can be noted
	during an upgrade to Exchange Server version 5.5 or a new installation to
	Exchange Server version 5.5, as well as during the service pack update.
	
	Placing the missing entry in the registry allows the software program to proceed
	normally.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5,5.5 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
