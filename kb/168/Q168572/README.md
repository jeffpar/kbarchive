---
layout: page
title: "Q168572: XADM: Can't Install Active Server Pages on Windows NT 3.51"
permalink: kb/168/Q168572/
---

## Q168572: XADM: Can't Install Active Server Pages on Windows NT 3.51

	Article: Q168572
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install active server pages on a computer running Windows NT
	Server 3.51, the installation stops with the following Warning message:
	
	  Active Server Pages requires Microsoft Win95 or WinNT 4.0
	  Operating System
	
	  Aborting Installation
	
	The .asp files provide the functionality and user interface for the Microsoft
	Exchange Active Server Components client through the Internet browser.
	
	CAUSE
	=====
	
	The Microsoft Active Server program requires that active server pages (.asp)
	files be installed on the Microsoft Windows NT Active Server computer. Active
	server pages are included with Microsoft Windows NT Server 4.0 Service Pack 2
	(SP2) and later versions. Active server pages must be installed before the
	Active Server Components can be installed on the computer running Exchange
	Server.
	
	Active Server Pages are not available for Microsoft Windows NT 3.51. For this
	reason, Active Server is not supported on the Microsoft Windows NT 3.51
	computer.
	
	Additional query words: setup
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	
	=============================================================================
	
