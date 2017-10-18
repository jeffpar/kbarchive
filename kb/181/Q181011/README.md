---
layout: page
title: "Q181011: Appearance of CICS Abend Information in SNA Server Traces"
permalink: kb/181/Q181011/
---

## Q181011: Appearance of CICS Abend Information in SNA Server Traces

	Article: Q181011
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0 
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Information about an abend of a CICS program is returned in different ways
	depending on whether the Remote Environment (RE) is CICS or CICS LINK. For
	example, when you use a CICS RE, the data is returned in an SNA Function
	Management Header type 7 (FMH7). In contrast, when you use a CICS LINK RE that
	employs the IBM Distributed Program Link (DPL) protocol, CICS program abend
	information is returned as SNA Function Management (FM) data.
	
	Additionally, information is returned to the application program and to the
	client computer in different ways.
	
	MORE INFORMATION
	================
	
	CICS Remote Environment
	-----------------------
	
	The following is what can be expected if a CICS RE is used. In this actual
	example, the CICS program ended with abend code ASRA.
	
	Non-specific information about the abend is returned to the client program in a
	COMTI message similar to the following:
	
	  Source: xxxxxxx.yyyy.1 (A reference to the component.)
	  Error Number: 1410 (0x582)
	  (1410) The transaction program xxxx abended. Host LU is xxxxxxxx. Local
	  LU is xxxxxxxx. See Windows NT Event Log for SNA Error Log Data. Retry
	  the request.
	
	The following two entries appear in the Windows NT Application Event Log:
	
	  Event ID: 401
	  Source: COMTI
	  Description: (401) COM Transaction Integrator Received SNA-defined
	  Error Log Data text:
	
	  DFHAC2206 18:51:49 CICSAPPL Transaction xxxx failed with abend ASRA.
	  Updates to local recoverable resources backed out.
	
	-and-
	
	  Event ID: 102
	  Source: COMTI
	  Description:
	  (102) COM Transaction Integrator reported the following exception
	  to a client:
	
	  Component: xxxxxxx.yyyyyyy.1
	  Method: zzzzzzzz
	
	  Exception description:
	  (1410) The transaction program xxxx abended. Host LU is CICSAPPL. Local
	  LU is xxxx. See Windows NT Event Log for SNA Error Log Data. Retry the
	  request.
	
	A sample SNA Server Data Link Control (DLC) trace shows the following information
	when a CICS RE is used, where the following message was sent by CICS to SNA
	Server:
	
	  DLC 03020101->01160000 DLC DATA
	  DLC DAF:02 OAF:00 ODAI:on Normal
	  DLC RQD FMD FI BC EC DR1 CEB
	  DLC
	  DLC ---- Header at address 0101403C, 1 elements ----
	  DLC 07055330 30302E00 02000002 01004A01 <..S000........J.>
	  DLC
	  DLC ---- Element at address 01A06B40, start 10, end 195 ----
	  DLC 0B800107 07086400 008000B0 12E10032 <......d........2>
	  DLC 0310F315 11041200 41F5F6F5 F5F1F4F7 <..3.....A5655147>
	  DLC 404040E6 D5E6C340 0603F0F5 F1F0120F <@@@WNWC@..0510..>
	  DLC C3C9C3E2 40869699 40D4E5E2 61C5E2C1 <CICS@for@MVSaESA>
	  DLC 007AC4C6 C8C1C3F2 F2F0F640 F1F97AF1 <.zDFHAC2206@19z1>
	  DLC F37AF0F9 40E6D5E6 C3C9F5F1 C340E399 <3z09@CICSAPPL@Tr>
	  DLC 8195A281 83A38996 9540C2D6 C6C54086 <ansaction@xxxx@f>
	  DLC 81899385 8440A689 A3884081 82859584 <ailed@with@abend>
	  DLC 40C1E2D9 C14B40E4 978481A3 85A240A3 <@ASRAK@Updates@t>
	  DLC 96409396 83819340 99858396 A5859981 <o@local@recovera>
	  DLC 82938540 9985A296 A4998385 A2408281 <ble@resources@ba>
	  DLC 83928584 4096A4A3 4B40 <cked@outK@ >
	
	The Request Header (RH) (at the start of the element data) is 0x0B8001,
	indicating that this is an SNA request, that it contains function management
	data, and that a function management header follows.
	
	The Request Unit (RU) containing the Function Management Header (FMH) 0x070708
	follows, indicating its length is 7 bytes and that it is a type 7.
	
	The 0x086400 is SNA-defined sense data indicating 'DEALLOCATE_ABEND_PROG'. The
	data begins with 0x00B012E10032 and contains descriptive information about the
	abend.
	
	CICS LINK Remote Environment
	----------------------------
	
	The following is what you can expect if you use a CICS LINK RE. Again, in this
	actual example, the CICS program ended with abend code ASRA.
	
	Specific information about the abend is returned to the front-end program in a
	COMTI message, similar to the following:
	
	  Source: xxxxxxx.yyyy.1 (A reference to the component.)
	  Error Number: 1609 (0x649)
	  (1609)The destination program terminated with an abend code of: ASRA.
	
	Comparable information also appears in the Windows NT Application Event Log:
	
	  Event ID: 102
	  Source: COMTI
	  Description:
	  (102) COM Transaction Integrator reported the following exception to a
	  client:
	
	  Component: xxxxxxx.yyyy.1
	  Method: zzzzzzzz
	
	  Exception description:
	  (1609) The destination program terminated with an abend code of: ASRA.
	
	A sample SNA Server DLC trace shows the following information when a CICS LINK RE
	is used, where the following message was sent by CICS to SNA Server. The CICS
	program ended with an abend code ASRA. Note that this is the simplest form of
	this message. Sometimes it is more complicated and includes other data. Also
	note that the ASRA abend code may be located deeper in the message.
	
	  DLC 03020101->01160000 DLC DATA
	  DLC DAF:02 OAF:00 ODAI:on Normal
	  DLC RQE FMD BC EC DR1 CD
	  DLC
	  DLC ---- Header at address 01015014, 1 elements ----
	  DLC 0705000E 1D002E00 02000001 01004A01 <..............J.>
	  DLC
	  DLC ---- Element at address 01A04C74, start 10, end 30 ----
	  DLC 03902000 1212F207 430E0200 00000007 <.. ...2.C.......>
	  DLC 0CC1E2D9 C1 <.ASRA >
	
	0x039020 is the RH that indicates that we have an SNA request unit containing
	function management data (FMD).
	
	0x0012 is the length of the RU: it is 18 bytes in length, including the length
	field itself.
	
	0x12F2 specifies a User Control Data GDS variable, ID X'12F2'.
	
	0x07 is a length field, indicating a 7-byte header for the CICS DPL user data.
	
	0x430E02000000 is the header data related to CICS DPL protocol.
	
	0x0007 is the length of the data.
	
	0x0C is a DPL flag.
	
	0xC1E2D9C1 is CICS abend code ASRA.
	
	REFERENCES
	==========
	
	IBM Systems Network Architecture Formats (Document Number GA27-3136)
	
	See also, Microsoft SNA Server 4.0 Online Documentation SNA Formats Guide.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI100 kbSNAServ400
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
