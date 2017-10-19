---
layout: page
title: "Q139415: New TCP/IP ArpCacheLife Parameter in Windows NT"
permalink: /kb/139/Q139415/
---

## Q139415: New TCP/IP ArpCacheLife Parameter in Windows NT

	Article: Q139415
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows NT 3.5 and 3.51 Service Pack 3 or earlier, an ARP cache entry times
	out in 2 minutes. If the same entry is used again, the time-out period is 10
	minutes. The time-out entry is not user configurable.
	
	With Windows NT version 3.51 Service Pack 4 or later, a new parameter,
	ArpCacheLife, allows ARP cache life to be configured.
	
	If the new ArpCacheLife parameter is not present, the following defaults are
	used. Windows NT arp cache time-out defaults to 2 minutes if the entry is not
	used and 10 minutes if it is reused.
	
	MORE INFORMATION
	================
	
	
	ArpCacheLife is found in the HKEY_LOCAL_MACHINE\SYSTEM subtree, in the following
	key:
	
	  \CurrentControlSet\Services\Tcpip\Parameters
	
	  The parameter information is as follows:
	
	  Entry: ArpCacheLife
	  Type: REG_DWORD
	  Range: Number of Seconds
	
	ArpCacheLife determines the default lifetime in seconds for entries in the ARP
	cache table. Once an entry is placed in the ARP cache, it is deleted after it is
	allowed to remain there until its lifetime expires or until its table entry is
	reused because it is the oldest entry. In absence of an ArpCacheLife parameter,
	the default for ARP cache time-outs is a 2 minute time-out on unused entries and
	a 10 minute time-out on used entries.
	
	The initial ArpCacheTable is large enough for 50 entries. When there are 50
	entries, the ARP cache is allowed to grow dynamically.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51 and Windows NT 4.0 or later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and 3.51
	Service Pack 3 or earlier. This problem was corrected in Windows NT version 3.51
	U.S. Service Pack 4. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
