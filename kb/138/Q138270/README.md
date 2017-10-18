---
layout: page
title: "Q138270: SNA Server 2.11 Performance Improvements for 3270/LUA Apps"
permalink: kb/138/Q138270/
---

## Q138270: SNA Server 2.11 Performance Improvements for 3270/LUA Apps

	Article: Q138270
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This article describes performance enhancements that were made to SNA Server
	service and client interfaces and how to obtain the update and how to derive
	benefits from this update if you are using third-party 3270 emulation products
	that work over the LUA variant of the SNA Server EIS interface.
	
	STATUS
	======
	
	This feature is included in the latest U.S. Service Pack for SNA Server for
	Windows NT, version 2.11. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The client-server protocol used to support the LUA-variant of the SNA Server
	3270 Emulator Interface Specification (EIS) and LUA RUI interface has been
	enhanced to increase performance. The SNA Server service and Win32, Win3.x, OS/2
	and MS-DOS RUI client interfaces have been updated. Down-level clients continue
	to function through the updated SNA Server service.
	
	Also, the SNA Server 3270 applets include an additional performance improvement
	by requesting complete RUs rather than individual segments.
	
	Any 3270 application that uses the LUA RUI interface, as well as any LUA RUI
	application, performs faster with this update applied. However, 3270
	applications which use the LUA variant of the SNA Server EIS interface may
	require some further enhancements to take advantage of these performance
	improvements. These enhancements are described in the To Implement The Update
	section below.
	
	To determine if a 3270 emulator uses the LUA-variant of the EIS interface, enable
	SNA Server 3270 message tracing and open a 3270 session. If byte 34 of Element
	#1 in the Open(SSCP) message is set to 0x01, then the LUA variant is being used.
	If byte 34 is set to 0x00, the LUA variant is not being used and no further
	application changes are necessary to implement the performance enhancements.
	
	NOTE: The SNA Server 3270 applets use the LUA variant of the EIS interface. These
	3270 applets have been updated to implement the performance enhancements
	described in this article.
	
	Where Changes Were Made
	-----------------------
	
	The client-server message flow for the LUA-variant of the Emulator Interface was
	less efficient than it could be. The following explains two specific cases:
	
	- When a Begin Bracket RU is received by the server, the server and client
	  currently exchange a Status Control (BID) and acknowledgement before the data
	  is sent to the client. Similarly, when a bracket officially ends, the server
	  sends a Status (Betb) message. Both of these messages are redundant for the
	  LUA interface, because the application processes the RH flags on the RUs NOT
	  the FMI indicators.
	
	- When a client acknowledges a data message, it has to wait for the server to
	  acknowledge the acknowledgement with an ACKLUA message. This is so that the
	  server can verify that the correct sequence number is provided on the
	  response. This message has been removed by making the RUI application or 3270
	  EIS/LUA application responsible for tracking sequence numbers. The 3270
	  applet already acknowledges the correct sequence number, so the handshake is
	  redundant.
	
	These changes have been implemented ensuring full backward compatability, so the
	new clients and servers can co-exist with previous versions.
	
	
	How to Implement the Update
	---------------------------
	
	To improve performance of your SNA Server 2.11 and the 3270 applets:
	
	- Contact Microsoft Product Support for the update.
	
	To improve performance of your third-party 3270 emulation products which work
	over the LUA variant of the SNA Server EIS interface:
	
	- Contact Microsoft Product Support for the update.
	
	- Make the changes described below in the section titled Third-Party 3270
	  Emulation Products to support the performance enhancements available with the
	  update.
	
	Microsoft updated the following files for the enhancements:
	
	<snaroot>\system\SNASERVR.EXE - SNA Server service
	<snaroot>\system\TRCSERVR.EXE - Special traced version of SNA Server
	                                service
	<snaroot>\system\WINRUI32.DLL - Win32 client RUI DLL
	<winroot>\system\WINRUI.DLL   - Win 3.x client RUI DLL
	<snaroot>\ACSRUI.DLL          - OS/2 client RUI DLL
	<libs>\dos\dosacs.lib         - MS-DOS client RUI link library
	<libs>\dos\dtracs.lib         - Traced version of MS-DOS client RUI
	                                link library
	<snaroot>\SYSTEM\FMIS3270.DLL - Win32 3270 applet module
	<sna.win>\FMIS3270.DLL        - Win 3.x 3270 applet module
	
	Third-Party 3270 Emulation Products
	-----------------------------------
	
	Third-party 3270 emulation products which work over the LUA variant of the SNA
	Server EIS interface require the following enhancements to support the
	performance enhancements available with the Microsoft update. Those 3270
	emulation products or LUA applications that communicate over the LUA RUI
	interface do not require any modifications to obtain the performance
	improvements, because these changes are implemented by the RUI library.
	
	
	Here is the information necessary for third party 3270 emulation vendors to
	implement these performance improvements:
	
	- The LUA version number is contained in the Open(SSCP) request message at
	  dataru[40] (dataru[39] is reserved and should be set to 0). The following are
	  the supported values of the LUA version:
	
	  - 0x01 - the original (that is, unmodified) LUA version of the EIS.
	
	  - 0x02 - the new version incorporating the API changes below.
	
	  If the emulator specifies a version greater than that supported by the current
	  SNA Server, the server negotiates the version down on its Open (SSCP)
	  response (see below). Modifications to the API are incremental; any emulator
	  supporting any future version X must support all the version X-1 features.
	
	  Note that startd must be set to 41 or greater. If startd is less than 41, the
	  emulator is indicating support for version 1 only.
	
	- SNA Server returns the version number to be used on the Open (SSCP) response
	  message in the lower 7 bits of dataru[40] with the top bit always set to
	  b'1'. If the emulator receives an Open (SSCP) response message with startd
	  less than 41 or with the top bit of dataru[40] clear, it must assume that the
	  node supports version 1 of the LUA version of the EIS only.
	
	- The Node continues to sent Status-Control (BID) messages when an explicit SNA
	  BID request is received on the session (the RBI flag is set in the
	  Application Flags bytes in the message header).
	
	- An emulator specifies that it is responsible for sequence number checking by
	  setting the ackqual field of the Status-Acknowledge message to ACKLUA instead
	  of ACKPOS. This causes the Node to generate a positive response on the
	  session without returning a Status-Acknowledge (ACKLUA) message to the
	  emulator. Note that if the emulator provides an incorrect sequence number no
	  indication is sent to the emulator and no response is sent on the session.
	  This change does not apply to negative responses or
	  Status-Control-Acknowledge messages, for which emulators continue to receive
	  Status-Acknowledge(ACKLUA) messages.
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
