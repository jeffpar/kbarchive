---
layout: page
title: "Q162567: Telnet to Port 135 Causes 100 Percent CPU Usage"
permalink: /kb/162/Q162567/
---

## Q162567: Telnet to Port 135 Causes 100 Percent CPU Usage

	Article: Q162567
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a client uses the telnet utility to connect to port 135 of a computer
	running Windows NT Server, and then types more than 10 random characters and
	disconnects, the server CPU usage jumps to 100 percent and does not come back
	down until the server is restarted.
	
	CAUSE
	=====
	
	This problem is caused by a problem with the remote procedure call (RPC)
	components in Windows NT.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, download and install the appropriate file:
	
	Windows NT 3.51
	---------------
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT351/hotfixes-postSP5/rpc-fix
	
	
	Windows NT 4.0
	--------------
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP2/rpc-fix
	
	STATUS
	======
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Windows NT version 4.0. This problem was corrected in the
	latest Microsoft Windows NT 4.0 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Windows NT version 3.51. A fully supported fix is now
	available, but it has not been fully regression tested and should only be
	applied to systems determined to be at risk of attack. Please evaluate your
	system's physical accessibility, network and Internet connectivity, and other
	factors to determine the degree of risk to your system. If your system is
	sufficiently at risk, Microsoft recommends you apply this fix. Otherwise, wait
	for the next Windows NT service pack, which will contain this fix. Please
	contact Microsoft Technical Support for more information.
	
	
	Additional query words: Telnet RPC crash hang max prodnt
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
