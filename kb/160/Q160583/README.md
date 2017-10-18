---
layout: page
title: "Q160583: Windows NT 4.0 with More Than 4 Processors May Stall &amp; Reboot"
permalink: kb/160/Q160583/
---

## Q160583: Windows NT 4.0 with More Than 4 Processors May Stall &amp; Reboot

	Article: Q160583
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Server 4.0 with more than 4 processors may stall and reboot after
	running for several hours.
	
	CAUSE
	=====
	
	The algorithm to determine the number of processors for licensing calculates the
	number of processors incorrectly, resulting in a license violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt hung hang multi ntmp
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
