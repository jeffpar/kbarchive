---
layout: page
title: "Q264816: XADM: Files Not Moved with Performance Optimizer"
permalink: kb/264/Q264816/
---

## Q264816: XADM: Files Not Moved with Performance Optimizer

	Article: Q264816
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If an Exchange Server computer only has a private information store and does not
	have a Pub.edb file, Performance Optimizer may not move any files. Performance
	Optimizer checks the registry for the ParametersPrivate and ParametersPublic
	keys and determines whether there are consistent databases before Performance
	Optimizer moves any files. If an administrator has removed the Pub.edb file, a
	new file must be put in place for Performance Optimizer to work. If you create a
	file called Pub.edb, the Performance Optimizer does not finish.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the DB Path value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	3. Modify the DB Path value from C:\Exchsrvr\Mdbdata\Pub.edb to
	  C:\Exchsrvr\Mdbdata\Priv.edb; on the Edit menu, click REG_SZ, type
	  "C:\Exchsrvr\Mdbdata\Priv.edb" (without the quotation marks), and then click
	  OK.
	
	  This enables Performance Optimizer to finish.
	
	  NOTE: Change this DB Path value back to C:\Exchsrvr\Mdbdata\Pub.edb after
	  Performance Optimizer finishes.
	
	4. Quit Registry Editor.
	
	5. Create a Pub.edb file on a computer that has the same organization and site
	  name, and then copy the new 2 megabyte (MB) file to the specified folder from
	  the registry.
	
	6. Stop the information store, and then run an isinteg -patch command. This
	  enables Performance Optimizer to finish.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
