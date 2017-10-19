---
layout: page
title: "Q142866: Alpha w/ Proteon P139x-Plus Rev E and Above NIC Doesn't Work"
permalink: /kb/142/Q142866/
---

## Q142866: Alpha w/ Proteon P139x-Plus Rev E and Above NIC Doesn't Work

	Article: Q142866
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your DEC Alpha XL 266 computer with a Proteon 1392+ Revision E and above Token
	Ring network interface card (NIC) does not work with Windows NT version 3.51.
	
	The Proteon P139x-Plus (a.k.a. 1392+) revision D Token Ring NICs work correctly
	with Windows NT 3.51.
	
	RESOLUTION
	==========
	
	If you have a Proteon P139X-Plus Rev E or above NIC, copy the older p139x
	driver, PRORAPM.DWN (date: 08/22/94, size: 24,734 bytes) over the current
	version.
	
	NOTE: This older driver also works on the Rev D NICs.
	
	The older driver can be found on the Windows NT 3.51 Service Pack 4 CD-ROM in the
	following directory:
	
	  \SUPPORT\NDIS\PROTEON\PRORAPM.DWN
	
	Copy this file to the \%SYSTEMROOT%\SYSTEM32\DRIVERS directory and reboot your
	computer.
	
	This older driver is also available as a self-extracting executable from Proteon
	at:
	
	  ftp://ftp.proteon.com/pub/bbs/pronet4_16/p139x/prorapm.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
