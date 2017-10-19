---
layout: page
title: "Q160787: D-link DE-220 ISA Ethernet Adapter will Not Install"
permalink: /kb/160/Q160787/
---

## Q160787: D-link DE-220 ISA Ethernet Adapter will Not Install

	Article: Q160787
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the D-link DE-220 ISA Ethernet Adapter from The
	Control Panel Network utility, you will receive the following error.
	
	  Please insert the disk labeled 'Windows NT Workstation CD-ROM' into <x>
	
	where <x> is the drive letter of your CD-ROM.
	
	Neither the Windows NT Server or Windows NT Workstation CD-ROM will work. No
	matter what path is defined, the message just repeats itself. The only option is
	to cancel.
	
	CAUSE
	=====
	
	When you install the D-Link DE-220 ISA Ethernet Adapter, Control Panel pulls the
	driver and the oemsetup file from the following path:
	
	  <cdrom drive>:\I386\Drvlib.nic\Ne2k.isa\ 
	
	The first time that the driver is installed, the Oemsetup.inf file will be saved
	as Oemnad0.inf in the %SytemRoot%\System32 directory. Repeated attempts to
	install will result in the setup file being copied as oemnadx.inf where x is
	incremented in each subsequent installation.
	
	RESOLUTION
	==========
	
	To correct this problem, the Oemnad0.inf file must be edited. The file is
	located in the %SystemRoot%\System32 directory. To edit this file, perform the
	following steps:
	
	1. Open the file in Notepad.
	
	2. Search for the text string: [Source Media Descriptions]. Immediately below
	  this text will be the following text.
	
	  1 = "Windows NT Workstation DRVLIB"
	  2 = "Windows NT Workstation CD-ROM" , TAGFILE = cdrom.w
	
	3. Delete the text after "CD-ROM". It should now look like this:
	
	  1 = "Windows NT Workstation DRVLIB"
	  2 = "Windows NT Workstation CD-ROM"
	
	4. Save the changes.
	
	The driver will now install from either the Windows NT Workstation or Windows NT
	Server CD-ROM.
	
	The OEMSETUP file can also be edited in the same way and the files placed on a
	floppy disk. Then use the <Have disk..> option in the Control Panel
	Network utility when installing the adapter.
	
	Additional query words: NIC
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
