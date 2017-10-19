---
layout: page
title: "Q157328: SNA Server Rejects Dependent LU6.2 Bind, Sense Code = 083500xx"
permalink: /kb/157/Q157328/
---

## Q157328: SNA Server Rejects Dependent LU6.2 Bind, Sense Code = 083500xx

	Article: Q157328
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbprogramming
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server may reject a dependent APPC LU Bind sent by the host, causing a
	session activation error and the following Microsoft Windows NT event log
	entry:
	
	  Event: 17
	  Description: APPC session activation failure: BIND negative response
	  sent
	  Sense Data = 083500xx
	
	NOTE: The xx bytes in the sense code point to the hexadecimal offset within the
	host bind request of the parameter that SNA Server is rejecting. In this case,
	the xx may point to the Session Instance Identifier.
	
	CAUSE
	=====
	
	If the host Bind request does not contain an APPC mode name, and the SNA Server
	configuration does not specify one of the following:
	
	- If the Local APPC LU and the Remote APPC LU is not partnered with the "BLANK"
	  mode name (the BLANK mode name needs to be reconfigured to support a single
	  session for use as a mode for dependent LUs).
	
	  -or-
	
	- If the Remote APPC LU does not have an Implicit Incoming Mode name defined.
	
	Then SNA Server will reject the bind request due to an unrecognized APPC mode
	name. The xx offset in the sense code may point to the Session Instance
	Identifier instead of the mode name, because the mode name is not present in the
	Bind request.
	
	WORKAROUND
	==========
	
	To solve the problem, define SNA Server appropriately to accept a Bind that does
	not contain an APPC mode name, using one of the methods described above.
	
	MORE INFORMATION
	================
	
	The following excerpt from an SNA Server DLC message trace illustrates the
	problem. The Bind request is sent by the host to SNA Server, though no mode name
	structured data subfield is sent by the host. The mode name structured data
	subfield has the following format:
	
	  byte 0 = length
	  byte 1 = 0x02
	  byte 2-n = Mode name: 0-8 character type-1134 symbol string
	
	  byte 0 = length
	  byte 1 = 0x02
	  byte 2-n = Mode name: 0-8 character type-1134 symbol string
	
	DLC    ---------------------------------------------- 13:10:59.89
	DLC    07160006->01020101 DLC DATA
	DLC                       DAF:02 OAF:01 ODAI:off Exp.
	DLC                       BIND   RQD SC  FI BC EC DR1
	DLC
	DLC    ---- Header  at address 00CF5A3C, 1 elements ----
	DLC    07040001 02002D00 020122A4 01008F00     <......-..."u....>
	DLC
	DLC    ---- Element at address 0120B024, start 10, end 87 ----
	DLC    6B800031 001307B0 B050B100 00858500     <k..1.....P...ee.>
	DLC    00060200 00000000 0000002C 000006D2     <...........,...K>
	DLC    F7C3C9C3 E21E0001 02090300 7E5BD122     <7CICS.......~[J">
	DLC    2F770010 04E4C3C3 C3E5E3C1 D44BD2F7     </w...UCCCVTAMKK7>
	DLC    C3C9C3E2 0008E4F9 F4F0F4F5 F0F2         <CICS..U9404502  >
	DLC
	
	SNA Server then sends the following Bind rejection, indicating a sense code of
	08350026, where 0x26 points to the start of the session instance identifier
	structured datqa subfield in the Bind request, or:
	
	 09 03 00 7E 5B D1 22 2F 77 00 10
	
	DLC    ---------------------------------------------- 13:10:59.98
	DLC    01020101->07160006 DLC DATA
	DLC                       DAF:01 OAF:02 ODAI:off Exp.
	DLC                       BIND   -RSP SC  FI SD BC EC DR1
	DLC
	DLC    ---- Header  at address 00CF5A3C, 1 elements ----
	DLC    07040001 02002D00 010222A4 01008F00     <......-..."u....>
	DLC
	DLC    ---- Element at address 01208F10, start 10, end 17 ----
	DLC    EF900008 35002631                       <....5.&1        >
	
	NOTE: To decode the format of the SNA Bind request and user data subfields, see
	the IBM SNA [ASCII 147]Formats Guide,[ASCII 148] GA27-3136, RU Formats (Chapter
	5) and User Data Subfields (Chapter 7).
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kb3rdparty kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	
