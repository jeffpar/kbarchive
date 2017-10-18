---
layout: page
title: "Q248037: Error Message: HTTP Error 500-13 - Server Too Busy"
permalink: kb/248/Q248037/
---

## Q248037: Error Message: HTTP Error 500-13 - Server Too Busy

	Article: Q248037
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp50013 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a computer running Internet Information Server 4.0 or
	Internet Information Services 5.0, you may receive the following error message:
	
	  HTTP Error 500-13 - Server too busy
	
	  The request cannot be processed at this time. The amount of traffic exceeds
	  the Web site's configured capacity.
	
	CAUSE
	=====
	
	The server is unable to satisfy the request due to the internet traffic or
	processor utilization the server is experiencing.
	
	WORKAROUND
	==========
	
	Several steps can be taken to optimize server performance. Please see the list
	of references in the "More Information" section for additional information.
	
	You may want to consider multiple servers to service the volume of traffic and
	use Windows Load Balancing to distribute the load.
	
	MORE INFORMATION
	================
	
	More information regarding Windows Load Balancing is available at:
	
	  http://www.microsoft.com/ntserver/ntserverenterprise/exec/feature/WLBS/
	
	For additional information regarding performance tuning, which may help you
	resolve this issue, see the following:
	
	  Q235461 Enhancing Performance in Internet Information Server 4.0
	
	  Tuning Internet Information Server Performance
	
	The following white paper may also provide some insight:
	
	  http://www.microsoft.com/backstage/whitepaper.htm
	
	For tuning tips on IIS 4.0 (many of which are still valid), download the
	self-extracting document "Tuning Parameters for High-Volume Sites" from the
	following location:
	
	  http://www.microsoft.com/ntserver/zipdocs/tuning.exe
	
	For ASP tips and tricks for high-volume servers, see the following resources:
	
	  http://msdn.microsoft.com/workshop/server/asp/asptips.asp?
	
	  http://mspress.microsoft.com/prod/books/2408.htm
	
	  http://www.microsoft.com/backstage/whitepaper.htm
	
	  http://msdn.microsoft.com/workshop/server/iis/tencom.asp?
	
	  http://msdn.microsoft.com/library/officedev/odeopg/deovropeningaccessdatabasebyusingado.htm
	
	  http://msdn.microsoft.com/library/psdk/iisref/iiwadata.htm
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp50013 kbProd2Web 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
