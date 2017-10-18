---
layout: page
title: "Q193458: Err Msg: A Previous Version of USB Supplement Has Been Found..."
permalink: kb/193/Q193458/
---

## Q193458: Err Msg: A Previous Version of USB Supplement Has Been Found...

	Article: Q193458
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg osr2
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you attempt to install the Universal Serial Bus (USB) Supplement, you may
	receive the following error message:
	
	  A Previous version of USB Supplement has been found.
	  You need to do one of the following:
	
	  a) Un-install previous version if you have installed already
	  b) Re-install Windows 95 Version b.
	  c) If you have already run this setup in this session, reboot.
	
	You may receive this error message even if the USB Supplement is not installed on
	your computer.
	
	CAUSE
	=====
	
	This behavior can occur if the USB Supplement was previously installed on your
	computer and has been removed.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To resolve this behavior, follow these steps:
	
	1. Using Registry Editor, change the value data for the VersionNumber string
	  value from 4.03.1212 or 4.03.1214 to "4.00.1111" (without the quotation
	  marks) in the the following registry key:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion
	
	2. Quit Registry Editor.
	
	3. Double-click the Usbsupp.exe file located in the Other\Usb folder on your
	  Windows 95 OEM Service Release 2, 2.1, or 2.5 CD-ROM.
	
	MORE INFORMATION
	================
	
	The USB Supplement also replaces the following files with newer versions:
	
	- Conagent.exe
	
	- Kernel32.dll
	
	- Krnl386.exe
	
	- Winoa386.mod
	
	- Redirect.mod
	
	- Spoolss.dll
	
	- Vmm32.vxd
	
	- Nodriver.inf
	
	The original files are renamed with a .o20 file extension.
	
	======================================================================
	Keywords          : kberrmsg osr2 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
