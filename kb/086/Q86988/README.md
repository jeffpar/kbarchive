---
layout: page
title: "Q86988: X400: How MTAs Initiate and Communicate"
permalink: /kb/086/Q86988/
---

## Q86988: X400: How MTAs Initiate and Communicate

	Article: Q86988
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The X.400 message transfer agent (MTA) is an application-level protocol. For the
	MTA to initiate and communicate, the lower level communications must first be
	established. The MTA then proceeds with the protocols used to transfer mail from
	end to end.
	
	MORE INFORMATION
	================
	
	The seven layers of the OSI stack are involved in establishing communication
	between the MTAs.
	
	Application     |Generic and specific support  |
	Presentation    |Transfer syntax support       |  X.400 gateway
	Session         |Dialogue control              |
	Transport       |End-to-end quality            |
	Network         |End-to-end routing            |
	Data Link       |Flow control                  |  X.25 card
	Physical        |Hardware                      |
	
	The communication begins with a request for a connection at the lower level: the
	X.400 gateway requests a connection with the X.25 link.
	
	The X.25 links to another X.25 link with a hardware connection. The card provides
	for a hardware and flow control connection at the two lowest levels.
	
	The network level uses the X.121 address to initiate and establish an X.25 link.
	This operation is performed entirely within the Eicon X.25 card.
	
	As shown in the X.400 log file:
	
	14:52:49 Requesting Transport connection to <>
	14:52:49 Outgoing X.25 call request:
	 xm[ 15] A8832000 27671010 05020065 616E31             .. .'g.....ean1
	 14:52:49 Incoming X.25 call connected:
	 rv[ 14] A8832000 27671010 05020342 0808               .. .'g.....B..
	
	Once the network level has established communication, the X.400 log file shows
	there has been an X.25 connection. The transport layer initiates a request for
	connection. The TSAP may or may not be used for confirmation.
	
	14:52:49 Outgoing CR TPDU:
	xm[ 10] 09E00000 010000C0 0109                        ..........
	14:52:50 Incoming CC TPDU:
	rv[ 10] 09D00100 EA0B00C0 0108                        ..........
	
	After the transport layer has established communication, the session layer then
	requests a connection that may or may not include the SSAP:
	
	14:52:50 Outgoing CN SPDU:
	xm[ 98] 0D60011C 0A051403 4353490B 13171139 32303530  .`......CSI....92050
	        39313435 3234392D 30373030 05091301 00160101  9145249-0700........
	        1A010014 020249C1 31312FA0 03800100 A1288001  ......I.11/......(..
	        00810101 82010084 0101A31A A018A116 80107767  ..................wg
	        632E6D69 63726F73 6F66742E 6361A102 1600      c.microsoft.ca....
	
	14:52:51 Incoming AC SPDU:
	
	rv[ 85] 0E53011E 09051403 4353490B 13171139 32303530  .S......CSI....92050
	        39313435 3234392D 30373030 0C000509 13010016  9145249-0700........
	        01011A01 00140202 49C12231 20A00380 0100A119  ........I."1 .......
	        80010081 0101A211 A00FA10D 80076561 6E2E7562  ..............ean.ub
	        63A10216 00                                   c....
	
	The session layer confirms the connection and then passes the communications to
	the presentation, then to the application layer. The application layer uses the
	X.400 protocol (RTS, Reliable Transfer Server) to ensure that data reaches the
	destination free of errors. Once all the RTS parameters are negotiated, the MTAS
	are considered to be connected:
	
	14:52:51 Connected to MTA: ean.ubc
	
	At this point, data transmission proceeds:
	
	14:52:51 Transmitting Message via X.400: 00001448
	14:52:51 Outgoing AS SPDU:
	xm[  7] 2D052903 020101                               -.)....
	14:52:53 Outgoing AE SPDU:
	xm[  5] 29032A01 31                                   ).*.1
	14:53:18 Incoming AEA SPDU:
	rv[ 10] 2A082A06 30303030 3031                        *.*.000001
	14:53:18 Outgoing FN SPDU:
	xm[  5] 09031101 01                                   .....
	14:53:18 Incoming DN SPDU:
	rv[  2] 0A00                                          ..
	14:53:18 X.400 connection released
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
