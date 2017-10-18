---
layout: page
title: "Q249668: XADM: Microsoft Exchange Unavailable in Windows 2000 Backup"
permalink: kb/249/Q249668/
---

## Q249668: XADM: Microsoft Exchange Unavailable in Windows 2000 Backup

	Article: Q249668
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the backup program that is included with Microsoft Windows 2000
	Server on a Windows 2000 Server-based computer that is running Exchange Server
	5.5, it may appear that the backup program does not recognize that Exchange
	Server is installed, and the Microsoft Exchange check box is displayed as
	unavailable (dimmed) when you try to select it to enable Exchange Server backup.
	
	WORKAROUND
	==========
	
	To work around this problem, double-click Microsoft Exchange (double-click the
	words Microsoft Exchange, not the Microsoft Exchange check box). After you do,
	you can click to expand the folder hierarchy under Microsoft Exchange.
	Information that reflects your organization is displayed, and you can select the
	components that you want to back up.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 2000 Server.
	
	
	
	Additional query words: Information store directory site server restore ntbackup disabled
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbwin2000Ssearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:2000; winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
