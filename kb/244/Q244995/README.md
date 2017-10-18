---
layout: page
title: "Q244995: Base System Object Restrictions Are Not Enabled by Default"
permalink: kb/244/Q244995/
---

## Q244995: Base System Object Restrictions Are Not Enabled by Default

	Article: Q244995
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	After you apply the latest Windows NT 4.0 service pack to your Windows NT-based
	computer, it is necessary to manually enable base system object restrictions to
	prevent unauthorized access to various system-level files. Access to these files
	may be used to circumvent some of the security functions of the operating
	system.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To restrict changes to base system objects, use Registry Editor (Regedt32.exe) to
	locate the ProtectionMode value under the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager
	
	Verify that a DWORD value with a value of 1 exists, and if it does not exist or
	has a value of 0, add it to this key, or edit the value to be 1.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
