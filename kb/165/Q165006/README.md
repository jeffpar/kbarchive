---
layout: page
title: "Q165006: DHCP Event 1020"
permalink: /kb/165/Q165006/
---

## Q165006: DHCP Event 1020

	Article: Q165006
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DHCP logs the following Event in Event Viewer:
	
	  1020   Type         Warning              Source       DhcpServer
	
	In this case, the scope aaa.bbb.ccc.0 is 80 percent used. This Event is provided
	to alert the DHCP Server administrator that their scope is close to becoming
	fully used, so that they can take action before running out of addresses.
	
	MORE INFORMATION
	================
	
	There is no means to customize this threshold for this event through the
	registry because a value of 80% is hardcoded. There may be higher percentages
	displayed because the check against this value happens only when the DHCP
	database is scavenged.
	
	
	Additional query words: customize threshold registry
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
