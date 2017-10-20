---
layout: page
title: "Q137923: Driver for Compaq NetFlex32 Integrated Ethernet Adapter"
permalink: /kb/137/Q137923/
---

## Q137923: Driver for Compaq NetFlex32 Integrated Ethernet Adapter

{% raw %}

	Article: Q137923
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On your computer that is running Windows NT and has the Compaq NetFlex32
	integrated Ethernet adapter in the motherboard, when you install the Compaq-
	supplied Support Software Diskette (SSD) drivers for the NetFlex and NetFlex3
	cards, your network card fails to function.
	
	CAUSE
	=====
	
	The Compaq-supplied SSD drivers for the NetFlex and NetFlex3 cards are not
	designed to work with the integrated Netflex32 Ethernet adapter.
	
	RESOLUTION
	==========
	
	Compaq recommends the PCNTN3.SYS driver for use with the NetFlex32 integrated
	Ethernet adapter with Windows NT 3.5 and 3.51.
	
	To install the PCNTN3.SYS drivers:
	
	1. Run Control Panel and choose Network.
	
	2. Choose Add Adapter.
	
	3. From the drop-down list box of adapters select "<Other> Requires disk
	  from manufacturer".
	
	4. Insert the SSD 1.15 disk into drive A and choose Continue.
	
	5. Select the PCNTN3.SYS driver located on the SSD disk in \NET\PCNTN3
	  directory.
	
	MORE INFORMATION
	================
	
	Use SSD 1.15 or later with Windows NT 3.51.
	Use SSD 1.14 with Windows NT 3.5.
	
	Compaq SSDs are available from the Compaq BBS at (713)378-1418 or on CompuServe
	in the CPQFORUM.
	
	The third-party products discussed here are manufactured by Compaq Corporation ,
	a vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
