---
layout: page
title: "Q255912: Shutting Down COM+ Application at Timeout"
permalink: kb/255/Q255912/
---

## Q255912: Shutting Down COM+ Application at Timeout

	Article: Q255912
	Product(s): Internet Information Server
	Version(s): WINDOWS:2000; winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For a COM+ application, you can set the server process that is associated with
	the COM+ application to shut down automatically after a certain period of
	inactivity through the Component Services.
	
	If the COM+ application is used by Internet Information Services (IIS), the
	type-library caching feature in IIS must be disabled to let this timeout take
	effect. The "More Information" section of this article describes how to disable
	the type-library caching.
	
	MORE INFORMATION
	================
	
	The AspEnabletypelibCache value in the metabase controls the type library
	caching feature. Set it to False (it is set to True by default) to disable the
	type library caching. There are three application-protection levels in IIS:
	
	  Low (IIS Process)
	  Medium (Pooled)
	  High (Isolated)
	
	The AspEnabletypelibCache setting at the /W3SVC level of the metabase affects all
	applications with Low (IIS Process) and Medium (Pooled) protection levels. If
	the application protection is set to High (Isolated), the AspEnabletypelibCache
	setting should be set at that application level of the metabase, so that it only
	applies to that application.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbiisSearch kbiis500
	Version           : WINDOWS:2000; winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
