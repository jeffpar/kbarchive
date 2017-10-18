---
layout: page
title: "Q184350: WordPerfect Suite 6.0 Setup Fails with Multiple CD-ROMs"
permalink: kb/184/Q184350/
---

## Q184350: WordPerfect Suite 6.0 Setup Fails with Multiple CD-ROMs

	Article: Q184350
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the installation of Corel WordPerfect Suite 6.0 on a system with multiple
	CD-ROM drive letters, Setup will return the following error message:
	
	  General Protection Fault in krnl386.exe
	
	This problem only happens if there is more than one CD-ROM drive letter present.
	
	CAUSE
	=====
	
	Like many applications, Corel's Setup program calls Int2f 1500 first, which
	returns the count of CD-ROM drive letters and the first drive letter. Corel goes
	a step further and calls Int2f 150d, passing a pointer to a buffer in ES:bx to
	receive a byte array of the CD-ROM drive "letters" (A=0,and so on). This is
	where the problem occurs; the Windows NT DPMI server does not translate buffers
	for MSCDEX calls in protective mode. Instead, the interrupt is reflected to v86
	mode with whatever ES register happened to be in the v86-mode state from the
	last time it transitioned to PM. So, some random bit of the low 1 MB of memory
	(often krnl386 or ntdos code or data) is replaced with the sequence of drive
	letters.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	WordPerfect is manufactured by Corel Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: Two many gpf 3rdparty 3rd party thirdparty wp wp6
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
