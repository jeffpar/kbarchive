---
layout: page
title: "Q201638: Multiple Event Viewer ID 1003 Messages from Counters"
permalink: kb/201/Q201638/
---

## Q201638: Multiple Event Viewer ID 1003 Messages from Counters

	Article: Q201638
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
	
	In the Event Viewer logs, multiple instances of the following events occur:
	
	  The description for Event ID ( 1003 ) in Source ( IISInfoCtrs ) could not be
	  found. It contains the following insertion string(s): (Data is 0x000006b5)
	
	  Unable to query the W3SVC (HTTP) service performance data. The error code
	  returned by the service is data DWORD 0. (Data is 0x00000426)
	
	  Unable to collect the FTP performance statistics. The error code returned by
	  the service is data DWORD 0. (Data is 0x00000426)
	
	In addition to these events, the IIS Admin service may not be able to be stopped
	or the Event Viewer may become temporarily locked.
	
	CAUSE
	=====
	
	These errors are caused when a server is being analyzed using Performance
	Monitor and the IIS Admin Service is stopped or restarted, or when the IIS
	counters are added when the IIS Admin Service is not running.
	
	RESOLUTION
	==========
	
	When you analyze a server using Performance Monitor, it is necessary to stop
	Performance Monitor before stopping or starting the IIS Admin service.
	
	MORE INFORMATION
	================
	
	The IIS counter collection DLL uses the IIS MetaBase (for enumerating server
	roots and IPC). When you are viewing the counters, the IIS Admin service, which
	hosts the IIS MetaBase, should not be shut down. It may appear to become locked,
	even though both the WWW and FTP Publishing services are shut down. In the
	event, the IIS Admin service is stopped while Performance Monitor is running,
	and either the IIS Admin service or Event Viewer will appear to become locked.
	Exit Performance Monitor and stop the IIS Admin service.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
