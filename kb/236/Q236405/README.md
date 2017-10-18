---
layout: page
title: "Q236405: Terminal Server License Service May Not Start on 2/29/2000"
permalink: kb/236/Q236405/
---

## Q236405: Terminal Server License Service May Not Start on 2/29/2000

	Article: Q236405
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Licensing service on your computer running Windows
	NT 4.0, Terminal Server Edition, on February 29, 2000, the service may not
	start. An error message is written to the Event Viewer System log. Note that
	this problem does not prevent your computer from connecting to the terminal
	server. However, the license service is not able to track new clients that have
	not already obtained a license until the Licensing service is started.
	
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
	
	Additional query words: tse wts
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
