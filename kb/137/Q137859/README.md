---
layout: page
title: "Q137859: Security Options Not Functional in Server Tools for Windows 95"
permalink: kb/137/Q137859/
---

## Q137859: Security Options Not Functional in Server Tools for Windows 95

	Article: Q137859
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.51; WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT Server Tools for Windows 95, included in the
	Windows NT Resource Kit version 3.51, and view the Properties of a Windows NT
	NTFS share, Security options, such as Permissions, Auditing, and Ownership, are
	not functional.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Run Notepad and open the AUTOEXEC.BAT file.
	
	2. Add the Server Tools directory (SRVTOOLS) to the PATH.
	
	3. Save the file and quit Notepad.
	
	4. Restart Windows 95.
	
	Additional query words: 3.51 usrmgr srvmgr eventvwr prtman
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbWin95search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3 kbZNotKeyword5
	Version           : :3.51; WINDOWS:95
	
	=============================================================================
	
