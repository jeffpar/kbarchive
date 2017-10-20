---
layout: page
title: "Q187739: Edits to Virtual Directories are Not Reflected in the Metabase"
permalink: /kb/187/Q187739/
---

## Q187739: Edits to Virtual Directories are Not Reflected in the Metabase

{% raw %}

	Article: Q187739
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Any change to an existing virtual root in the registry will not be reflected in
	the metabase while Internet Information Server (IIS) 4.0 is running, even if the
	server is stopped and restarted. However, any new virtual root information is
	added once the server is stopped and restarted.
	
	MORE INFORMATION
	================
	
	When the Web server starts, it migrates all "new" virtual roots to the metabase
	("new" means not already in the metabase). The server then turns around and
	deletes all registry virtual roots and mirrors the virtual roots from the
	metabase to the registry. Any change to the metabase virtual roots re-mirrors
	the virtual roots to the registry, deleting anything that was changed in the
	registry.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
