---
layout: page
title: "Q175641: LMCompatibilityLevel and Its Effects"
permalink: kb/175/Q175641/
---

## Q175641: LMCompatibilityLevel and Its Effects

	Article: Q175641
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows for Workgroups 
	- Microsoft Windows 95 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Windows NT client 
	- Microsoft Outlook 97, on platform(s):
	   - Microsoft Windows 95 
	   - Microsoft Windows 98 
	   - Microsoft Windows 98 Second Edition 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to down-level clients on a computer running Windows for
	Workgroups and Windows 95, you may receive the error message:
	
	  \\<Server>\<Share> is not accessible.
	
	-or-
	
	  System Error 50 has occurred.
	
	  The Network Request is not supported.
	
	This message appears when you connect to a Windows 95 computer that has been set
	up to use User Level Access Control and when you connect to a share that has a
	password (Read or Full Control) set on it.
	
	Setting LMCompatibilityLevel to 2 prevents a Microsoft Exchange Server 4.0 and
	5.0 client from gaining access to a Microsoft Exchange Server versions 4.0 and
	5.0 from the Inbox with one of the following error messages:
	
	  Microsoft Exchange Server
	
	  Your Microsoft Exchange Server is unavailable.
	
	  You can retry connecting to the server using the network, or work offline and
	  connect using dial-up networking.
	
	  Network problems are preventing connection to the Microsoft Exchange Server
	  computer. Contact your system administrator is this condition persists.
	
	-or-
	
	  Microsoft Exchange Server
	
	  The logon credentials supplied were incorrect. Make sure your username and
	  domain are correct then type your password again.
	
	
	CAUSE
	=====
	
	If LMCompatibilityLevel is set to 2, Windows NT will never send a LANMAN
	challenge/response, and Windows NT will be unable to connect to clients that
	require it.
	
	MORE INFORMATION
	================
	
	To increase password security, Windows NT 4.0 allows you to restrict the sending
	of LANMAN challenge/response passwords over the network. This may, however, make
	Windows NT unable to connect to down-level clients and Exchange 4.0 and 5.0
	clients.
	
	For additional information on preventing the sending of LANMAN passwords, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q147706 How to Disable LM Authentication on Windows NT
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	click the following article number to view the article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Additional query words: wfw inbox win95
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch kbOutlookSearch kbAudDeveloper kbWin95search kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbOutlook97Search kbWFWSearch kbZNotKeyword3
	Version           : :4.0,5.0,5.5
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
