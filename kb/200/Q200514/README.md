---
layout: page
title: "Q200514: Err Msg: Server Failed to Load Application , 80004005"
permalink: kb/200/Q200514/
---

## Q200514: Err Msg: Server Failed to Load Application , 80004005

	Article: Q200514
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an ASP file, the following error messages occur:
	
	  Server Application Error
	  Server failed to load Application.
	
	  Event ID: 36
	  Source: W3SVC
	  Description: The server failed to load application ''. The error was
	  '80004005'.
	
	CAUSE
	=====
	
	The corresponding Web application does not have a name specified or does not
	have the Script permission enabled.
	
	RESOLUTION
	==========
	
	1. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Server snap-in for the Microsoft Management Console (MMC).
	
	2. Right-click the Web site (or virtual directory), and then click Properties on
	  the Context menu.
	
	3. Click the Home Directory (or Virtual Directory) tab.
	
	4. Under Application Settings, if the Name text box is empty, type in a name.
	
	5. Click the Script permission check box to enable it.
	
	6. Click OK to return to the ISM.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: application online help product documentation web app errmsg kberrmsg akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
