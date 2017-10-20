---
layout: page
title: "Q245084: Data Is Invalid When Setting Replication Properties"
permalink: /kb/245/Q245084/
---

## Q245084: Data Is Invalid When Setting Replication Properties

{% raw %}

	Article: Q245084
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open the 'Replication' dialog box in Server Manager to set
	replication properties on a computer and that computer is a domain controller
	running Microsoft Windows NT Server 4.0, the dialog box may not open, and you
	may receive the following error message:
	
	  The data is invalid
	
	Also, Event Viewer may record the following event:
	
	  Event ID: 3216
	  Source: Replicator:
	  System error 13 - The data is invalid
	
	CAUSE
	=====
	
	This behavior can occur if the registry entries for the replicator service are
	damaged.
	
	RESOLUTION
	==========
	
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
	
	To resolve this issue, save the Replicator registry key on another domain
	controller that is on the same domain to a file, and then replace the damaged
	registry key on your computer with the working registry key:
	
	1. Save the Replicator registry key on another domain controller to a file:
	
	  a. At the appropriate domain controller, use Registry Editor (Regedt32.exe)
	     to locate the following registry key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Replicator
	
	  b. Save the registry key to a file.
	
	  c. Quit Registry Editor.
	
	2. At your computer, replace the damaged Replicator key:
	
	  a. Use Registry Editor to locate the following registry key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Replicator
	
	  b. Use the Restore command to replace the damaged registry key using the key
	     that you saved to a file.
	
	  c. When the Warning dialog box appears, informing you that a registry key is
	     going to be restored over the currently selected registry key, make sure
	     you select the damaged key before you proceed.
	
	  d. Quit Registry Editor, and then restart your computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
