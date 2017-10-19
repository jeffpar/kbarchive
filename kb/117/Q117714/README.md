---
layout: page
title: "Q117714: Windows NT Reboots Constantly w/ AMI BIOS"
permalink: /kb/117/Q117714/
---

## Q117714: Windows NT Reboots Constantly w/ AMI BIOS

	Article: Q117714
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have AMI 1V version 1.0 BIOS dated 1-18-93 installed and it is not
	configured properly, your Windows NT computer reboots constantly.
	
	CAUSE
	=====
	
	The ROM BIOS configuration program allows for the configuration of caching above
	16 megabytes (MB). With this option off, the computer operates as expected; if
	this option is enabled, Windows NT reboots constantly.
	
	RESOLUTION
	==========
	
	To avoid this problem, make sure the option to configure caching above 16 MB is
	not selected.
	
	The third-party product discussed here is manufactured by AMI, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt REBOOTING loop
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
