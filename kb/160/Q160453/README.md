---
layout: page
title: "Q160453: Enabling Power Management May Cause SNA Disconnects"
permalink: kb/160/Q160453/
---

## Q160453: Enabling Power Management May Cause SNA Disconnects

	Article: Q160453
	Product(s): Microsoft SNA Server
	Version(s): winnt:2.x,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbusage
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, versions 2.0, 2.1, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 clients connecting to Microsoft SNA Server may experience dropped
	sessions when idle for an extended period.
	
	CAUSE
	=====
	
	This problem occurs when power management is enabled through CMOS or software on
	Windows 95 computers. This can occur on laptops or desktop systems with power
	management enabled.
	
	When the timeout value is reached, the BIOS enables power management on the
	system. On some systems running TCP/IP, this causes Windows 95 to send a DHCP
	release of its IP address, causing all TCP/IP sessions to lose connectivity.
	Emulator sessions that are active will lose all connectivity to the SNA Server.
	
	RESOLUTION
	==========
	
	Disable power management through either CMOS or software.
	
	Additional query words: prodsna 3270 5250 applet disconnect
	
	======================================================================
	Keywords          : kbnetwork kbusage 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200NT kbSNAServ300NT kbSNAServ400NT kbSNAServ210NT
	Version           : winnt:2.x,3.0,4.0
	
	=============================================================================
	
