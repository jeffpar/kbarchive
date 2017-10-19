---
layout: page
title: "Q102878: Information on Browser Operation"
permalink: /kb/102/Q102878/
---

## Q102878: Information on Browser Operation

	Article: Q102878
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Computer Browser service lets you track servers that are active on the
	network with a minimum of network overhead. It consists of two components on a
	Windows NT or Windows NT Advanced Server computer.
	
	The User Mode component is the Browser, which is part of the LAN Manager Server
	service. This portion is responsible for maintaining the browse list, remoting
	the NetServerEnum API, and managing the computer's role as a Browser (or
	non-Browser).
	
	The Kernel Mode component is the Datagram Receiver and is in charge of receiving
	and managing datagrams.
	
	Browser Roles
	-------------
	
	A network can contain the following types of servers related to browsing:
	
	Non-Browser Servers - Do not maintain browse lists, but announce themselves
	periodically to the Master Browser.
	
	Potential Browser - Can become a Browser server if needed.
	
	Backup Browser - Maintains a browse list of servers and domains that it retrieves
	from the Master Browser.
	
	Master Browser - Receives server and Domain announcements, sends browse lists to
	Backup Browsers, responds to clients requesting browse server lists, promotes
	Potential Browsers to Backup when needed, and announces the domain to inform the
	Master Browsers of other domains of the domain name and Master Browser for that
	domain.
	
	Preferred Master Browser - Same as Backup Browser, except that browser elections
	are biased when the IsDomainMasterBrowser (Windows NT 3.51 or earlier) registry
	value or the IsDomainMaster (Windows NT 4.0 or Windows 2000) registry value is
	set to TRUE.
	
	Domain Master Browser - The primary domain controller of a domain is given a
	special bias in browser elections so that it will become the Domain Master
	Browser. This allows browsing to be effective when a domain spans multiple
	subnets. A directed datagram is used by Master Browsers on each subnet to
	announce itself to the Domain Master Browser. This is made possible through an
	entry in the LMHOSTS file on the Master Browsers for the Domain Controller. This
	makes it necessary to have a Windows NT Advanced Server, NT Workstation, Windows
	NT Server or Windows 2000 Pro computer to browse across wide area network (WAN)
	connections.
	
	There will be at least one Master Browser on a workgroup/domain and one Backup
	Browser for every 32 systems in that workgroup/domain. This means that in a
	domain/workgroup with fewer than 32 systems, there will be one Master and one
	Backup Browser. One more Backup Browser will be added for every 32 systems. This
	is accomplished by the Master Browser telling a Potential Browser to become a
	Backup Browser.
	
	Browser NetBIOS Names
	---------------------
	
	Several special NetBIOS names and Mailslots are used to maintain and retrieve
	browse lists. Names listed here as "DOMAIN(xx)" indicate the domain name
	followed by the hex value (xx) and padded with spaces to the 16th byte.
	
	<01><02>__MSBROWSE__<02><01>
	
	This name is registered by the Master Browser and is used to broadcast and
	receive domain announcements on the local subnet. It is through this name that
	Master Browsers for different domains learn the names of different domains and
	the names of the Master Browsers on those domains.
	
	DOMAIN(00)
	
	This is the name to which server announcements are broadcast in Microsoft LAN
	Manager so that other Microsoft LAN Manager computers can track the servers on
	the network. Windows NT computers do not make these broadcasts unless the
	LMAnnounce option has been enabled by configuring the Server service with the
	Control Panel/Networks application. This means that LAN Manager systems will not
	see these computers unless this option is enabled.
	
	A LAN Manager server within the Windows NT domain will be seen by the Browser and
	therefore other systems on the network. A LAN Manager domain that doesn't
	contain any Windows NT computers will not appear on the browse lists unless it
	is specified as an Other Domain through the Control Panel/Networks application
	in the Computer Browser configuration.
	
	DOMAIN(1D)
	
	This name is registered by Master Browsers. It is used by clients to find a
	Master Browser server. A client will broadcast to this name to get a list of
	browser servers from the Master Browser. The Master Browser will send a list of
	browser servers to the client from which the client will cache three of these
	server names. The client will then randomly pick one of these servers to request
	a list of servers and domains from.
	
	DOMAIN(1B)
	
	This name is registered by the primary domain controller in a domain only and
	allows unique identification of that computer.
	
	DOMAIN(1E)
	
	This name is registered by all Browser servers and Potential Browser servers in a
	domain or workgroup. It is used for announcement requests which are sent by
	Master Browsers to fill up its browse lists, and for election request packets to
	force an election. Elections are performed by sending a packet out to this name
	that contains your election criteria.
	
	The election criteria for a Browser is based on the Browser's current role in the
	domain and its current state, using the following hierarchy:
	
	  Operating System Type:        0xFF000000
	  Windows for Workgroups:       0x00000000
	  Windows NT:                   0x01000000
	  Windows NT Advanced Server:   0x02000000
	  Election Version:             0x00FFFF00
	  Per version criteria:         0x000000FF
	  PDC:                          0x00000080
	  Preferred Master:             0x00000008
	  Running Master:               0x00000004
	  MaintainServerList = Yes:     0x00000002
	  Running Backup Browser:       0x00000001
	
	The Browser will OR all of the appropriate election criteria and use this to
	determine the system's election criteria.
	
	The criteria for determining if a Browser has won an election is the following:
	
	- If your election version is greater than the sender's election version, you
	  win.
	
	- Else if your election criteria is greater than the sender's criteria, you
	  win.
	
	- Else if you have been up longer than the sender, you win.
	
	- If the above comparisons fail to determine a Master Browser, the computer
	  with the lexically lowest name will win the election.
	
	If a Browser receives an election request, it compares the criteria to its own
	and if it wins it will send out up to four election packets. If after this time
	it does not receive an election packet with a better criteria, it will become
	the Master Browser. Elections can be caused by any computer that cannot locate a
	Master Browser, or by a Potential Browser during initialization. An election is
	also instigated by a Master Browser when it shuts down gracefully.
	
	Mail Slots
	----------
	
	Server and Domain Names in the browse list are aged and are removed from the
	browse list if they have not been heard from in three Announce periods.
	
	The Browser uses Mailslot Transactions to pass these messages between systems.
	Two Mailslots are used.
	
	For messages intended for all systems including LAN Manager and Windows for
	Workgroups, MAILSLOT\LANMAN is used.
	
	MAILSLOT\BROWSE is used for messages intended for Windows NT and Windows NT
	Advanced Server systems.
	
	
	Additional query words: wfw wfwg prodnt browsemaster
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :2000,3.1,3.5,3.51,4.0
	
	=============================================================================
	
