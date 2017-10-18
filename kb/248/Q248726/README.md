---
layout: page
title: "Q248726: XADM: Installing Exchange 5.5 on Windows 2000 Causes Error Msg."
permalink: kb/248/Q248726/
---

## Q248726: XADM: Installing Exchange 5.5 on Windows 2000 Causes Error Msg.

	Article: Q248726
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the Setup program for Exchange Server version 5.5 on a computer
	running Microsoft Windows 2000 Server, the following error message may be
	displayed:
	
	  This program does not run correctly on this version of Windows. To continue,
	  click Run Program. To exit, click Cancel. For more information, click
	  Details.
	
	You can ignore this error message. Click "Run program" to proceed. To avoid
	receiving this error message, run the Setup program from a command prompt.
	
	MORE INFORMATION
	================
	
	If you click Details, a Microsoft Windows 2000 Web page is displayed that lists
	Microsoft BackOffice products that have compatibility issues with Windows 2000
	Server.
	
	Exchange Server 5.5 is not compatible with Windows 2000 Server. To make Exchange
	Server compatible with Windows 2000 Server, you must install Exchange Server 5.5
	Service Pack 3. To do this correctly, first install Exchange Server 5.5, and
	after that installation is complete, install Exchange Server 5.5 Service Pack
	3.
	
	For additional information about how to install Exchange Server 5.5 on Windows
	2000 Server, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q248725 XADM: Installing Exchange 5.5 on Windows 2000 may fail with error
	  c1031668
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOSWin2000 kbOSWinSearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
