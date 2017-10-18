---
layout: page
title: "Q197612: Virtual and Physical Directories May Share the Same Name"
permalink: kb/197/Q197612/
---

## Q197612: Virtual and Physical Directories May Share the Same Name

	Article: Q197612
	Product(s): Internet Information Server
	Version(s): WINNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a physical directory (under WWWROOT) and then create a virtual
	directory in the Microsoft Management Console (MMC) with the same name, the
	original directory (the physical path) is inaccessible from a URL.
	
	CAUSE
	=====
	
	You need to refresh the MMC. When you create a virtual directory in the MMC, the
	physical directory is excluded. If you refresh the MMC interface, you will see
	only the virtual directory. This behavior is also the same for application
	roots. Note that in Internet Information Service 4.0, you may need to restart
	the MMC to see the change.
	
	RESOLUTION
	==========
	
	Refresh the MMC by clicking Action and then Refresh. You may need close the MMC
	and then restart it.
	
	
	Additional query words: MMC refresh iis4 iis5 directory directories duplicate
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
