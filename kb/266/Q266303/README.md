---
layout: page
title: "Q266303: Cron.exe Event Log Warnings Without Sub-Authentication Package"
permalink: /kb/266/Q266303/
---

## Q266303: Cron.exe Event Log Warnings Without Sub-Authentication Package

	Article: Q266303
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbWin2000PreSP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the sub-authentication package is not installed, the following warnings are
	logged in the event log for each job that is run:
	
	  SecAcquireToken failed
	
	  LsaLogonUser failed
	
	
	CAUSE
	=====
	
	The behavior is caused by a logic error in the code for Cron.exe
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain the fix mentioned in the following KB article.
	Click the article number to view the article in the Microsoft Knowledge Base:
	
	  Q282858 Cron Jobs Stop Running
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000PreSP2Fix 
	Technology        : kbWinNTsearch kbWinNTServicesUnix
	Version           : :
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
