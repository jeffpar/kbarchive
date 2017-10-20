---
layout: page
title: "Q161626: XCLN: Troubleshooting IPX/SPX Connections"
permalink: /kb/161/Q161626/
---

## Q161626: XCLN: Troubleshooting IPX/SPX Connections

{% raw %}

	Article: Q161626
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The client cannot connect to a computer running Microsoft Exchange Server using
	IPX/SPX. Remote procedure call (RPC) PINGs work, but not with security. In
	addition, you may receive the following error message:
	
	  Your Microsoft Exchange Server is unavailable.
	
	CAUSE
	=====
	
	The IPX/SPX protocol is not configured correctly for Microsoft Exchange Server
	access.
	
	RESOLUTION
	==========
	
	The following is a checklist you can use to ensure that the IPX/SPX protocol is
	correctly configured:
	
	1. Make sure IPX/SPX (NWLINK) is installed on the computer running Microsoft
	  Exchange Server, the computer running the Microsoft Exchange client, and any
	  primary (PDC) or backup (BDC) domain controllers.
	
	2. Gateway Services for NetWare (GSNW) must be installed and running on the
	  computer running Windows NT Server and Microsoft Exchange Server. This is
	  required so that the server broadcasts SAP 0x640. The RPC Service and the RPC
	  Locator services must be running. Additionally, there must be either a
	  NetWare or a Windows NT Server computer running File and Print Services for
	  NetWare (FPNW) and installed on the network to maintain the Exchange Server
	  computer's address in its SAP database.
	
	  If this is a routed IPX environment, make sure SAP 0x640 is not being filtered
	  on the router.
	
	3. Check IPX/SPX frame types. It is recommended that you manually set this on
	  both the computer running Exchange Server and its clients. (On the computer
	  running Windows NT Server, go to the Network Control Panel and click IPX/SPX.
	  Click Properties, click to select "Manual Frame Type Detection", and add the
	  appropriate frame type, such as 802.2.)
	
	4. If "Manual Frame Type Detection" is selected, make sure the network number is
	  the same for every server on the IPX subnet. If an Internal network number is
	  configured, it must be a unique network number.
	
	5. Make sure the packet size is the same on Token ring, or a smaller size on
	  Ethernet. In the Net.cfg file on computers running Windows for Workgroups or
	  Windows 3.1, make sure MaxFrameSize equals an appropriate size, such as
	  1,496. The frame of client computers running Windows 95 or Windows NT
	  Workstation should be adjusted to the maximum frame size for their network
	  topology.
	
	6. On computers running Windows for Workgroups or Windows 3.1, open the Net.cfg
	  (or Shell.cfg) file and make sure IPX packets=50, IPX Sockets=50, and READ
	  ONLY COMPATIBILITY=OFF.
	
	If you have verified that IPX is configured correctly, you can use the following
	steps for additional troubleshooting:
	
	1. Run Rpings.exe on the server. Make sure there are valid endpoints (set for
	  use) for ncadg_ipx and ncacn_spx.
	
	2. Run Rpingc32.exe on client computers running Windows 95 or Windows NT
	  Workstation, to make sure IPX/SPX can complete an RPC PING to the server.
	  Also try this "with security."
	
	3. On the client, try logging in without using default network security. (On the
	  Tools menu, click Services. Select Microsoft Exchange Server, click
	  Properties, and then click Advanced. Click to clear the "Use network security
	  during logon" check box.) This forces a prompt to appear for you to enter
	  Windows NT Server domain, account, and password information.
	
	4. Move ncacn_spx to be first in the binding order.
	
	  For additional information about changing the RPC binding order, please see
	  the following Microsoft Knowledge Base article:
	
	  Q163576 XGEN: Changing the RPC Binding Order
	
	5. Update the IPX/SPX drivers. The latest version of the drivers, as of 6/98, is
	  VLM 1.21 and can be obtained from Novell.
	
	
	  NOTE: Many old VLM NetWare drivers do not connect to Microsoft Exchange
	  Server. On computers running Windows for Workgroups 3.11 or Windows 3.1, you
	  may need updated versions of Nwipxspx.dll and Nwcalls.dll.
	
	6. If there is a Microsoft Proxy Server installed on the network, try turning
	  off DNS. (In the Network Control Panel, select TCP/IP and click Properties.
	  Click the DNS Configuration tab, and click Disable DNS.) You can keep the
	  TCP/IP functionality by adding to the hosts file. In the hosts file, make one
	  entry for the Microsoft Exchange Server as <IP address> <Microsoft
	  Exchange Server Name, or NetBIOS name>, and one for the Proxy Server as
	  <IP Address> <proxy server fully qualified domain name, such as
	  server.company.com>.
	
	7. Check the Event Viewer on the computers running Windows NT Server (the
	  computers running Microsoft Exchange Server, the PDC, or the BDC servers) for
	  errors.
	
	MORE INFORMATION
	================
	
	For more information, see the following article in the Microsoft Knowledge Base,
	the Microsoft Exchange Installation Guide - the Introduction and Appendix A, and
	the Readme.wri file on the Microsoft Exchange Client Software compact disc:
	
	  Q136516 XCLN: Improving Windows Client Startup Times
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: exclnfaqold
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
