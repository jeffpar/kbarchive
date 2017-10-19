---
layout: page
title: "Q281774: Install Eicon S-51 Link Service in Windows 2000"
permalink: /kb/281/Q281774/
---

## Q281774: Install Eicon S-51 Link Service in Windows 2000

	Article: Q281774
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp3 kbSNA400sp4fix
	Last Modified: 11-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, versions 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install and configure an Eicon S-51 adapter to
	work with Microsoft SNA Server 4.0 Service Pack (SP) 3 or later and Host
	Integration Server (HIS) 2000 on Microsoft's Windows 2000 Server.
	
	MORE INFORMATION
	================
	
	The following steps are similar to installation in Windows NT 4.0:
	
	1. Add the adapter to the operating system and configure the adapter with the
	  Eicon Configuration Utility.
	
	2. Add the SNA Server/HIS 2000 drivers, and then add the link service for use by
	  SNA Server/HIS 2000.
	
	Windows 2000 includes the appropriate adapter drivers, but the most recent driver
	package is available on the Eicon Networks Web site:
	
	  http://www.eicon.com
	
	The download package is labeled "WAN Services for Windows 2000". SNA Server
	drivers are available from Eicon technical support in a Windows Installer
	package (.msi).
	
	The steps to add the adapter and enable the link service are as follows:
	
	1. Add the adapter to the operating system: From Control Panel, open the Add New
	  Hardware utility. Click Add a New Device, click Network Adapter, and then
	  click either Eicon-S51 or Have Disk (and browse to the downloaded drivers
	  folder). Because this adapter is a legacy device (not Plug and Play), the
	  hardware resources may need to be configured in the operating system to match
	  the switch settings on the adapter.
	
	2. Configure the adapter by using the Eicon configuration program that should be
	  added when the adapter is installed into the operating system. For additional
	  information on the configuration program, click the article number below to
	  view the article in the Microsoft Knowledge Base:
	
	  Q147625 Configuring Connections Using Eicon SDLC Link Services
	
	  The hardware settings displayed in the configuration program should match the
	  settings in the Device Manager, and the connection settings should match what
	  is intended to be configured in SNA Server.
	
	3. Add the SNA Server/HIS 2000 Link Service drivers by executing the Windows
	  Installer Package (.msi) that is available from Eicon.
	
	4. Add the Link Service:
	
	   - In SNA Server Manager: From the Insert menu, click Link Service. From the
	     context menu, click New, click Link Service, and then click the Eicon link
	     service.
	
	   - In HIS 2000: In SNA Manager, right-click the Link Services folder. From
	     the context menu, click New, click Link Service, and then select the Eicon
	     link service.
	
	The link service should now be available for use by SNA Server/HIS 2000.
	
	Note that the configuration settings on the connection properties in SNA Server
	or Host Integration Server should match the settings in the Eicon configuration
	program as the Eicon settings will be used when making the connection. For
	example, if "NRZ" is set in the SNA Server connection but the Eicon
	configuration program has set the card to "NRZI", then the card decodes the
	incoming data as "NRZI" and sends the data in that format to SNA Server or Host
	Integration Server, which will be unable to read it.
	
	There are two major differences between installing the card for use by SNA Server
	or Host Integration Server 2000 on Windows 2000 versus installing on Windows NT
	4.0: first, the card must be installed into the operating system by using the
	Add New Hardware wizard and second, the drivers are in an .msi package, which
	places the necessary files in <SNAROOT>\System\Hwsetup and populates the
	
	  HKEYLocalMachine\System\CurrentControlSet\SNABase\LinkServicesInstalled
	
	key with information allowing the adapter to be installed from the Insert menu by
	using Link Service rather than from the Tools menu, by clicking External Link
	Service (External Link Services is not available on the Tools menu in Host
	Integration Server 2000).
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp3 kbSNA400sp4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP3,4.0 SP4
	Issue type        : kbhowto
	
	=============================================================================
	
