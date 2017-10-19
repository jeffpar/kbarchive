---
layout: page
title: "Q124798: Ethernet_802.3 Does Not Work with ODI/NDIS Support Driver"
permalink: /kb/124/Q124798/
---

## Q124798: Ethernet_802.3 Does Not Work with ODI/NDIS Support Driver

	Article: Q124798
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the ODI/NDIS Support driver and configure the NWLink IPX Compatible
	Transport protocol with the frame type of Ethernet_802.3 in Network Client
	version 3.0 for MS-DOS that is shipped with Windows NT Server version 3.5, the
	following message may appear when you attempt to log on to a Windows NT version
	3.5 domain:
	
	  You were logged on, but have not been validated by a server. Therefore, you
	  may not have permission to use some network resources.
	
	
	WORKAROUND
	==========
	
	To work around this problem, either run the Network Client version 3.0 for
	MS-DOS Setup program or modify its PROTOCOL.INI file:
	
	Run Network Client Setup Program
	--------------------------------
	
	1. Run the Setup program for Network Client version 3.0 for MS-DOS and select
	  Change Network Configuration.
	
	2. For the Protocol, select NWLink IPX Compatible Transport, and for Options,
	  select Change Settings.
	
	3. Select either one of the following for Frame Type:
	
	  Ethernet _802.2
	  Ethernet_II
	  Ethernet _SNAP
	
	4. Exit Setup and restart the computer.
	
	5. On the Windows NT Server version 3.5, verify that you have the same frame
	  type configured for the NWLink IPX/SPX Compatible Transport protocol in
	  Network of Control Panel.
	
	Modify PROTOCOL.INI
	-------------------
	
	1. Using a text editor such as EDIT.COM, open the PROTOCOL.INI file for the
	  Network Client.
	
	2. In the [MS$NWLINK] section of PROTOCOL.INI, change the following:
	
	        [MS$NWLINK]
	        FRAME=Ethernet_802.3
	
	  to
	
	        [MS$NWLINK]
	        FRAME=Ethernet_802.2 (or Ethernet_II or Ethernet_SNAP)
	
	3. Save and exit the text editor, and reboot the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Network Client version 3.0
	for MS-DOS. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : winnt:3.5
	
	=============================================================================
	
