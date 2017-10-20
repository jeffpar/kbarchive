---
layout: page
title: "Q254795: XADM: CDOSYS Stops While Sending or Posting by Using Port"
permalink: /kb/254/Q254795/
---

## Q254795: XADM: CDOSYS Stops While Sending or Posting by Using Port

{% raw %}

	Article: Q254795
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbWin2000PreSP1Fix kbWin2000sp1Fix
	Last Modified: 30-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a time-out occurs on an Exchange Server 5.5 computer when you send or post by
	using Simple Mail Transfer Protocol (SMTP) or Network News Transfer Protocol
	(NNTP), the Collaboration Data Objects (CDO) for Windows 2000 (CDOSYS) may stop
	responding. This may occur if the remote server is under a very heavy load or if
	the server or network is unavailable.
	
	CAUSE
	=====
	
	This problem can occur if Exchange Server does not close the connection to the
	remote server correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	This problem was first corrected in Windows 2000 Service Pack 1.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbWin2000PreSP1Fix kbWin2000sp1Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
