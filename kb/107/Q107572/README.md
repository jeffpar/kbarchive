---
layout: page
title: "Q107572: WFWG 3.11 Err Msg: Error 2138: The Workstation Service..."
permalink: kb/107/Q107572/
---

## Q107572: WFWG 3.11 Err Msg: Error 2138: The Workstation Service...

	Article: Q107572
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.11
	
	WINDOWS
	
	kbnetwork kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to run an MS-DOS-based application in an MS-DOS virtual machine (VM),
	the program may not start, or you may receive the following error message:
	
	  Error 2138: The workstation service has not been started.
	
	CAUSE
	=====
	
	This error can be caused by running an application that calls the
	DosMakeMailslot function after you have started the real-mode redirector.
	
	RESOLUTION
	==========
	
	Rather than using the real-mode redirector, use the protected-mode redirector
	(virtual redirector).
	
	MORE INFORMATION
	================
	
	The error message is misleading since you have started the workstation
	services.
	
	When running the real-mode redirector, mailslots are not supported in virtual
	machines.
	
	
	Additional query words: err msg 3.11 VxD
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
