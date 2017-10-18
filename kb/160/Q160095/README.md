---
layout: page
title: "Q160095: DUN Client May Not Be Able to Ping Remote Host by Name"
permalink: kb/160/Q160095/
---

## Q160095: DUN Client May Not Be Able to Ping Remote Host by Name

	Article: Q160095
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Dial-Up Networking (DUN) on your computer running Windows 95 to
	connect remotely to a Windows NT RAS server, then you may be able to ping the IP
	address of a host on the remote LAN, but you cannot successfully ping the remote
	host by name. Pinging the host name generates the following error:
	
	  Bad IP Address <host name>
	
	Browsing functionality in File Manager and the NET VIEW \\<hostname>
	command still work correctly.
	
	CAUSE
	=====
	
	You still have a network adapter installed on your Windows 95 Dial-Up Networking
	client computer, and the TCP/IP protocol is bound to this adapter.
	
	In addition, you may have the following configuration options selected:
	
	- The "Obtain an IP address automatically" option is selected on the IP Address
	  tab when you select TCP/IP and then click Properties in the Control Panel
	  Network tool. And on the WINS Configuration tab, you have the "Enable DNS for
	  Windows Resolution" option selected.
	
	- In TCP/IP Settings for the DUN connectoid, you have the "Server assigned name
	  server addresses" option selected.
	
	RESOLUTION
	==========
	
	On the Windows 95 DUN client, perform one of the following:
	
	- Use the Windows 95 Hardware Profile feature to create a remote hardware
	  profile that eliminates the network adapter on the Windows 95 DUN client
	  computer.
	
	  NOTE: If you are using a laptop with a PCMCIA NIC and modem combo PC Card,
	  then you can disable the Network Adapter functionality separate from the
	  modem functionality without removing the entire PC Card from the remote
	  Hardware Profile.
	
	-or-
	
	- Use the "Release All" option in the Winipcfg.exe utility to release all IP
	  addresses bound to the network adapter.
	
	-or-
	
	- Enable Domain Name System (DNS) name resolution on the Windows 95 DUN client
	  and specify a DNS server in the DUN connectoid that can resolve the ping for
	  the remote host name.
	
	MORE INFORMATION
	================
	
	The Windows 95 DUN client was connected to a LAN through the network adapter,
	and a Dynamic Host Configuration Protocol server on that LAN assigned a WINS
	server address to the Windows 95 client. Now that the client is no longer
	connected to the LAN, the WINS server is no longer reachable because this WINS
	server does not exist on the remote network.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
