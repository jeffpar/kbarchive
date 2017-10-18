---
layout: page
title: "Q304617: Services for Macintosh Breaks SFU 2.0 Password Synchronization"
permalink: kb/304/Q304617/
---

## Q304617: Services for Macintosh Breaks SFU 2.0 Password Synchronization

	Article: Q304617
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If Password Synchronization and Services for Macintosh are installed on the same
	Microsoft Windows NT 4.0 Service Pack 6-based computer, Password Synchronization
	may not start.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue, use Registry Editor to locate the following registry
	key:
	
	  HKEY_LOCAL_MACHINE/System/CurrentControlSet/Control/SeviceGroupOrder
	
	Change the order of the groups so that the "PNP_TDI" group is after the
	"StreamsDrivers" and "NDIS" groups.
	
	Additional query words: sp6
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
