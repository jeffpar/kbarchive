---
layout: page
title: "Q281694: Installing and Configuring Eicon S-51 Adapter in Windows NT 4.0"
permalink: /kb/281/Q281694/
---

## Q281694: Installing and Configuring Eicon S-51 Adapter in Windows NT 4.0

{% raw %}

	Article: Q281694
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport sna4
	Last Modified: 27-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many SDLC and X.25 link services rely on adding appropriate drivers for use by
	SNA Server. However, some adapters from Eicon Networks install a WAN layer and
	use an external configuration program to configure settings such as NRZ/NRZI,
	dial or point-to-point, packet size, and poll address.
	
	This article describes how to install and configure the Eicon S-51 Adapter on
	Windows NT 4.0.
	
	Some of the following information is documented in Microsoft Knowledge Base
	article Q147625, Configuring Connections Using Eicon SDLC Link Services. This
	article is intended to be a step-by-step guide specifically for Microsoft
	Windows NT 4.0.
	
	Installation in Microsoft Windows 2000 is detailed in the following Microsoft
	Knowledge Base article:
	
	  Q281774 Install Eicon S-51 Link Service in Windows 2000
	
	MORE INFORMATION
	================
	
	The following steps draw a general outline of how to install and configure an
	Eicon adapter. Specific details follow.
	
	1. Physically install the adapter into the system and configure hardware
	  resources.
	
	2. Logically install the adapter into the operating system.
	
	3. Configure the adapter using the Eicon Administration program.
	
	4. Install drivers for SNA Server.
	
	5. Install the Eicon Link Service for use by Microsoft SNA Server.
	
	The adapter drivers and INF files are included in Windows NT 4.0 distribution
	media, but newer drivers may be installed from the Connections for Windows NT
	CD-ROM from Eicon Networks or downloaded from the Eicon Web site
	(http://www.eicon.com). Drivers for Microsoft SNA Server are included with SNA
	Server 3.0 and 4.0 and are also available on the Eicon distribution media or
	downloaded from the Eicon Web site.
	
	The following instructions assume that the latest drivers available from Eicon
	will be used.
	
	To install an Eicon adapter for use by Microsoft SNA Server running on Microsoft
	Windows NT 4.0:
	
	1. In Control Panel, open the Network utility, and then select Adapter.
	
	2. Select Add, click Have disk, browse to the directory with the updated
	  connections for Windows NT software, and then click OK.
	
	3. A "Select OEM Option" screen is presented with Eicon WAN Adapters listed.
	  Click OK.
	
	4. An Eicon WAN Services Installation screen appears next. Choose Automatic
	  Installation. The installation will continue with program group and
	  destination directory information and then begin the search for adapters.
	
	5. Once the adapters have been located, the program will display the card type,
	  I/O port, Interrupt Request (IRQ) and base memory the card is using. Save
	  this information for later, and then click OK to complete the process.
	
	6. Start the Eicon Configuration program (ECAdmin.exe), which is added to the
	  Start menu when the adapter is installed.
	
	7. The configuration program layout is layered. Select the displayed card, S51
	  for example. Double-click on the adapter to display the IRQ, I/O port, and
	  other information. The top layer sets up whether the card is dial or direct,
	  X.25, SDLC, PPP, HDLC, or frame relay. The next layer is the protocol.
	  Assuming SDLC, the window size, frame size and link station (poll address)
	  are set along with the T1, T2, and T3 timers. The next layer sets the
	  time-outs for connection. And the last layer, labeled Sync, sets the line
	  interface, duplex, type, modem interface, data encoding, and clocking. This
	  is where to configure NRZ/NRZI, RS232/V.35 and other line-related settings.
	  The information in SNA Server Manager should match these settings. If
	  different from SNA Server, these are the operative settings, as documented in
	  Q14762.
	
	  The card configuration is complete. Now the Microsoft SNA Server must be
	  configured to use this adapter.
	
	8. To add the Eicon Link Service from the SNA Server Manager, from the Tools
	  menu, choose External Link Services (Linkset.exe). Select Links, and then
	  click Add. A message box will list the available link services. Choose Other,
	  and then enter the path to the location of the Eicon SNA Link Service files.
	  The tool is looking for a .INF file accompanied by a .SRL file, which is the
	  installation script.
	
	9. A link services setup screen is presented. Set the options in this screen to
	  match the settings in the Eicon Configuration program, and then click
	  continue.
	
	10. On the next screen, select the newly installed link service, and then click
	  continue. This procedure will add the link service to the link services
	  folder for use by a connection.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	Eicon Networks
	
	  http://www.eicon.com
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	
	=============================================================================
	

{% endraw %}
