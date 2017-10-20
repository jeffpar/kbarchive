---
layout: page
title: "Q131984: Windows NT LPR to JetDirect Slower Than HP UX LPR"
permalink: /kb/131/Q131984/
---

## Q131984: Windows NT LPR to JetDirect Slower Than HP UX LPR

{% raw %}

	Article: Q131984
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	When you send print jobs via TCP/IP from both a Windows NT system and an
	HP UX system to an HP print device equipped with an JetDirect adapter, the
	job from the HP UX system finishes printing sooner.
	
	NOTE: HP UX refers To Hewlett-Packard's version of the UNIX operating
	system that is commonly found on the HP 9000 computer.
	
	If the HP UX system knows it is sending to an HP JetDirect adapter, it
	uses a proprietary print method to send the print job. This method is
	optimized for the HP JetDirect adapter and sends data more quickly
	than is possible with an RFC1179-compliant LPR utility, such as those
	provided with Windows NT version 3.5 and later.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
