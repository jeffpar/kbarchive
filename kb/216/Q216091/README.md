---
layout: page
title: "Q216091: GetHostByName() Returns IP Address of Disabled Interface"
permalink: /kb/216/Q216091/
---

## Q216091: GetHostByName() Returns IP Address of Disabled Interface

	Article: Q216091
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT 4.0, it is possible to set up multiple hardware profiles using the
	Devices tool in Control Panel. The device for the network interface card (NIC)
	can be disabled on a per-profile basis.
	
	In such a scenario, Sockets-based applications running on Windows NT 4.0 Service
	Pack 4 may fail unexpectedly. This problem has been observed in NetShow and
	Microsoft Exchange applications. The problem can also occur on multihomed
	computers where one of the NICs is disabled.
	
	CAUSE
	=====
	
	This problem occurs because the GetHostByName() API returns the old IP address
	owned previously by the disabled NIC.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This hotfix has been posted to the following Internet location as Rnr-fixi.exe
	(x86) and Rnr-fixa.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP4/Rnr-fix/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Service Pack 4.
	This problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00 sp4
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
