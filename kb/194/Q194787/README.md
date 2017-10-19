---
layout: page
title: "Q194787: XFOR: IIS 4.0 SMTP Does Not Retry Delivery on HELO/EHLO Failures"
permalink: /kb/194/Q194787/
---

## Q194787: XFOR: IIS 4.0 SMTP Does Not Retry Delivery on HELO/EHLO Failures

	Article: Q194787
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SMTP service included with Internet Information Server 4.0 rejects messages
	when the HELO or EHLO command times out. When the SMTP service tries to deliver
	a message and times out while waiting for the response to the HELO or EHLO
	command, an NDR is generated and no further retries are attempted.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server (IIS) version 4.0. This problem was first corrected in Windows NT 4.0
	Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition Service Pack
	4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
