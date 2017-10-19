---
layout: page
title: "Q163563: TN3270E Printer Emulators May Have Flow Control Issues"
permalink: /kb/163/Q163563/
---

## Q163563: TN3270E Printer Emulators May Have Flow Control Issues

	Article: Q163563
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Some TN3270E printer emulators may encounter a dropped session while receiving a
	large host print job. This problem has been observed with the Attachmate Extra!
	TN3270E print emulator, although it may occur with other print emulators as
	well.
	
	CAUSE
	=====
	
	The TN3270E protocol specification has no provision for flow control between the
	server and the client. If the host sends a print job to the emulator using only
	the exception response protocol (RQE), there is no way for a TN3270E print
	emulator to indicate any flow control information, used to "throttle back" the
	rate that the host sends the print job, to the TN3270E server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. In the hotfix, the
	TN3270E server has been updated to include a new configuration option called
	"Printer Flow Control." When this option is enabled, the TN3270E server sends
	all messages to TN3270E printers using definite response protocol (RQD), instead
	of exception response (RQE). This is implemented as a check box option because
	this behavior contradicts the TN3270E specification (although it is required for
	such print emulators to function).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.11 and 2.11 Service Pack 1. This problem was corrected in the latest Microsoft
	SNA Server 2.11 U.S. Service Pack. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: sp1 prodsna printer
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
