---
layout: page
title: "Q254722: FTP Download Session Fails When FTP Control Connection Is Closed"
permalink: kb/254/Q254722/
---

## Q254722: FTP Download Session Fails When FTP Control Connection Is Closed

	Article: Q254722
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the control connection is closed during an FTP download session, the download
	from the IIS FTP site fails.
	
	Note: This issue usually occurs when a firewall is in use that has been set to
	close the control connection if no TCP data is transferred after a certain
	amount of time.
	
	CAUSE
	=====
	
	This is by design. RFC-959 states the following:
	
	  ... The protocol requires that the control connections be open while data
	  transfer is in progress. It is the responsibility of the user to request the
	  closing of the control connections when finished using the FTP service, while
	  it is the server who takes the action. The server may abort data transfer if
	  the control connections are closed without command...
	
	WORKAROUND
	==========
	
	To resolve this issue, try the following workarounds:
	
	- Use an FTP utility or firewall setting that keeps the control connection
	  open.
	
	- Use a faster connection.
	
	- Request that the FTP Site owner break the file that the download fails on
	  into multiple, smaller files.
	
	MORE INFORMATION
	================
	
	This scenario usually occurs when you are downloading a large file over a slow
	connection.
	
	
	Additional query words: iis 5 unix socks5 terminated quits stops dropped akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
