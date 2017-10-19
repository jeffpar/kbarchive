---
layout: page
title: "Q242762: XFOR: Error Creating Connectivity Controller Service"
permalink: /kb/242/Q242762/
---

## Q242762: XFOR: Error Creating Connectivity Controller Service

	Article: Q242762
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
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
	
	You may be in a situation where you need to remove Exchange Server and reinstall
	it. After you reinstall Exchange Server, you try to reinstall the Exchange Notes
	Connector. After the Setup program copies all the files and tries to create the
	Connectivity Controller service, the installation does not work, and a message
	appears indicating that the service is already installed.
	
	CAUSE
	=====
	
	The Exchange Server 5.5 Setup program is not aware of the Connectivity
	Controller and its connector services. When you click the Remove All option in
	the Exchange Server 5.5 Setup program, the Connectivity Controller and connector
	services are not removed.
	
	RESOLUTION
	==========
	
	To resolve this problem, you must manually remove the Connectivity Controller
	and Connector services. This involves deleting the corresponding registry
	entries and support files.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start the Windows NT Registry Editor.
	
	2. At the following subkey, delete the entire MSExchangeCoCo key:
	
	  \HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeCoCo
	
	At the following subkey, delete the entire LME-NOTES key:
	
	  \HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LME-NOTES
	
	3. Move or delete the Exchsrvr\Connect\Exchconn folder.
	
	4. Shut down all Exchange Server services and reboot the server.
	
	5. Install the Connector for Lotus Notes.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
