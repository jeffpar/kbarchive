---
layout: page
title: "Q162592: SLI Libraries Set Wrong RU Size After Unbind(Hold)"
permalink: kb/162/Q162592/
---

## Q162592: SLI Libraries Set Wrong RU Size After Unbind(Hold)

	Article: Q162592
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Some 32-bit SLI applications may fail when you try to transfer large amounts of
	data. Investigation shows that the SNA RUI layer is returning an error code of
	DATA_TRUNCATED when performing a RUI_READ of more than 256 bytes.
	
	CAUSE
	=====
	
	There is a problem the SLI library such that it is not picking up the RU size
	correctly on successive BINDs. When the SLI library receives a BIND, followed by
	UNBIND(HOLD) and then a new BIND, the SLI library posts an RUI_READ of 256
	bytes, even though 3840 byte RUs were negotiated in the final BIND.
	
	So, when an RU arrives on the session which is larger than 256 bytes, the
	SLI_RECEIVE posted only receives 256 bytes and gets a DATA_TRUCATED error from
	the underlying RUI libraries and the SLI application only gets the first 256
	bytes of the host application message.
	
	Following is an illustration of the data flow involved:
	
	SNA Server              Host
	----------              ----
	
	  <------------------- BIND ("NMP" session manager),
	                       SLU receive size = "85"(256)
	
	BIND +RSP --------------------------->
	     <logon>
	
	<---------------------- UNBIND(Hold)
	
	UNBIND +RSP ---------------------->
	
	  <------------------- BIND (Host SLI application),
	                       SLU receive size = "F8" (3840)
	
	BIND +RSP -------------------------->
	
	  <RUI_READ only reads 256 bytes >
	
	RESOLUTION
	==========
	
	Apply the update to SNA Server 2.11 Service Pack 1 and SNA Server 3.0 that
	corrects this problem. The updated module is Winsli32.dll.
	
	VTAM programmers will be able to work around this problem by configuring their
	session manager (NMP) to send a BIND to SNA Server that specifies a PLU send
	size of "F8" (this is set in Byte 11 of the BIND message).
	
	NOTE: This is NOT the BTU size, but MAXDATA if configured in the LU definition or
	RUSIZE if configured in the MODETAB for the LU-LU session (or the NMP host
	session manager application).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	MORE INFORMATION
	================
	
	The following is an LUA API trace of a large RUI_READ demonstrating the
	failure.
	
	SLI    ---------------------------------------------- 11:28:10.32
	SLI    SLI_RECEIVE request
	SLI    ---- Verb Parameter Block at address 0080FD68 ----
	
	Data omitted for brevity.
	In the VCB an lua_max_length of 4K assigned.
	NOTE: VCB structure is packed.
	
	SLI
	SLI    ---------------------------------------------- 11:28:10.61
	SLI    SLI_RECEIVE response
	SLI    IN_PROGRESS - OK
	SLI    ---- Verb Parameter Block at address 0080FD68 ----
	
	Data omitted for brevity.
	
	SLI
	RUI    ---------------------------------------------- 11:28:12.73
	RUI    RUI_READ response
	RUI    UNSUCCESSFUL - DATA_TRUNCATED
	
	Data omitted for brevity.
	In the VCB the lua_max_length(offset 35(2 byte field)) and
	lua_data_length(offset 37(2 byte field)) fields have a value of 256 bytes.
	
	RUI
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1,3.0
	
	=============================================================================
	
