---
layout: page
title: "Q221429: XFOR: Continuous Retry Of Dirsync If Options Tab Not Configured"
permalink: /kb/221/Q221429/
---

## Q221429: XFOR: Continuous Retry Of Dirsync If Options Tab Not Configured

{% raw %}

	Article: Q221429
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc55
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the Microsoft Exchange Connector for Novell GroupWise, the Options tab allows
	you to configure the Import and Export containers as well as the GroupWise API
	Gateway path.
	
	If you configure the Import and Export containers, but not the GroupWise API
	Gateway path, the Microsoft Exchange Connector for Novell GroupWise attempts
	continuous unsuccessful directory synchronization (dirsync) retries.
	
	No error message warns you of this condition during startup of the services
	necessary to support the dirsync process. (These services include the Microsoft
	Exchange Connectivity Controller, the Microsoft Exchange Connector for Novell
	GroupWise, and the Microsoft Exchange Router for Novell GroupWise.)
	
	WORKAROUND
	==========
	
	Configure the API Gateway path correctly before you start the dirsync process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	
	MORE INFORMATION
	================
	
	The following events are logged in the Microsoft Windows NT application event
	log:
	
	  Event:6015
	  Source: MSExchangeGWRtr
	  Type: Information
	  Category: General
	  Description: The Microsoft Exchange Router for Novell GroupWise v5.5 (Build
	  2521.0) has started.
	
	  Event: 8229
	  Source: MSExchangeGWISE
	  Type: Information
	  Category: GroupWise Interface
	  Description: The Microsoft Exchange Connector for Novell GroupWise v5.5 (Build
	  2521.0) service has started.
	
	  Event: 6016
	  Source: MSExchangeGWRtr
	  Type: Information
	  Category: General
	  Description: The Microsoft Exchange Router for Novell GroupWise has stopped.
	
	  Event: 8262
	  Source: MSExchangeGWISE
	  Type: Error
	  Category: GroupWise Directory Synchronization
	  Description: Could not move file 'C:\WINNT4E\GDX3F.tmp' to
	  'gwrouter\togwise\GDX3F.api' - Win32 error '{WIN32:3(The system cannot find
	  the path specified.)}'
	
	  Event: 8243
	  Source: MSExchangeGWISE
	  Type: Error
	  Category: GroupWise Directory Synchronization
	  Description: {Access denied}: Error occurred when closing a file in which API
	  transactions have been written.
	
	  Event: 511
	  Source: MSExchangeGWISE
	  Type: Error
	  Category: GroupWise Directory Synchronization
	  Description: Error {Access denied}: The application failed while processing.
	
	The Microsoft Exchange Router for Novell GroupWise stops (Event 6016), but the
	dirsync process does not.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
