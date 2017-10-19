---
layout: page
title: "Q255880: Event ID 1540 When Attempting to Add Reverse Lookup Zones"
permalink: /kb/255/Q255880/
---

## Q255880: Event ID 1540 When Attempting to Add Reverse Lookup Zones

	Article: Q255880
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbtool kbui
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	In DNS Manager, when you try to manually add any of the following reverse lookup
	zones
	
	  0.in-addr.arpa.
	  255.in-addr-arpa.
	  127.in-addr.arpa.
	
	you may receive the following error message:
	
	  The new zone couldn't be created because there is already a zone by this
	  name.
	  Verify that the zone name was entered correctly or choose a new zone name.
	
	The process is terminated by DNS and the zone is not created. In addition, the
	following entry is displayed in the system log of Event Viewer:
	
	  Event ID: 1540
	  Source: DNS
	  Type: Error
	  Description: DNS Server unable to create domain node.
	
	CAUSE
	=====
	
	This behavior can occur for one of the following reasons:
	
	- The Show Automatically Created Zones check box (click Options, and then click
	  Preferences) is cleared (by default) or the ShowAutoCreatedZones registry
	  value is set to 0.
	
	  NOTE: When a DNS server is created, these three reverse lookup zones are
	  automatically created (in memory only and not stored in a zone file) by
	  default. However, in DNS Manager the Show Automatically Created Zones option
	  is disabled by default, and the automatically created zones are therefore not
	  displayed. This may lead you to believe that those zones are not created.
	
	- When the DisableAutoReverseZones registry value is accidentally set to 1 or a
	  non-zero value.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method.
	
	Method 1
	--------
	
	1. In DNS Manager, click to select the Show Automatically Created Zones check
	  box or set the ShowAutoCreatedZones registry value to a non-zero value.
	
	2. In DNS Manager, right-click the server name, and then click Update Server
	  Data Files.
	
	3. Right-click the server name again, and then click Refresh.
	
	Method 2
	--------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	If the DisableAutoReverseZones value exists, make sure it is set to 0.
	
	MORE INFORMATION
	================
	
	The ShowAutoCreatedZones value is located in the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\DNSAdministrator\Parameters
	
	  Value: ShowAutoCreatedZones
	  Type: Reg_DWORD (Boolean)
	  Default: 1 (SP5 or earlier), 0 (SP6 and SP6a)
	  Value Range: 0 (False) or 1 (True)
	  Function: Determines if the server shows the automatically created zones,
	  including the standard reverse lookup zones
	
	The DisableAutoReverseZones value is located in the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\Ccs\Services\Dns\Parameters
	
	  Value: DisableAutoReverseZones
	  Added in: Windows NT 4.0
	  Type: Reg_DWORD (Boolean)
	  Default: NoKey (Create automatic reverse lookup zones)
	  Value Range: 0 (False) or 1 (True)
	  Function: Determines if the server automatically creates standard reverse
	  lookup zones
	
	NOTE: If the DisableAutoReverseZones value does not exist or if it is set to 0,
	the DNS server automatically creates these zones with the correct entries
	(except for a PTR for 127.0.0.1 to localhost). If the DisableAutoReverseZones
	value is set to non-zero, the server does not create these zones.
	
	Every DNS server should be authoritative for three reverse lookup zones according
	to RFC:
	
	  0.in-addr.arpa.
	  127.in-addr.arpa.
	  255.in-addr.arpa.
	
	These zones are used for localhost lookups/queries such as 0.0.0.0, 127.0.0.1
	(loopback), and 255.255.255.255 (broadcast).
	
	By being authoritative for the zones corresponding to these queries, the DNS
	server avoids unnecessary recursions to the root servers on these queries, so
	they should always exist on the DNS server. Therefore, the
	DisableAutoReverseZones value should normally not be enabled because if the
	zones do not exist, lookup to any of the zones is sent to a root server.
	
	If you need to modify the localhost (127.0.0.x) reverse lookup zone, you must
	manually create it. The correct name for this zone is 0.0.127.in-addr.arpa.
	
	Additional query words: domain node
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbtool kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
