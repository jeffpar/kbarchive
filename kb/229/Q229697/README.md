---
layout: page
title: "Q229697: How to Enable IPX/SPX in Connection Manager"
permalink: kb/229/Q229697/
---

## Q229697: How to Enable IPX/SPX in Connection Manager

	Article: Q229697
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Connection Manager cannot make a RAS connection using IPX/SPX.
	
	CAUSE
	=====
	
	IPX/SPX is disabled by default in Connection Manager.
	
	RESOLUTION
	==========
	
	To enable IPX, add the following lines to the <profilename>.cms file:
	
	  [Server&ProfileName]
	  Negotiate_IPX=1
	
	Note: It may be necessary to add the Server&ProfileName heading to the .cms
	file if it does not already exist.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
