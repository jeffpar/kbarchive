---
layout: page
title: "Q307788: PRB: FTP Logs Show 550 Error Message w/Connection over UNC Share"
permalink: kb/307/Q307788/
---

## Q307788: PRB: FTP Logs Show 550 Error Message w/Connection over UNC Share

	Article: Q307788
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Internet Information Services (IIS) 5.0 server that has a virtual
	directory and that connects remotely over a Universal Naming Convention (UNC)
	share, you may receive a 550 error message in the File Transfer Protocol (FTP)
	log, and the event log may show event ID 2009 with a source of Srv. This
	behavior occurs most often when antivirus software is running on the server.
	
	CAUSE
	=====
	
	The network server process provides remote procedure call (RPC) support and
	file, print, and named pipe sharing. When IIS connects to a remote server, it
	uses the server message block (SMB) protocol and connects to the server service
	that is running on that computer. Another process that is running on the
	computer may also have open file handles for the files that are being
	transferred to the remote server. When the total number of open file handles
	reaches 2048, the server process returns an error to the connecting IIS FTP
	service.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
