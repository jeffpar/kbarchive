---
layout: page
title: "Q218136: How to Configure SBS to Send E-Mail Messages Larger Than 1 MB"
permalink: kb/218/Q218136/
---

## Q218136: How to Configure SBS to Send E-Mail Messages Larger Than 1 MB

	Article: Q218136
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 23-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure Microsoft Small Business Server 4.0
	(SBS) to send an e-mail message larger than 1 megabyte (MB) in size.
	
	MORE INFORMATION
	================
	
	Exchange Server in SBS 4.0 is optimized to work in an 8 MB memory foot print. In
	particular, outbound e-mail messages are limited to 800 kilobytes (KB) in size.
	You can change this configuration using the Microsoft Exchange Administrator
	program.
	
	In SBS 4.5, this optimization is no longer applied using Exchange Server.
	Depending on the work load of your servers, the number of users, and the number
	of server programs you expect the SBS server to support, you may want to set
	some memory constraints on the size of outbound e-mail messages. To set a
	limitation on the size of e-mail messages, follow these steps:
	
	1. Click Start, point to Programs, point to Microsoft Exchange, and then click
	  Microsoft Exchange Administrator.
	
	2. If you are opening Exchange Administrator for the first time, click Browse to
	  select the server that you are going to administer, and then click OK.
	
	3. In the left window pane, double-click Server, double-click Configuration, and
	  then double-click Connections.
	
	4. Double-click Internet Mail Service.
	
	5. On the General tab, type or click the maximum message size limit in the
	  Message Size box.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : winnt:4.0,4.0a,4.5
	Issue type        : kbhowto
	
	=============================================================================
	
