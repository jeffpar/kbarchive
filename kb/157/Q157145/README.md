---
layout: page
title: "Q157145: Extended or Unintelligible Characters Printed Starting Windows"
permalink: kb/157/Q157145/
---

## Q157145: Extended or Unintelligible Characters Printed Starting Windows

	Article: Q157145
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start Windows, a small amount of text may be sent to the local printer.
	When this occurs, the printer may or may not eject the page after the text is
	printed. The text varies, but typically includes extended or unintelligible
	characters. The printer may also display an error code. On Hewlett Packard
	LaserJet printers, error code 22 may be displayed and the printer may stop
	responding (hang). When you attempt to print a document, you may receive a
	message that the printer is offline or out of paper.
	
	CAUSE
	=====
	
	This behavior can occur when the Drvwppqt.vxd virtual device driver is loaded or
	if you are not using an IEEE 1284 printer cable.
	
	RESOLUTION
	==========
	
	To prevent the Drvwppqt.vxd virtual device driver from being loaded, use the
	following steps. NOTE: Do not implement this resolution if you have a tape
	backup device connected to a parallel (LPT) port on your computer. Also, if you
	are using the incorrect printer cable, replace it with an IEEE 1284 printer
	cable.
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type "drvwppqt.vxd" (without the quotation marks), and then
	  click Find Now.
	
	3. Rename all instances of the file by changing the file name extension to .old.
	  To change the file name, right-click the file, click Rename, and then rename
	  the file name extension to .old. Note that you must change the file name
	  extension to prevent the driver from being loaded.
	
	MORE INFORMATION
	================
	
	This file is installed by Seagate (formerly Arcada) Backup software and is
	typically located in the Windows\System\Iosubsys folder as well as in the
	Arcada\System folder.
	
	This driver is also installed by the Windows 98 Backup utility. The Backup
	utility is installed when you upgrade to Windows 98 if you have a previous
	version of the Backup utility installed before you upgrade to Windows 98, or if
	you choose to install the Backup utility by using the Custom installation
	option.
	
	The driver detects tape devices that are connected to a parallel port. During the
	detection process, a string of text is sent through the parallel port to be
	interpreted by tape devices. Some printers interpret this string as printable
	text. The output may also be sent to the printer during modem or port
	detection.
	
	
	This issue is also known to occur with the following printers:
	
	- Canon BJC-5000
	
	- Canon MultiPASS 5000
	
	- Canon BJC-4300
	
	- Hewlett-Packard DeskJet 540
	
	- Hewlett-Packard DeskJet 690C
	
	- Hewlett-Packard LaserJet 4M+
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: garbage boot 22 par i/o error hp 4
	
	======================================================================
	Keywords          : kb3rdparty kbprint kbPrinting 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
