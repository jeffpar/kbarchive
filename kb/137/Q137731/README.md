---
layout: page
title: "Q137731: Some Mapped NetWare Drives Incorrect in Windows Explorer"
permalink: /kb/137/Q137731/
---

## Q137731: Some Mapped NetWare Drives Incorrect in Windows Explorer

	Article: Q137731
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the MAP command in a login script to map a network drive to a
	directory on a NetWare server, the drive you have mapped may appear in Windows
	Explorer and My Computer as the root of the volume instead of the current
	directory. For example, a drive mapped as
	
	  MAP SYS:<directory>\<subdirectory>
	
	may appear as:
	
	  \\<server>\SYS
	
	CAUSE
	=====
	
	Windows Explorer displays the root of the mapped drive rather than the current
	directory (as in earlier versions of Windows). This behavior is by design.
	
	
	RESOLUTION
	==========
	
	To see the current directory of mapped drives, use either of the following
	methods:
	
	- Use Novell NetWare's MAP command at a command prompt.
	
	- Use File Manager (Winfile.exe) from an earlier version of Windows.
	
	
	MORE INFORMATION
	================
	
	Note that the issues described in this article do not change the functionality
	of NetWare utilities, batch files based on the current directory, or the MAP
	command itself. These issues affect only the way that Windows Explorer, or other
	Windows 95 tools that use Windows Explorer, displays the drive mappings.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
