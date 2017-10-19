---
layout: page
title: "Q200848: Stop 0xC000021a on Windows NT Server 4.0 with Service Pack 4"
permalink: /kb/200/Q200848/
---

## Q200848: Stop 0xC000021a on Windows NT Server 4.0 with Service Pack 4

	Article: Q200848
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fixkbbuglist
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft BackOffice Small Business Server version 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT Server with Service Pack 4 experiences a STOP 0xC000021a error when
	you run the Windows NT Resource Kit utility, pviewer.exe, or any performance
	utility that attempts to gather "costly counters" against it. Costly counters
	are a set of four data items that can be retrieved; for example, thread details,
	process image names that take extra processing to get the data for.
	
	CAUSE
	=====
	
	The Winlogon process causes an access violation with a C0000005 error, which in
	turn causes the trap.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Service Pack 4.
	This problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: agressive
	
	======================================================================
	Keywords          : kbWinNT400sp5fix kbbuglist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400a
	Version           : winnt:4.0,4.0a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
