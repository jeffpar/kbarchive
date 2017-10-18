---
layout: page
title: "Q266091: Configuring for Host Compression When You Use Non-Extended BINDs"
permalink: kb/266/Q266091/
---

## Q266091: Configuring for Host Compression When You Use Non-Extended BINDs

	Article: Q266091
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In most cases, SNA Server session-level compression is negotiated between SNA
	Server or Host Integration Server 2000 and the host by using an extended BIND.
	It is possible to use SNA Server session-level compression when the host sends a
	non-extended BIND to SNA Server.
	
	MORE INFORMATION
	================
	
	If the host sends a non-extended BIND requesting session-level compression, the
	following configuration is required on SNA Server and Host Integration Server
	2000 to ensure that its BIND response indicates that the request for compression
	is accepted:
	
	3270 Compression:
	
	1. The Compression Type option on the System Identification tab in the
	  Connection Properties dialog box must be set to LZ9.
	
	2. The Use Compression option in the 3270 LU Properties dialog box must be
	  enabled for 3270 sessions that require compression.
	
	LU 6.2 Compression:
	
	1. The Compression Type option on the System Identification tab in the
	  Connection Properties dialog box must be set to either RLE or LZ9.
	
	2. The Maximum Send Compression option on the Compression tab in the APPC Mode
	  Properties dialog box must be set to RLE.
	
	3. The Maximum Receive Compression option on the Compression tab in the APPC
	  Mode Properties dialog box must be set to LZ9.
	
	NOTE: If SNA Server or Host Integration Server 2000 initiates a BIND request for
	an LU 6.2 session in which compression is configured, it send an extended BIND.
	
	A Primary Logical Unit (PLU) level of compression support is indicated in bits 6
	and 7 of Byte 25 of the BIND. The following is an explanation of these 2 bits
	and how the level of compression is indicated by their values:
	
	+-----------------------------------------------------------------------------------------------------------------------------------+
	| Value | Length-Checked compression options                                                                                        | 
	+-----------------------------------------------------------------------------------------------------------------------------------+
	| 00    | No compression                                                                                                            | 
	+-----------------------------------------------------------------------------------------------------------------------------------+
	| 01    | Compression supported by the PLU - compression to be determined by the SLU.                                               | 
	+-----------------------------------------------------------------------------------------------------------------------------------+
	| 10    | Reserved                                                                                                                  | 
	+-----------------------------------------------------------------------------------------------------------------------------------+
	| 11    | Compression requested by the PLU. This value indicates that the PLU both supports and desires compression on the session. | 
	+-----------------------------------------------------------------------------------------------------------------------------------+
	
	In addition to the setting of the length-checked compression bits of Byte 25, an
	extended BIND includes additional information related to compression.
	
	A BIND is considered an extended BIND when it includes a Fully Qualified PCID
	(X'60') control vector. When compression is requested and/or enabled, an
	extended BIND also includes a Length-Checked Compression (X'66') control vector.
	The Length-Checked Compression control vector contains the information needed to
	allow the compression level to be negotiated between the PLU and Secondary
	Logical Unit (SLU).
	
	The following compression levels are available when you are using non-extended
	BINDs as defined in the IBM SNA Formats (GA27-3136) manual:
	
	+--------------------------------+
	| Data Flow  | Compression Level | 
	+--------------------------------+
	| PLU-to-SLU | LZ9 or RLE        | 
	+--------------------------------+
	| SLU-to-PLU | RLE               | 
	+--------------------------------+
	
	When SNA Server and Host Integration Server 2000 receive a non-extended BIND from
	the host that indicates PLU supports or requests compression, there is no way to
	determine what level of compression (LZ9 or RLE) the PLU supports. Because
	either compression level can be used, SNA Server and Host Integration Server
	2000 must be configured to handle both compression levels. For 3270 compression,
	this means that LZ9 compression must be set on the host connection properties.
	For LU 6.2 compression, LZ9 compression must be selected for Maximum Receive
	Compression in the APPC mode definition that will be used by the application.
	
	LZ9 compression provides for a higher level of compression that also includes RLE
	compression. If SNA Server or Host Integration Server 2000 is configured to
	support LZ9 compression, it can support RLE compression as well.
	
	REFERENCES
	==========
	
	SNA Server session-level compression is discussed in further detail in the IBM
	SNA Formats (GA27-3136) manual. For more information, please see the following
	topics:
	
	- Request/Response Headers (RHs)
	- BIND RU in the Request/Response Units (RUs)
	- Fully Qualified PCID and Length-Checked Compression control vectors in the
	  Common Fields
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	Issue type        : kbinfo
	
	=============================================================================
	
