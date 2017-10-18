---
layout: page
title: "Q185382: How to Manually Stop or Start the Inetinfo Process"
permalink: kb/185/Q185382/
---

## Q185382: How to Manually Stop or Start the Inetinfo Process

	Article: Q185382
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the preferred steps to manually stop or start the
	Inetinfo process in Internet Information Server (IIS) version 4.0.
	
	MORE INFORMATION
	================
	
	To unload the Inetinfo.exe process completely, and to make sure that all of the
	extensions are unloaded properly, stop the IISAdmin service and the World Wide
	Web Publishing Service.
	
	When you start the Internet services on your computer, starting the IISAdmin
	service only starts the IISAdmin service; however, starting the World Wide Web
	Publishing service starts both the World Wide Web Publishing Service and the
	IISAdmin service.
	
	From the command line, do the following:
	
	  net start or stop
	
	     w3svc      World Wide Web Publishing Service
	     iisadmin   IIS Admin Service
	     msftpsvc   FTP Publishing Service
	     cisvc      Content Index
	     smtpsvc    Microsoft SMTP Service
	
	
	In previous versions of IIS, you can stop the entire Web service by typing "net
	stop w3svc" (without the quotation marks) at the command line. This terminates
	all of the Web services on the computer, and shuts down the Inetinfo.exe
	process. As a result of the new multiple Web site architecture, there is another
	service, Iisadmin, that keeps running even when W3SVC is shut down. The same is
	true for starting and stopping services from Control Panel. If you truly want to
	unload the Inetinfo.exe process, and make sure that all of the extensions are
	unloaded properly, you should now type "net stop Iisadmin" rather than "net stop
	w3svc" (both without the quotation marks). Typing "net start w3svc" or "net
	start Msftpsvc" (without the quotation marks) automatically starts Iisadmin.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
