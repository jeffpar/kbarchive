---
layout: page
title: "Q225036: Folder Permissions May Not Migrate During Migration From NetWare"
permalink: /kb/225/Q225036/
---

## Q225036: Folder Permissions May Not Migrate During Migration From NetWare

{% raw %}

	Article: Q225036
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you migrate data from a NetWare server to a Windows NT Server-based
	computer, some folder permissions (including the file permissions in those
	folders) may not be migrated.
	
	CAUSE
	=====
	
	This behavior occurs when a folder name is longer than eight characters.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this behavior:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NWRDR\Parameters
	
	3. On the Edit menu, click Add Value.
	
	4. Add the following value:
	
	  Value Name: LongNameFlags
	  Data Type: REG_DWORD
	  Data: 0x1 (hex)
	
	NOTE: You can use the LongNameFlags value to enable or disable the long file name
	support on the NetWare client. The default setting is enabled (0x0).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Migration tool for NetWare.
	
	MORE INFORMATION
	================
	
	This behavior does not occur with short folder names.
	
	Additional query words: nwconv
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
