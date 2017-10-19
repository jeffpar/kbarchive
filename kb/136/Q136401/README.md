---
layout: page
title: "Q136401: PRB: Data Path Errors Starting SourceSafe"
permalink: /kb/136/Q136401/
---

## Q136401: PRB: Data Path Errors Starting SourceSafe

	Article: Q136401
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Visual SourceSafe 4.0 or 5.0, one of the following error messages
	might appear:
	
	  Invalid Data Path
	
	  Cannot find initialization variable "Data_Path"
	
	  Invalid DOS path
	
	When you start Visual SourceSafe 6.0, one of the following error messages might
	appear:
	
	  The SourceSafe database path <path> does not exist. Please select
	  another database.
	
	  Invalid DOS path: <File Path>
	
	  Invalid handle
	
	CAUSE
	=====
	
	These errors occur when a client installation does not properly define the path
	to the SourceSafe server's SRCSAFE.INI in the client's SRCSAFE.INI file
	(#include) or the server's SRCSAFE.INI does not contain a valid SourceSafe
	database location.
	
	
	RESOLUTION
	==========
	
	After installing the Visual SourceSafe server, always use NETSETUP.EXE to
	install the client installations. NETSETUP.EXE is found in the SourceSafe server
	directory.
	
	Be sure to check that:
	
	1. The client's SRCSAFE.INI include path is a valid path to the server's
	  SRCSAFE.INI location.
	
	2. If using the 16 bit client, ensure that the client's SRCSAFE.INI #include
	  path uses the 16-bit path, such as the following:
	
	  #include d:\<path>\vss_se~1\srcsafe.ini
	
	3. The server's SRCSAFE.INI DATA_PATH setting points to a valid SourceSafe
	  server DATA directory.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	
