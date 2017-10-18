---
layout: page
title: "Q247222: XADM: Cannot Create Newsfeed on Windows 2000 Server Computer"
permalink: kb/247/Q247222/
---

## Q247222: XADM: Cannot Create Newsfeed on Windows 2000 Server Computer

	Article: Q247222
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to use the Microsoft Exchange Server Administrator program to
	create a newsfeed on a Windows 2000 Server computer, and you select a very large
	active file to import, the newsfeed may not be created and the directory service
	may stop responding (hang).
	
	  -Or-
	
	When using the Microsoft Exchange Server Administrator program to remotely manage
	a large (1200 or more members) Distribution List (DL), after a long wait the
	user may encounter the following message:
	
	  The Microsoft Exchange Server computer does not respond. MSExchange Directory
	  ID NUM DS_E_COMMUNICATIONS_PROBLEM.
	
	Typically, this appears after you try to add or remove a member. If Admin.exe is
	on the Exchange Server, this behavior does not occur. Only if the Exchange 5.5
	server is on Windows 2000 and Admin.exe is running remotely is this an issue.
	
	CAUSE
	=====
	
	When you specify a very large active file to import, the Administrator program
	may attempt to send a large amount of data to the directory using a single
	remote procedure call (RPC). If the Administrator program attempts to send too
	much data, Windows 2000 Server prevents the connection from being established.
	Because the Administrator program cannot write to the directory, it cannot
	create the newsfeed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	WORKAROUND
	==========
	
	To prevent this issue from occurring, select a smaller active file to import.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Component         : RPC-Win2000
	Technology        : kbwin2000Ssearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :2000,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
