---
layout: page
title: "Q219381: Name Resolution Using Lmhosts May Generate System Error 1214"
permalink: kb/219/Q219381/
---

## Q219381: Name Resolution Using Lmhosts May Generate System Error 1214

	Article: Q219381
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp5fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to communicate with a computer listed in the Lmhosts file
	located on your computer running Windows NT using the NET USE
	\\computername\share command, you may receive the following error message:
	
	  System Error 1214 has occurred/> The format of the specified network name
	  name is invalid.
	
	CAUSE
	=====
	
	A number of Netbt.sys drivers have been produced Post-SP4. All of them contained
	a regression in LMHOSTS parsing. Fixes for the following bugs contained a
	regression in LMHOSTS parsing:
	
	  Q221150 NET USE to 16 Character Dotted-DNS Name May Fail
	
	
	  Q214429 Stop 0xA in Netbt.sys When Querying the DNS for a NetBIOS Name
	
	
	These hotfixes have all been replaced. Any Post-SP4 Netbt.sys dated prior to
	2/25/99 should be replaced.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Service Pack 5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
