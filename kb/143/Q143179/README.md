---
layout: page
title: "Q143179: Internet Information Server FTP Server Service Fails to Start"
permalink: kb/143/Q143179/
---

## Q143179: Internet Information Server FTP Server Service Fails to Start

	Article: Q143179
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Internet Information Server's (IIS) FTP Server service does not start
	after successful installation of IIS on Windows NT 3.51 server. The Internet
	Server Manager shows the service in a stopped state.
	
	CAUSE
	=====
	
	It is not possible to run more than one FTP Server service on the same Windows
	NT server. If the FTP Server service (included with Windows NT Server) was
	running during the IIS installation, the FTP Server service in IIS fails to
	start.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Uninstall the Windows NT 3.51 FTP Server service from Control Panel, Networks
	  and reboot the server and then start the IIS FTP server service from Internet
	  Server Manager.
	
	  -or-
	
	- Stop the Windows NT 3.51 FTP Server service from Control Panel, Services. It
	  is best if you change from Automatic to Manual, so that it will not
	  automatically start when the server is rebooted. Then start the IIS FTP
	  server service from Internet Server Manager.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q142555 : Installing IIS FTP Over Microsoft Windows NT FTP Service
	
	Additional query words: prodiis
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	Issue type        : kbhowto
	
	=============================================================================
	
