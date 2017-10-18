---
layout: page
title: "Q148312: No RTM Data Generated If 3270 Session Uses Exception Response"
permalink: kb/148/Q148312/
---

## Q148312: No RTM Data Generated If 3270 Session Uses Exception Response

	Article: Q148312
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server 2.11 3270 Windows and Windows NT applets support the generation
	of response time monitor (RTM) performance data, which SNA Server then provides
	to NetView. However, if host subsystem (such as CICS, IMS, TSO) is configured to
	use exception response protocol instead of definite response protocol, the 3270
	applet does not report performance data to the SNA Server. This causes the SNA
	Server to fail reporting data to NetView.
	
	NOTE: For response time monitor (RTM) data to be reported by SNA Server to
	NetView, a 3270 emulator must supply performance data on STATUS-Acknowledge
	messages to SNA Server as described in the SNA Server Emulator Interface
	Specification (EIS), section 3.3.15 and 4.8. SNA Server has supported the
	response time monitor interface since version 2.0. The 3270 applet did not
	support the interface until version 2.11.
	
	This problem also occurs on Attachmate Extra! version 4.2. Earlier versions of
	Extra! do not support the SNA Server response time monitor reporting feature.
	Contact Attachmate Technical Support for availability of an Extra! update.
	
	
	CAUSE
	=====
	
	If you use the exception response protocol on the 3270 applet session,
	Status-Ack messages are not sent to SNA Server. No response time monitor data
	has been reported to the server, even if the response time monitor feature has
	been enabled.
	
	RESOLUTION
	==========
	
	To work around this problem, change the host subsystem configuration so that the
	3270 applet sessions use definite response.
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 2.11 and 2.11 Service
	pack 1. This problem was corrected in the latest Microsoft SNA Server 2.11 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
