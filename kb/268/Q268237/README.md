---
layout: page
title: "Q268237: Excessive Thread Handle Leak Causes &quot;Stop 0x0000003b&quot; Error"
permalink: kb/268/Q268237/
---

## Q268237: Excessive Thread Handle Leak Causes &quot;Stop 0x0000003b&quot; Error

	Article: Q268237
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.0, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message on a blue screen on an Alpha-based
	computer:
	
	  STOP 0000003b 00000000 00000000 00000000 00000000
	  SYSTEM_SERVICE_EXCEPTION
	
	CAUSE
	=====
	
	This behavior can occur if the computer runs low on non-paged pool because a
	service or process is not cleaning up after its terminated threads, causing a
	handle leak.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbAudDeveloper kbBackOfficeSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
