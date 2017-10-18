---
layout: page
title: "Q245536: How to Change an SNA Server's Configuration Role with SVCONFIG"
permalink: kb/245/Q245536/
---

## Q245536: How to Change an SNA Server's Configuration Role with SVCONFIG

	Article: Q245536
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SVCONFIG is a utility that makes it easy to change an SNA Server computer's
	configuration role.
	
	MORE INFORMATION
	================
	
	The configuration mode for an SNA Server computer can be primary, backup, or
	member. When the SNA Server configuration is changed, the changes are saved to
	the Com.cfg file on the primary SNA Server computer in an SNA Server subdomain.
	A copy of the Com.cfg file is automatically replicated to the backup SNA Server
	computers in the subdomain.
	
	SVCONFIG allows you to quickly change a server's role without using SNA Server
	Manager. SNA Server Manager requires that the SnaBase service is running;
	however, SVCONFIG does not have this limitation. This is useful if the SnaBase
	service cannot be started for some reason. For example, if the primary SNA
	Server computer is unavailable, SVCONFIG can be used to promote a backup SNA
	Server computer to be the primary SNA Server.
	
	To start the utility, click Start, click Run, type "svconfig" (without the
	quotation marks), and then click OK. Use the radio button to change the server's
	role.
	
	Please note that changes made with SVCONFIG will not take effect until the
	SnaBase service is restarted.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
