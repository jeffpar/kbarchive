---
layout: page
title: "Q239873: Application Security May Not Work After Improper Shutdown"
permalink: /kb/239/Q239873/
---

## Q239873: Application Security May Not Work After Improper Shutdown

	Article: Q239873
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can use Application Security (Appsec.exe) to limit which programs can be run
	by users on a Terminal Server. A default list of programs is included to allow
	users to successfully log on to the server. You can add other programs to the
	list to restrict user activity. After an improper system shutdown, this list may
	not be read correctly from the registry and memory may contain an incomplete
	list of programs. Therefore, users who could log on or run certain programs
	earlier may not be able to because the list is incomplete.
	
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
	
	Additional query words: application dirty
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
