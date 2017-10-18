---
layout: page
title: "Q191922: Error 1605 When Jetpacking DHCP Database"
permalink: kb/191/Q191922/
---

## Q191922: Error 1605 When Jetpacking DHCP Database

	Article: Q191922
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a you try to run Jetpack.exe on the Jet database of a Dynamic Host
	Configuration Protocol (DHCP) server on a computer running Windows NT Server
	version 4.0, you may receive the following error message:
	
	  Jetpack failed with error = -1605
	
	When compacting the database using Jetpack, a Jet database duplicate key error
	-1605 may occur. This error occurs when addresses are marked bad and a unique
	value is not used for the media access control hardware address associated with
	the bad IP addresses.
	
	This problem may go away temporarily if you delete the database and reconcile.
	This problem may also result in the DHCP server ceasing to respond (hanging).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q188027 Performance, Audit Logging, and Fixes to the DHCP Service
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
