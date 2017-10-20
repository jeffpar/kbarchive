---
layout: page
title: "Q148971: TR-attached IPX SNA Client Not Find Server Across FDDI Bridge"
permalink: /kb/148/Q148971/
---

## Q148971: TR-attached IPX SNA Client Not Find Server Across FDDI Bridge

{% raw %}

	Article: Q148971
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the SNA Server client software configured to use the Novell NetWare
	IPX/SPX client interface on Token Ring, the client is unable to find a SNA
	Server located across an FDDI transitional bridge.
	
	When the problem occurs on a SNA Server Microsoft Windows 3.x client, Wnap.exe
	will display the following error when it is started:
	
	  SNA Server Error: 546 Cannot establish connection with SNA Server
	  <servername>.
	
	Microsoft Windows NT and Microsoft Windows 95 clients will indicate that the
	SnaBase service is not started.
	
	CAUSE
	=====
	
	When you connect a SNA Server IPX/SPX client from a Token Ring network to a SNA
	Server located on FDDI, the intervening FDDI bridge may bit-swap the destination
	address of the IPX/SPX connection request, causing the SNA client to fail to
	connect to the SNA Server.
	
	This problem only occurs when SNA Server clients are configured to use NetWare
	IPX/SPX on Token Ring, where the server's IPX address is based on the network
	card adapter address installed in the SNA Server.
	
	Ethernet-attached IPX clients will not encounter this problem because the FDDI
	bridge does not bit-flip destination addresses when bridging frames. Also, all
	other client-server connection methods supported by SNA Server (for example,
	named pipes, TCP/IP sockets, Banyan IP, and AppleTalk) do not directly refer to
	the server's adapter address when it connects to the server and will not
	encounter this problem.
	
	RESOLUTION
	==========
	
	To support this configuration, an update to the SNA Server client software is
	available that supports "bit flipping" of the SNA Server's IPX address. It will
	try if the following new SNA Server client setting is enabled:
	
	  FlipMacAddress=Yes
	
	For Windows 3.x clients, this setting must be added to the [WNAP] section of the
	Win.ini file.
	
	For Windows NT clients, this setting must be as follows:
	
	 HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/SnaBase/ 
	  Parameters/SnaSpx/ 
	
	  FlipMacAddress: REG_SZ: Yes
	
	For Windows 95 clients, this setting must be as follows:
	
	  HKEY_LOCAL_MACHINE/Software/Microsoft/SnaBase/Parameters/SnaSpx/ 
	
	  FlipMacAddress: REG_SZ: Yes
	
	If this value is set to Yes, the SNA Server client NetWare transport first tries
	the bit flipped server address, and if it fails, it retries with the original
	non-flipped address.
	
	For additional information on the algorithm for bit-flipping network addresses,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q123791 SNA Server Remote Station Discovery Process
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 2.0, 2.1, 2.11, and
	2.11.sp1.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
