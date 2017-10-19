---
layout: page
title: "Q164676: Can't Browse Virtual Directories on NetWare Server"
permalink: /kb/164/Q164676/
---

## Q164676: Can't Browse Virtual Directories on NetWare Server

	Article: Q164676
	Product(s): Internet Information Server
	Version(s): WinNt:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a virtual directory that points to a volume on a Novell NetWare
	server, you cannot browse the contents of that directory. Instead, you receive
	the following error:
	
	  HTTP/1.0 500 Server Error (The system cannot find the path specified.)
	
	CAUSE
	=====
	
	If you enable a default document on the WWW properties page in Internet Service
	Manager and have a virtual directory on a Novell NetWare server, this error
	occurs when you access that directory, even though directory browsing is
	enabled.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- In Internet Service Manager, do NOT specify a default document for the Web
	  server. If you do not specify a default document type, you can browse the
	  virtual directory on the Web server.
	
	  -or-
	
	- Make sure a file with the exact name of the default document exists in the
	  virtual directory on the NetWare server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	versions 2.0 and 3.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : WinNt:3.0
	Issue type        : kbbug
	
	=============================================================================
	
