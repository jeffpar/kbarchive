---
layout: page
title: "Q247677: Error Message: 403.2 Forbidden: Read Access Forbidden"
permalink: kb/247/Q247677/
---

## Q247677: Error Message: 403.2 Forbidden: Read Access Forbidden

	Article: Q247677
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp4032 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When connecting to an Internet Information Services (IIS) 5.0 Web site, a user
	may receive the following error message:
	
	  403.2 Forbidden: Read Access Forbidden
	
	CAUSE
	=====
	
	This error can be caused by a number of things, but the following are the most
	common:
	
	- The resource being accessed does not have read access set (through IIS). For
	  example, the SCRIPTS directory does not have read access by default.
	
	- The default document specified is either not correct, or the default document
	  does not exist. For example, the default document may be set to Default.htm,
	  but the one uploaded by the Web publisher is Index.htm. If a file named
	  Default.htm is not on that Web site, this error message occurs.
	
	- Directory browsing is not enabled when it should be. For example, if you have
	  a Web site configured to show a directory listing (all files in the name
	  space you are accessing), and directory browsing is not enabled, this error
	  message occurs.
	
	RESOLUTION
	==========
	
	Be sure that read access is enabled on the site or directory where users are
	browsing files. If directory browsing should be used (for a file list), then it
	must be specified on the properties of that directory or site (a default
	document should not be used to prevent other problems if this is the case).
	
	Additional query words: IIS 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp4032 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
