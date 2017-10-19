---
layout: page
title: "Q227000: Dr. Watson Error in Termsrv.exe After Logon"
permalink: /kb/227/Q227000/
---

## Q227000: Dr. Watson Error in Termsrv.exe After Logon

	Article: Q227000
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
	
	When a computer running Windows NT Server 4.0, Terminal Server Edition stops
	responding (hangs) at the logon screen and you restart the server, Terminal
	Server allows you to log on, but immediately displays a Dr. Watson error message
	in Termsrv.exe. After you restart the computer again, Terminal Server performs
	as expected.
	
	CAUSE
	=====
	
	This problem occurs because the TERMSRV service is started before all the data
	structures are started. If there is a service request made very early in the
	startup process, TERMSRV may cause a Dr. Watson error message to be displayed.
	This should only happen when you first start the computer.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition, Service Pack 5.
	
	Additional query words: tse wts
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
