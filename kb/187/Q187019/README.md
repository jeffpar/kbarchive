---
layout: page
title: "Q187019: FoxPro 2.6a May Not Install Additional Components"
permalink: kb/187/Q187019/
---

## Q187019: FoxPro 2.6a May Not Install Additional Components

	Article: Q187019
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
	
	When you install FoxPro 2.6a and get to the Additional Component Install screen,
	FoxPro 2.6a exits and does not continue.
	
	CAUSE
	=====
	
	All multiuser installations require Change User /Install.
	
	RESOLUTION
	==========
	
	To get the second part of the installation to work, type "Change User /Install"
	(without the quotation marks).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
