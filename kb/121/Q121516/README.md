---
layout: page
title: "Q121516: Err Msg: There is Not Enough Memory Available to Start Mail"
permalink: /kb/121/Q121516/
---

## Q121516: Err Msg: There is Not Enough Memory Available to Start Mail

	Article: Q121516
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the MSMAIL32 client application from Windows NT and you have
	SQLMail spooler functionality enabled in SQL Server version 4.21, the following
	error message may appear:
	
	  There is not enough memory available to start Mail. Try quitting other
	  programs and starting Mail again.
	
	CAUSE
	=====
	
	This problem occurs when SQLMail is enabled before you start the MSMAIL32 client
	application in Windows NT.
	
	RESOLUTION
	==========
	
	Start the MSMAIL32 client application before enabling SQLMail. Refer to SQL
	Server version 4.21 Release Notes for more information.
	
	MORE INFORMATION
	================
	
	SQL Server version 4.21 includes extended stored procedures that allow SQL
	Server to send messages through the built-in mail application programming
	interface (MAPI) client interface in Windows NT. You have the ability to
	automatically start mail when you start SQL Server by setting the AutoStart Mail
	Client in the Set Server Options dialog box.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
