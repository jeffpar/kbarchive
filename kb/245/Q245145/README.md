---
layout: page
title: "Q245145: How to Move Metaverse Zones to a Subordinate VIA Server"
permalink: kb/245/Q245145/
---

## Q245145: How to Move Metaverse Zones to a Subordinate VIA Server

	Article: Q245145
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Zoomit VIA, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install a subordinate VIA version 2.1 server in a
	Microsoft Windows NT 4.0 Server environment and move a metaverse zone to a new
	Zoomit VIA server. You can use this method to configure your zone within the
	metaverse directory to reside on another server.
	
	MORE INFORMATION
	================
	
	There are three methods available for metaverse zone configuration:
	
	- The superior server is a flow manager for the subordinate server. Both
	  servers cooperate to manage the metaverse zone.
	
	- The subordinate server manages the metaverse zone. A replicated copy is
	  maintained on the superior server to permit centralized searching.
	
	- The subordinate server has sole responsibility for the metaverse zone. There
	  is no replication, and access to the zone is obtained through referral.
	
	The metaverse zone configurations should be evaluated and implemented based on
	the directory structure and administrative needs.
	
	
	To install a VIA server as a subordinate, at least one additional VIA server must
	exist. The hard disk space and memory requirements include 250 megabytes (MB) of
	hard disk space and a minimum of 32 MB of Random Access Memory (RAM).
	
	To Configure a Subordinate VIA Server and Replicate a Zone:
	
	1. Start the VIA 2.1 installation.
	
	2. Select an installation drive with sufficient free disk space.
	
	3. Click "A new installation".
	
	4. Click YES.
	
	5. Click "This server will be subordinate to an existing ZOOMIT VIA
	  metadirectory server".
	
	6. Click Setup Service, click Next, and then click Done. The Zoomit Service will
	  initialize.
	
	7. Start the Compass client, and then log on to the Master VIA server.
	
	8. Select the part of the Tree to be assigned to the subordinate server.
	
	9. On the Actions menu, click New Replication Agreement.
	
	10. Click "Move a metaverse zone to a new ZOOMIT VIA server", and then click OK.
	
	11. Specify the subordinate server information.
	
	12. Select the appropriate Metaverse Zone Configuration.
	
	13. View the replication agreements located under the organizational unit you
	  created during the installation of the VIA server. Click OU, click
	  VIASERVERNAME, and then click Replication Agreements.
	
	14. Select the name of the agreement you specified during the creation of the
	  replication agreement.
	
	15. On the Actions Menu, click "Initialize Subordinate ZOOMIT VIA server."
	
	For additional information about the installation and configuration of the
	Compass client, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q246878 How to Connect to a VIA Server Using the Compass Client
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbZoomitSearch kb3rdpartySearch kbZoomit210
	Version           : :2.1
	Issue type        : kbhowto
	
	=============================================================================
	
