---
layout: page
title: "Q105277: Net Watcher Audit Log Shows Two Entries for Failed Password"
permalink: /kb/105/Q105277/
---

## Q105277: Net Watcher Audit Log Shows Two Entries for Failed Password

	Article: Q105277
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Net Watcher event log may show a duplicate entry for each failed attempt to
	connect to one of your resources. Each entry shows the exact same Date/Time,
	Computer, User, Share, Type, Access, Document, and Event.
	
	CAUSE
	=====
	
	When the Windows for Workgroups redirector on the client machine receives a
	message that the attempt to connect failed due to an invalid password, the
	redirector tries to establish the connection again using your logon password. In
	this situation, the server sees two logon attempts and logs them both in the Net
	Watcher event log.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
