---
layout: page
title: "Q175693: MTG: Err Msg: Unknown Error Code 914:F8"
permalink: kb/175/Q175693/
---

## Q175693: MTG: Err Msg: Unknown Error Code 914:F8

	Article: Q175693
	Product(s): Microsoft Mail For PC Networks
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Server 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	External fails to dynamically connect to a postoffice to delivery mail. The
	postoffice server is a computer running Novell NetWare. The Session.log records
	the following error:
	
	  unknown error code 914:F8
	
	CAUSE
	=====
	
	This problem may be because IPXRTR on the NetWare server has been loaded.
	
	RESOLUTION
	==========
	
	If IPXRTR is the problem, on the server at the command prompt, type:
	
	  "Unload IPXRTR" (without the quotation marks)
	
	NOTE: Rebooting the server may cause the problem to return due to IPXRTR being
	loaded in the boot process.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailServ350
	Version           : winnt:3.5
	Issue type        : kbprb
	
	=============================================================================
	
