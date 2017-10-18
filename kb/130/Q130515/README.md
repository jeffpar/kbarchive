---
layout: page
title: "Q130515: NetBIOS Parameter Ignored in Windows NT Mail"
permalink: kb/130/Q130515/
---

## Q130515: NetBIOS Parameter Ignored in Windows NT Mail

	Article: Q130515
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT Mail (MSMAIL32.EXE) ignores NetBIOS notification of new
	mail delivery.
	
	The Windows NT 3.5 Resource Guide Volume 1 incorrectly states, on page 579, that
	Windows NT Mail will use NetBIOS notification for new mail delivery if you add
	the following registry entry:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Mail\Microsoft Mail\NetBIOS
	
	MORE INFORMATION
	================
	
	The NetBIOS parameter allows a sending station to send a directed datagram (a
	NetBIOS notification) to another station. The datagram arrives at the
	destination computer to tell Microsoft Mail that a new mail message was sent to
	the computer. The Mail program on the destination computer can then check the
	workgroup postoffice for the new mail message, thereby bypassing the
	PollingInterval registry entry.
	
	The 16-bit Windows for Workgroups mail client (MAIL.EXE) supports NetBIOS
	notification of new mail delivery; the 32-bit Windows NT mail client
	(MSMAIL32.EXE) does not.
	
	WORKAROUND
	==========
	
	To work around this problem either:
	
	- Use the 16-bit mail client that ships with Microsoft Mail for PC Networks
	  version 3.2. This mail client supports NetBIOS notification of new mail
	  delivery
	
	  -or-
	
	- Force Microsoft Mail to check for new messages more frequently by lowering
	  the PollingInterval registry entry.
	
	See page 581, Volume 1 of the Windows NT Resource Guide for additional
	information.
	
	
	Additional query words: 3.10 prodnt doc err docerr documentation error regedt32.exe regedit
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5
	
	=============================================================================
	
