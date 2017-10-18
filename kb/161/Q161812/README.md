---
layout: page
title: "Q161812: TN3270 Server Does Not Send All Data to Host"
permalink: kb/161/Q161812/
---

## Q161812: TN3270 Server Does Not Send All Data to Host

	Article: Q161812
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a TN3270 emulator submits data to the TN3270 Server, the TN3270 Server does
	not transfer all of the data to the host. The TN3270 emulator session stays
	intact. The host application may complain that not all of the data was sent, and
	sends any errors as data to the receiving application.
	
	CAUSE
	=====
	
	The problem is caused by the TN3270 Server's logic for handling SYSREQ requests.
	In TN3270, one way for a TN3270 client to send a SYSREQ request is to send an
	SNA TESTREQ key value 0x01. (Note: TESTREQ/SYSREQ are normally 0xF0. However,
	the original specification for TN3270 did not specify what message a TN3270
	client should send when the user press the TESTREQ/SYSREQ key, so different
	vendors implemented it in different ways.) The TN3270 Server has logic to spot
	this key as the first byte of an RU, and not to send it to the host, but instead
	to send a SYSREQ request. However, this code should have been looking for a
	TESTREQ as the first byte of a chain, not the first byte of an RU. In this case,
	one of the subsequent RUs in the chain began with 0x01 and the TN3270 Server
	treated this as a TESTREQ key and ended the chain (EC) when it should not have.
	
	NOTE: Splitting a chain into RUs is arbitrary, so there is no significance to
	where the split occurs.
	
	This problem is seen when chunks of data are larger than the RU size supported
	for the session, and the chunks need to be split up. The chunk size (chain size)
	is controlled by the Structured Field Size, configurable in some TN3270
	emulators. The RU size is controlled by the primary half session's bind image
	(byte 10).
	
	The following is a sample trace that shows the problem:
	
	Beginning of Chain (BC):
	
	|000000c9.000000ca DLC    ----------------------------------------------
	17:06:52.39
	|000000c9.000000ca DLC    01020101->0A160080 DLC DATA
	|000000c9.000000ca DLC                       DAF:01 OAF:03 ODAI:off Normal
	|000000c9.000000ca DLC                       RQE FMD BC DR1 BB
	|000000c9.000000ca DLC
	|000000c9.000000ca DLC    ---- Header  at address 00CC4620, 4 elements ---
	-
	|000000c9.000000ca DLC    00050004 00032C00 01030068 0100E800
	<......,....h..Y.>
	|000000c9.000000ca DLC
	|000000c9.000000ca DLC    ---- Element at address 011BCA3C, start 10, end
	268 ----
	|000000c9.000000ca DLC    02908088 ...etc
	
	Middle Chain (MC):
	
	|000000c9.000000ca DLC    ----------------------------------------------
	17:06:52.59
	|000000c9.000000ca DLC    01020101->0A160080 DLC DATA
	|000000c9.000000ca DLC                       DAF:01 OAF:03 ODAI:off Normal
	|000000c9.000000ca DLC                       RQE FMD MC DR1
	|000000c9.000000ca DLC
	|000000c9.000000ca DLC    ---- Header  at address 00CC444C, 4 elements ---
	-
	|000000c9.000000ca DLC    00050004 40032C00 01030069 0100E800
	<....@.,....i..Y.>
	|000000c9.000000ca DLC
	|000000c9.000000ca DLC    ---- Element at address 011BD7EC, start 10, end
	268 ----
	|000000c9.000000ca DLC    009000FF ...etc
	
	More middle chains flow...
	
	End Chain (EC)
	
	|000000c9.000000ca DLC    ----------------------------------------------
	17:06:54.79
	|000000c9.000000ca DLC    01020101->0A160080 DLC DATA
	|000000c9.000000ca DLC                       DAF:01 OAF:03 ODAI:off Normal
	|000000c9.000000ca DLC                       RQE FMD EC DR1 CD
	|000000c9.000000ca DLC
	|000000c9.000000ca DLC    ---- Header  at address 00CC46F0, 4 elements ---
	-
	|000000c9.000000ca DLC    00050400 00032C00 01030072 0100E800
	<......,....r..Y.>
	|000000c9.000000ca DLC
	|000000c9.000000ca DLC    ---- Element at address 011BE7E4, start 10, end
	268 ----
	|000000c9.000000ca DLC    01902001 ...etc
	                               ^^ - This is the TESTREQ key.
	
	The SYSREQ and TESTREQ AID bytes are found in the "IBM 3270 Information Display
	System" reference (Part #: GA23-0061-2).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. With this hotfix,
	the TN3270 Server now looks for TESTREQ as the first byte of a chain instead of
	an RU.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, and 3.0. This problem was corrected in the latest Microsoft SNA Server
	2.11 and 3.0 U.S. Service Packs. For information on obtaining these service
	packs, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	A supported fix is now available for version 2.11 Service Pack 1, but has not
	been fully regression-tested and should be applied only to systems experiencing
	this specific problem. Unless you are severely impacted by this specific
	problem, Microsoft recommends that you wait for the next Service Pack that
	contains this fix. Contact Microsoft Technical Support for more information.
	
	
	Additional query words: prodsna 2.00 2.10 2.11 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0
	
	=============================================================================
	
