---
layout: page
title: "Q173807: XADM: Opening Folders with Long Names Stops Netscape and Simeon"
permalink: kb/173/Q173807/
---

## Q173807: XADM: Opening Folders with Long Names Stops Netscape and Simeon

	Article: Q173807
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbusage exc55
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Netscape Navigator version 4.02 against an Exchange Server 5.5
	computer, you will find that Netscape stops when it attempts to list folders
	within a folder that has a very long title (more than 250 characters). This
	behavior is also true for Simeon Mail version 4.1.1.
	
	CAUSE
	=====
	
	You might think there is a problem with the Exchange Server computer, when in
	fact the problem is with the Netscape client. When you click the Message Center
	button, Netscape performs an IMAP list "" "/%" instead of the IMAP list "" "*"
	as it traverses down the folder tree. When Netscape tries to construct a list ""
	"/%" to see whether the long folder name has any subfolders, Netscape stops.
	
	STATUS
	======
	
	This problem occurs when you use Microsoft Exchange Server 5.5 and Netscape
	Navigator 4.02. This problem occurs when you use Microsoft Exchange Server 5.5
	and Simeon Mail 4.1.1.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbusage exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
