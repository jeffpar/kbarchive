---
layout: page
title: "Q142686: First Line of Print Job Lost When Printing Using Lpdsvc"
permalink: /kb/142/Q142686/
---

## Q142686: First Line of Print Job Lost When Printing Using Lpdsvc

	Article: Q142686
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print using Lpdsvc, the TCP/IP print services, and the Generic Text
	Only printer driver, the first line of each print job is not printed.
	
	CAUSE
	=====
	
	This problem is a regression caused by a fix to Txtonly.dll, which shipped in
	Service Pack 4 for Windows NT version 3.51. Any print job printed using the text
	data type by means of the Text Only Printer Driver will lose the first line of
	output. This is most noticeable using TCP/IP Print Services because it
	explicitly sets the data type of the print jobs it submits to be Text, rather
	than the normal default of RAW.
	
	RESOLUTION
	==========
	
	A hotfix for Txtonly.dll is available from Microsoft for Windows NT version 3.51
	post Service Pack 5, and for Windows NT version 4.0, which fixes this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT versions
	3.51 (SP4) and 4.0. This problem was corrected in the latest Microsoft Windows
	NT 4.0 U.S. Service Pack. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	For information about this issue, query in the Knowledge Base for the following
	article:
	
	  ARTICLE-ID: Q154322
	  TITLE : First Line Is Not Printed Using Generic/Text Only Printer Driver
	
	Additional query words: rfc1179 lpr lpd prodnt generic text first line
	
	======================================================================
	Keywords          : kbnetwork kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
