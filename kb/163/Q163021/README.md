---
layout: page
title: "Q163021: RUI_WRITE Is Rejected with Sense Code 0X'200D'"
permalink: kb/163/Q163021/
---

## Q163021: RUI_WRITE Is Rejected with Sense Code 0X'200D'

	Article: Q163021
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an LUA application sends data while a BID response is pending, the
	RUI_WRITE request is rejected with Sense Code 0X'200D'
	
	CAUSE
	=====
	
	The LUA application is trying to send data while a BID response has not
	processed. This causes a race condition, and the RUI_WRITE is rejected.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.11 Service Pack 1 and 3.0. Microsoft has confirmed this to be a problem in SNA
	Server for Windows NT. This problem was corrected in the latest SNA Server for
	Windows NT 2.11 and 3.0 U.S. Service Packs. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The application is trying to send data immediately after a BID request has come
	in. The SNA Server service processed the data sent by the application instead of
	sending the BID response for the pending BID request. This causes a race
	condition in the SNA Server service, and the RUI_WRITE is rejected with the
	following Sense Code:
	
	  0X'200D' Response Owed Before Sending Request: An attempt has been made
	           in half-duplex (flip-flop or contention) send/receive mode to
	           send a normal-flow request when a response to a previously
	           received request has not yet been sent.
	
	With the SNA Application LUA API trace enabled, you may see the following:
	
	  |00000150.000000c1 RUI    RUI_WRITE request
	  |00000150.000000c1 RUI    ---- Verb Parameter Block at address 001AA37C
	  ----
	  |00000150.000000c1 RUI    52004400 00000000 00000000 04800000
	  <R.D.............>
	  |00000150.000000c1 RUI    02000000 45303157 494E3031 00000000
	  <....E01WIN01....>
	  |00000150.000000c1 RUI    0E000700 00006900 80755D00 803FD700
	  <......i..u]..?P.>
	  |00000150.000000c1 RUI    2C000101 001A0190 20010000 00000000
	  <,..............>
	  |00000150.000000c1 RUI    00000000
	<....>
	  |00000150.000000c1 RUI    ---- Data at address 005D7580 ----
	  |00000150.000000c1 RUI    F5F2F7F1 F0F00D25 7AF8F7C4 7AC3C5C4
	  <527100.%z87DzCED>
	  |00000150.000000c1 RUI    C5D340F3 F2F9F0F5 0D257AF8 F5C47AC3
	  <EL@32905.%z85DzC>
	  |00000150.000000c1 RUI    C5C4C5D3 40F3F2F9 F0F50D25 7AF3F2C2
	  <EDEL@32905.%z32B>
	  |00000150.000000c1 RUI    7AC4C5D4 F6F3F9F2 F9F66B0D 2560D0C0
	  <zDEM639296k.%`..>
	  |00000150.000000c1 RUI    F57AC0D4 C1C37AF1 C5F9F2F1 F2F9F1D0
	  <5z.MACz1E921291.>
	  |00000150.000000c1 RUI    C0C3C8D2 7AF3C6F0 C6F8F5F3 F2F5C3F4
	  <.CHKz3F0F85325C4>
	  |00000150.000000c1 RUI    C4D0C0E3 D5C77AD0 D0
	  <D..TNGz..       >
	  |00000150.00000104 RUI    ---------------------------------------------
	-
	  11:02:36.41
	  |00000150.00000104 RUI    RUI_WRITE response
	  |00000150.00000104 RUI    UNSUCCESSFUL - RSP_BEFORE_SENDING_REQ
	  |00000150.00000104 RUI    ---- Verb Parameter Block at address 001AA37C
	  ----
	  |00000150.00000104 RUI    52004400 00140000 200D0000 04800000
	  <R.D............>
	  |00000150.00000104 RUI    02000000 45303157 494E3031 00000000
	  <....E01WIN01....>
	  |00000150.00000104 RUI    0E000700 00006900 80755D00 803FD700
	  <......i..u]..?P.>
	  |00000150.00000104 RUI    2C000000 00000190 20010041 00000000
	  <,.........A....>
	  |00000150.00000104 RUI    00000000
	<....>
	  |00000150.00000104 RUI    ---- Data at address 005D7580 ----
	  |00000150.00000104 RUI    F5F2F7F1 F0F00D25 7AF8F7C4 7AC3C5C4
	  <527100.%z87DzCED>
	  |00000150.00000104 RUI    C5D340F3 F2F9F0F5 0D257AF8 F5C47AC3
	  <EL@32905.%z85DzC>
	  |00000150.00000104 RUI    C5C4C5D3 40F3F2F9 F0F50D25 7AF3F2C2
	  <EDEL@32905.%z32B>
	  |00000150.00000104 RUI    7AC4C5D4 F6F3F9F2 F9F66B0D 2560D0C0
	  <zDEM639296k.%`..>
	  |00000150.00000104 RUI    F57AC0D4 C1C37AF1 C5F9F2F1 F2F9F1D0
	  <5z.MACz1E921291.>
	  |00000150.00000104 RUI    C0C3C8D2 7AF3C6F0 C6F8F5F3 F2F5C3F4
	  <.CHKz3F0F85325C4>
	  |00000150.00000104 RUI    C4D0C0E3 D5C77AD0 D0
	  <D..TNGz..       >
	
	Additional query words: prodsna 2.11.sp1 SP1 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1,3.0
	
	=============================================================================
	
