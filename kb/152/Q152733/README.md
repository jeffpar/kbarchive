---
layout: page
title: "Q152733: Command Prompt Copy Command Strips Read Only Attribute"
permalink: kb/152/Q152733/
---

## Q152733: Command Prompt Copy Command Strips Read Only Attribute

	Article: Q152733
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows for Workgroups 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you copy files using File Manager, the read only attribute is maintained
	when the file is copied. When you copy the same file at the command prompt using
	the copy or xcopy command, the read only attribute is stripped and the
	destination file is no longer read only.
	
	STATUS
	======
	
	This behavior is expected in order to allow the copy and xcopy commands to
	remain consistent across operating system platforms.
	
	Additional query words: networking
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWin95search kbWinNT310Search kbWinNTW310Search kbWFWSearch kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
