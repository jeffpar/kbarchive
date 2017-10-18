---
layout: page
title: "Q249798: IBM MQSeries TCP/IP Channels Do Not Start After Applying SP6"
permalink: kb/249/Q249798/
---

## Q249798: IBM MQSeries TCP/IP Channels Do Not Start After Applying SP6

	Article: Q249798
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6 
	- Microsoft Windows NT Workstation version 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Service Pack 6 (SP6) on Windows NT 4.0, IBM MQSeries
	TCP/IP-type channels no longer start. The following error message is listed in
	the Application log in Event Viewer:
	
	  Event ID: 9213
	  Source: MQSeries
	  Type: Error
	  Description:
	
	  A communications error for TCP/IP occurred.
	
	  An unexpected error occurred in communications.
	
	  The return code from the TCP/IP (setsockopt(SO_KEEPALIVE)) call was 10055
	  (X'2747'). Record these values and tell the systems administrator.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	This problem was first corrected in Windows NT 4.0 Service Pack 6a.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Service Pack 6.
	
	MORE INFORMATION
	================
	
	For additional information, visit the following Microsoft Web site:
	
	  http://www.microsoft.com/ntserver/nts/downloads/recommended/sp6
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTW400sp6
	Version           : winnt:4.0 SP6
	Issue type        : kbprb
	
	=============================================================================
	
