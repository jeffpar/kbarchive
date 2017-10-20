---
layout: page
title: "Q178729: How To Configure Windows 95 to Dial into a RAS/RRAS Server"
permalink: /kb/178/Q178729/
---

## Q178729: How To Configure Windows 95 to Dial into a RAS/RRAS Server

{% raw %}

	Article: Q178729
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:4.0;Windows:95
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork win95
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses a step-by-step procedure that ensures Windows 95 TCP/IP
	client platforms will successfully dial, get connected, and log on to a computer
	running Windows NT Server version 4.0 Remote Access Service (RAS) or Routing and
	Remote Access Service (RRAS). These steps also enable the Windows 95 Dial- Up
	Networking (DUN) Client to successfully browse the network beyond the RAS or
	RRAS Server.
	
	MORE INFORMATION
	================
	
	NOTE: The following information assumes that RAS/RRAS has been installed and
	configured to support Dial-up Clients using TCP/IP and allows access to the
	entire network.
	
	1. Upgrade your Windows 95 DUN client to the latest version, which can be found
	  at the following location:
	
	  http://www.microsoft.com/windows/downloads/default.asp
	
	  NOTE: On this page, select Product or Feature as Windows 95, and select
	  Category as Networking and Communications. Then, click Go.
	
	2. If there is a network interface card (NIC) in your Windows 95 DUN Client,
	  create a hardware profile that disables the NIC.
	
	  For more information, see the following article in the Microsoft knowledge
	  base:
	
	  Q141600 How to Manually Create Hardware Profiles for Laptop Computers
	
	
	  Q150053 Erratic Domain Logon from Windows 95 Dial-Up Networking
	
	NOTE: Microsoft Windows 95 disables the hardware bus slot. If you have a
	multi-function NIC/Modem, you will disable both functions. OSR2 has the
	capability to disable the individual function of the card instead of the entire
	bus.
	
	If Windows 95 is loaded on a laptop with docking station, undocking will
	accomplish the same result as a hardware profile. If the NIC is a PC Card,
	simply remove the card from the PCMCIA slot.
	
	3. Domain authentication and browsing only occur when the Windows 95 DUN Client
	  can find the primary domain controller (PDC) for the Windows NT domain. The
	  following two things must exist for this to occur:
	
	  a. NetBIOS Name Resolution must be implemented. This is accomplished by
	     either installing a Windows Internet Name Service (WINS) Server on the
	     network or using an Lmhosts file to resolve the NetBIOS name of the PDC.
	     This is used for both domain validation and obtaining a browse list.
	
	  b. The Windows 95 workgroup name must be the same as the Windows NT domain
	     name. This is defined in the Network Identification Tab in Network
	     Neighborhood properties.
	
	  For more information, see the following article in the Microsoft knowledge
	  base:
	
	  Q150800 Domain Browsing with TCP/IP and LMHOSTS Files
	
	Dial-up connections are generally slow when you browse over a dial-up connection.
	Depending on the location of the PDC and the size of the domain, it can take a
	considerable amount of time to obtain a browse list from the PDC.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbnetwork win95 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : WinNT:4.0;Windows:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
