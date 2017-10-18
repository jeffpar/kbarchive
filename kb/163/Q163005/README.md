---
layout: page
title: "Q163005: Compaq Advanced Network Control Utility Fails w/ WinNT 4.0 SP2"
permalink: kb/163/Q163005/
---

## Q163005: Compaq Advanced Network Control Utility Fails w/ WinNT 4.0 SP2

	Article: Q163005
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP2
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP2 
	- Microsoft Windows NT Server version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Compaq Advanced Network Control utility included on Compaq's support
	software disk (SSD) 1.18 or later (up to SSD 1.20a at the time this article was
	written) fails to work properly after applying Windows NT 4.0 Service Pack 2.
	The utility starts up after some time, but does not have all the information it
	had before the service pack was applied. The utility fails whether it is
	installed before or after the service pack has been applied. Removing the
	service pack causes the utility to start working correctly again.
	
	RESOLUTION
	==========
	
	To resolve this problem, do either of the following:
	
	- Obtain the hotfix mentioned in the STATUS section of this article.
	
	  -or-
	
	- Use the Netflx3.sys driver that comes with the Windows NT 4.0 Service Pack 2
	  media. There is a new Netflx3.sys driver (version 1.51) in the
	  Drvlib\Netcard\Netflx3 directory. Because this is a Drvlib (OEM) driver,
	  there is no mechanism to automatically update the service pack installation
	  with the new driver. In other words, you must manually copy the Netflx3.sys
	  driver that comes with the service pack to the target system. When this is
	  done, the Compaq utility works as expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 2.
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	MORE INFORMATION
	================
	
	The Compaq Advanced Network Utility uses a graphical user interface (GUI) that
	allows a user to install, configure, update, and monitor the status of all
	Compaq network controllers containing the TLAN chip set. It uses the Netflx3.sys
	file to configure network controllers for redundancy or stand- alone
	configurations.
	
	Additional query words: ANC Netflex Proliant NIC Adapter Thunderland prodnt applet sp sp2 chipset
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp2 kbWinNTSsearch kbWinNTS400sp2 kbWinNTS400search
	Version           : :4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
