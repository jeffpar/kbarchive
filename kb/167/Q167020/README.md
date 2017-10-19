---
layout: page
title: "Q167020: ATI Graphics Pro Turbo PCI Video Adapter Resolution Problem"
permalink: /kb/167/Q167020/
---

## Q167020: ATI Graphics Pro Turbo PCI Video Adapter Resolution Problem

	Article: Q167020
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbgraphic kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ATI Graphics Pro Turbo PCI video adapter seems to be detectable, but any
	screen resolution settings other than 640 x 480 are not retained after
	restarting the system. The settings revert to the 640 x 480 resolution.
	
	CAUSE
	=====
	
	The Windows NT 4.0 version of the ATI Graphics Pro Turbo PCI video adapter
	driver will only allow 640 x 480 display resolution.
	
	RESOLUTION
	==========
	
	Acquire the Windows NT driver version 3.1.76 or later display driver set from
	the ATI Web site.
	
	  http://support.atitech.ca/drivers/drivers.html
	
	This driver release resolves an issue with 3D PRO TURBO 8MB products displaying
	only 640 X 480 resolution. The filename for the driver set is as specified below
	for the appropriate version of Windows NT:
	
	  Windows NT 4.0   NT40-176.exe   Size: 499K   Date: 02-27-97
	  Windows NT 3.51  NT351176.exe   Size: 486K   Date: 02-27-97
	  Windows NT 3.5   NT35-176.exe   Size: 494K   Date: 02-27-97
	
	For current installation instructions, also see the following files on the ATI
	Web site:
	
	  Windows NT 4.0    NT40-176.txt
	  Windows NT 3.51   NT351176.txt
	  Windows NT 3.5    NT35-176.txt
	
	Installation for Windows NT 4.0
	-------------------------------
	
	This self-extracting file contains the latest ATI Windows NT 4.0 display driver
	for Windows NT 4.0. The Windows NT 4.0 display driver is installed and
	configured using the standard Windows NT configuration utilities.
	
	This driver package contains:
	
	- Ati.sys (ATI Graphics miniport driver)
	
	- Ati.dll (ATI Graphics display driver)
	
	- Ati.inf (setup file used by Windows NT Setup program)
	
	- Ssdpms.scr (DPMS Screen Saver)
	
	- Ssgpcdef.hlp
	
	- Ssgpcdef.rsc
	
	- Readme.def
	
	- Readme.nt4 This is a Readme file
	
	1. Click the Start button, and then click Run. Type the following in the Open
	  dialog box, and then click OK:
	
	  Nt40-176.exe
	
	2. Follow the onscreen instructions to decompress the installation files.
	
	3. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Display.
	
	4. Click the Settings tab, click Display Type, and then click Change.
	
	5. Click Have Disk, and enter the path to the files decompressed in step 2
	  above.
	
	6. Select the card you are using, and then click OK.
	
	7. Restart Windows NT.
	
	Windows NT will boot into a default mode and start the Display applet allowing
	for mode selection.
	
	After successfully installing the driver, you can delete the contents of the
	directory C:\Ati\Support\NT40 using the Remove ATI Temporary Files icon.
	
	It is recommended that you keep a copy of the NT40-176.exe, in case you need to
	install the driver again.
	
	MORE INFORMATION
	================
	
	The ATI product discussed here is manufactured by ATI Technologies, Inc., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding the product's performance or reliability.
	
	
	Additional query words: ati graphics PCI turbo video
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbgraphic kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	
