---
layout: page
title: "Q184320: Using PATH_INFO and PATH_TRANSLATED from CGI Applications"
permalink: /kb/184/Q184320/
---

## Q184320: Using PATH_INFO and PATH_TRANSLATED from CGI Applications

	Article: Q184320
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CGI applications often use the HTTP variables PATH_INFO and PATH_TRANSLATED.
	However, these may appear to work incorrectly in Internet Information Server
	(IIS) version 4.0. These CGI environment variables return the physical path to
	the file that was passed to the CGI application as part of the GET statement.
	Instead, IIS returns the path to the CGI script.
	
	CAUSE
	=====
	
	This is by design, for security purposes. PATH_INFO and PATH_TRANSLATED can be
	used to get information about the physical makeup of the Web server and thus be
	used to mount an attack against the server.
	
	WORKAROUND
	==========
	
	If you want to use PATH_INFO and PATH_TRANSLATED as specified by the CGI
	specification, then use the AllowPathInfoForScriptMappings property. This
	property can be set using the Adsutil.vbs tool or the MetaEdit.exe tool, which
	comes with the Internet Information Server 4.0 Resource Kit. Using this
	property, you can set a Web server to allow or disallow the use of the
	variables.
	
	MORE INFORMATION
	================
	
	The following is an example:
	
	1. Change to the following directory (depending on platform):
	
	  Windows 2000: Drive:\inetpub\adminscripts
	  Windows NT 4: Drive:\winnt\system32\inetsrv\adminsamples
	
	2. Type the following:
	
	  "adsutil set w3svc/AllowPathInfoForScriptMappings True (Sets at Master
	  Properties Level)
	  adsutil set w3svc/1/AllowPathInfoForScriptMappings True (Sets at WebSite
	  Level)" (without the quotation marks)
	
	For more information, refer to AllowPathInfoForScriptMappings in the online
	documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
