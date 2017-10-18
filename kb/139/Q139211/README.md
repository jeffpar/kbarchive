---
layout: page
title: "Q139211: Win32 RECEIVE_AND_POST Uses an Event Handle, Not a Semaphore"
permalink: kb/139/Q139211/
---

## Q139211: Win32 RECEIVE_AND_POST Uses an Event Handle, Not a Semaphore

	Article: Q139211
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SNA Server APPC Programmer's Guide included with SNA Server 2.0, 2.1 and
	2.11 incorrectly documents a sema parameter in the description of the
	[MC_]RECEIVE_AND_POST function.
	
	On Windows NT, the sema parameter is an auto-reset event object obtained by
	calling either the CreateEvent or OpenEvent Win32 functions. Because the Win32
	APPC interface uses an auto-reset event object, the application does not need to
	manage the state of the event when calling [MC_]RECEIVE_AND_POST.
	
	On OS/2, the sema parameter is either a RAM or system semaphore.
	
	This correction is documented in the SNA Server 2.11 Enhancements Guide.
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbinfo
	
	=============================================================================
	
