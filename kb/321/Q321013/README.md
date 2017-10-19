---
layout: page
title: "Q321013: Err Msg: MD_SCRIPT_MAPS (6014) Has An Invalid Value"
permalink: /kb/321/Q321013/
---

## Q321013: Err Msg: MD_SCRIPT_MAPS (6014) Has An Invalid Value

	Article: Q321013
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Internet Information Services 5.0 or Internet Information Server
	4.0 (IIS) to access a Web page on a Web Server, you may receive an "HTTP 500"
	error message. You may also receive the following error message:
	
	  The server has encountered a configuration error attempting to process your
	  request. The configuration parameter MD_SCRIPT_MAPS (6014) has an invalid
	  value. Please contact the server administrator for assistance.
	
	CAUSE
	=====
	
	This issue may occur if the you have installed the ActiveState ActivePerl
	program and then removed it from the IIS computer. When you remove ActivePerl,
	the application mappings for the program may not be removed from IIS.
	
	RESOLUTION
	==========
	
	WARNING: Editing the metabase incorrectly can cause serious problems that may
	require you to reinstall any product that uses the metabase. Microsoft cannot
	guarantee that problems resulting from incorrectly editing the metabase can be
	solved. Edit the metabase at your own risk.
	
	NOTE: You should always back up the metabase before you edit it.
	
	To resolve this issue, remove the .pl and the .plx mappings from the IIS
	computer. To do this, follow these steps:
	
	1. Start the Internet Service Manager.
	
	2. Right-click your Web site, and then select Properties.
	
	3. Click the Home Directory tab, and then click the Configuration command
	  button.
	
	4. Click the App Mappings tab, select the .pl extension in the Application
	  Mappings list, and then click Remove.
	
	5. Select the .plx extension, and then click Remove.
	
	6. Click OK twice to close the dialog boxes.
	
	7. Recycle the IISADMIN service, to make sure that the changes are immediately
	  written to the metabase.
	
	8. Quit the Internet Service Manager.
	
	Additional query words: 6014 500 md script maps iis
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
