---
layout: page
title: "Q143157: FTP Server Service Does Not Start"
permalink: kb/143/Q143157/
---

## Q143157: FTP Server Service Does Not Start

	Article: Q143157
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Internet Information Server (IIS) FTP server service does not start
	after successful installation of IIS on Windows NT 3.51 Server. The Internet
	Server Manager shows the "state" as "Stopped".
	
	CAUSE
	=====
	
	Your FTP server service (that comes with Windows NT Server) is running during
	the IIS installation. This causes the FTP server service included with IIS to
	fail to start.
	
	It is not possible to run more than one FTP server service on the same Windows NT
	server.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Deinstall the Windows NT 3.51 FTP server service from Control Panel, Networks
	  and reboot the server and then start IIS FTP server service from Internet
	  Server Manager.
	
	  -or-
	
	- Stop the Windows NT 3.51 FTP server service from Control Panel, Services. It
	  is best if you change from Automatic to Manual, so that it will not
	  automatically start when the server is rebooted. Then start IIS FTP server
	  service from Internet Server Manager.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	
