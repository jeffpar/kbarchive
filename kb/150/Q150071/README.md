---
layout: page
title: "Q150071: STOP: HP ANYLAN Driver May Cause a STOP 0x0000000A"
permalink: /kb/150/Q150071/
---

## Q150071: STOP: HP ANYLAN Driver May Cause a STOP 0x0000000A

{% raw %}

	Article: Q150071
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive a random STOP 0x0000000A on a a Hewlett-Packard (HP) Netserver LS
	5/100 running Windows NT and with the HP 10/100VG EISA ANYLAN network interface
	card (NIC) installed. The STOP error message reads:
	
	  STOP: 0x0000000A (0xFF07F000, 0x00000002, 0x00000001, 0x80405FDE)
	  IRQL_NOT_LESS_OR_EQUAL
	
	NOTE: The first and fourth parameters, shown here as 0xFF07F000 and 0x80405FDE,
	are specific to your system configuration.
	
	CAUSE
	=====
	
	The HP ANYLAN driver may be causing memory corruption.
	
	
	WORKAROUND
	==========
	
	Check the date on the installed NIC driver. The new driver is dated 10-02- 95
	(29K). The HP 10/100VG EISA ANYLAN driver is HPfend.sys and can be downloaded
	from the Hewlett-Packard FTP site.
	
	NOTE: The compressed Windows NT EISA VG ANYLAN NIC driver from the HP FTP site is
	listed as J2585a.exe. Currently HP recommends that J2577a.exe be used instead.
	This driver is more current than the one in J2585a.exe.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.51 prodnt trap 0xA ntblue
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
