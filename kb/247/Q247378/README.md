---
layout: page
title: "Q247378: HTTP/1.1 Error 403 - Access Forbidden"
permalink: /kb/247/Q247378/
---

## Q247378: HTTP/1.1 Error 403 - Access Forbidden

	Article: Q247378
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp403 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Following the submission of a GET request to a Web server, the Web server
	responds by sending the following error message to the client browser:
	
	  HTTP/1.1 Error 403 - Access Forbidden
	
	CAUSE
	=====
	
	The AccessPerm key for the object being requested exists in the metabase, but
	not in the file system. Presently there is no synchronization between the file
	system and properties in the metabase.
	
	RESOLUTION
	==========
	
	You must manually synchronize the various properties in the metabase and File
	System. To do this, follow the instructions below.
	
	Option 1
	
	1. Re-create the object in the file system.
	
	2. Open the MMC and delete the object.
	
	3. Open Windows Explorer and delete the object from the file system.
	
	Option 2
	
	Use Adsutil.vbs to delete the metabase entry for the object in question.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp403 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
