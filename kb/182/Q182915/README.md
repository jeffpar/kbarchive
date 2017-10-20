---
layout: page
title: "Q182915: 3270 Emulator Hangs and Returns X'1003' Error to Mainframe"
permalink: /kb/182/Q182915/
---

## Q182915: 3270 Emulator Hangs and Returns X'1003' Error to Mainframe

{% raw %}

	Article: Q182915
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A 3270 emulator may hang while receiving a screen of data from a mainframe. The
	emulator screen may be partially filled with data when the emulator hangs. The
	SNA Server computer that the emulator is connecting through logs a message
	similar to the following in its Application Event log:
	
	  Event ID: 21
	  Source: SNA Server
	  Description: (1124) Negative Response Sent on Connection <connection
	  name> (SENSE = 1003).
	
	SUBCODE INFORMATION:
	X'1124' A negative response was sent and logged. This error normally follows a
	more specific error message, depending on the type of negative response sent and
	its cause. The SNA sense data provides details about the type of error.
	
	This problem does not occur if the emulator connects to a mainframe through SNA
	Server 3.0 SP2 and earlier.
	
	In addition, this problem may not occur with all 3270 emulators. This problem has
	been reproduced using NetSoft's NS/Elite 3270 emulator. It could not be
	reproduced using the 3270 Applet included with SNA Server.
	
	
	CAUSE
	=====
	
	SNA Server 4.0 incorrectly sets the ECI (End Chain Indicator) and CDI (Change
	Direction Indicator) flags on the first segment of an RU (Request/Response Unit)
	sent to a 3270 emulator that has indicated that it can receive RU segments.
	
	When delivering RU segments, EC (End Chain) and CD (Change Direction) indicators
	are supposed to be delayed if they occur in the RH (Request/Response Header) of
	the RU's first segment until the last segment of the RU is sent to the
	emulator.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0. This problem was
	corrected in the latest SNA Server version 4.0 U.S.Service Pack. For information
	on obtaining this Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	MORE INFORMATION
	================
	
	When you start a 3270 session, the 3270 emulator indicates whether it supports
	the delivery of RU segments. If the emulator supports the delivery of RU
	segments, SNA Server can send data it receives from a mainframe to the emulator
	as it is received. If the emulator indicates that it does not support the
	delivery of RU segments, SNA Server will not send the data it receives to the
	emulator until it receives the entire RU from the mainframe. The SNA Server
	service then assembles the data into a complete RU before sending it to the
	emulator. Please refer to the "Segment Delivery" section of the SNA Server 3270
	Emulator Interface Specification manual for more details on this feature. This
	manual is included with the Online SDK Documentation shipped with SNA Server.
	
	IBM sense codes are defined in the IBM SNA Formats Guide (GA27- 3136). Sense code
	X'1003' is defined as follows:
	
	  Function Not Supported: The function requested is not supported. The function
	  may have been specified by a formatted request code, a field in an RU, or a
	  control character.
	
	NetSoft NS/Elite is manufactured by NetSoft, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
