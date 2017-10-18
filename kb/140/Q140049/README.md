---
layout: page
title: "Q140049: Err Msg: The Service Has Not Been Started"
permalink: kb/140/Q140049/
---

## Q140049: Err Msg: The Service Has Not Been Started

	Article: Q140049
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to configure services in Internet Server Manager, you will get the
	following error message:
	
	  The service has not been started.
	
	CAUSE
	=====
	
	Stopped services cannot be configured in Internet Server Manager because
	configuration is done through the server's RPC interface, which is only
	available when the service is running.
	
	RESOLUTION
	==========
	
	Start the service in question. If configuration changes are made, choose Apply
	to make the new settings take effect.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.0,4.0
	
	=============================================================================
	
