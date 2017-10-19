---
layout: page
title: "Q234422: XFOR: Cannot Install AppleTalk Connector on Windows NT 4.0 SP5"
permalink: /kb/234/Q234422/
---

## Q234422: XFOR: Cannot Install AppleTalk Connector on Windows NT 4.0 SP5

	Article: Q234422
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0 SP5,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 20-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows NT 4.0 SP5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to install the Microsoft Mail Connector (AppleTalk) message
	transfer agent (MTA) on an Exchange Server computer that is running Windows NT
	Server 4.0 Service Pack 5, the following error message may be displayed:
	
	  Services for the Macintosh must be installed on the server that will use the
	  MSMail Connector (AppleTalk) MTA.
	
	This problem occurs even though Services for Macintosh has already been installed
	on the server.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft
	
	3. On the Edit menu, click Add Key, type "SFM" (without the quotation marks) in
	  the Key Name box, and then click OK.
	
	4. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOSWinSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOSWinNTSearch kbOSWinNT400SP5
	Version           : winnt:4.0 SP5,5.5
	Issue type        : kbprb
	
	=============================================================================
	
