---
layout: page
title: "Q185379: Browser Stops When .Exe File Attempts to Run Instead of Download"
permalink: kb/185/Q185379/
---

## Q185379: Browser Stops When .Exe File Attempts to Run Instead of Download

	Article: Q185379
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Browser Symptoms
	----------------
	
	When you click an .exe file from a browser to download it, the file attempts to
	run, causing the browser to stop responding.
	
	NOTE: Internet Explorer does not actually stop responding. After the timeout
	period eventually expires, it displays the following error message:
	
	  Internet Explorer cannot open the Internet site
	  http://<URL>/<filename>.exe.
	
	  The operation timed out
	
	Server Symptoms
	---------------
	
	In the Event Viewer on the computer running Internet Information Server (IIS),
	the following error is listed in the event log:
	
	  System Error, Source=W3SVC, Event ID=16
	
	The event details contains the description:
	
	  The script started from the URL '/<filename>.exe' with parameters ''
	  has not responded within the configured timeout period. The HTTP server is
	  terminating the script.
	
	CAUSE
	=====
	
	The virtual directory containing the .exe file has the Execute application
	permission enabled. This causes IIS to attempt to run the .exe files in that
	virtual directory for the browser instead of downloading them.
	
	WORKAROUND
	==========
	
	To work around this problem, change the virtual directory application permission
	to None or Script. To do this, perform the following steps:
	
	1. In Internet Service Manager (ISM), view the Properties page for the
	  appropriate virtual directory in the Web site.
	
	2. On the Directory, Home Directory, or Virtual Directory tab, under
	  Permissions, select either None or Script.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: mmc fails stops IE hang hangs hung akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
