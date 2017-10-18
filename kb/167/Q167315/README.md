---
layout: page
title: "Q167315: QRI Bit Not Set Correctly on Responses to RUI Apps"
permalink: kb/167/Q167315/
---

## Q167315: QRI Bit Not Set Correctly on Responses to RUI Apps

	Article: Q167315
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11 SP2,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 SP2, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	LUA applications that transmit application messages with the RH's Queued
	Response Indicator (QRI) flag set may stop responding when communicating to a
	client application through SNA server. When you step through and trace the
	problem, the LUA application may show a message being correctly received with
	the QR flag = 1 in the RH header. In the response, the QR flag is set to 1 prior
	to calling the SNA RUI libraries, but when it is transmitted to the host, the QR
	flag = 0.
	
	CAUSE
	=====
	
	The LUA library provided with SNA Server was not designed to use the Queued
	Response Indicator (QRI) field. The "SNA Server LUA Programmer's Guide" contains
	the following design specification for the RUI libraries:
	
	  lua_rh: Returned parameter. Contains the SNA request/response header (RH) of
	  the message sent or received. For the RH for RUI_WRITE, all fields except the
	  queued-response indicator (lua_rh.qri) and pacing indicator (lua_rh.pi) are
	  used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11 SP2, 3.0 and 3.0 SP1.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	A supported fix for SNA Server version 2.1, 2.1, and 2.11 is now available, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft recommends that you wait for the next Service Pack
	that contains this fix. Contact Microsoft Technical Support for more
	information.
	
	
	MORE INFORMATION
	================
	
	In a response header for a normal-flow RU, the queued response indicator (QRI)
	denotes whether the response is to be enqueued in TC queues (QRI=QR), or whether
	it is to bypass these queues (QRI=[ASCII 172]QR). In a request header for a
	normal-flow RU, it indicates what the setting of the QRI should be on the
	response, if any, to this request (that is, the values on the request and
	response are the same).
	
	For expedited-flow RUs, this bit is reserved. The setting of the QRI bit is the
	same for all RUs in a chain.
	
	This symptom is demonstrated in the following trace:
	
	  DLC    ---------------------------------------------- 12:10:29.17
	  DLC    01160001->03020201 DLC DATA
	  DLC                       DAF:01 OAF:01 ODAI:off Normal
	  DLC                       RQD FMD BC EC DR1 QR  PI BB EB <<< QR set
	  DLC
	  DLC    ---- Header  at address 00D14550, 1 elements ----
	  DLC    02022439 00012C00 01010001 01007000     <..$9..,.......p.>
	  DLC
	  DLC    ---- Element at address 0120D6C8, start 10, end 18 ----
	  DLC    0383C0F1 1C1C1CF2 03                    <.c.1...2.       >
	  DLC    ---------------------------------------------- 12:10:29.20
	  DLC    03020201->01160001 DLC DATA
	  DLC                       DAF:01 OAF:01 ODAI:off Normal
	  DLC                       +RSP FMD BC EC PI
	  DLC
	  DLC    ---- Header  at address 00D142E0, 1 elements ----
	  DLC    02050201 E0002C00 01010000 01007000     <......,.......p.>
	  DLC
	  DLC    ---- Element at address 0120A374, start 10, end 12 ----
	  DLC    830100                                  <c..             >
	  DLC    ---------------------------------------------- 12:10:29.26
	  DLC    03020201->01160001 DLC DATA
	  DLC                       DAF:01 OAF:01 ODAI:off Normal
	  DLC                       +RSP FMD BC EC DR1           <<< QR not set
	  DLC
	  DLC    ---- Header  at address 00D14550, 1 elements ----
	  DLC    04020102 00002C00 01010001 01007000     <......,.......p.>
	  DLC
	  DLC    ---- Element at address 0120D6C8, start 10, end 12 ----
	  DLC    838000                                  <c..             >
	  DLC    ---------------------------------------------- 12:10:50.12
	
	In the fix referenced above, SNA Server RUI libraries and SNA server service
	components were changed to ensure the correct setting for the QRI bit flows over
	SNA messages exchanged between clients and the host.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ210 kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.0,2.1,2.11 SP2,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
