---
layout: page
title: "Q140149: SNA 802.2 Connection Icon Indicates Incorrect Network Type"
permalink: /kb/140/Q140149/
---

## Q140149: SNA 802.2 Connection Icon Indicates Incorrect Network Type

{% raw %}

	Article: Q140149
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The 802.2 connection icon shown in SNA Server Admin or Manager may not indicate
	the correct network type.
	
	MORE INFORMATION
	================
	
	Each SNA Server connection name is preceded by an icon that indicates what type
	of connection it is. 802.2 connections are shown with one of the following icon
	types:
	
	  Icon Type      802.2 Connection
	  -------------------------------
	  Icon           Network Type
	
	  Ring           Token Ring
	
	  T-shaped Tap   Ethernet, FDDI
	
	NOTE: 802.2 connections over FDDI will show up as Ethernet connections.
	
	
	Following are two scenarios that can lead to SNA Server Admin or Manager
	displaying the wrong icon for an 802.2 connection.
	
	Incorrect Media Type Entry in NT Registry
	-----------------------------------------
	
	SNA Server Setup reads the installed network adapter's MediaType parameter from
	the Registry to indicate the media type of the 802.2 link. This value is passed
	to the SNA Server Admin or Manager program so that it can display the connection
	icon for the 802.2 connection.
	
	If the MediaType parameter indicates the wrong type of media, SNA Server Admin or
	Manager will display the wrong 802.2 connection icon. In this case, this is just
	a cosmetic problem that does not inhibit SNA Server's functionality.
	
	Following is the workaround for this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	- Before you run SNA Server Setup to install an 802.2 DLC link service, run
	  REGEDT32 and modify the following registry setting:
	
	  1. Go to HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/
	     AdapterName/Parameters/MediaType.
	
	     NOTE: AdapterName is the name of the Network Adapter installed in Windows
	     NT.
	
	     For example, a single Intel EtherExpress 16 is called "EE161."
	
	  2. Change MediaType so that it reflects the correct Media Type.
	
	        Network      MediaType
	        ----------------------
	        Ethernet        1
	        Token Ring      2
	        FDDI            3
	
	  SNA Server Setup properly detects the network adapter's media type and SNA
	  Server Admin or Manager displays the correct icon. If the MediaType is set to
	  "3" for FDDI, the connection will still appear as an Ethernet connection.
	
	  -or-
	
	- If the SNA Server configuration file already includes an 802.2 connection
	  that shows the incorrect icon, follow these steps:
	
	  1. Delete the 802.2 DLC link service that is using the incorrect MediaType.
	
	  2. Go to
	     HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/AdapterName/Parameters/MediaType.
	
	NOTE: AdapterName is the name of the Network Adapter installed in Windows NT.
	
	For example, a single Intel EtherExpress 16 is called "EE161."
	
	  3. Change MediaType so that it reflects the correct Media Type.
	
	        Network      MediaType
	        ----------------------
	        Ethernet        1
	        Token Ring      2
	        FDDI            3
	
	  4. Add a new 802.2 DLC link service.
	
	  5. Configure the existing connection to point to the newly added 802.2 DLC
	     link service.
	
	  6. After you close and reopen SNA Server Admin or Manager, the connection
	     should show the correct network icon.
	
	Multiple Network Adapters Installed in NT Server
	------------------------------------------------
	
	If SNA Server is installed on a Windows NT Server that has multiple network
	adapters installed (multi-homed), it is possible that the 802.2 DLC Link Service
	installed during SNA Server Setup was configured to use the wrong adapter. In
	this case, it is possible that this is more than a cosmetic problem. A usual
	symptom when this problem occurs is that whenever the SNA Server configuration
	is saved and SNA Server Admin or Manager is restarted, the 802.2 connection with
	the incorrect icon shows a Link Service of (None) when Connection Properties are
	viewed. Under normal circumstances, the Link Service would show SnaDlc1
	(assuming the first 802.2 Link Service installed was having the problem).
	
	The following procedure explains how to correct this problem:
	
	  1. Stop the SNA Server and exit SNA Server Admin or Manager.
	
	  2. Run SNA Server Setup and remove the 802.2 DLC Link Service that is
	     displaying the wrong icon.
	
	     NOTE: For SNA Server 3.0 and later, SNA Server Setup is not run to remove
	     link services. The link service is removed by deleting the link service
	     under the Link Service folder in SNA Server Manager.
	
	  3. Exit SNA Server Setup.
	
	  4. Run SNA Server Admin or Manager. A popup message is displayed indicating
	     that SnaDlc1 (assuming the removed link service is called SnaDlc1) is
	     being removed. Choose the OK button.
	
	  5. After the link service is removed by Admin or Manager, save the
	     configuration (Select Save Configuration from the File menu).
	
	  6. Exit SNA Server Admin or Manager.
	
	  7. Run SNA Server Setup and re-install the 802.2 DLC Link Service. Verify
	     that the proper network adapter is selected for the link service.
	
	NOTE: For SNA Server 3.0 and later, SNA Server Setup is not run to add link
	services. The link service is added by selecting insert under the Link Service
	folder in SNA Server Manager.
	  8. Exit Setup.
	
	  9. Run SNA Server Admin or Manager.
	
	  10. A new connection is now listed under the SNA Server name that should show
	     the proper icon. You can configure this new connection or you can go into
	     Connection Properties for the existing connection and select the SnaDlc
	     link service that was just installed. You can delete the connection that
	     you are not going to use.
	
	     NOTE: A new connection is not created by default when using SNA Server 3.0
	     and later. The existing connection should be configured to use the link
	     service added in Step 7.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :2.0,2.1,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

{% endraw %}
