---
layout: page
title: "Q160946: Setup Hangs During First Reboot with Compaq NetFlex Driver"
permalink: /kb/160/Q160946/
---

## Q160946: Setup Hangs During First Reboot with Compaq NetFlex Driver

	Article: Q160946
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows 95 OEM Service Release 2 (OSR2) Setup on a computer with a
	Compaq NetFlex controller (network adapter), the computer may stop responding
	(hang) on the first reboot. When you restart the computer, Setup does not
	continue and the computer may hang again.
	
	CAUSE
	=====
	
	The Compaq NetFlex driver supplies only a 4K buffer when paging in real mode,
	such as during the first reboot during Setup or when it is running in MS-DOS
	Compatibility mode.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Contact your hardware vendor to obtain the Windows 95 OEM Service Release
	  version 2.1 update.
	
	- Remove the NetFlex card from your computer and run Setup again. Do not choose
	  Safe Recovery when you are prompted. When OSR2 is installed, put the card
	  back in your computer and use the Add New Hardware tool in Control Panel to
	  detect it.
	
	  NOTE: If your hard disk is using MS-DOS Compatibility mode, your computer may
	  hang when you run the Add New Hardware tool.
	
	  For information about troubleshooting MS-DOS Compatibility mode, see the
	  following article in the Microsoft Knowledge Base:
	
	  Q130179 Troubleshooting MS-DOS Compatibility Mode on Hard Disks
	
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch
	Version           : WINDOWS:95
	
	=============================================================================
	
