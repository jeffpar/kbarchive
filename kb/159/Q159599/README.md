---
layout: page
title: "Q159599: WINS Consistency Checking May Not Start at Scheduled Time"
permalink: kb/159/Q159599/
---

## Q159599: WINS Consistency Checking May Not Start at Scheduled Time

	Article: Q159599
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool kbWinNT400sp4fix
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Consistency Checking is not scheduled to run at the exact interval specified.
	
	For example, if Consistency Checking is set to start at 1:00AM with an interval
	of 24 hours, and if it takes 30 minutes to complete, it will start at 1:30PM
	next day rather then at 1:00 AM as expected.
	
	CAUSE
	=====
	
	The next scheduled time (which is based on time interval) was set after a full
	Consistency Checking was done.
	
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
	
	For more information on Consistency Checking, please see the following article
	in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q167704
	  TITLE : Explanation of Windows NT 4.0 WINS Consistency Checking
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbtool kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
