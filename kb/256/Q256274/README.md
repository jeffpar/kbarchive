---
layout: page
title: "Q256274: Index Server Searches Return IDQ Code Instead of Search Results"
permalink: kb/256/Q256274/
---

## Q256274: Index Server Searches Return IDQ Code Instead of Search Results

	Article: Q256274
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a search using HTM, IDQ, HTX files, the client may receive the code
	of the IDQ page in its browser instead of search results.
	
	CAUSE
	=====
	
	This behavior can occur when the folder that contains the IDQ file has not been
	set as an application, or one of its parent folders is not marked as an
	application, you may see .
	
	Also, if you do not make an HTTP connection to the HTM file when you attempt to
	do a query, the code of the IDQ page appears on the screen.
	
	RESOLUTION
	==========
	
	1. In the management console for IIS, select the folder that contains the IDQ
	  file, and then click Properties.
	
	2. On the Directory tab, select Application Settings, and then click Create.
	  This sets the folder as an application.
	
	3. Click the Configuration button. Verify that there is an entry for the IDQ
	  file in the App Mappings list, and that it is mapped to Idq.dll.
	
	4. Make sure that the connection you are testing the query over is an HTTP
	  connection. You cannot double-click the HTM file. You must make a connection
	  through the Web server using http.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
