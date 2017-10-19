---
layout: page
title: "Q191452: INF: Key Not Found Accessing VSAM KSDS on IBM OS/390"
permalink: /kb/191/Q191452/
---

## Q191452: INF: Key Not Found Accessing VSAM KSDS on IBM OS/390

	Article: Q191452
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for AS/400 and VSAM, version 1.0, included with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HRESULT 80004005, (Key not found.) is returned to a consumer program attempting
	to open a VSAM KSDS on an OS/390 mainframe.
	
	RESOLUTION
	==========
	
	To prevent this problem, be sure to define the entire VSAM record key in the
	Host Column Definition file (HCD). Naturally, this means that all the VSAM
	record fields that precede the key in the VSAM file record layout must also be
	defined in the HCD file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvSearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
