---
layout: page
title: "Q199117: SP4 Causes Extra Delimiter to Appear in NCSA Common Log Format"
permalink: kb/199/Q199117/
---

## Q199117: SP4 Causes Extra Delimiter to Appear in NCSA Common Log Format

	Article: Q199117
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply SP4 on an IIS 4.0 computer configured to use the NCSA Common Log
	format, the IIS NCSA Common Logs contain an extra delimiter (") near the HTTP
	Protocol version identifier. This can cause applications designed to analyze
	NCSA Common logs to fail.
	
	The following is an entry from a log file that exhibits the problem:
	
	  127.0.0.1 - - [24/Nov/1998:16:37:35 -0500] "GET /samples/images/space.gif
	  "HTTP/1.1" 304 141
	
	The quotation marks ( " ) in front of HTTP/1.1 should not be present. The correct
	entry should be similar to the following:
	
	  127.0.0.1 - - [24/Nov/1998:16:37:35 -0500] "GET /samples/images/space.gif
	  HTTP/1.1" 304 141
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Obtain version 4.02.0622 of the following file: system
	  drive:\winnt\System32\Inetsrv\Iislog.dll
	
	2. To check the files version, right-click on the file using Windows Explorer
	  and select Properties. On the Version tab, check the File Version field for
	  the appropriate version. This file may be extracted from IIS4_01.cab from the
	  Windows NT Option pack installation using the latest version of Winzip or the
	  Cab Viewer from the Microsoft Power Toy's utility suite.
	
	3. Stop the IIS Admin service in Control Panel Services. You will be informed
	  that it will stop the WWW Publishing services and possibly other dependant
	  services.
	
	4. Overwrite the SP4 version of IISLog.dll (4.02.0667.05) with the Windows NT
	  Option pack build (4.02.0622).
	
	5. Open a command prompt and switch to the system drive:\winnt\System32\Inetsrv
	  directory.
	
	6. Type the following command line:
	
	  REGSVR32 iislog.dll
	
	  (Note, that it is SVR, not SRV).
	
	7. Restart the IIS Admin service and the World Wide Web Publishing services.
	
	8. Verify that the NCSA Common Logs are now being created properly.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
