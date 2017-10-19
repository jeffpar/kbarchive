---
layout: page
title: "Q242509: InitiateSystemShutdown() Call May Not Shut Down the Computer"
permalink: /kb/242/Q242509/
---

## Q242509: InitiateSystemShutdown() Call May Not Shut Down the Computer

	Article: Q242509
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The InitiateSystemShutdown function creates a shutdown message window that warns
	you to close all programs and log off. The message box has a timer that counts
	down to zero. If you do log off before the timer expires, the message window
	stays on the screen, usually behind the logon prompt. If you log on before the
	timer expires, the computer shuts down as expected. If you wait for the timer to
	expire before logging on, the window simply disappears and you can log on and
	continue with a normal session. This behavior is inconsistent with the
	documentation, which states that the computer will immediately shut down or
	reboot when you log off.
	
	CAUSE
	=====
	
	This behavior is caused by a problem in Winlogon.exe.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  09/24/99  04:00p               192,272 Winlogon.exe  Intel
	  09/24/99  03:59p               274,704 Winlogon.exe  Alpha  
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: api
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
