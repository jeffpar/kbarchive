---
layout: page
title: "Q260554: XFOR: Microsoft Mail Connector Leaks Memory on Windows 2000"
permalink: kb/260/Q260554/
---

## Q260554: XFOR: Microsoft Mail Connector Leaks Memory on Windows 2000

	Article: Q260554
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.5; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 20-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Microsoft Mail Server (MS Mail) and the Microsoft Mail Connector
	with Exchange Server 5.5 on a computer running Windows 2000 Server, the
	Async.exe program in Exchange Server may leak memory if the following conditions
	exist:
	
	- Multiple post offices exist on the computers running MS Mail.
	
	- A local post office exists on Exchange Server.
	
	- Post offices on MS Mail are connecting to Exchange Server 5.5 by using the
	  Microsoft Mail Connector.
	
	- Post offices on MS Mail are configured as remote post offices for each other
	  as follows:
	
	   - The post offices on MS Mail connect to post offices on Exchange Server
	     directly.
	
	   - The post offices on MS MAIL connect to post offices on MS Mail indirectly.
	
	- You send e-mails to some recipients on other post offices on MS Mail.
	
	In Windows 2000 Performance Monitor, the Task List utility, and the Process
	Viewer utility, an increase in memory usage is displayed.
	
	CAUSE
	=====
	
	This issue can occur because the method of memory management in Windows 2000
	Server is different than the method that Microsoft Windows NT 4.0 uses, and the
	Microsoft Mail Connector in Exchange Server 5.5 may not release the memory if it
	is installed on a computer that is running Windows 2000 Server. This causes the
	memory leak.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : WINDOWS:3.5; winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
