---
layout: page
title: "Q226470: XWEB: Using OWA with Windows Load Balancing Service (WLBS)"
permalink: /kb/226/Q226470/
---

## Q226470: XWEB: Using OWA with Windows Load Balancing Service (WLBS)

	Article: Q226470
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows Load Balancing Service (WLBS) is a service that allows balancing of
	server loads for incoming client connections. Outlook Web Access (OWA) can be
	used in conjunction with WLBS to manage traffic handling of incoming Web client
	connections to an Exchange Server computer. WLBS with OWA is not a solution for
	increasing performance of the Web client connections, merely a method to spread
	the load on the servers while allowing you to use a common name space for
	connections to your Exchange Server computer.
	
	MORE INFORMATION
	================
	
	In a common scenario, you will have two or more front-end servers configured
	with WLBS software and the OWA component. These servers will be the contact
	point for incoming OWA client traffic, and WLBS will balance the OWA connections
	between the servers. The back-end server or servers will be configured with the
	Exchange mailboxes you wish to access through OWA. Therefore, users will access
	OWA through a common name space created during the installation of WLBS, and OWA
	does not need to be installed on the back end. After installing OWA as
	recommended in the Setup instructions included with Exchange Server 5.5, you
	should install the WLBS component according to the WLBS documentation.
	
	It is recommended that you install the OWA component on the front-end server
	before installing WLBS. After installing OWA, you may install WLBS, (for more
	information on WLBS Setup, see the WLBS documentation).
	
	NOTE: Configure WLBS with one NIC in the computer before installing a secondary
	NIC.
	
	For more information on configuring WLBS with single or multiple network cards,
	see the following articles in the Microsoft Knowledge Base:
	
	  Q197992 How to Configure WLBS Using a Single Network Interface Card
	
	  Q197991 How to Configure WLBS Using Multiple Network Interface Cards
	
	After you complete the WLBS configuration you want, OWA should be functional, and
	client connections can be dispersed to the server with less load at the time of
	connection. For example, users A-M will no longer be instructed to connect to
	front-end server 1, while users N-Z will connect to front-end server 2. All
	users will connect to a common namespace (http://server/exchange), and the WLBS
	will balance connections to the servers in the WLBS grouping, all of which will
	be transparent to the user.
	For more information on troubleshooting OWA with WLBS, see the following articles
	in the Microsoft Knowledge Base:
	
	  Q226377 XWEB: This Page Cannot be Displayed When Connected with OWA to WLBS
	
	  Q226386 XWEB: WLBS Failover Causes Accumulation of MMP Files in the Webtemp
	  Directory
	
	
	For more information on deployment and troubleshooting OWA, see the Outlook Web
	Access Deployment and Troubleshooting Guide at the following Web location:
	
	http://support.microsoft.com/support/exchange/content/whitepapers/whitepapers.asp
	
	Additional query words: convoy
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550 kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
