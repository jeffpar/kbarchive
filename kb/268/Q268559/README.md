---
layout: page
title: "Q268559: Domain Users Can Remotely Access Event Logs"
permalink: kb/268/Q268559/
---

## Q268559: Domain Users Can Remotely Access Event Logs

	Article: Q268559
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Domain users and other non-administrator users can remotely access event logs.
	
	RESOLUTION
	==========
	
	To resolve this issue, edit the registry to allow only administrators to access
	event logs remotely.
	
	MORE INFORMATION
	================
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Follow these steps to make the necessary changes to the registry:
	
	1. Run Registry Editor (Regedt32).
	
	2. Navigate to the following registry location:
	
	  HKEY_LOCAL_MACHINE/System/CurrentControlSet/Control/SecurePipeServers/Winreg/Allowed Paths
	
	3. In the right pane of the Registry Editor window, double-click the value
	  Machine.
	
	4. In the Multi-String Editor window, delete the string
	  System\CurrentControlSet\Services\Eventlog, and then click OK.
	
	5. Quit Registry Editor, and then restart the computer.
	
	Additional query words: restrict prevent
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
