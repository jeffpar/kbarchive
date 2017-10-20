---
layout: page
title: "Q114688: RAS Can't Connect at 14400 or 19200 on TI 4000e"
permalink: /kb/114/Q114688/
---

## Q114688: RAS Can't Connect at 14400 or 19200 on TI 4000e

{% raw %}

	Article: Q114688
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot connect from LAN Manager Remote Access Services (RAS) version 1.1a on
	a TI 4000e series portable computer to a Windows NT server at 14400 or 19200
	bits per second (bps). After the number is dialed, you do not see any
	confirmation that the computers connected.
	
	The modem sold by TI for use with the 4000e computers is a modified U.S. Robotics
	Sportster 14400.
	
	WORKAROUND
	==========
	
	To enable this modem to work with RAS 1.1a you need to modify the MODEM.INF file
	in the SYSTEM32\RAS sub-directory. Before you make any changes to this file,
	make a backup copy.
	
	In MODEM.INF, find two lines that contain the following
	
	  <cr><If>CONNECT<carrierbps>/ARQ<cr><If>
	
	Change both lines to read
	
	  <cr><If>CONNECT<carrierbps>/SEL<cr><If>
	
	RAS should now be able to dial in and connect properly.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
