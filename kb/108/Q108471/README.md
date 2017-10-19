---
layout: page
title: "Q108471: Scripts Timeout for Large Transfers or over Slow Links"
permalink: /kb/108/Q108471/
---

## Q108471: Scripts Timeout for Large Transfers or over Slow Links

	Article: Q108471
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	Scripts may get cut off when you transfer large amounts of data during a logon
	script or run a script over a slow link.
	
	CAUSE
	=====
	
	This is caused by a hardcoded timeout in code. It was 10 seconds in LAN Manager
	2.1 and 30 seconds in LAN Manager 2.2.
	
	RESOLUTION
	==========
	
	The default timeout has been left at 30 seconds, although new code allows you to
	set the timeout by adding an entry to the LANMAN.INI file. To change the default
	timeout, add a section to LANMAN.INI, [windows], and insert a logintimeout value
	between 1 and 32000 (seconds).
	
	For example, to set the timeout at 300 seconds:
	
	  [windows]
	  logintimeout=300
	
	The change was made in Netapi.dll; the new Netapi.dll is available as CSD01.068.
	
	Additional query words: 2.10 2.1 2.10a 2.20 2.2 timeout fail hang windows win login
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
