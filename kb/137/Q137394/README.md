---
layout: page
title: "Q137394: Long Path Length in cc:Mail Causes GP Fault"
permalink: kb/137/Q137394/
---

## Q137394: Long Path Length in cc:Mail Causes GP Fault

	Article: Q137394
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a path length in Windows NT or Windows 95 is greater than 126 characters,
	Lotus cc:Mail version 2.2 causes a General Protection (GP) fault.
	
	CAUSE
	=====
	
	Lotus cc:Mail cannot run if the path contains more than 126 characters. Use the
	Path command from a CMD window in Windows NT to view the path. The path cc:Mail
	inherits in Windows NT and Windows 95 may be longer than the path created in
	AUTOEXEC.BAT.
	
	RESOLUTION
	==========
	
	To correct this problem, reduce the path length to less than 126 characters.
	
	MORE INFORMATION
	================
	
	The cc:Mail Address Limit section of the Lotus cc:Mail 2.2 README.TXT file
	(included with cc:Mail 2.2 Installation disks) mentions that the address line
	length (path length) limit is 126 characters.
	
	Additional query words: win95x winnt gpf error message appears
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : :3.5,3.51,4.0,95
	
	=============================================================================
	
