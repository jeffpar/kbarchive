---
layout: page
title: "Q156735: WOW Applications Stack Fault When Launched by a Service"
permalink: kb/156/Q156735/
---

## Q156735: WOW Applications Stack Fault When Launched by a Service

	Article: Q156735
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows on Windows (WOW), or 16-bit Windows applications, may terminate with a
	stack fault error when launched by a Windows NT service. The stack fault error
	will look similar to the following:
	
	  Application Error caused a stack fault in module UNKNOWN at address
	  00c7:4394f Will Close.
	
	CAUSE
	=====
	
	WOW applications create a secure shared memory region during startup that allows
	only logged on users access. When a service launches a second WOW application,
	the resulting process will attempt to open the existing shared memory region.
	Because the security context of the process started by a service is not purely
	interactive, when it attempts to access the existing shared memory region, it
	gets an access denied error. The second WOW process will continually try to
	access the existing shared memory region until a stack fault occurs and it
	terminates.
	
	RESOLUTION
	==========
	
	Wow32.dll and Vdmdbg.dll were modified to allow non-logged on users access to
	the shared memory region.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt vb schedule
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
