---
layout: page
title: "Q154409: Setting WINS Clients Refresh Intervals to Occur Infrequently"
permalink: /kb/154/Q154409/
---

## Q154409: Setting WINS Clients Refresh Intervals to Occur Infrequently

{% raw %}

	Article: Q154409
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows for Workgroups 
	- Microsoft TCP/IP-32 for Windows for Workgroups 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	If you want to set a Windows Internet Naming Service (WINS) client to refresh
	its names with the WINS server infrequently, you must make a change in the
	registry (or System.ini file if you are using Windows for Workgroups 3.11).
	
	MORE INFORMATION
	================
	
	In environments with Dial-on-Demand routers, frequent name refreshes may create
	undesirable router traffic that can be limited by adding a static entry for the
	client in WINS.
	
	When a WINS client is started, it sends its name registrations to the WINS
	server. If the WINS server is across a Dial-on-Demand router, the router dials.
	
	The WINS client then sends a refresh request of its name to the WINS server. The
	first attempt to send the refresh request occurs when one-eighth of its
	InitialRefreshTimeout interval expires. By default, the value for the
	InitialRefreshTimeout is 960,000 ms (or 16 minutes), and one-eighth of that
	value is 2 minutes.
	
	The minimum value for this registry entry is 960,000 ms, so it is impossible to
	prevent the refresh request from occurring. Setting the value in the registry to
	0xffffffff defines the interval for the refresh request, or one-eighth of the
	IntitialRefreshTimeout, to approximately 50 days.
	
	Once a WINS server receives the refresh request from the WINS client across the
	router, the WINS server returns a refresh response. The server's refresh
	response includes the client's renewal interval, which the client uses to
	determine the wait time before its next refresh request. This is determined by
	one-eighth of the renewal interval (which by default is 96 hours, so the next
	refresh will occur in 12 hours).
	
	You can change the value if the InitialRefreshTimeout setting according to your
	needs. For more information on where you can change this parameter, see the
	section below for your version of Windows.
	
	Windows NT
	----------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	For computers running Windows NT Server or Windows NT Workstation, you can change
	the registry entry for InitialRefreshTimeout. It is located in the following
	registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NetBt\Parameters
	  InitialRefreshT.O. REG_DWORD
	  Range : 960,000 to 0xFFFFFFF milliseconds
	  Default: 960,000 (16 minutes)
	
	This parameter specifies the initial refresh timeout used by NetBIOS over TCP/IP
	(NBT) during name registration. NBT tries to contact the WINS servers at
	one-eighth of this time interval when it first registers names. When it receives
	a successful registration response, that response contains the new refresh
	interval to use.
	
	Windows for Workgroups 3.11
	---------------------------
	
	For computers running Windows for Workgroups 3.11, you can add the following line
	to the [NBT] section of the System.ini file:
	
	InitialRefreshT.O.=<value in milliseconds>
	
	Windows 95
	----------
	
	For computers running Windows 95, you can change the registry entry for
	InitialRefreshTimeout. It is located in the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\MSTCP
	  InitialRefreshTimeout: REG_DWORD: milliseconds
	
	Additional query words: networking dun ras
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbTCPIPSearch kbWFWSearch kbZNotKeyword3
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
