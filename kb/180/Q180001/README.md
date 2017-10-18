---
layout: page
title: "Q180001: XADM: The Service Cannot Accept Control Messages at This Time"
permalink: kb/180/Q180001/
---

## Q180001: XADM: The Service Cannot Accept Control Messages at This Time

	Article: Q180001
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to stop the Microsoft Exchange Server System Attendant service,
	the following error may occur:
	
	  The service cannot accept control messages at this time.
	
	  Microsoft Windows NT
	  ID no 0xc0020425
	
	If you try to stop the service manually with the following command
	
	  NET STOP MSExchangeSA
	
	the following error message appears:
	
	  The service cannot be controlled in its present state.
	
	In Event Viewer there is no indication of problems with the service.
	
	CAUSE
	=====
	
	The System Attendant service has become unstable.
	
	WORKAROUND
	==========
	
	To work around this problem of the service being in an "uncontrollable" state,
	do one of the following:
	
	- Restart the server to allow the service to be forcibly shut down and
	  restarted with the server startup.
	
	  -OR-
	
	- Use the Windows NT Resource Kit tool Kill.exe to terminate the Mad.exe
	  process. Please refer to the Resource Kit documentation for more information.
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
