---
layout: page
title: "Q194200: Cannot Change WinNT Passwords from Exchange and Outlook Clients"
permalink: /kb/194/Q194200/
---

## Q194200: Cannot Change WinNT Passwords from Exchange and Outlook Clients

	Article: Q194200
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It may not be possible to change a Windows NT password from an Exchange or
	Outlook client connecting to an Exchange Server located in a cluster server
	environment. This problem affects clients running on the Win32, Win16, and
	Macintosh platforms.
	
	When you attempt to change the password from inside one of these clients, you
	receive the following error messages:
	
	- On the Macintosh client:
	
	  Please enter the AppleTalk Zone of your Microsoft Windows NT Primary Domain
	  Controller.
	
	- After you enter the AppleTalk zone and click OK, the following message
	  appears:
	
	  The Windows NT Domain password could not be changed.
	  A required action was not successful due to an unspecified error.
	
	- On Windows NT, Windows 95, or Windows 98:
	
	  The Windows NT Domain password could not be changed.
	  A required action was not successful due to an unspecified error.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words: mscs
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
