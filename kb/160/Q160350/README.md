---
layout: page
title: "Q160350: Index Server Returns HTTP 500 Error"
permalink: /kb/160/Q160350/
---

## Q160350: Index Server Returns HTTP 500 Error

	Article: Q160350
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Index Server processes one query, and then the following error message
	appears:
	
	  HTTP/1.0 500 Server Error (The security descriptor structure is invalid.)
	
	CAUSE
	=====
	
	Setup incorrectly registers the idq ISAPI extension with a partial path.
	Internet Information Server requires all extensions be registered with a full
	path. When another service or ISAPI extension changes directory, it may cause
	Index Server to return error 500.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Index Server 2.0 or Windows 2000 Indexing
	Service.
	
	WORKAROUND
	==========
	
	To work around this problem, you need to edit the registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     System/CurrentControlSet/Services/W3SVC/Parameters/Script Map
	
	3. Change the value for .ida from "idq.dll" to the following
	
	     <Systemroot>\system32\idq.dll
	
	  where Systemroot is the system directory for Windows NT (the value of the
	  %Systemroot% environment variable).
	
	4. Change the value for .idq to be the same as for .ida.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft Index Server version
	1.0. This problem has been corrected in Index Server 2.0 and Windows 2000
	Indexing Service.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100
	Version           : :1.0
	
	=============================================================================
	
