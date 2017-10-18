---
layout: page
title: "Q158078: Configuring an HP JetDirect EX Plus 3 Interface Card"
permalink: kb/158/Q158078/
---

## Q158078: Configuring an HP JetDirect EX Plus 3 Interface Card

	Article: Q158078
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Hewlett-Packard (HP) JetDirect EX Plus 3 (multiple port) interface card
	is incorrectly configured, all print jobs print to the first printer.
	
	CAUSE
	=====
	
	This can be caused by having uppercase letters or spaces in the port name. These
	cards are case-sensitive. If DLC protocol is used instead of TCP/IP, this will
	also cause all jobs to go to only one printer.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	- Configure the printers to use TCP/IP instead of DLC.
	
	- When adding a Hewlett-Packard Network Port, in the Name box use only
	  lowercase letters with no spaces. For example, use raw1, raw2, and raw3 or
	  text1, text2, and text3.
	
	  NOTE: The port names must have the sequential numeric value of 1, 2, 3 after
	  the lowercase name in order for all three ports to be used.
	
	MORE INFORMATION
	================
	
	The Hewlett-Packard (HP) JetDirect EX Plus 3 interface card is manufactured by
	Hewlett-Packard, Inc., a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding this product's performance or reliability.
	
	Additional query words: hp
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
