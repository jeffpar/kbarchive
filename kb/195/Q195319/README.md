---
layout: page
title: "Q195319: Inherit User Config Option Does Not Work for Modem Callback"
permalink: /kb/195/Q195319/
---

## Q195319: Inherit User Config Option Does Not Work for Modem Callback

	Article: Q195319
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Terminal Server configuration utility (Tscfg.exe) and User manager
	(Usrmgr.exe) do not seem to correctly communicate configuration information
	concerning modem callbacks.
	
	Callbacks can be set for each connection by TSCFG or for each user by USRMGR.
	TSCFG should take priority, or the setting can be set to inherit from "User
	config" by selecting the Inherit User Config option. However, the Inherit User
	Config option does not work and is ignored. In all cases TSCFG options take
	effect.
	
	CAUSE
	=====
	
	The problem is caused by Winlogon and not by the configuration utilities.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 6.
	
	Additional query words: 4.00 wts tse
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
