---
layout: page
title: "Q167363: HP Network Port Missing After Reinstalling DLC on SNA Server"
permalink: /kb/167/Q167363/
---

## Q167363: HP Network Port Missing After Reinstalling DLC on SNA Server

	Article: Q167363
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 (all SP),4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft SNA Server for Windows NT, versions 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 (all SP) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove and reinstall the DLC protocol on a server running Windows NT
	on which Microsoft SNA Server is installed, you no longer see the
	Hewlett-Packard Network Port option when selecting Add Port in the Ports
	properties page.
	
	CAUSE
	=====
	
	The Windows NT DLC protocol has not been fully removed and reinstalled. On an
	SNA Server system, when you remove and reinstall the Windows NT DLC protocol,
	you must also remove and reinstall the SNA Server 802.2 Link Services added
	during SNA Server setup (if running SNA Server 2.x) or using SNA Server Manager
	(if running SNA Server 3.0). This ensures complete removal and reinstallation of
	the Windows NT DLC protocol and the proper functioning of the Link Services.
	
	RESOLUTION
	==========
	
	Proceed with the following steps to properly remove and reinstall DLC on an SNA
	Server such that the Hewlett-Packard Network Port option is available.
	
	1. Remove the SNA Server 802.2 Link Services:
	
	  a. Save a backup copy of the SNA Server configuration file Com.cfg (found in
	     the <SNARoot>\System\Config folder) before proceeding with the
	     following.
	
	  b. If you are running SNA Server 2.x:
	
	     1) Run SNA Server Setup, which is found in your SNA Server menu folder.
	
	     2) Click Continue.
	
	     3) In the Configure Link Services section, click Links.
	
	     4) In the Link Service Configuration window, select the applicable Link
	     Service and click the Remove button, and then click the Continue button.
	
	     If you are running SNA Server 3.0
	
	     1) Start SNA Manager, which is found in your SNA Server menu folder.
	
	     2) Open the Link Services folder.
	
	     3) Right-click the applicable link service and select Delete.
	
	  c. In the Network tool in Control Panel, verify that there is no DLC entry in
	     the Services tab.
	
	- In the Services tool in Control Panel, stop the following services in order
	  listed:
	
	  a. SNA Server
	
	  b. SNA Base
	
	- In the Network tool in Control Panel, remove the DLC protocol from the
	  Protocols properties page.
	
	- Restart the system.
	
	- In the Network tool in Control Panel, add the DLC protocol from the Protocols
	  properties page and then restart the system.
	
	  You should now see the Hewlett-Packard Network Port option.
	
	- Reinstall the SNA Server 802.2 Link Services:
	
	  a. If you are running SNA Server 2.x:
	
	     1) Run SNA Server Setup, which is found in your SNA Server menu folder.
	
	     2) Click Continue.
	
	     3) In the Configure Link Services section, click Links.
	
	     4) In the Link Service Configuration window, select the applicable link
	     service and click Install.
	
	  b. If you are running SNA Server 3.0:
	
	     1) Start SNA Manager, which is found in your SNA Server menu folder.
	
	     2) Open the Link Services folder.
	
	     3) Right-click the applicable link service and select Insert and then click
	     Link Service. Select the appropriate link service and then click Add.
	
	- After reinstalling the SNA Server 802.2 Link Service, verify that the link
	  service property for all the connections references the correct link service.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSNAServSearch kbSNAServ300NT kbSNAServ210NT kbSNAServ211NT kbSNAServ211NTSP1 kbSNAServ211NTSP2
	Version           : :2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 (all SP),4.0
	Issue type        : kbprb
	
	=============================================================================
	
