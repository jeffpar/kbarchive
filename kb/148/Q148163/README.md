---
layout: page
title: "Q148163: INFO: SLI Interface Enhancement for Receiving Large Chains"
permalink: /kb/148/Q148163/
---

## Q148163: INFO: SLI Interface Enhancement for Receiving Large Chains

	Article: Q148163
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If an LUA SLI application issues an SLI_RECEIVE request and passes a data buffer
	that is smaller than the size of the chain being received, the SLI interface
	returns a primary_rc of LUA_UNSUCCESSFUL and secondary_rc = LUA_DATA_TRUNCATED.
	The SLI library returns as much data as possible to the application's data
	buffer, but the remaining data in the chain is lost and cannot be extracted on
	subsequent SLI_RECEIVE requests.
	
	This forces the SLI application to allocate an SLI_RECEIVE data buffer large
	enough to handle the full chain size.
	
	Microsoft has enhanced the SNA Server 2.11 32-bit Windows LUA SLI interface so an
	application does not have to preallocate the full buffer size when receiving
	data using the SLI_RECEIVE API.
	
	MORE INFORMATION
	================
	
	This new feature is enabled with an update of the WINSLI32.DLL and the
	SNATRC.DLL. To enable this new feature, the Windows application must set the
	resv56[3] byte to 0x01 on the SLI_OPEN call. With this byte set, if the
	application issues SLI_RECEIVE and specifies a data buffer which is smaller than
	the chain of data to be received, SLI_RECEIVE returns with a primary_rc of
	LUA_OK and a secondary_rc of LUA_DATA_INCOMPLETE (0x00000060). The next
	SLI_RECEIVE returns the rest of the data for that chain, or as much as there is
	space in the receive buffer.
	
	If the SLI_OPEN does not have the resv56[3] byte set to 0x01, then the
	SLI_RECEIVE is supported normally. In this case if an SLI_RECEIVE is issued with
	a buffer smaller than the chain of data received from the host then the
	SLI_RECEIVE returns with primary_rc = LUA_UNSUCCESFUL, and the secondary_rc =
	LUA_DATA_TRUNCATED (0x00000003). The remainder of data for that chain is
	discarded by the SLI library.
	
	This feature is included in the latest Microsoft SNA Server version 2.11 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces): S E R V P A
	C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
