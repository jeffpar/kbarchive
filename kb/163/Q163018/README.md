---
layout: page
title: "Q163018: Distributed Link Service Does Not Reactivate Dropped Connection"
permalink: /kb/163/Q163018/
---

## Q163018: Distributed Link Service Does Not Reactivate Dropped Connection

	Article: Q163018
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a connection between a remote SNA Server with a Distributed Link service and
	a central SNA Server that has the appropriate link service distributed is
	dropped, the Distributed Link Service does not attempt to reactivate the
	connection even if the "Maximum number of attempts" is set to "No Limit" on the
	"Connection Activation Limits" tab for that particular connection. In the SNA
	Administrator program, you will see the connection dropping to a status of
	"Inactive."
	
	CAUSE
	=====
	
	The SNA Server service was changed in SNA Server 2.11 to stop retrying
	connection activations if a link service reports an Open(LINK) failure. The SNA
	Server service only tries to reactivate the connection once after this outage
	occurs.
	
	If the Distributed Link service, or the network, is not available at this time,
	the SNA Server service stops trying to establish the connection.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Apply the update to SNA Server 2.11 Service Pack 1 that corrects this
	  problem. The updated module is Snaremls.dll. See the Status section below for
	  information on how to obtain the update.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- In the SNA Server link service configuration, point to the same remote link
	  service twice. For example: \\server\snadlc1; \\server\snadlc1. This causes
	  the Distributed Link Service to automatically retry between these two remote
	  links if one fails.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 Service
	Pack 1 (SP1).
	
	
	A supported fix is now available for 2.11 SP1 , but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	In the update to SNA Server 2.11 SP1, a new registry value has been added to
	cope with Leased Links, which do not make use of the retry parameters. The new
	registry value specifies the delay in seconds (with a granularity of five-second
	intervals), before the outage message is generated. The default setting is 20
	seconds.
	
	The registry value is:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Sevices\ 
	  <link_service>\Parameters\ExtraParameters\RetryPeriod (REG_DWORD).
	
	
	With regard to the symptom, here is an example of what you may see with the SNA
	Server Data Link Control message trace enabled:
	
	|000000a1.000000a7 DLC    ----------------------------------------------
	10:45:15.54
	|000000a1.000000a7 DLC    08160000->01020300 OPEN  LINK RSP ERROR
	|000000a1.000000a7 DLC                       Err:0D0A
	|000000a1.000000a7 DLC
	|000000a1.000000a7 DLC    ---- Header  at address 00CC44B4, 2 elements ----
	|000000a1.000000a7 DLC    03102700 00890D0A 010004DC 0100A400
	<..'..i........u.>
	|000000a1.000000a7 DLC
	|000000a1.000000a7 DLC    ---- Element at address 011BD910, start 1, end 92
	----
	|000000a1.000000a7 DLC    53444C43 31202020 2020534E 41534552     <SDLC1
	SNASER>
	|000000a1.000000a7 DLC    56522020 00010101 01C1FF01 7530000A     <VR
	.....A..u0..>
	|000000a1.000000a7 DLC    03E80003 03E8FFFF 03E8FFFF 03E8001E
	<.Y...Y...Y...Y..>
	|000000a1.000000a7 DLC    7530000A 03E8003C 03E8000F 03E8012C
	<u0...Y.<.Y...Y.,>
	|000000a1.000000a7 DLC    00004402 00000000 00000000 00000000
	<..D.............>
	|000000a1.000000a7 DLC    00000000 00000000 00000000
	<............    >
	|000000a1.000000a7 DLC
	|000000a1.000000a7 DLC    ---- Element at address 011BA5BC, start 1, end 1
	----
	|000000a1.000000a7 DLC    03                                      <.
	>
	
	In the Application Event Log, this problem is logged as an Information
	event with Message ID 77 and is decoded as follows:
	
	  Connection <connection name>   failed to activate due to failure at link
	  service.
	
	  Error Code = 0D0A
	
	  EXPLANATION
	  The node failed to activate a link service to establish the specified
	  connection.
	
	The reason for the failure is given by the error code, as follows:
	
	  X'0001' - Hardware initialization failure
	
	  X'0008' - Invalid XID length specified
	
	  X'000A' - Fatal LCC hardware error
	
	  X'000B' - Invalid link index
	
	  X'000C' - Open(Link) has insufficient data
	
	  X'000D' - Link connection timeout
	
	  X'000E' - Maximum connection count reached or internal resources
	            exhausted
	
	  X'0011' - Close(Link) received while Open(Link) pending
	
	  X'0012' - Duplicate request
	
	  X'0A11' - X.25 PVC already in use
	
	  X'0AFF' - Duplicate destination MAC/SAP for link service
	
	  X'0D01' - Insufficient memory to locate link service
	
	  X'0D02' - Invalid SNA Server Domain
	
	  X'0D04' - Link Service not found
	
	  X'0D07' - Link Service not found
	
	  X'0D0A' - Unable to open pipe to link service
	
	  X'0D0B' - No room in service table for link service
	
	  X'0D0C' - Remote Server not found or inactive
	
	  X'0D0D' - Link Service not active at remote Server
	
	  X'0D0E' - Link service not available to Distributed Link Service
	
	  X'0D0A' - Unable to open pipe to link service
	
	Additional query words: prodsna SP1 DLS Outage
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
