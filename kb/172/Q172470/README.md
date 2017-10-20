---
layout: page
title: "Q172470: Zero-Length RU Causes Subsequent Jobs to Stop"
permalink: /kb/172/Q172470/
---

## Q172470: Zero-Length RU Causes Subsequent Jobs to Stop

{% raw %}

	Article: Q172470
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a zero-length RU is encountered and Job Monitoring is enabled, any subsequent
	jobs sent to SNA Server Print Service will hang.
	
	CAUSE
	=====
	
	If Job Monitoring is turned on for a session, jobs are not fully closed down
	until the printer has notified SNA Server Print Service that the job has
	finished printing. Unfortunately, a zero-length job never starts printing, so it
	never finishes and the job is never properly closed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	  DLC                      DAF:E9 OAF:01 ODAI:off Normal
	  DLC                      BID    RQD DFC FI BC EC DR1 PI
	  DLC
	  DLC   ---- Header  at address 010342E0, 1 elements ----
	  DLC   01020005 6C002C00 E9010005 01001C01     <....l.,.Z.......>
	  DLC
	  DLC   ---- Element at address 0152CFF0, start 10, end 13 ----
	  DLC   4B8100C8                                <Ka.H            >
	  FMI   ------------------------------------------------------------
	  FMI   01027102->10120600 FMIST CTRL BID   REQ
	  FMI                      ACK required Msg key:6 FMHI BCI ECI RBI
	  FMI
	  FMI   ---- Header  at address 010342E0, 0 elements ----
	  FMI   02011401 E0012C00 E9010006 01001C01     <......,.Z.......>
	  FMI   ------------------------------------------------------------
	  FMI   10120600->01027102 FMIST CTRL BID   ACK
	  FMI                      Msg key:4 COMMIT EBI CDI SDI
	  FMI
	  FMI   ---- Header  at address 01034418, 0 elements ----
	  FMI   02021405 17001500 00000004 01005E02     <..............^.>
	  DLC   ------------------------------------------------------------
	  DLC   01020101->04160080 DLC DATA
	  DLC                      DAF:01 OAF:E9 ODAI:off Normal
	  DLC                      BID    +RSP DFC FI BC EC DR1 PI
	  DLC
	  DLC   ---- Header  at address 010342E0, 1 elements ----
	  DLC   02011401 E0002C00 01E90005 01001C01     <......,..Z......>
	  DLC
	  DLC   ---- Element at address 0152B7FC, start 10, end 13 ----
	  DLC   CB8100C8                                <.a.H            >
	
	Zero Length RU:
	
	  DLC   ------------------------------------------------------------
	  DLC   04160080->01020101 DLC DATA
	  DLC                      DAF:E9 OAF:01 ODAI:off Normal
	  DLC                      RQE FMD BC EC DR1 PI BB EB
	  DLC
	  DLC   ---- Header  at address 010342E0, 1 elements ----
	  DLC   00020011 6A002C00 E9010006 01001C01     <....j.,.Z.......>
	  DLC
	  DLC   ---- Element at address 0152B7FC, start 10, end 12 ----
	  DLC   0391C0                                  <.j.             >
	
	  DLC   ------------------------------------------------------------
	  DLC   01020101->04160080 DLCST RSRC
	  DLC                      Credit:4
	  DLC
	  DLC   ---- Header  at address 01034418, 0 elements ----
	  DLC   04020004 17001500 00000004 01005E02     <..............^.>
	  DLC   ------------------------------------------------------------
	  DLC   01020101->04160080 DLC DATA
	  DLC                      DAF:01 OAF:E9 ODAI:off Normal
	  DLC                      +RSP FMD BC EC PI
	  DLC
	  DLC   ---- Header  at address 01034210, 1 elements ----
	  DLC   04020000 00002C00 01E90000 01002801     <......,..Z....(.>
	  DLC
	  DLC   ---- Element at address 0152CFF0, start 10, end 12 ----
	  DLC   830100                                  <c..             >
	  FMI   --------------------------------------------------------------
	  FMI   01027102->10120600 FMI DATA
	  FMI                      NO ACK reqd Key:7 Seq:6 BCI ECI BBI EBI CEI
	  FMI                      BBIUI EBIUI
	  FMI
	  FMI   ---- Header  at address 010342E0, 1 elements ----
	  FMI   00020007 6C0E2C00 E9010006 01001C01     <....l.,.Z.......>
	  FMI   --------------------------------------------------------------
	  FMI   01027102->10120600 FMIST SESS
	  FMI                      Code:BETB
	  FMI
	  FMI   ---- Header  at address 01034620, 0 elements ----
	  FMI   05020007 00002C00 E9010002 01001C01     <......,.Z.......>
	  FMI   --------------------------------------------------------------
	  FMI   10120600->01027102 FMIST RSRC
	  FMI                      Credit:1
	  FMI
	  FMI   ---- Header  at address 01034620, 0 elements ----
	  FMI   04010001 E0012C00 E9010006 01005E02     <......,.Z.....^.>
	  FMI   --------------------------------------------------------------
	  FMI   10120600->01027102 FMIST ACK
	  FMI                      Msg key:7 Replies:5376 Sequence:6
	  FMI
	  FMI   ---- Header  at address 01034620, 0 elements ----
	  FMI   01020007 17001500 00000006 01005E02     <..............^.>
	  DLC   --------------------------------------------------------------
	  DLC   04160080->01020101 DLCST RSRC
	  DLC                      Credit:4
	  DLC
	  DLC   ---- Header  at address 01034418, 0 elements ----
	  DLC   04020004 00002C00 01E90000 01001C01     <......,..Z......>
	
	A request to start a new job is submitted from the host:
	
	  DLC   --------------------------------------------------------------
	  DLC   04160080->01020101 DLC DATA
	  DLC                      DAF:E9 OAF:01 ODAI:off Normal
	  DLC                      BID    RQD DFC FI BC EC DR1 PI
	  DLC
	  DLC   ---- Header  at address 01034418, 1 elements ----
	  DLC   01B0B006 00002C00 E9010007 01001C01     <......,.Z.......>
	  DLC
	  DLC   ---- Element at address 0152CFF0, start 10, end 13 ----
	  DLC   4B8100C8                                <Ka.H            >
	
	This request is then passed over FMI to the SNA Server Print Service:
	
	  FMI   --------------------------------------------------------------
	  FMI   01027102->10120600 FMIST CTRL BID   REQ
	  FMI                      ACK required Msg key:8 FMHI BCI ECI RBI
	  FMI
	  FMI   ---- Header  at address 01034418, 0 elements ----
	  FMI   02011401 E0012C00 E9010008 01001C01     <......,.Z.......>
	
	There is no response from the SNA Server Print Service.
	
	With the fix applied, the SNA Server Print Service will generate a message that
	the zero-length RU was printed successfully, thus giving it permission to close
	the session down. This will allow any subsequent jobs to then be printed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
