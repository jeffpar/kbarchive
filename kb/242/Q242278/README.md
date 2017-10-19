---
layout: page
title: "Q242278: Service Pack 6 Setup Replaces 3Com EtherLink 905B Driver"
permalink: /kb/242/Q242278/
---

## Q242278: Service Pack 6 Setup Replaces 3Com EtherLink 905B Driver

	Article: Q242278
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 SP6 
	- Microsoft Windows NT Server version 4.0 SP6 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is a known issue with the 3Com EtherLink 905B network adapter driver prior
	to version 3.38.40.0. In certain conditions, this issue is exposed in Windows NT
	4.0 Service Pack 6 (SP6).
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT Server 4.0 Service Pack 6 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 6.
	
	MORE INFORMATION
	================
	
	To avoid any incompatibility between SP6 and the 3Com driver, SP6 Setup replaces
	this driver (and prior versions of the 3Com driver) with version 3.40.40.0.
	
	If you have the EtherLink 905B network adapter and need to reinstall the drivers,
	please obtain the latest drivers from 3Com. For information about obtaining the
	latest 3Com drivers, click the following link to view the 3Com Web site:
	
	  http://www.3com.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	To obtain the latest Windows NT 4.0 service pack, click the link below:
	
	  http://www.microsoft.com/Windows/ServicePacks/
	
	Additional query words: sp6
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTS400sp6 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbWinNTW400sp6
	Version           : winnt:4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
