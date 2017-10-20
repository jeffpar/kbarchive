---
layout: page
title: "Q186771: Err Msg: Windows Could Not Combine VxDs into a Monolithic..."
permalink: /kb/186/Q186771/
---

## Q186771: Err Msg: Windows Could Not Combine VxDs into a Monolithic...

{% raw %}

	Article: Q186771
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup osr2
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to reinstall Windows 95 over an existing installation of Windows
	95, you may receive the following error messages after the first reboot during
	Setup:
	
	  Windows could not combine VxDs into a monolithic file before starting.
	  Windows may not start or run properly.
	
	  If Windows fails to start, run SETUP again.
	
	  Press Any Key to Continue
	
	When you press a key, you receive the following error message:
	
	  A device file that is specified in the SYSTEM.INI file is damaged.
	  It may be needed to run Windows.
	
	  You may need to run the Windows Setup program again.
	  If the file is included in another software package, you may need to reinstall
	  the software that uses the file.
	
	  C:\WINDOWS\SYSTEM\VMM32\VWIN32.VXD
	
	  Press Any Key to Continue.
	
	This error message is then repeated for each of the following files:
	
	  C:\WINDOWS\SYSTEM\VMM32\VCOND.VXD
	  C:\WINDOWS\SYSTEM\VMM32\VXDLDR.VXD
	  C:\WINDOWS\SYSTEM\VMM32\VPICD.VXD
	  C:\WINDOWS\SYSTEM\VMM32\VTD.VXD
	  C:\WINDOWS\SYSTEM\VMM32\VMCPD.VXD
	  C:\WINDOWS\SYSTEM\VMM32\NTKERN.VXD
	  C:\WINDOWS\SYSTEM\VMM32\VPICD.VXD
	  C:\WINDOWS\SYSTEM\VMM32\VTD.VXD
	  C:\WINDOWS\SYSTEM\VMM32\VXDLDR.VXD
	  C:\WINDOWS\SYSTEM\VMM32\VWIN32.VXD
	  C:\WINDOWS\SYSTEM\VMM32\VMCPD.VXD
	  C:\WINDOWS\SYSTEM\VMM32\VCOND.VXD
	
	Then, the following error message is displayed:
	
	  Configuration Manager cannot load because one of the following files is
	  either not present or has an invalid version number:
	  VMM.VXD, SHELL.VXD, VTD.VXD, VXDLDR.VXD, VPICD.VXD.
	
	  Try Running SETUP again.
	  Press Any Key to Continue.
	
	When you press a key, the computer shuts down. On subsequent boot attempts, the
	list of damaged virtual device driver (VxD) files is repeated and the computer
	shuts down again.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions exist:
	
	- You reinstalled Windows 95 OEM Service Release 2 (OSR2) over an existing
	  version of OEM Service Release 2.1 or 2.5 with the Universal Serial Bus (USB)
	  Supplement installed.
	
	- During the file copy phase of Setup, you chose to keep the newer files that
	  have been updated by the USB Supplement.
	
	This problem occurs because the VxD files that have been updated by the USB
	Supplement are a newer version than is expected by the Setup program. These
	files have a version number of 4.03.1212.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	Method 1
	--------
	
	1. Start the computer with the Windows 95 Startup disk.
	
	2. Reinstall OEM Service Release version 2.1 or 2.5.
	
	3. When you are prompted, click "Restore files that have been changed or
	  corrupted."
	
	After reinstalling Windows 95, you may continue to receive the following error
	message:
	
	  A device file that is specified in the SYSTEM.INI file is damaged.
	  It may be needed to run Windows.
	
	  You may need to run the Windows Setup program again.
	  If the file is included in another software package, you may need to reinstall
	  the software that uses the file.
	
	  C:\WINDOWS\SYSTEM\VMM32\NTKERN.VXD
	
	  Press Any Key to Continue.
	
	Windows 95 continues to load normally. To eliminate this message, reinstall the
	USB Supplement.
	
	Method 2
	--------
	
	1. Start the computer using the Windows 95 Startup disk.
	
	2. Reinstall OEM Service Release version 2.
	
	3. Click No when you are prompted to keep the newer files that were installed by
	  the USB Supplement. These files have a version number of 4.03.1212.
	
	After reinstalling Windows 95, you may continue to receive the following error
	message:
	
	  A device file that is specified in the SYSTEM.INI file is damaged.
	  It may be needed to run Windows.
	
	  You may need to run the Windows Setup program again.
	  If the file is included in another software package, you may need to reinstall
	  the software that uses the file.
	
	  C:\WINDOWS\SYSTEM\VMM32\NTKERN.VXD
	
	  Press Any Key to Continue.
	
	Windows 95 continues to load normally. To eliminate this message, uninstall the
	USB Supplement. To do so, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click USB Supplement in the list of installed
	  programs, and then click Add/Remove.
	
	MORE INFORMATION
	================
	
	For more information about the USB Supplement for Windows 95 OSR2, see the
	following articles in the Microsoft Knowledge Base:
	
	  Q158238 How to Determine the Version of Windows 95/98/Me in Use
	
	  Q181661 Files Included with the USB Supplement in OSR2.1 and OSR2.5
	
	For more information about problems related to installing OEM Service Release 2.1
	(with the USB Supplement) over an existing OSR2 installation, see the following
	article in the Microsoft Knowledge Base:
	
	  Q167889 Missing or Damaged Vmm32.vxd File in OSR2.1 Setup
	
	Additional query words: osr2 osr2.1 osr2.5
	
	======================================================================
	Keywords          : kberrmsg kbsetup osr2 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
