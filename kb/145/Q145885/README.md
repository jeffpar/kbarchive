---
layout: page
title: "Q145885: Running 16-bit 3270/FMI Applications on Windows NT &amp; Windows 95"
permalink: /kb/145/Q145885/
---

## Q145885: Running 16-bit 3270/FMI Applications on Windows NT &amp; Windows 95

	Article: Q145885
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For Microsoft Windows NT computers, the SNA Server's Windows NT client software
	ships with "thunking" DLLs to support 16-bit Windows APPC, CPIC, LUA, and Common
	Service Verb applications, on top of the 32-bit Windows APPC, CPIC, LUA, and
	Common Service Verb DLLs. However, these thunking DLLs do not support 16-bit
	Windows 3270 Emulator Interface Specification (EIS, also referred to as "FMI")
	applications.
	
	The SNA Server Windows 95 client software does not support thunking for any of
	the 16-bit SNA APIs. Only 32-bit Windows APPC, CPIC, LUA, Common Service Verb,
	and 3270 EIS application are supported on top of the SNA Server Windows 95
	client software.
	
	To run 16-bit 3270 EIS applications on the Windows NT where SNA Server is
	installed, see the special instructions below for installing the SNA Server
	Windows 3.x client software on Windows NT, concurrently with the SNA Server
	Windows NT client software.
	
	To run 16-bit 3270 EIS applications (or 16-bit APPC, CPIC, LUA, CSV applications)
	on the SNA Server Windows 95 client, the SNA Server Windows 3.x client software
	must be installed. However, Microsoft does not support installation of the
	Windows 3.x client if the SNA Server Windows 95 client software is installed.
	
	MORE INFORMATION
	================
	
	The following describes how to install the SNA Server Win3x client-server
	interface in various environments in order to get 16-bit 3270/FMI applications
	working:
	
	On a Windows NT computer where the SNA Server is actually running
	-----------------------------------------------------------------
	
	1. Start the SNA Server Win3x client Setup program on the SNA Server.
	
	2. In the Client/Server Protocols dialog box, select the TCP/IP option.
	
	3. In the SNA Server Location dialog box, select the Remote option Enter the IP
	  address or computer name of the SNA Server that the Win3x client is being
	  installed on. In other words, the remote destination is pointing to itself.
	
	  With this configuration, both 32-bit and 16-bit 3270/FMI applications work on
	  the same computer.
	
	On Windows NT computer that you intend to be running an SNA Server client
	-------------------------------------------------------------------------
	
	Install the SNA Server Win3x client-server interface as would be done normally.
	
	On a Windows 95 computer
	------------------------
	
	Install the SNA Server Win3x client-server interface as would be done normally.
	
	On a Windows 3.1, or Windows for Workgroups computer
	----------------------------------------------------
	
	Install the SNA Server Win3x client-server interface as would be done normally.
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	
