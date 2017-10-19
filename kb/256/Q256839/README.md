---
layout: page
title: "Q256839: Long URL Requests/Parameters Aren't Logged Using ODBC Logging"
permalink: /kb/256/Q256839/
---

## Q256839: Long URL Requests/Parameters Aren't Logged Using ODBC Logging

	Article: Q256839
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400 kbiis500 kbWin2000SP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If HTTP URL requests are greater than 255 characters, an error in Open Database
	Connectivity (ODBC) logging occurs, and the request is not logged. An error is
	logged in the Event Log, and ODBC logging stops and then restarts, but the
	request has been lost.
	
	In addition, if parameters are greater than 255 characters, they are replaced
	with "..." in the log.
	
	WORKAROUND
	==========
	
	To work around this problem, do not use ODBC logging.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	In Internet Information Services (IIS) 5.0, the English version of this fix
	should have the following file attributes or later:
	
	Date      Time         Version         Size    File name     Platform
	---------------------------------------------------------------------
	6/12/200  10:38:53PM   5.0.2195.2096   78,608  Iislog.dll    x86
	
	In IIS 4.0, install the IIS 4.0 version 4.2.762.1 or later of this fix.
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 2.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbiis400 kbiis500 kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
