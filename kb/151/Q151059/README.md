---
layout: page
title: "Q151059: Using PlayerNet to Connect Two People via the Internet"
permalink: kb/151/Q151059/
---

## Q151059: Using PlayerNet to Connect Two People via the Internet

	Article: Q151059
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	2.00
	WINDOWS
	kbusage kbhowto
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, multimedia edition, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to connect two users on the Internet so they can play
	a multiple player session of Golf with PlayerNet.
	
	This article assumes that the computer is already able to connect to the Internet
	successfully. If you have further questions regarding the installation of the
	TCP/IP protocol, or how to use the Internet, please consult your user's guide or
	the Online Help provided by your Internet software.
	
	MORE INFORMATION
	================
	
	Confirm that the TCP/IP protocol has been installed for the adapter you use to
	connect to the Internet. In most cases this will be the Dial-Up Networking
	Adapter.
	
	1. Click Start, point to Settings, and click Control Panel.
	
	2. In Control Panel, double-click the Network icon.
	
	3. Look in the Installed Network Components list and confirm the existence of
	  the TCP/IP protocol for the adapter you will use to access the Internet (for
	  example TCP/IP or TCP/IP -> Dial-Up Adapter.)
	
	4. Confirm that the DNS (Domain Name Server) is not enabled for the TCP/IP
	  protocol.
	
	5. Click the TCP/IP protocol and then click Properties.
	
	6. Click the DNS Configuration tab and click Disable DNS.
	
	  NOTE: Disabling DNS does not remove DNS configuration settings, it makes them
	  unavailable to the TCP/IP protocol. If another application requires the DNS,
	  simply repeat step 1 and then click Enable DNS.
	
	7. Click OK to return to the Network window.
	
	8. Click OK to return to Control Panel.
	
	9. Close Control Panel.
	
	Connect to Your Internet Service Provider (ISP)
	-----------------------------------------------
	
	Determine your IP address.
	
	1. Click Start, point to Programs, and click Windows Explorer.
	
	2. Open the directory that Windows 95 is installed in.
	
	3. Find the file named Winipcfg.exe and double-click it.
	
	4. Copy down the IP Address. (An example of what an IP address looks like is
	  123.45.678.90. The numbers are integers between 1 and 255.)
	
	  NOTE: The IP addresses often change each time you call up and connect to the
	  Internet. So you need to stay connected to the Internet once you have your IP
	  address and want to give it to someone else. In most cases you cannot, for
	  example, connect, get your IP address, disconnect, call them with the IP
	  address, and then reconnect.
	
	To exchange IP addresses, use IRC (Internet Relay Chat) or some other Internet
	communication software to communicate your address to another individual.
	
	To connect to another computer through PlayerNet, follow these steps:
	
	1. Start Golf 2.0
	
	2. Click PlayerNet.
	
	3. Enter your information on the Logon screen, and click OK.
	
	4. Once the Connections window appears, click Address Book.
	
	5. Click Network, type the other persons IP address in the Destination Network
	  Address box, and then click Connect. The Connections window will display your
	  opponent's IP address.
	
	6. Click the Players & Places tab.
	
	7. Click your opponent within the Other Players window, then click Invite
	  Players to start a round of Golf.
	
	Additional query words: 2.00 golf modem network multi-player
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbGolfSearch kbGolf200
	Version           : WINDOWS:2.0
	Issue type        : kbhowto
	
	=============================================================================
	
