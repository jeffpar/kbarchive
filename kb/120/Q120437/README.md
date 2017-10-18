---
layout: page
title: "Q120437: Corel Ventura C-Runtime Error under Windows NT"
permalink: kb/120/Q120437/
---

## Q120437: Corel Ventura C-Runtime Error under Windows NT

	Article: Q120437
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows NT, Corel Ventura posts a C runtime error message when it is
	started.
	
	CAUSE
	=====
	
	Corel Ventura cannot operate in a long path environment such as NT. Under
	Windows and Windows for Workgroups, by contrast, path length is limited to 128
	characters, and Corel Ventura operates correctly.
	
	RESOLUTION
	==========
	
	Shorten the path length so that it does not exceed 128 characters.
	
	Additional query words: wfw wfwg prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
