---
layout: page
title: "Q167964: NetBT Sends Wrong IP Address for Multihomed Computer"
permalink: kb/167/Q167964/
---

## Q167964: NetBT Sends Wrong IP Address for Multihomed Computer

	Article: Q167964
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Windows NT version 4.0 Service Pack 2 (SP2) or
	Service Pack 3 (SP3) you may notice that you cannot connect to a multihomed
	computer on a different subnet.
	
	CAUSE
	=====
	
	NetBT in SP2 and SP3 does not correctly store the list of IP addresses that the
	WINS server returns for the multihomed computer.
	
	
	RESOLUTION
	==========
	
	Obtain the following fix or wait for the next Windows NT service pack.
	
	This fix should have the following timestamp:
	
	  06/04/97  02:35 PM               117,648 Netbt.sys (Intel)
	  06/04/97  01:34 PM               215,792 Netbt.sys (Alpha)
	
	NOTE: Service Pack 3 must be applied to Windows NT 4.0 prior to applying this
	fix.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: invalid ip multi-homed multi homed
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
