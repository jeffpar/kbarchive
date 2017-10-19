---
layout: page
title: "Q247682: Lmhosts File Incorrectly Parsed with Alternate Block Inclusion"
permalink: /kb/247/Q247682/
---

## Q247682: Lmhosts File Incorrectly Parsed with Alternate Block Inclusion

	Article: Q247682
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Lmhosts file that uses #BEGIN_ALTERNATE / #END_ALTERNATE tags with #INCLUDE
	statements parses all Lmhosts files that are pointed to using the #INCLUDE
	statements. For example:
	
	#BEGIN_ALTERNATE
	#INCLUDE \\Lmhostsrv1\Public\Lmhosts    
	#INCLUDE \\Lmhostsrv2\Public\Lmhosts 
	#END_ALTERNATE
	
	NOTE: In this example the Lmhosts files from both Lmhostsrv1 and Lmhostsrv2 are
	parsed.
	
	CAUSE
	=====
	
	This behavior occurs because the #ALTERNATE_INCLUDE condition is satisfied if
	one of the #INCLUDE statements is successful. This means that only one Lmhosts
	file should be parsed. The first successful #INCLUDE statement is the only
	Lmhosts file that should be parsed, but all Lmhosts files that are pointed to
	using #INCLUDE statements are parsed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q102725 LMHOSTS File Information and Predefined Keywords
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
