---
layout: page
title: "Q169231: Name Resolution Slow over RAS Connection"
permalink: kb/169/Q169231/
---

## Q169231: Name Resolution Slow over RAS Connection

	Article: Q169231
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are running Windows NT 4.0 on a portable computer connected to a LAN, and
	your network adapter receives a TCP/IP address from a DHCP server. DHCP also
	assigns a WINS and DNS server address to your network adapter.
	
	When you remove your computer from the LAN and use RAS (Dial-Up Networking) to
	connect to a remote server, you find that name resolution slows down by at least
	sixfold (for example, names formerly resolved in 10 seconds now take at least 60
	seconds).
	
	CAUSE
	=====
	
	The cause of this problem is that the DNS server addresses remain bound to your
	network adapter. The result is that your client attempts to resolve host names
	through DNS servers that are not available because your computer has been
	removed from the network.
	
	Using "IPCONFIG /RELEASE" (without the quotation marks) from the command prompt
	will not release the DNS server address(es) bound to your network adapter.
	
	NOTE: If you have multiple network adapters in your system, these adapters will
	also continue to use the DHCP assigned DNS server address(es).
	
	WORKAROUND
	==========
	
	To work around this problem, on the Windows NT 4.0 Dial-Up Networking client, do
	one of the following:
	
	- Configure the RAS server with a DNS address. This address will be given to
	  RAS clients. RAS clients will use this DNS first and there should be no delay
	  resolving names.
	
	  -or-
	
	- Use the Windows NT 4.0 Hardware Profiles option to create a remote hardware
	  profile that eliminates the network adapter on the Windows NT 4.0 remote
	  client. In the Control Panel, double-click the System icon and click the
	  Hardware Profiles tab to find this option. Use the context help file for
	  assistance in creating the remote profile without a network adapter. The
	  Hardware Profiles option automatically creates a boot menu so you can choose
	  between your local and remote profiles.
	
	  -or-
	
	- Use the Registry Editor to the remove reference to the legacy DNS server
	  entry.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- Wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk. To remove the
	  DNS server addresses from your network adapter, follow these steps:
	
	  1. Run Registry Editor (Regedt32.exe).
	
	  2. Go to the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\ 
	     Parameters\DhcpNameServer
	
	  3. Double-click the DHCPNameServer entry in the right pane window, and select
	     the DHCP assigned name server addresses. Now, pinging a Host name or a
	     NetBIOS name over the RAS connection take the expected amount of time
	     (without significant delay).
	
	     The change is immediate, and you will not have to restart after making this
	     change. After you disconnect from the Dial-Up Networking remote connection
	     and reconnect to your LAN, run the IPCONFIG /RENEW command at the command
	     prompt to restore the original DNS server settings.
	
	  -or-
	
	- Ensure that you have specified a DNS server that is valid for your remote
	  network in the "Specify name server addresses" option of the PPP TCP/IP
	  Settings dialog found in your Edit Phonebook Entry window for the Windows NT
	  4.0 Dial-Up Networking interface.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: hang creep crawl wait timeout
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
