---
layout: page
title: "Q164812: Computer Name Truncated When Name Resolution Attempted"
permalink: /kb/164/Q164812/
---

## Q164812: Computer Name Truncated When Name Resolution Attempted

	Article: Q164812
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNet
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When name resolution for the Primary Domain Controller (PDC) is required over
	any of the installed network protocols bound to NetBIOS, and the PDC's machine
	name is 14 characters or longer, the name queries truncate the computer name to
	13 characters, and a negative response occurs. As a result, you may experience
	one or more of the following:
	
	- Extra network traffic
	
	- Long response time with some domain operations
	
	- Administrative Tools unusable
	
	- Unable to change domain passwords
	
	Name queries that are formatted for broadcast, WINS, and DNS are all affected by
	this problem.
	
	CAUSE
	=====
	
	The NetGetDCName Win32 API is used to retrieve the name of the PDC on a domain.
	If the PDC s name is greater than 13 characters, this API caches the local PDC
	name incorrectly. If a second call is made, NetGetDCName tries to connect to
	this invalid PDC name, causing extra network traffic and a longer response
	time.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: unable locate find netlogon
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
