---
layout: page
title: "Q161771: TN3287 Print Emulator Fails Through TN3270 Service"
permalink: kb/161/Q161771/
---

## Q161771: TN3287 Print Emulator Fails Through TN3270 Service

	Article: Q161771
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A TN3287 print emulator may fail to receive host print data when connected
	through the SNA Server 2.11 Service Pack 1 TN3270 service. The traces may show
	that the TN3270 service fails to respond to the TN3287 print emulator "Data
	Query Reply" message.
	
	CAUSE
	=====
	
	The TN3287 print emulator is not sending a leading 0x00 byte on the TCP/IP data
	message sent to the SNA Server TN3270 service. According to the TN3287
	specification, the TN3270 service must send a leading 0x00 byte on every data
	message to the TN3287 emulator. However, the specification does not state that
	the client TN3287 emulator must also set the leading 0x00 byte.
	
	NOTE: The TN3287 specification is defined in RFC 1646 (which is different from
	printing support defined in the TN3270E specification, defined in RFC 1647).
	This problem only occurs with a TN3287 printer.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. This updated version
	does not require a leading 0x00 byte on all data messages sent by a TN3287 print
	emulator.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the TN3270 Service included with
	SNA Server 2.11 Service Pack 1.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: prodsna SP1
	
	======================================================================
	Keywords          : kbnetwork kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
