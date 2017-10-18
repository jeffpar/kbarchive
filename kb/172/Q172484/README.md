---
layout: page
title: "Q172484: 5250 Printing Causes High CPU Utilization"
permalink: kb/172/Q172484/
---

## Q172484: 5250 Printing Causes High CPU Utilization

	Article: Q172484
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An SNA Server system using the print server service for 5250 printing may
	occasionally show very high CPU utilization, even though there are no print jobs
	currently printing. In addition, the AS/400 that SNA Server is connected to may
	also show an increase in its CPU utilization at the same time.
	
	You may notice that there are print jobs on the AS/400 print writers waiting to
	be printed when this problem occurs.
	
	An SNA Server Data Link Control (DLC) message traces shows repeated LUSTAT
	messages being sent between the SNA Server computer and the AS/400 in rapid
	succession while the problem is going on.
	
	CAUSE
	=====
	
	When a print request is received from a host, the print server issues a
	StartDoc() call to initialize the connection to the printer that the print
	session is configured to use. The CPU utilization problem occurs when the
	StartDoc() call returns an error that the 5250 print provider does not correctly
	handle. The print server fails to send an error message to the AS/400 when the
	StartDoc() call fails and does not respond to the AS/400 print request at all.
	The result is that the print server and the AS/400 establish a loop by sending
	LUSTAT messages back and forth. The frequency of these messages causes the CPU
	utilization on both systems to increase.
	
	If the StartDoc() call is successful, the AS/400 print job is printed normally.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The following is an excerpt from a Nodemsg1.atf trace captured while the problem
	was occurring:
	
	  DLC   ------------------------------------------------------------------
	  --------------
	  DLC   01020101->04160000 DLC DATA
	  DLC                      DAF:0E OAF:01 ODAI:off Normal
	  DLC                      LUSTAT RQE DFC FI BC EC DR1 PI CD
	  DLC
	  DLC   ---- Header  at address 01444758, 1 elements ----
	  DLC   07050000 00002C00 0E01A904 0100CC00     <......,...z.....>
	  DLC
	  DLC   ---- Element at address 0193BB68, start 10, end 17 ----
	  DLC   4B912004 00060000                       <Kj .....        >
	  DLC   ------------------------------------------------------------------
	  --------------
	  DLC   01020101->04160000 DLC DATA
	  DLC                      DAF:21 OAF:01 ODAI:off Normal
	  DLC                      LUSTAT RQE DFC FI BC EC DR1 CD
	  DLC
	  DLC   ---- Header  at address 0144444C, 1 elements ----
	  DLC   07050000 00002C00 2101DA7A 0100CC00     <......,.!..z....>
	  DLC
	  DLC   ---- Element at address 0193F470, start 10, end 17 ----
	  DLC   4B902004 00060000                       <K. .....        >
	  DLC   ------------------------------------------------------------------
	  --------------
	  DLC   04160000->01020101 DLC DATA
	  DLC                      DAF:01 OAF:0E ODAI:off Normal
	  DLC                      +RSP FMD BC EC PI
	  DLC
	  DLC   ---- Header  at address 0144478C, 1 elements ----
	  DLC   07050000 00002C00 010E0000 01008700     <......,.......g.>
	  DLC
	  DLC   ---- Element at address 0193BB68, start 10, end 12 ----
	  DLC   830100                                  <c..             >
	  DLC   ------------------------------------------------------------------
	  --------------
	  DLC   04160000->01020101 DLC DATA
	  DLC                      DAF:01 OAF:0E ODAI:off Normal
	  DLC                      LUSTAT RQE DFC FI BC EC DR1 CD
	  DLC
	  DLC   ---- Header  at address 0144437C, 1 elements ----
	  DLC   26050002 00002C00 010EA905 01008700     <&.....,...z...g.>
	  DLC
	  DLC   ---- Element at address 0193EA2C, start 10, end 17 ----
	  DLC   4B902004 00060000                       <K. .....        >
	  DLC   ------------------------------------------------------------------
	--------------
	  DLC   04160000->01020101 DLC DATA
	  DLC                      DAF:01 OAF:21 ODAI:off Normal
	  DLC                      LUSTAT RQE DFC FI BC EC DR1 PI CD
	  DLC
	  DLC   ---- Header  at address 0144444C, 1 elements ----
	  DLC   04050004 00002C00 0121DA7B 01008700     <......,..!.{..g.>
	  DLC
	  DLC   ---- Element at address 0193F470, start 10, end 17 ----
	  DLC   4B912004 00060000                       <Kj .....        >
	  DLC   ------------------------------------------------------------------
	  --------------
	
	With the fix applied, the 5250 print provider correctly handles errors returned
	by the StartDoc() call.
	
	Additional query words: spike perfmon pegged
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
