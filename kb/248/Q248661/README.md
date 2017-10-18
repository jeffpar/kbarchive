---
layout: page
title: "Q248661: IIS Does Not Start, Dependency Error Message"
permalink: kb/248/Q248661/
---

## Q248661: IIS Does Not Start, Dependency Error Message

	Article: Q248661
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start any version of Microsoft Internet Information Server
	(IIS), it may not start and you may receive the following error message:
	
	  The dependency service does not exist or has been marked for deletion.
	
	CAUSE
	=====
	
	This behavior can occur when the RPC Configuration service is missing.
	
	RESOLUTION
	==========
	
	To resolve this behavior, install the RPC Configuration service.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
