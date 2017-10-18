---
layout: page
title: "Q319116: &quot;Error 718&quot; Err Msg When You Connect to the Internet Through MSN"
permalink: kb/319/Q319116/
---

## Q319116: &quot;Error 718&quot; Err Msg When You Connect to the Internet Through MSN

	Article: Q319116
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows Millennium Edition 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to the Internet by using an MSN Internet account,
	you may receive the following error message:
	
	  Error connecting to <Connection Name>:
	  Verifying user name and password
	  Error 718: Timed out waiting for a valid response from the remote PPP Peer
	
	CAUSE
	=====
	
	This behavior can occur if you do not insert "MSN/" (without the quotation
	marks) immediately in front of the account user name in the dial-up connection
	dialog box.
	
	RESOLUTION
	==========
	
	To resolve this issue, insert the user name in the following format, where
	<user_name> is the name of the user account:
	
	  MSN/<user_name>
	
	NOTE: "MSN" should be capitalized.
	
	MORE INFORMATION
	================
	
	For additional information about error 718, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q162847 Troubleshooting PPTP Connectivity Issues in Windows NT 4.0
	
	  Q219353 RRAS PPP Connections May Time-out on Slow or Delayed Links
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinMEsearch kbWin98search kbWin98SEsearch kbWin98 kbWinME kbWin98SE
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
