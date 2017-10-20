---
layout: page
title: "Q127772: Cannot Run Files Marked as Execute-Only on NetWare Server"
permalink: /kb/127/Q127772/
---

## Q127772: Cannot Run Files Marked as Execute-Only on NetWare Server

{% raw %}

	Article: Q127772
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a NetWare administrator changes the file attributes of executable files to
	Execute-only, the following error message appears on any Windows NT computer
	accessing the files through Client Service for NetWare or Gateway Service for
	NetWare:
	
	  The system cannot find the file
	  <drive>:\<directory>\<executable file>
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Rename or remove the executable file.
	
	2. Reinstall the file or restore the file from a previous backup.
	
	MORE INFORMATION
	================
	
	Description of the X - Execute only file attribute:
	
	The execute only attribute is extremely sensitive and provides the highest level
	of NetWare security. The execute only attribute can only be assigned by the
	Supervisor to .EXE and .COM files. Execute only files cannot be copied or backed
	up--just executed or deleted.
	
	Page 135 of the Novell NetWare version 3.11 Utilities Reference states the
	following:
	
	  "once assigned, this attribute cannot be removed."
	
	Additional query words: prodnt nwcs gsnw csnw X
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 4.0
	
	=============================================================================
	

{% endraw %}
