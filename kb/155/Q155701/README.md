---
layout: page
title: "Q155701: Invalid UDP Frames May Cause WINS to Terminate"
permalink: kb/155/Q155701/
---

## Q155701: Invalid UDP Frames May Cause WINS to Terminate

	Article: Q155701
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfile kbnetwork kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Invalid UDP frames directed to any computer running WINS raises an exception in
	WINS causing it to terminate silently. When WINS is no longer running, problems
	such as domain synchronization, browsing, or connectivity may occur. The event
	log may contain the following error message:
	
	  Event ID: 4119
	  Source : WINS
	  Type : Error
	
	  Description:
	
	  WINS got a packet that has the wrong format (for example, a label may be more
	  than 63 octets).
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Microsoft has updated Wins.exe to correct this problem. If WINS receives invalid
	frames, it logs the event mentioned above but it does not terminate
	unexpectedly.
	
	NOTE: Service Pack 3 must be applied to Windows NT 4.0 prior to applying this
	fix.
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/winsupd-fix
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: 4.00 wins denial of service attack hangs port 137 stops running
	
	======================================================================
	Keywords          : kbfile kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
