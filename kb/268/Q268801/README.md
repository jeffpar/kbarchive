---
layout: page
title: "Q268801: XADM: How to Remove the InterOrg Synchronization Tool"
permalink: /kb/268/Q268801/
---

## Q268801: XADM: How to Remove the InterOrg Synchronization Tool

	Article: Q268801
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
	
	SUMMARY
	=======
	
	This article describes how to remove the InterOrg Synchronization tool.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To remove the InterOrg Synchronization tool:
	
	1. In Control Panel, double-click Add/Remove Programs, and then click Interorg
	  Synchronization Tool.
	
	2. Click Add/Remove to begin the uninstallation procedure.
	
	3. Click Automatic, click Next, and then click Finish.
	
	4. In Registry Editor, locate and delete the following registry key if it is
	  present:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\_Exchange Inter Org
	  Synch
	
	5. Delete the C:\Exchsrvr\Interorg folder.
	
	  NOTE: The C:\Exchsrvr\Interorg folder is the default location. This location
	  may be different if you changed it during the Setup procedure.
	
	To remove the Master and Requestor mailboxes, follow these steps by using the
	Exchange Administrator program:
	
	1. Expand the Site level, and then click the Configuration container in the left
	  pane.
	
	2. Double-click the Add-Ins container in the right pane.
	
	3. Remove any of the following if they are are present:
	
	   - Interorg Synchronization Manager
	   - Interorg Master Config
	   - Interorg Requestor Config
	
	4. Remove the Master and Requestor mailboxes.
	
	5. Reboot the server to complete the uninstallation procedure.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
