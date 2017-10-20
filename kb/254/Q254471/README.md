---
layout: page
title: "Q254471: How to Increase the Number of Child Processes in Interix"
permalink: /kb/254/Q254471/
---

## Q254471: How to Increase the Number of Child Processes in Interix

{% raw %}

	Article: Q254471
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to increase the number of child processes that are
	forked to support additional resources. You can use this procedure if you are
	adding a high number of print servers.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	If you increase the number of child processes that are forked, you can
	significantly increase memory usage and system requirements. To increase the
	number of child processes:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Softway Systems\Interix\MaxProc
	
	3. On the Edit menu, click DWORD, type a value up to 1000, and then click OK.
	
	4. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
