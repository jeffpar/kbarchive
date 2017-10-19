---
layout: page
title: "Q130069: SERVICES.EXE Fails With Access Violation and Returns RPC Busy..."
permalink: /kb/130/Q130069/
---

## Q130069: SERVICES.EXE Fails With Access Violation and Returns RPC Busy...

	Article: Q130069
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "RPC Server is too busy..." message indicates that SERVICES.EXE or one of
	its threads may have hung. A thread may remain in a blocking state and appear to
	be hung if a resource is not available.
	
	SERVICES.EXE is a process which functions as the service control manager. It also
	runs a variety of Windows NT user mode functions as threads including server,
	browsing, event log, and RPC services. The symptoms are typically returned by
	workstations performing commands including net view, event log, and other
	related RPC requests. Client RPC requests to the pipe \SRVSVC, will result in
	Server Message Block (SMB) errors returned with STATUS_PIPE_NOT_AVAILABLE by the
	server. If the failure involves a SERVICES.EXE access violation, a DRWTSN32.LOG
	will be present in the %SYSTEMROOT% directory. Often, NET USE sessions provided
	by the server remain active and new sessions can be established. The following
	messages may be returned to client requests involving the RPC services:
	
	  Error 1723: The RPC server is too busy to complete this operation.
	  Error 1722: The RPC server is unavailable.
	  Error 1721: Not enough resources are available to complete this operation.
	
	CAUSE
	=====
	
	One possible cause of these symptoms involves the use of a 15 character
	computername that is resolved through the Sockets interface to domain name
	service (DNS). A parsing error can occur resulting in intermittent heap
	corruption. If DNS resolution is configured through the Control Panel TCP/IP DNS
	dialogue box, the computername may be resolved in this manner. The results of
	the heap corruption are not predictable. However, an access violation in
	SERVICES.EXE may result if a critical data structure is damaged. Also, the
	server will only attempt to resolve the name in order to establish a session
	with the computer in question. These operations may not occur frequently.
	However, the computer browsing service, print services or messenger service may
	initiate requests for such operations.
	
	RESOLUTION
	==========
	
	To correct this problem, install the new LMHSVC.DLL file.
	
	LMHSVC.DLL has been modified so that the computer name is correctly parsed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	
	Additional query words: prodnt computer domain name
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
