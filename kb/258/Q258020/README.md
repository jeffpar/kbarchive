---
layout: page
title: "Q258020: &quot;Object Not Found&quot; Error Message Accessing &quot;The Known Universe&quot;"
permalink: /kb/258/Q258020/
---

## Q258020: &quot;Object Not Found&quot; Error Message Accessing &quot;The Known Universe&quot;

	Article: Q258020
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	- Zoomit VIA, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to the Compass client and try to access The Known Universe, you
	may receive the following error message:
	
	  Object Not Found
	
	CAUSE
	=====
	
	This error message is displayed if the Known Universe or DSA object is missing
	from the directory.
	
	RESOLUTION
	==========
	
	The Known Universe and DSA objects are created by default upon initialization of
	the directory. These objects are necessary for the metadirectory server to run.
	The directory tree may not be accessible without these objects; a root base must
	be specified when you starting Compass to browse the directory tree.
	
	To Recover Mandatory Objects
	----------------------------
	
	1. Run the following command to log on and browse. This may allow you to browse
	  and discover the missing object:
	
	  compass2 -r "o=<orgname>,c=<country>"
	
	2. At a command prompt, run the following commands:
	
	  zoomserv\bin\init\oid\updoid.bat (refreshes the schema)
	
	  zoomserv\bin\init\importt -updatedib -updateallattributes (rebuilds the naming
	  structure)
	
	  zoomserv\bin\init\methods\loadmeth.bat (restores the directory methods)
	
	3. Run ViaCompact.
	
	This should create a refreshed state for default objects in the directory.
	
	Additional query words: metadirectory mms via
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbZoomitSearch kbMSNonProductSearch kbMMSSearch kbMMS210 kbZoomit210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
