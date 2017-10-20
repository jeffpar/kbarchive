---
layout: page
title: "Q166149: PRB: RAS Reserves DHCP Addresses for Dial-Out Only Clients"
permalink: /kb/166/Q166149/
---

## Q166149: PRB: RAS Reserves DHCP Addresses for Dial-Out Only Clients

{% raw %}

	Article: Q166149
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows NT systems send out requests to DHCP to reserve addresses for
	RAS, but the systems that are sending the requests are setup for Dial-out only.
	
	In some cases, this is noticed by DHCP servers running out of leases completely.
	To prevent the unattended setup computers from experiencing the problem of
	grabbing DHCP addresses, add the following to your unattended setup file:
	
	  [RemoteAccess]
	  PortSections=RASDialOut
	  DialoutProtocols=ALL
	  ;  Prevent the server componant from requesting an IP address.
	  UseDHCP=No
	  StaticAddressBegin=1.1.1.1
	  StaticAddressEnd=1.1.1.1
	  ClientCanRequestIPAddress=No
	
	Currently, the only solution for computers already affected by this problem is to
	manually run through the configuration options for Remote Access via Control
	Panel and enable the system to update.
	
	NOTE: The Dial-out options should be configured as expected based on the
	unattended answer file, so there is no need to change any of the parameters.
	
	CAUSE
	=====
	
	Windows NT unattended setup provides the ability to install and configure Remote
	Access for Dial-in, Dial-out, or Dial in and out.
	
	If the unattend answer file is configured to install Remote Access as a Dial-out
	client only, server components and registry values are installed that should not
	be.
	
	Properties of the Remote Access Service are checked in the Control Panel Network
	Services tab. All options are displayed as configured correctly for Dial-out
	Only. Upon exiting the configuration menu for Remote Access, the system can
	reset the bindings and update the registry. Once the updates are complete, a
	prompt is displayed, asking that the system be restarted. After the restart,
	everything is installed correctly and the server side of Remote Access has been
	removed.
	
	NOTE: The affected computers cannot act as RAS servers. They can only grab DHCP
	addresses.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server and
	Workstation version 4.0.
	
	MORE INFORMATION
	================
	
	The following is an example of the Modem and Network sections of an Unattend.txt
	file that installs the extra components of RAS as described in the Cause
	section:
	
	     [Modem]
	     InstallModem = ModemParameters
	
	     [ModemParameters]
	     COM2 = "Hayes V-Series Ultra Smartmodem 9600"
	
	     [Network]
	     DetectAdapters = ""
	     InstallProtocols = ProtocolsSection
	     InstallServices = ServicesSection
	     JoinDomain = BOBSDOMAIN
	     CreateComputerAccount = ADMINISTRATOR
	
	     [ProtocolsSection]
	     NBF = NBFParamSection
	     NWLNKIPX = NWLNKIPXParamSection
	     TC = TCParamSection
	
	     [NBFParamSection]
	
	     [NWLNKIPXParamSection]
	
	     [TCParamSection]
	     DHCP = yes
	
	     [ServicesSection]
	     RAS = RASParamSection
	
	     [RASParamSection]
	     PortSections = PortSection1
	     DialoutProtocols = ALL
	
	     [PortSection1]
	     PortName = COM2
	     DeviceType = Modem
	     PortUsage = DialOut
	
	For the latest information on Windows NT deployment, download the Windows NT 4.0
	Deployment Guide from the following location:
	
	  http://www.microsoft.com/ntworkstation/
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q155197 Unattended Setup Parameters for Unattend.txt File
	
	
	Additional query words: prodnt rip ipx nwlink sap agent Unattended Setup
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
