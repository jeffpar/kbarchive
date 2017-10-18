---
layout: page
title: "Q140386: Using TEMP Directory on Server Causes Sharing Violation"
permalink: kb/140/Q140386/
---

## Q140386: Using TEMP Directory on Server Causes Sharing Violation

	Article: Q140386
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Workstations that set the TEMP or TMP variable to a network drive may experience
	sharing violation error messages while running some applications.
	
	MORE INFORMATION
	================
	
	Most applications that allow editing existing data files, create a temporary
	copy of the file in a location described by the TEMP or TMP environmental
	variable that is set on the workstation. If this variable points to a common
	directory on the server that is used by multiple users concurrently, a sharing
	violation message occurs whenever a an application attempts to create a
	temporary file with the same name as an existing temporary file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbLanManSearch kbWFWSearch kbLanMan220c
	Version           : WINDOWS:; winnt:3.5,3.51
	
	=============================================================================
	
