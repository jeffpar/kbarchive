---
layout: page
title: "Q172047: Sharing Violation with Server-side Includes"
permalink: /kb/172/Q172047/
---

## Q172047: Sharing Violation with Server-side Includes

	Article: Q172047
	Product(s): Internet Information Server
	Version(s): WinNT:3.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to modify or replace a file that is being called as a server-side
	Include, you may get a sharing violation. You also may not be able to delete,
	move, rename, or change this file until the World Wide Web (WWW) service is
	stopped.
	
	CAUSE
	=====
	
	Generally all files published by the World Wide Web Publishing service are
	shared, and can be updated at any time with no problem, even on a busy server.
	The exception is with server side includes. The file called by the server-side
	Include tag is mapped into memory and is not shareable. This can prevent the
	file from being updated without stopping the WWW service.
	
	Normally this is not a problem, but if the included file is used to display
	frequently changing information, then it would cause the WWW service to have to
	be stopped and started more often than normal.
	
	WORKAROUND
	==========
	
	If you have dynamically changing data, you should not use a server-side Include
	to display the information from a file.
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbiisSearch kbiis300
	Version           : WinNT:3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
