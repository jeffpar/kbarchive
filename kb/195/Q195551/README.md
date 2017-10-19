---
layout: page
title: "Q195551: PRB: SP4 Detects BackOffice Small Business Server"
permalink: /kb/195/Q195551/
---

## Q195551: PRB: SP4 Detects BackOffice Small Business Server

	Article: Q195551
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0,4.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After completing the installation of Windows NT Service Pack 4, you receive a
	pop-up message stating that Microsoft BackOffice Small Business Server has been
	detected, even though you may be running Windows NT Server 4.0 or Windows NT
	Workstation 4.0
	
	CAUSE
	=====
	
	This problem occurs because, when Update.exe from Service Pack 4 runs, it checks
	to see if the HKEY_LOCAL_MACHINE\Software\SmallBusiness registry key exist.
	
	If this key does exist, Update.exe then tries to determine whether it is
	BackOffice Small Business Server v4.0 or v4.0a.
	
	However, if you have installed the Small Business Server Signup Server or if the
	Windows NT computer is a member of a Small Business Server domain, the registry
	key mentioned above exist.
	
	RESOLUTION
	==========
	
	To resolve this problem, click OK to complete the update. This message will not
	happen each time you restart. It happens only when applying the service pack.
	
	Additional query words: kbDSupport sbs smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0,4.0a
	Issue type        : kbprb
	
	=============================================================================
	
