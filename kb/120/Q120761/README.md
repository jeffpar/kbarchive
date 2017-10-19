---
layout: page
title: "Q120761: Background Windows Show through Access 2.0's Window"
permalink: /kb/120/Q120761/
---

## Q120761: Background Windows Show through Access 2.0's Window

	Article: Q120761
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbui kbbug
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, windows behind Access 2.0's window, will show
	through. One example, is a command window running a batch file while Access is
	being invoked.
	
	CAUSE
	=====
	
	This is a problem in Access. Access changes the state of its main window to
	invisible, expecting no other app to paint during this time.
	
	WORKAROUND
	==========
	
	Refresh the screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Access version 2.0. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
