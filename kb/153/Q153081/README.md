---
layout: page
title: "Q153081: Backup Domain Controllers May Fail to Join the Domain"
permalink: kb/153/Q153081/
---

## Q153081: Backup Domain Controllers May Fail to Join the Domain

	Article: Q153081
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT backup domain controllers (BDCs) may have difficulty joining a domain
	if the Hewlett-Packard (HP) 10/100 PCI LAN card is being used. The following
	error message appears:
	
	  Could not find the domain controller for this domain.
	
	CAUSE
	=====
	
	The HP driver for the 10/100 PCI LAN card is defective.
	
	RESOLUTION
	==========
	
	HP has a new driver for this card. Install the latest driver from the ftp site
	for HP. This is located at:
	
	  FTP.HP.COM/pub/networking/software/J2585b.exe.
	
	or
	
	  www.hp.com/cposupport/networking/software/j2585b.exe.html.
	
	When this file uncompresses, you need to replace the current driver with
	Hpddnd3.SYS.
	
	NOTE: You must use the -d switch when decompressing this file.
	
	STATUS
	======
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: prodnt 3.5
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
