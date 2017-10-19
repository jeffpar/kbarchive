---
layout: page
title: "Q153220: DHCP Manager Error &quot;No More Data Is Available&quot;"
permalink: /kb/153/Q153220/
---

## Q153220: DHCP Manager Error &quot;No More Data Is Available&quot;

	Article: Q153220
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you create a new scope in DHCP Manager and activate it, you may receive
	the following error message:
	
	  No more data is available.
	
	RESOLUTION
	==========
	
	After you receive this error message, click Add on the Server menu. When
	prompted, type either 127.0.0.1 or the IP address of the DHCP server you are
	trying to manage. You should not receive this error message again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: DHCP prodnt
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
