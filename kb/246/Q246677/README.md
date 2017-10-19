---
layout: page
title: "Q246677: Setting TN3270 Mode Only on SNA Server Causes Applet to Fail"
permalink: /kb/246/Q246677/
---

## Q246677: Setting TN3270 Mode Only on SNA Server Causes Applet to Fail

	Article: Q246677
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 3270 applet that ships with SNA Server only supports TN3270E protocol. By
	default, the SNA Server TN3270 Service supports both TN3270 and TN3270E client
	connections. However, if you select the TN3270 Mode only check box for the SNA
	Server TN3270 service, the applet does not work. Selecting TN3270 Mode only
	limits the TN3270E service to TN3270 mode and the applet cannot connect. The
	client session has a blank screen and no errors are generated. A "connecting"
	message appears on the status line. TN3270E emulators provided by other vendors
	encounter the same problem.
	
	CAUSE
	=====
	
	The TN3270 Mode only option was added to SNA Server because some TN3270
	emulators are unable to negotiate properly with the TN3270 service. For more
	information, please refer to the SNA Server online Help.
	
	The TN3270E protocol is specified by RFC 1647.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
