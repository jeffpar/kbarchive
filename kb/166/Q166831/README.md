---
layout: page
title: "Q166831: How to Query MS Access Database Located on NetWare Server"
permalink: /kb/166/Q166831/
---

## Q166831: How to Query MS Access Database Located on NetWare Server

	Article: Q166831
	Product(s): Internet Information Server
	Version(s): winnt:3.0; :1.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	- Microsoft Active Server Pages, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to successfully perform a query using Internet Database Connector (IDC)
	or Active Server Pages (ASP) to an Microsoft Access 95 or 97 database (.mdb)
	located on a Novell server, you must have Gateway Services for NetWare installed
	and properly configured on the Internet Information Server (IIS) computer.
	
	MORE INFORMATION
	================
	
	1. Install Gateway Services for NetWare via Control Panel Networks.
	
	2. In Control Panel GSNW, click Gateway and enable the gateway. By default, this
	  is not enabled.
	
	3. Create shares to the .mdb and .mdw (for secure access databases). Typically
	  the .mdw will be on another share or drive.
	
	Once the above is done, you will not need to map these drives in the login script
	that you run during the logon to the Windows NT Server. Clients should then be
	able to successfully query to the Microsoft Access database.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbiisSearch kbAudDeveloper kbASPsearch kbiis300 kbASP100
	Version           : winnt:3.0; :1.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	
