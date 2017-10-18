---
layout: page
title: "Q259042: Handle Leak in WinLogon After Applying Windows NT 4.0 SP6"
permalink: kb/259/Q259042/
---

## Q259042: Handle Leak in WinLogon After Applying Windows NT 4.0 SP6

	Article: Q259042
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 6 and if the RegConnectRegistry()
	API is being used heavily, the Winlogon process may exhibit a Handle Leak.
	
	CAUSE
	=====
	
	This issue occurs because Windows NT 4.0 Service Pack 6 introduced a problem in
	the termination code for WinLogon, which prevents orphaned handles from
	closing.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the Windows NT 4.0 Security Rollup Package. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  04/04/00  00:46                135,440 services.exe  Intel
	  04/04/00  00:46                192,272 winlogon.exe  Intel
	  04/04/00  00:45                249,104 services.exe  Alpha
	  04/04/00  00:45                275,216 winlogon.exe  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : winnt:4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
