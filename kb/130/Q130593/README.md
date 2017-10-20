---
layout: page
title: "Q130593: Interpreting SNA Server API Traces: Byte Packing Considerations"
permalink: /kb/130/Q130593/
---

## Q130593: Interpreting SNA Server API Traces: Byte Packing Considerations

{% raw %}

	Article: Q130593
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When interpreting Verb Control Blocks (VCB) within SNA Server API traces, the
	interpreter must consider the packing alignment of each structure. The packing
	depends on the #include file used to build the application. The standard SNA API
	include files shipped with SNA Server perform the packing of the VCB depending
	on whether the program is built using Win16 or Win32.
	
	MORE INFORMATION
	================
	
	Sample VCB STRUCTURE for TP_STARTED APPC API verb:
	
	  TP_STARTED
	    opcode         unsigned short int   (WORD (2 Bytes))
	    opext          unsigned char        (BYTE)
	    reserv2        unsigned char        (BYTE)
	    primary_rc     unsigned short int   (WORD (2 Bytes))
	    secondary_rc   unsigned long int    (DWORD (4 Bytes))
	    lu_alias       unsigned char[8]     (8 bytes)
	    tp_id          unsigned char[8]     (8 bytes)
	    tp_name        unsigned char[64]    (64 bytes)
	
	WIN32
	-----
	
	With Windows NT (32-bit) compilations, VCBs are not packed. As a result, both
	DWORDs and WORDs begin on WORD boundaries, and BYTEs begin on BYTE boundaries.
	
	The following is an excerpt from a trace taken on an SNA Server using a Win32
	APPC application:
	
	TP_STARTED response, result = PARAMETER_CHECK
	
	Type:Sync                                  VerbID:00001800
	
	---- Verb Parameter Block at address 0014CBC0 ----
	14000000 00010000 00000003 53444653     <............SDFS>
	44462020 00000000 F0DE1400 D9E4D4C2     <DF  ....0...RUMB>
	C1F4F0F0 00000000 00000000 00000000     <A400............>
	00000000 00000000 00000000 00000000     <................>
	00000000 00000000 00000000 00000000     <................>
	00000000 00000000 00000000              <............    >
	
	Referring to the "VCB STRUCTURE for TP_STARTED APPC API verb" above,
	the verb control block parameters are decoded as follows for Win32:
	
	 opcode  = 1400
	 opext   = 00
	reserv2 = 00
	 primary_rc = 0001 (the subsequent two bytes "0000" are ignored)
	 secondary_rc = 00000003
	 lu_alias     = 53 44 46 53 44 46 20 20 ("SDFSDF  ")
	 tp_id        = 00 00 00 00 F0 DE 14 00
	 tp_name      = D9 E4 D4 C2 C1 F4 F0 F0 ("RUMBA400 <nulls>")
	
	...
	
	WIN16
	-----
	
	With Windows 3.x (16-bit) compilations, VCBs are also not packed, but are aligned
	differently than Windows NT (32-bit) compilations. With Win16, DWORDs and WORDs
	start on WORD boundaries, and BYTEs are on BYTE boundaries.
	
	The following is an excerpt from a trace taken on a Windows for Workgroups client
	using a Win16 APPC application:
	
	...
	TP_STARTED response, result = PARAMETER_CHECK
	
	Type:Sync                                  VerbID:0000180F
	
	---- Verb Parameter Block at address 300F:0000 ----
	14000000 00010000 00035344 46202020     <..........SDF   >
	20200F00 01004B16 DF22D9E4 D4C2C1F4     <  ....K.."RUMBA4>
	F0F00000 00000000 00000000 00000000     <00..............>
	00000000 00000000 00000000 00000000     <................>
	00000000 00000000 00000000 00000000     <................>
	00000000 00000000 0000                  <..........      >
	...
	
	For Win16, note that the secondary return code immediately follows the primary
	return code (omitting the two NULL bytes which separate these fields in the
	Win32 trace above).
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	

{% endraw %}
