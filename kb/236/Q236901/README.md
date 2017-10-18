---
layout: page
title: "Q236901: NetBIOS Remote Name Cache Time-Out Is 60 Seconds Off"
permalink: kb/236/Q236901/
---

## Q236901: NetBIOS Remote Name Cache Time-Out Is 60 Seconds Off

	Article: Q236901
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may see that the NetBIOS Remote Name Cache caches default entries for 660
	seconds, even though the default is 600 seconds.
	
	CAUSE
	=====
	
	This issue occurs because Windows NT adds an additional 60 seconds to an entry's
	cache life.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This issue is fixed in Windows 2000. Additionally, Windows 2000 provides much
	finer granularity for cache TTLs (time-to-live) as well as per-adapter NetBIOS
	name caching.
	
	This value determines the time interval that names are cached in the remote name
	table. The CacheTimeout parameter for the NetBIOS Remote Name Table has a range
	of values from 60 to 4,294,967,295 seconds with a default of 600 seconds.
	
	Using the NBTSTAT -c command at the command prompt you can display the names in
	the table. Note that by default recently cached names are listed for 660
	seconds. If you change the CacheTimeout value to something other than the
	default, the displayed value is 60 seconds higher than what you entered.
	
	CacheTimeout
	  Key: Netbt\Parameters
	  Value Type: REG_DWORD - Time in milliseconds
	  Valid Range: 0xEA60 to 0xFFFFFFFF
	  Default: 0x927c0 ( 600000 milliseconds = 10 minutes)
	<BR/>
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
