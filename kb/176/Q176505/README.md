---
layout: page
title: "Q176505: Values for WINS Manager Server Configuration Settings"
permalink: /kb/176/Q176505/
---

## Q176505: Values for WINS Manager Server Configuration Settings

	Article: Q176505
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the options in the WINS server Configuration dialog box
	of a Windows Internet Name Service (WINS) server and the minimum and maximum
	values.
	
	MORE INFORMATION
	================
	
	Renewal Interval
	----------------
	
	This option specifies how often a client reregisters its name. The renewal times
	are as follows:
	
	  Default:   5 hours (Windows NT version 3.5)
	            96 hours (Windows NT version 3.51)
	           144 hours (Windows NT version 4.0)
	  Maximum: 999 hours (Windows NT versions 3.5, 3.51, and 4.0)
	  Minimum:  40 minutes (Windows NT versions 3.5, 3.51, and 4.0)
	
	Extinction Interval
	-------------------
	
	This option specifies the time interval between when an entry is marked as
	released and when it is marked as extinct. The default value is dependant on the
	renewal interval and, if the WINS server has replication partners, on the
	maximum replication time interval. The extinction interval times are as
	follows:
	
	  Default: <Dependant on renewal interval>
	  Maximum: 999 hours (Windows NT versions 3.5, 3.51, and 4.0)
	  Minimum:  40 minutes (Windows NT versions 3.5 and 3.51)
	             1 hour (Windows NT version 4.0)
	
	Extinction Timeout
	------------------
	
	This option specifies the interval between when an entry is marked extinct and
	when the entry is finally scavenged from the database. The default value is
	dependant on the renewal interval and, if the WINS server has replication
	partners, on the maximum replication time interval. The Extinction Timeout times
	are as follows:
	
	  Default: <Dependant on renewal interval>
	  Maximum: 999 hours (Windows NT versions 3.5, 3.51, and 4.0)
	  Minimum:  24 hours (Windows NT versions 3.5, 3.51, and 4.0)
	
	Verify Interval
	---------------
	
	This option specifies the interval after which the WINS server must verify that
	old names that it does not own are still active. The default is dependant on the
	extinction interval. The verify interval times are as follows:
	
	  Default: <Dependant on extinction interval>
	  Maximum: 9999 hours (Windows NT versions 3.5, 3.51, and 4.0)
	  Minimum:   24 days (Windows NT versions 3.5, 3.51, and 4.0)
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
