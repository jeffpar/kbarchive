---
layout: page
title: "Q170376: XFOR: Surgically Removing LinkAge Connectors and Dirsync Compone"
permalink: /kb/170/Q170376/
---

## Q170376: XFOR: Surgically Removing LinkAge Connectors and Dirsync Compone

{% raw %}

	Article: Q170376
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): exc5
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to surgically remove the Linkage Message Exchange
	(LME) connectors, Linkage Directory Exchange (LDE) manager, and Linkage
	Directory Exchange agents. To do this, perform the following steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Run Uninstall from LinkAge Setup.
	
	2. Manually delete the LinkAge directory (using Explorer, or from a Command
	  Prompt).
	
	3. In the Registry Editor, remove the LinkAge entries from the following:
	
	     HKEY_LOCAL_MACHINE\Software\Linkage
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\*-LME-*
	
	4. Reboot the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
