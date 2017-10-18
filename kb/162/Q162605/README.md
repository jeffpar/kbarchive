---
layout: page
title: "Q162605: The SLI Interface Does not Return LUA_DATA_INCOMPLETE"
permalink: kb/162/Q162605/
---

## Q162605: The SLI Interface Does not Return LUA_DATA_INCOMPLETE

	Article: Q162605
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an LUA SLI application issues an SLI_RECEIVE request and passes a data buffer
	that is smaller than the size of the chain being received, the SLI interface
	returns a primary_rc of LUA_UNSUCCESSFUL and secondary_rc = LUA_DATA_TRUNCATED.
	
	The SNA Server 2.11 32-bit Windows LUA SLI interface was enhanced in Service Pack
	1 (SP1), so an application does not have to preallocate the full buffer size
	when receiving data using the SLI_RECEIVE API.
	
	However, even with this enhancement enabled, the SLI interface might not return a
	primary_rc of LUA_OK and a secondary_rc of LUA_DATA_INCOMPLETE (0x00000060)
	under certain conditions.
	
	CAUSE
	=====
	
	When the receive buffer for the SLI_RECEIVE is filled up with data the SLI
	library should return the SLI_RECEIVE verb with a primary_rc of LUA_OK and a
	secondary_rc of LUA_DATA_INCOMPLETE (0x00000060). However, there are certain
	conditions in which the SLI interfaces carries on receiving data, even if the
	passed buffer has been filled up until it received the entire chain of Request
	Units.
	
	Because the passed data buffer is smaller than the entire chain of RUs being
	received, the SLI interface returns the SLI_RECEIVE verb with a primary_rc of
	LUA_UNSUCCESSFUL and a secondary_rc = LUA_DATA_TRUNCATED.
	
	RESOLUTION
	==========
	
	An update to SNA Server 2.11 SP1 corrects this problem. The updated modules
	are:
	
	  Acssli.dll for OS/2
	  Winsli.dll for Windows 3.x
	  Winsli32.dll for Windows 95
	  Winsli32.dll for Windows NT
	
	REFERENCES
	==========
	
	For additional information on the enhancement that was made in SNA Server SP1,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q148163 SLI Interface Enhanced for Receiving Large Chains
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 SP1.
	
	
	A supported fix is now available for 2.11 SP1 , but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	Additional query words: prodsna VSP1 LUA SLI_OPEN SLI_RECEIVE LUA_DATA_TRUNCATED
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1
	
	=============================================================================
	
