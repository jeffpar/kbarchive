---
layout: page
title: "Q247900: Cannot Log On After Removing Everyone Group from Permissions"
permalink: kb/247/Q247900/
---

## Q247900: Cannot Log On After Removing Everyone Group from Permissions

	Article: Q247900
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you remove the Everyone group from the permissions of the Microsoft Windows
	NT 4.0 root folder on the local computer, you may not be able to log on after
	you restart the computer.
	
	CAUSE
	=====
	
	This behavior can occur because the Everyone group is a Windows NT 4.0 special
	group that is used to grant access to resources on the computer for both local
	and remote users. When you remove the Everyone group from the permissions of the
	%SystemRoot% folder, you cannot log on to the computer because you no longer
	have permissions to the %SystemRoot%\System32 folder.
	
	RESOLUTION
	==========
	
	To resolve this behavior, install a parallel copy of Windows NT 4.0 and then log
	on to the parallel installation. In Windows Explorer, add the Everyone group to
	the share permissions of the \Winnt folder of the original installation, and
	grant the Everyone group either Full Control or Change permissions.
	
	MORE INFORMATION
	================
	
	For more information, refer to the following article in the Microsoft Knowledge
	Base:
	
	  Q137155 Users Without System32 Permissions Cannot Log On
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
