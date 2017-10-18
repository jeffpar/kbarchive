---
layout: page
title: "Q233500: Service Pack 5 No Longer Keeps a Separate PS1 Folder for IBM"
permalink: kb/233/Q233500/
---

## Q233500: Service Pack 5 No Longer Keeps a Separate PS1 Folder for IBM

	Article: Q233500
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbYear2000 kbWinNT400sp5fix
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are known year 2000 issues for IBM PS/1 ValuePoint computers that have
	Windows NT 4.0 installed. To fix these known issues, you must upgrade the
	Ntdetect.com file in order to resolve known year 2000 issues in older versions
	of the file.
	
	MORE INFORMATION
	================
	
	In previous service packs, the Ntdetect.com file is located in a separate Ps1
	folder. In Windows NT 4.0 Service Pack 5 (SP5), the Ntdetect.com file is now
	located in the i386 and Alpha folders that contains this fix. The Ps1 folder no
	longer exists in the SP5 folder structure.
	
	Installing SP5 updates the Ntdetect.com file on your computer. Alternatively, you
	can copy the Ntdetect.com file from the CD to your computer's primary boot
	partition. You do not need to restart your computer for the change to take
	effect.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
