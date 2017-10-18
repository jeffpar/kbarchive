---
layout: page
title: "Q152012: TP_IDs and CONV_Ids Cannot Be Shared Across Windows Processes"
permalink: kb/152/Q152012/
---

## Q152012: TP_IDs and CONV_Ids Cannot Be Shared Across Windows Processes

	Article: Q152012
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	When you use the SNA Server 16-bit or 32-bit Windows APPC interface, the
	APPC transaction program ID (TP_ID) and conversation ID (CONV_ID)
	parameters are only valid from the Windows process (or task) that created
	them. For example, if a 16-bit Windows APPC application receives a TP_ID by
	calling TP_STARTED, and a CONV_ID by calling [MC_]ALLOCATE, the TP_ID and
	CONV_ID are invalid if used by a different 16-bit Windows process. If
	another process tries to use these parameters when calling the APPC
	interface, the following APPC errors will occur:
	
	  primary_rc = AP_PARAMETER_CHECK (0x0001)
	  secondary_rc = AP_BAD_TP_ID (0x00000001)
	
	  primary_rc = AP_PARAMETER_CHECK (0x0001)
	  secondary_rc = AP_BAD_CONV_ID (0x00000002)
	
	SNA Server 32-bit Windows applications that call TP_STARTED and
	[MC_]ALLOCATE may appear to receive the same TP_ID and CONV_ID values.
	However, the underlying SNA Server APPC interface recognizes these values
	as unique because they are created by different process IDs.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	
