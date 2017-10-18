---
layout: page
title: "Q195029: CardWizard Socket Services Stop Responding During Startup"
permalink: kb/195/Q195029/
---

## Q195029: CardWizard Socket Services Stop Responding During Startup

	Article: Q195029
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbsetup kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 4 (SP4) on a laptop computer that
	already has SystemSoft's CardWizard version 3.00.01 (or earlier) installed, the
	PCMCIA socket services do not start and your computer may stop responding
	(hang).
	
	CAUSE
	=====
	
	The service pack Setup program installs the Microsoft Pcmcia.sys file over the
	custom device driver file provided with the CardWizard product.
	
	RESOLUTION
	==========
	
	To remove the incorrect driver:
	
	Hard Disk Using the FAT File System
	-----------------------------------
	
	1. Start your computer from a bootable MS-DOS disk and rename the Pcmcia.sys
	  file in the %SystemRoot%\System32\Drivers folder to another name (such as
	  Pcmcia.old).
	
	  For information about how to rename a file, click Start, click Help, click the
	  Index tab, type "rename" (without quotation marks), and then double-click the
	  "Renaming files" topic.
	
	2. Copy the Pcmcia.sys file from the %SystemRoot%\$NtServicePackUninstall$
	  hidden folder to the %SystemRoot%\System32\Drivers folder.
	
	  To view hidden folders, double-click My Computer, click Options (or Folder
	  Options) on the View menu, click the View tab, click Show All Files, and then
	  click OK.
	
	  For information about how to copy a file, click Start, click Help, click the
	  Index tab, type "copy" (without quotation marks), and then double-click the
	  "Copying files" topic.
	
	3. Restart the computer.
	
	4. Reinstall the CardWizard software.
	
	Hard Disk Using the NTFS File System
	------------------------------------
	
	1. Perform a parallel installation of Windows NT.sk.
	
	2. Restart the computer using the new Windows NT installation.
	
	3. Rename the Pcmcia.sys file in the %SystemRoot%\System32\Drivers folder to
	  another name (such as Pcmcia.old).
	
	  For information about how to rename a file, click Start, click Help, click the
	  Index tab, type "rename" (without quotation marks), and then double-click the
	  "Renaming files" topic.
	
	4. Copy the Pcmcia.sys file from the %SystemRoot%\$NtServicePackUninstall$
	  hidden folder to the %SystemRoot%\System32\Drivers folder.
	
	  To view hidden folders, double-click My Computer, click Options (or Folder
	  Options) on the View menu, click the View tab, click Show All Files, and then
	  click OK.
	
	  For information about how to copy a file, click Start, click Help, click the
	  Index tab, type "copy" (without quotation marks), and then double-click the
	  "Copying files" topic.
	
	5. Restart the computer
	
	6. Reinstall the CardWizard software.
	
	MORE INFORMATION
	================
	
	You may want to contact SystemSoft Technical Support for an updated version of
	the CardWizard socket services (PCMCIA) drivers at (508) 651- 0088 or visit
	their Web site at:
	
	  http://www.systemsoft.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	NOTE: The third-party products discussed here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: pc card
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400
	Version           : WINNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
