---
layout: page
title: "Q201662: XADM: Exchange Event Service w. Internet Explorer 4.01 Hangs"
permalink: /kb/201/Q201662/
---

## Q201662: XADM: Exchange Event Service w. Internet Explorer 4.01 Hangs

	Article: Q201662
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0 SP3,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 20-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, on platform(s):
	   - the operating system: Microsoft Windows NT 4.0 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On a computer that is running Exchange Server build 5.5.1960, Windows NT Server
	4.0 Service Pack 3, and Microsoft Internet Explorer 4.01, when you right-click
	the Internet Explorer icon on the desktop, click Properties on the shortcut
	menu, and then click OK, the Windows NT logon shell (Explorer.exe) stops
	responding (hangs).
	
	CAUSE
	=====
	
	This problem can occur because Internet Explorer generates a windows broadcast
	message to all top-level windows, and Internet Explorer is waiting for a
	response. In the Exchange Server event service, although a window is not created
	directly, one of the Component Object Model (COM) application programming
	interfaces (API) creates a window resource internally. In the event service, the
	broadcasted message is missed by one of the threads and another thread is
	performing "if (Peek..." instead of "while(Peek" and misses the message
	completely, so Internet Explorer hangs waiting for a response.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	You can also resolve this problem by upgrading to Windows NT Server 4.0 Service
	Pack 4 and Exchange Server 5.5 Service Pack 1 with fix number 58842.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server version 5.5
	Service Pack 2.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:4.0 SP3,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
