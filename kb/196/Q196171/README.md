---
layout: page
title: "Q196171: XADM: Incorrect Attempt to Update KMS during 5.5 SP1 Update"
permalink: /kb/196/Q196171/
---

## Q196171: XADM: Incorrect Attempt to Update KMS during 5.5 SP1 Update

	Article: Q196171
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp1
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If a previous install of Exchange Server versions 4.0 or 5.0 had the Key
	Management Server (KM Server) installed on it, and the Exchange Server
	installation was then uninstalled using Setup, while the KM Server was
	uninstalled by manually deleting the directory, a registry entry for the KM
	Server is left behind.
	
	If you were to now install Exchange Server version 5.5 without the KM Server, and
	then try to run the Exchange Server 5.5 Service Pack 1 update, the upgrade will
	incorrectly attempt to upgrade the KM Server.
	
	
	WORKAROUND
	==========
	
	To work around this problem, to delete the MSExchangeKMS service registry entry
	using Regedt32. The steps are listed below.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the the following key in the registry:
	
	     <B>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeKMS</B>
	
	3. Delete this key.
	
	4. Quit Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Setup component of Exchange
	Server version 5.5 Service Pack 1.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp1 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
