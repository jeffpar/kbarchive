---
layout: page
title: "Q241961: Terminal Server RDP Client Window Hangs While You Are Logging On"
permalink: /kb/241/Q241961/
---

## Q241961: Terminal Server RDP Client Window Hangs While You Are Logging On

	Article: Q241961
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	NOTE: The information in this article applies to the 
	Japanese version(s) of Windows NT 4.0, Terminal Server Edition, Service Pack 4.
	
	SYMPTOMS
	========
	
	The Remote Desktop Protocol (RDP) client window may stop responding (hang) while
	you are logging on to the Terminal Server. When this problem occurs, the window
	displaying the Terminal Server logo is displayed on the client desktop and logon
	does not proceed. After this problem occurs, no other clients can log on to the
	Terminal Server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this problem, you can use the Terminal Server Tsadmin.exe
	administration tool to reset the client session to recover from this situation.
	You may have to reset several sessions until Terminal Server recovers
	completely. Resetting the client forces a termination of the client session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Server, Terminal Server Edition, Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
