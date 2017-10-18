---
layout: page
title: "Q104504: WFWG Asynchronous Close Leads to Freeze of OS/2 LAN Man Server"
permalink: kb/104/Q104504/
---

## Q104504: WFWG Asynchronous Close Leads to Freeze of OS/2 LAN Man Server

	Article: Q104504
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	An OS/2 LAN Manager server can freeze or stop responding during high stress
	situations if it receives an asynchronous "close" request from a Windows for
	Workgroups workstation immediately followed by another request on the same file
	from the same machine. All network activity can cease as well as all
	keyboard/mouse access to the console.
	
	CAUSE
	=====
	
	In certain instances Windows for Workgroups does not wait for a response from an
	SMBClose request to the server. This normally is not a problem, but if the Close
	has not finished and another operation (open, delete or rename) is requested on
	the same file, the OS/2 LAN Manager server may freeze as it attempts to perform
	both operations on the file "at the same time."
	
	RESOLUTION
	==========
	
	Windows for Workgroups version 3.11 addresses this issue. The Windows for
	Workgroups development team has also created a site specific fix to version 3.1
	for those sites where upgrading is not an option.
	
	Additional query words: wfw wfwg 2.20 snoball vredir 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
