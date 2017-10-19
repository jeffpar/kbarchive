---
layout: page
title: "Q160360: INFO: Troubleshooting Exceptions in Internet Server Products"
permalink: /kb/160/Q160360/
---

## Q160360: INFO: Troubleshooting Exceptions in Internet Server Products

	Article: Q160360
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbFAQ
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Site Server version 3.0 
	- Microsoft Proxy Server versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Internet Information Server (IIS) Exception Monitor was created by
	Microsoft Product Support Services to troubleshoot server instability issues
	similar to the following:
	
	- IIS exits and a Dr. Watson error log is generated.
	
	- The Web service exits abnormally.
	
	- The browser returns an "ASP 0115" error.
	
	- The browser returns a "Server Application Error" message.
	
	- The browser returns a "Server Too Busy" error.
	
	MORE INFORMATION
	================
	
	Although still useful in some scenarios, Microsoft recommends using AutoDump
	Plus (ADPlus) to generate debug data. For additional information about AutoDump
	Plus, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q286350 HOWTO: Use Autodump+ to Troubleshoot Hangs and Crashes
	
	How to use the IIS Exception Monitor
	------------------------------------
	
	The following two documents, located on the MSDN Online Web Workshop, explain how
	to use the IIS Exception Monitor:
	
	  TITLE: Troubleshooting with the IIS Exception Monitor
	  URL : http://msdn.microsoft.com/workshop/server/iis/ixcptmon.asp
	
	  -AND-
	
	  TITLE: Analyzing Logs from IIS Exception Monitor
	  URL : http://msdn.microsoft.com/workshop/server/iis/readlogs.asp
	
	Download Locations
	------------------
	
	You can download the IIS Exception Monitor directly from the Web Workshop at the
	following locations:
	
	  http://download.microsoft.com/download/platformsdk/windbg/Feb2000/NT45/EN-US/dbg.exe
	
	Additional query words: proxie tshooting tshoot moniter sbn
	
	======================================================================
	Keywords          : kberrmsg kbFAQ 
	Technology        : kbSiteServSearch kbiisSearch kbAudDeveloper kbiis400 kbiis300 kbProxyServ100 kbProxyServSearch kbProxyServ200 kbSiteServ300
	Version           : :1.0,2.0,3.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
