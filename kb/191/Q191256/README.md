---
layout: page
title: "Q191256: Time-taken Log Field Incorrect When KeepAlive Is Enabled"
permalink: /kb/191/Q191256/
---

## Q191256: Time-taken Log Field Incorrect When KeepAlive Is Enabled

	Article: Q191256
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Information Server (IIS) log-file format contains a parameter for
	processing time. This field is the total amount of processing time that is spent
	on the server for a particular DLL. This internal timer starts on Packet 1 and
	ends on the last Acknowledgement received from the client indicating that that
	the processing has been completed on the server. However, the logged time is not
	correct if KeepAlive is enabled for the connection between the IIS computer and
	the Internet browser.
	
	CAUSE
	=====
	
	The counter that measures time is not reset for KeepAlive connections.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	Additional query words: sp hot fix qfe
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
