---
layout: page
title: "Q106041: WFWG Chat Err Msg: No Connection to &lt;Computername&gt;"
permalink: /kb/106/Q106041/
---

## Q106041: WFWG Chat Err Msg: No Connection to &lt;Computername&gt;

	Article: Q106041
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error message
	
	  No connection to <Computername>
	
	(where <Computername> is the machine you are attempting to use Chat with)
	appears when you are using Chat in multiuser mode and attempting to communicate
	with a user who has a Windows for Workgroups 3.1 or Microsoft Windows NT
	machine.
	
	CAUSE
	=====
	
	This error message occurs if you try to add a user to a Chat session when that
	user is using an older version of Chat. Neither Windows for Workgroups nor
	Windows NT support the multiuser feature of Chat.
	
	NOTE: This error also occurs if a user elects to close Chat before answering
	(that is, the user clicks on the "ringing" minimized phone and then clicks
	Close.)
	
	STATUS
	======
	
	There is no workaround for this problem.
	
	Additional query words: Winchat Win Chat
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
