---
layout: page
title: "Q241392: &quot;STOP 0x50&quot; Error Message in Mup.sys"
permalink: kb/241/Q241392/
---

## Q241392: &quot;STOP 0x50&quot; Error Message in Mup.sys

	Article: Q241392
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Terminal Server client logs on, the Terminal Server may receive a "STOP
	0x50" error message with the following bugcheck data:
	
	  0: kd> dd kibugcheckdata l5
	  dd kibugcheckdata l5
	  80159ac0 00000050 aa575000 00000000 00000000
	  80159ad0 00000000
	
	
	CAUSE
	=====
	
	This behavior occurs because the Unicode string that is passed to Wcschr in
	TranslateClientName is not null-terminated.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Server, Terminal Server Edition, Service Pack 5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
