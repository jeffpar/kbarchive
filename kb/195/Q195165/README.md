---
layout: page
title: "Q195165: SNA Print Server FMH5 ATTACH PIP Data is Corrupted"
permalink: /kb/195/Q195165/
---

## Q195165: SNA Print Server FMH5 ATTACH PIP Data is Corrupted

{% raw %}

	Article: Q195165
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP2,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In certain circumstances, especially under a high load, intermittent failure to
	establish SNA Print Server sessions configured to an AS/400 may occur.
	
	The Print Server session appears in a Pending state when viewed in the SNA
	Manager console, and in the Windows NT application log, event ID 60 may be
	logged:
	
	  Event ID 60
	  Source SNA Server
	  Description: Failed to invoke APPC TP "value" (0003), sense data =
	  080F6051
	
	  EXPLANATION:
	  An attempt to invoke the APPC TP shown has failed. The error will be
	  reported to the invoking TP on the remote system with the following
	  primary return code:
	
	  AP_ALLOCATION_ERROR. The sense data shown is the secondary return code,
	  which will be one of the following hexadecimal values:
	  X'084B6031' AP_TRANS_PGM_NOT_AVAIL_RETRY
	  X'084C0000' AP_TRANS_PGM_NOT_AVAIL_NO_RETRY
	  X'10086021' AP_TP_NAME_NOT_RECOGNIZED
	  X'10086031' AP_PIP_NOT_ALLOWED
	  X'10086032' AP_PIP_NOT_SPECIFIED_CORRECTLY
	  X'10086034' AP_CONVERSATION_TYPE_MISMATCH
	  X'10086041' AP_SYNC_LEVEL_NOT_SUPPORTED
	  X'080F6051' AP_SECURITY_NOT_VALID
	
	  ACTION
	  Refer to the "Microsoft SNA Server APPC Programmer's Guide" for
	  explanations.
	
	CAUSE
	=====
	
	A problem with the conversion of Advanced Program-to-Program Communications
	(APPC) Program Initialization Parameters (PIP) data from ASCII to EBCDIC
	resulted in the data being processed twice.
	
	This caused the PIP data to be corrupted, which invalidated the security
	credentials necessary for successful Printer session establishment, subsequently
	causing the FMH5 ATTACH message to be rejected by the AS/400.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 Service
	Pack 2, 4.0, and 4.0 Service Pack 1. This problem was first corrected in SNA
	Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	SNA Server supports ASCII-EBCDIC character conversion because IBM host systems
	and SNA-capable systems use the EBCDIC character set. An application such as
	Print Server using the APPC interface must be able to convert these characters
	to and from the ASCII character set. SNA Server supports this capability using
	either:
	
	- The Common Service Verb (CSV) CONVERT and GET_CP_CONVERT_TABLE functions
	
	- The SNANLS API function for Windows NT 4.0 (or later), and Windows 95 clients
	
	For additional information, please refer to the following article in the
	Microsoft Knowledge Base:
	
	  Q139114 SNA Server Support for ASCII-EBCDIC Character Conversion
	
	The SNA Server Tracing tool is used to capture SNA Application API traces for the
	CSV API. By tracing the CSV API, the CSV functions used to perform the
	ASCII-EBCDIC conversions can be captured; the trace demonstrates the problem, as
	shown below:
	
	        ---------------------------------------------------------------------
	     CSV   CONVERT request
	     CSV   ---- Verb Parameter Block at address 60E0F9A0 ----
	     CSV   1A000000 00000000 00000000 00000A00     <................>
	     CSV   94C0070C 94C0070C                       <m...m...        >
	     CSV   ---- Data at address 0C07C094 ----
	     CSV   5052494E 54455220 2020                  <PRINTER         >
	     CSV
	        ---------------------------------------------------------------------
	     CSV   CONVERT response, result = OK
	     CSV   ---- Verb Parameter Block at address 60E0F9A0 ----
	     CSV   1A000000 00000000 00000000 00000A00     <................>
	     CSV   94C0070C 94C0070C                       <m...m...        >
	     CSV   ---- Data at address 0C07C094 ----
	     CSV   D7D9C9D5 E3C5D940 4040                  <PRINTER@@@      >
	     CSV
	        ---------------------------------------------------------------------
	     CSV   CONVERT request
	     CSV   ---- Verb Parameter Block at address 60E0F9A0 ----
	     CSV   1A000000 00000000 00000000 00000A00     <................>
	     CSV   94C0070C 94C0070C                       <m...m...        >
	     CSV   ---- Data at address 0C07C094 ----
	     CSV   D7D9C9D5 E3C5D940 4040                  <PRINTER@@@      >
	     CSV
	        ---------------------------------------------------------------------
	     CSV   CONVERT response, result = PARAMETER_CHECK
	     CSV   ---- Verb Parameter Block at address 60E0F9A0 ----
	     CSV   1A000000 00010000 00000406 00000A00     <................>
	     CSV   94C0070C 94C0070C                       <m...m...        >
	     CSV   ---- Data at address 0C07C094 ----
	     CSV   00000000 0000007C 7C7C                  <.......|||      >
	     CSV
	        ---------------------------------------------------------------------
	
	It can be seen that the 'PRINTER' ASCII data string is converted to EBCDIC. Then,
	when it's already in EBCDIC, it is inappropriately converted once more, which
	leads to corruption of the data string.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0 SP2,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
