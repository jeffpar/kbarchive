---
layout: page
title: "Q220605: Stop 0x0000000A Caused by Malformed File Write Request"
permalink: kb/220/Q220605/
---

## Q220605: Stop 0x0000000A Caused by Malformed File Write Request

	Article: Q220605
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a file write request is processed by the Windows NT local file system and
	bypasses the NTFS redirector, your computer may stop responding (hang) and
	display the following error message:
	
	  STOP 0x0000000A: IRQL_NOT_LESS_OR_EQUAL
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Microsoft Windows NT
	4.0 or the individual software update. For information on obtaining the latest
	service pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
