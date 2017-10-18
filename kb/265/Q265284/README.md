---
layout: page
title: "Q265284: Hiding the Server's Computer Name from Other Computers in Domain"
permalink: kb/265/Q265284/
---

## Q265284: Hiding the Server's Computer Name from Other Computers in Domain

	Article: Q265284
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhowto kbdomain
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to hide your server's computer name and comment from
	other computers in the domain.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To hide the server's computer name and comment from other computers in the
	domain, ensure that the Hidden value name in the
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanmanServer\Parameters
	registry key has a value of "1".
	
	The following steps describe how to add the preceding value to the registry:
	
	1. Start Registry Editor (the Regedt32.exe tool).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanmanServer
	  \Parameters
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: hidden
	  Data Type: REG_BINARY
	  Value: 1
	
	4. Quit Registry Editor.
	
	NOTE: This setting can also be changed using the "net config server
	/hidden:yes|no" command.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhowto kbdomain 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
