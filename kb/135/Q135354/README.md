---
layout: page
title: "Q135354: SNA Server DLC Outage Codes Should be Logged in Hex."
permalink: /kb/135/Q135354/
---

## Q135354: SNA Server DLC Outage Codes Should be Logged in Hex.

	Article: Q135354
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
	
	
	SYMPTOMS
	========
	
	When an SNA Server connection failure occurs, SNA Server logs Event 23 in the
	Windows NT application event log and indicates the error code returned by the
	SNA Server link service in the Qualifier field. For example:
	
	  Event ID: 23
	  Source: SNA Server
	  Description: Connection <connection> using Link Service <link>
	  failed
	  Qualifier = 00xx
	
	The "xx" value in the Qualifier field indicates the "outage code", which is
	logged in hex format, such as "00AE". The meaning of these hex-formatted outage
	codes are documented in the SNA Server Reference Guide under Event 23, as well
	as in the SNA Server Device Interface Specification in Section 3.4.
	
	When enabling SNA Server Data Link Control (DLC) tracing using the SNATRACE
	program (on either the SNA Server service, or a link service), the
	<snaroot>\traces\NODEMSG?.TRC message trace file will also log the outage
	code. However, the outage code logged in the DLC message trace is logged in
	decimal, which can cause confusion. For example:
	
	  | DLC  ---------------------------------------------- 14:15:37.37
	  | DLC  05160000->01020100 DLCST OUTG
	  | DLC                     Outage:174 UPTYPE:0 UPCNTR:0 COUNT:0
	  | DLC
	  | DLC  ---- Header  at address 00CF478C, 0 elements ----
	  | DLC  18110000 00000000 00000000 0100C600     <..............F.>
	
	In the above case, the outage code of 174 decimal is equivalent to 0xAE hex.
	
	CAUSE
	=====
	
	SNA Server DLC message tracing logs outage codes in decimal.
	
	RESOLUTION
	==========
	
	When interpreting an SNA Server DLC message trace outage message, the outage
	code should be converted to hex in order to locate the proper error listed in
	the SNA Server Reference Guide.
	
	Microsoft has updated the file SNATRCSN.DLL to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
