---
layout: page
title: "Q175267: How to Install an OEM Modem .INF File In Unattended Setup"
permalink: kb/175/Q175267/
---

## Q175267: How to Install an OEM Modem .INF File In Unattended Setup

	Article: Q175267
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbhowto
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The current deployment tools do not allow for the detection of a modem but do
	allow for a user to specify a modem and communications port in the answer file.
	By default, only modem information files supplied with Windows NT 4.0 are
	available to be installed during deployment. It may be possible to include
	third-party modem information files into the answer file.
	
	MORE INFORMATION
	================
	
	To start, you need the modems information file, in this case Mdmvikp.inf for a
	Viking Netlink 33.6 PC-Card modem, copied into the INF directory on the
	workstation. The easiest way to accomplish this is to place Mdmvikp.inf on the
	distribution server in the following directory structure.
	
	  I386\$OEM$\$$<-- (this indicates the NT Target Path)\Inf\Mdmvikp.inf
	
	NOTE: For installation to bring in these additional directories under the I386
	directory, the OEMPreInstall=yes parameter must be set in the Unattended section
	of the installation script file.
	
	After the information file is in place, you need to get the modem description
	from the information file. In most cases, you can search the information file
	for a section called [Strings], underneath is a list of the modems that the
	information file supports.
	
	MDMVIKP.INF
	
	  [Strings]
	  ClassName = "Modem"
	  Mfg = "Viking Components, Inc."
	
	  Modem1 = "Viking Components, Inc. NETLINK 33.6 PC-CARD Fax+Data"
	  Modem2 = "Viking Components, Inc. NETLINK 33.6 PC-CARD Fax+Data"
	  Modem2.5 = "NETLINK 33.6 PC-CARD Fax+Data"
	
	In this example, you are installing the "NETLINK 33.6 PC-CARD Fax+Data" the
	[ModemParameters] section is where you type in the modem description of your
	modem. One information file may have support for several modems, so be sure to
	pick out the correct one. To determine which modem description to use, when more
	than one modem description is specified in the information file supplied by the
	manufacturer, use the Control Panel Modem tool on a computer that has Windows NT
	and the modem installed.
	
	To find the modem description, perform the following steps:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Modems.
	
	2. Click the General tab to find the Modem Description under the column marked
	  Modem.
	
	  [ServicesSection]
	  RAS = RASParamSection
	
	  [Modem]
	  InstallModem = ModemParameters
	
	  [ModemParameters]
	  COM2 = " NETLINK 33.6 PC-CARD Fax+Data"
	
	  [RASParamSection]
	  PortSections = RASPORT
	  DialoutProtocols = TCP/IP
	
	  [RASPORT]
	  PortName = COM2
	  DeviceType = Modem
	  PortUsage = DialOut
	
	Because detection is not run, we must specify a communications port. Install the
	modem manually through the Control Panel Modems tool if there is a problem that
	needs troubleshooting, and then contact the hardware vendor for any information
	or updates.
	
	The products listed here are manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	For additional information on Windows NT 4.0 deployment/unattended installation
	consult the Microsoft Knowledge Base at:
	
	http://msdn.microsoft.com/support
	
	You can also download the Windows NT 4.0 Deployment Guide from:
	
	http://www.microsoft.com/ntworkstation.
	
	Note that the deployment guide is valid for both Windows NT workstation and
	Windows NT Server.
	
	Additional query words: unattend 3rd party
	======================================================================
	Keywords          : kbsetup kbhowto 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
