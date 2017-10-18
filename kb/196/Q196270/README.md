---
layout: page
title: "Q196270: SNMP Agent Leaks Memory When Queried"
permalink: kb/196/Q196270/
---

## Q196270: SNMP Agent Leaks Memory When Queried

	Article: Q196270
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix sms
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Severe memory leakage occurs when the SNMP agent is under stress.
	
	Also, in Perfmon, for the Network Interface Object, you may notice a random
	number for the first instance, instead of 1.
	
	CAUSE
	=====
	
	This problem occurs because, while processing messages, a buffer was used that
	was never freed.
	
	
	A regression in Service Pack 4 caused the network interface problem.
	
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
	
	This fix is now part of the Post-SP4 Roll-up fix, which is available at the
	following Internet location as Sp4hfixi.exe (x86) and Sp4hfixa.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP4/Roll-up/
	
	This fix can also be installed individually from the following Internet
	location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP4/archive/Sms-fix/
	
	This fix is for all versions of Windows NT, except Windows NT, Terminal Server
	Edition, which needs to be requested by calling Microsoft Product Support
	Services.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00 systems management server service sp4
	
	======================================================================
	Keywords          : kbWinNT400sp5fix sms 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
