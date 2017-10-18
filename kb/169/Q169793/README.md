---
layout: page
title: "Q169793: RUI Libraries Don't Return All Negative Responses to RUI App"
permalink: kb/169/Q169793/
---

## Q169793: RUI Libraries Don't Return All Negative Responses to RUI App

	Article: Q169793
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An RUI application that is written to capture all negative responses is only
	notified by the RUI libraries of the first -RSP generated at the host by a
	series of bad messages. SNA Server traces indicate that host negative responses
	for each "bad" message sent by the RUI application are received by SNA Server,
	but only the first negative response is passed to the RUI application.
	
	CAUSE
	=====
	
	To improve efficiency, SNA Server treats sequences of RQE chains received from
	an RUI application as if they were a single RQE chain. This causes SNA Server to
	pass only the first host negative response to the first RU as if it was a
	response to all "bad" RU's.
	
	
	RESOLUTION
	==========
	
	Snaservr.exe has been changed to allow the behavior of the SNA Server to be
	altered so that all -RSP messages that have the RQE bit set are passed to the
	RUI libraries if the following registry parameter is added:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\ 
	     SnaServr\Parameters\ 
	
	  DONTCOALESCE :  REG_SZ   [value is not important]
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Use the following steps to edit the registry:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\SnaServr\Parameters
	
	3. On the Edit menu, click Add Value.
	
	4. Add the following values:
	
	  "Value Name: DONTCOALESCE
	  Data Type: REG_SZ
	  String: YES" (without the quotation marks)
	
	5. Click OK and then quit Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT
	version 2.11, 2.11 SP1, 2.11 SP2, 3.0, and 3.0 SP1.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The following is an excerpt from an SNA trace:
	
	  LINKMSG.AFT
	  DLC   ------------------------------------------------------------------
	  ---
	  -----------
	  DLC   03020101->01160001 DLC DATA
	  DLC                      DAF:09 OAF:09 ODAI:off Normal
	  DLC                      RQE FMD BC EC DR1
	  DLC
	  DLC   ---- Header  at address 012C45EC, 1 elements ----
	  DLC   00000000 00032C00 09090001 01002701     <......,.......'.>
	  DLC
	  DLC   ---- Element at address 017BCB60, start 10, end 21 ----
	  DLC   03900061 61616161 6161610A              <...aaaaaaaa.    >
	  DLC   ------------------------------------------------------------------
	  ---
	  -----------
	              data "bbbbbbbb" and "cccccccc" deleted for brevity
	  DLC   ------------------------------------------------------------------
	  ---
	  -----------
	  DLC   03020101->01160001 DLC DATA
	  DLC                      DAF:09 OAF:09 ODAI:off Normal
	  DLC                      RQE FMD BC EC DR1
	  DLC
	  DLC   ---- Header  at address 012C41DC, 1 elements ----
	  DLC   00050000 60032C00 09090004 01002701     <....`.,.......'.>
	  DLC
	  DLC   ---- Element at address 017BB5B4, start 10, end 21 ----
	  DLC   03900064 64646464 6464640A              <...dddddddd.    >
	  DLC   ------------------------------------------------------------------
	  ---
	  -----------
	  DLC   01160001->03020101 DLC DATA
	  DLC                      DAF:09 OAF:09 ODAI:off Normal
	  DLC                      -RSP FMD SD BC EC DR1
	  DLC
	  DLC   ---- Header  at address 012C41DC, 1 elements ----
	  DLC   00050000 60032C00 09090001 01002701     <....`.,.......'.>
	  DLC
	  DLC   ---- Element at address 017BB5B4, start 10, end 16 ----
	  DLC   87900010 010001                         <g......         >
	  DLC   ------------------------------------------------------------------
	  ---
	  -----------
	  DLC   03020101->01160001 DLCST RSRC
	  DLC                      Credit:4
	  DLC
	  DLC   ---- Header  at address 012C45B8, 0 elements ----
	  DLC   04050004 60032C00 09090003 01002701     <....`.,.......'.>
	  DLC   ------------------------------------------------------------------
	  ---
	  -----------
	           sense codes 10010002 and 10010003 deleted for brevity
	  DLC   ------------------------------------------------------------------
	  ---
	  -----------
	  DLC   01160001->03020101 DLC DATA
	  DLC                      DAF:09 OAF:09 ODAI:off Normal
	  DLC                      -RSP FMD SD BC EC DR1
	  DLC
	  DLC   ---- Header  at address 012C45B8, 1 elements ----
	  DLC   04050004 60032C00 09090004 01007F00     <....`.,.......<7F>.>
	  DLC
	  DLC   ---- Element at address 017BB5B4, start 10, end 16 ----
	  DLC   87900010 010004                         <g......         >
	  DLC   ------------------------------------------------------------------
	  ---
	  -----------
	  DLC   01160001->03020101 DLC DATA
	  DLC                      DAF:09 OAF:09 ODAI:off Normal
	  DLC                      RQE FMD BC EC DR1
	  DLC
	  DLC   ---- Header  at address 012C45B8, 1 elements ----
	  DLC   04050004 60032C00 09090001 01007F00     <....`.,.......<7F>.>
	  DLC
	  DLC   ---- Element at address 017BB5B4, start 10, end 112 ----
	  DLC   03900058 58585858 58585858 58585858     <...XXXXXXXXXXXXX>
	  DLC   58585858 58585858 58585858 58585858     <XXXXXXXXXXXXXXXX>
	  DLC   58585858 58585858 58585858 58585858     <XXXXXXXXXXXXXXXX>
	  DLC   58585858 58585858 58585858 58585858     <XXXXXXXXXXXXXXXX>
	  DLC   58585858 58585858 58585858 58585858     <XXXXXXXXXXXXXXXX>
	  DLC   58585858 58585858 58585858 58585858     <XXXXXXXXXXXXXXXX>
	  DLC   58585858 585858                         <XXXXXXX         >
	  DLC   ------------------------------------------------------------------
	  ---
	  -----------
	
	  CLIINT.AFT
	  RUI   ------------------------------------------------------------------
	  ---
	  -----------
	  RUI   RUI_READ response
	  RUI   OK - OK
	  RUI   ---- Verb Parameter Block at address 0193ED6C ----
	  RUI   5200CC00 00000000 00000000 03800000     <R...............>
	  RUI   00000000 00000000 00000000 00000000     <................>
	  RUI   03000000 00010400 ACE69301 F0010000     <.........Wl.0...>
	  RUI   2C000909 00018790 000F0241 00000000     <,.....g....A....>
	  RUI   00000000                                <....            >
	  RUI   ---- Data at address 0193E6AC ----
	  RUI   10010001                                <....            >
	  RUI   ------------------------------------------------------------------
	  ---
	  -----------
	  RUI   RUI_READ request
	  RUI   ---- Verb Parameter Block at address 0193ED6C ----
	  RUI   5200CC00 00000000 00000000 03800000     <R...............>
	  RUI   00000000 00000000 00000000 00000000     <................>
	  RUI   03000000 00010000 ACE69301 F0010000     <.........Wl.0...>
	  RUI   00000000 00000000 000F0000 00000000     <................>
	  RUI   00000000                                <....            >
	  RUI   ------------------------------------------------------------------
	  ---
	  -----------
	  RUI   RUI_READ response
	  RUI   OK - OK
	  RUI   ---- Verb Parameter Block at address 0193ED6C ----
	  RUI   5200CC00 00000000 00000000 03800000     <R...............>
	  RUI   00000000 00000000 00000000 00000000     <................>
	  RUI   03000000 00016400 ACE69301 F0010000     <......d..Wl.0...>
	  RUI   2C000909 00010390 000F0141 00000000     <,..........A....>
	  RUI   00000000                                <....            >
	  RUI   ---- Data at address 0193E6AC ----
	  RUI   58585858 58585858 58585858 58585858     <XXXXXXXXXXXXXXXX>
	  RUI   58585858 58585858 58585858 58585858     <XXXXXXXXXXXXXXXX>
	  RUI   58585858 58585858 58585858 58585858     <XXXXXXXXXXXXXXXX>
	  RUI   58585858 58585858 58585858 58585858     <XXXXXXXXXXXXXXXX>
	  RUI   58585858 58585858 58585858 58585858     <XXXXXXXXXXXXXXXX>
	  RUI   58585858 58585858 58585858 58585858     <XXXXXXXXXXXXXXXX>
	  RUI   58585858                                <XXXX            >
	  RUI   ------------------------------------------------------------------
	  ---
	  -----------
	
	Additional query words: rui rqe
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Issue type        : kbbug
	
	=============================================================================
	
