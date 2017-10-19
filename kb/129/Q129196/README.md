---
layout: page
title: "Q129196: System Hangs with 3Com EtherLink III (3C509B) ISA NIC"
permalink: /kb/129/Q129196/
---

## Q129196: System Hangs with 3Com EtherLink III (3C509B) ISA NIC

	Article: Q129196
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a 3Com Etherlink III (3C509B) ISA (Plug-and-Play Ready)
	network interface card (NIC) on a PCI-bus computer, the following error message
	appears on the PCI Auto-Configuration screen:
	
	  Auto-Configuration Error <error number>
	  Bus#: <bus number>
	  Device#: <device number>
	  Function#: <function number>
	
	When you start Windows NT version 3.5 or Windows for Workgroups version 3.11, the
	system stops responding (hangs).
	
	NOTE: The system may stop responding on a computer of any bus type.
	
	CAUSE
	=====
	
	This problem occurs on some systems with the following configuration:
	
	- Plug-and-Play option is enabled on the 3c509b NIC
	
	- Using a driver dated earlier than 2/7/95
	
	RESOLUTION
	==========
	
	To correct the problem:
	
	1. Download EtherDisk version 4.2 (3C5X9X.EXE) from the 3Com Bulletin Board
	  Service (BBS) at (408) 980-8204 to a blank formatted floppy disk.
	
	2. Extract the file by typing the following at the command prompt:
	
	  3C5X9X
	
	3. To correct the PCI Auto-Configuration error, disable the Plug-and-Play
	  feature on the 3C509B NIC by typing the following at the command prompt:
	
	  PNPDSABL.BAT
	
	4. In order for the operating system to function properly with the 3C509B NIC,
	  replace the existing driver with the driver provided by 3C5X9X.EXE. For
	  example, to replace the 3C509B NIC driver for Windows NT version 3.5, rename
	  the existing ELNK3.SYS driver in the %SystemRoot%\SYSTEM32\DRIVERS
	  subdirectory. Go to the \NDIS\WINNT35 subdirectory on the EtherDisk version
	  4.2 floppy disk and type the following at the command prompt:
	
	  COPY ELNK3.SYS <drive>:\%SystemRoot%\SYSTEM32\DRIVERS
	
	5. Restart your computer.
	
	
	For more information regarding the 3Com 3C509B NIC or the EtherDisk version 4.2
	Driver disk, contact 3Com Technical Support at (800) 876-3266.
	
	The Etherlink III network adapter is manufactured by 3Com Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	its performance or reliability.
	
	Additional query words: 3.11 elnk plug n play prodnt wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11; winnt:3.5
	
	=============================================================================
	
