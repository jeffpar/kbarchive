---
layout: page
title: "Q140749: Error Message: Error Starting Comctl32.dll"
permalink: kb/140/Q140749/
---

## Q140749: Error Message: Error Starting Comctl32.dll

	Article: Q140749
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbprint win95 kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a Hewlett-Packard LaserJet 5L or OfficeJet LX printer using
	Hewlett-Packard's installation software, you may receive the following error
	message:
	
	  Error starting Comctl32.dll
	
	When you restart your computer, it may stop responding (hang) at the Windows 95
	logo screen with this error message. When this occurs, you cannot start the
	computer in Safe mode.
	
	CAUSE
	=====
	
	The Hewlett-Packard (HP) Setup program replaces Windows 95 drivers and
	associated support files with proprietary HP versions.
	
	RESOLUTION
	==========
	
	To correct this problem, follow the steps in the appropriate section.
	
	LaserJet 5L
	-----------
	
	1. Restart the computer to a command prompt. To do so, restart the computer,
	  press the F8 key when you see the "Starting Windows 95" message, and then
	  choose Command Prompt Only from the Startup menu.
	
	2. Type the following commands. Press ENTER after each command:
	
	  " cd\windows\system
	  ren comctl32.dll comctl32.old " (without the quotation marks)
	
	3. Extract a new version of the Comctl32.dll file from your original Windows 95
	  disks or CD-ROM to the Windows\System folder.
	
	  For additional information about using the Extract tool, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	  NOTE: When you start your computer to a command prompt, you may not have
	  access to the CD-ROM drive. You may have to load real-mode CD-ROM drivers to
	  access the CD-ROM drive. For information about installing these drivers,
	  please consult the CD-ROM drive's documentation or manufacturer.
	
	
	1. Restart your computer normally.
	
	OfficeJet LX
	------------
	
	Follow the steps in the "LaserJet 5L" section above. Then, follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the Startup menu.
	
	2. Type the following commands, pressing ENTER after each line:
	
	  " cd \windows\system
	  ren commctrl.dll commctrl.old " (without the quotation marks)
	
	3. Use the Extract tool to extract the Kommctrl.dll file from the Precopy1.cab
	  file on disk 1 of your Windows 95 disks or in the Win95 folder on the Windows
	  95 CD-ROM to the Windows\System folder.
	
	  For information about using the Extract tool, please see the following article
	  in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	4. Type the following line and then press ENTER:
	
	  " ren kommctrl.dll commctrl.dll " (without the quotation marks)
	
	5. Type the following line, and then press ENTER:
	
	  " copy commctrl.dll c:\windows\sysbckup " (without the quotation marks)
	
	  When you are prompted to overwrite the existing file, press Y.
	
	6. Restart your computer normally.
	
	MORE INFORMATION
	================
	
	This issue can also occur if the commctrl.dll file is missing.
	
	To install a printer driver for the HP LaserJet 5L printer, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Double-click the Add Printer icon, and then click Next.
	
	3. Click either Local Printer or Network Printer, and then click Next.
	
	4. In the Manufacturers box, click HP. In the Printers box, click HP LaserJet
	  4L, and then click Next.
	
	5. Click the port the printer is connected to, and then click Next.
	
	6. If you want the new printer to be the default printer in Windows 95, click
	  Yes. Click Next.
	
	7. Click Finish.
	
	NOTE: Microsoft Internet Explorer replaces the Windows 95 version of the
	Comctl32.dll file. If you are running Internet Explorer, you need to reinstall
	Internet Explorer to replace the Comctl32.dll file with the correct version.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	The problem described in this article has also been reported to occur with the
	Hewlett-Packard DeskJet 520 and 693c printers and the Hewlett-Packard LaserJet 4
	Plus and LaserJet 4L series printers.
	
	For more information about this issue, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q143054 Err Msg: RUNDLL32.EXE Has Caused an Error in COMMCTRL.DLL
	
	======================================================================
	Keywords          : kberrmsg kbprint win95 kbPrinting 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
