---
layout: page
title: "Q192998: INFO: VBCE: Differences Between Emulation and the Remote Device"
permalink: /kb/192/Q192998/
---

## Q192998: INFO: VBCE: Differences Between Emulation and the Remote Device

	Article: Q192998
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbAddIn kbide kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some of the differences between Windows CE Toolkit for
	Visual Basic (VBCE) applications run in the emulator, on a desktop computer, or
	on a remote device.
	
	MORE INFORMATION
	================
	
	Fonts and Palette
	-----------------
	
	Font and palette issues can arise from differences between fonts and colors
	available on the remote device and in the emulator. The emulator gets such
	information from the Windows NT, Windows 2000 or WindowsXP operating system.
	
	The emulator can display any font properly installed on the host desktop. The
	remote device can only show the fonts available to it. Font substitutions will
	be made based on family and spacing:
	
	  Font name         Family     Spacing
	  ---------         ------     -------
	
	  Arial             san serif  proportional
	  Courier New       serif      fixed
	  Symbol            symbol     proportional
	  Tahoma            san serif  proportional
	  Times New Roman   serif      proportional
	
	In Visual Basic, the default font is MS San Serif. It will display properly in
	the emulator. However, the font does not exist on remote devices and will be
	substituted with Arial. See the REFERENCES section below for more information.
	
	As with fonts, any color available to the desktop machine can be displayed in the
	emulator. However, the remote device has a more limited color palette and colors
	will be mapped to the nearest similar color:
	
	  Black / Silver
	  Red / Maroon
	  Green / Lime
	  Olive / Yellow
	  Blue / Navy
	  Teal / Aqua
	  Purple / Fuchsia
	  White / Gray
	
	Remote Tools
	------------
	
	Most remote tools shipped with VBCE only work on the remote device, not in the
	emulator. The Windows CE Registry Editor and the Control Manager are the only
	remote tools that work in both environments.
	
	Application Manager (CeAppMgr.exe) cannot be used to install applications in the
	emulator. The program resides on the desktop computer, and it is responsible for
	adding and removing applications on the Windows CE device, as well as deleting
	the application files from the desktop computer.
	
	Windows CE Application Install Wizard (InstWzrd.exe) runs on the desktop computer
	and creates an installation program for your application. The installation
	program can be run from the development machine or other machines to install the
	application onto the remote device.
	
	Windows CE Heap Walker (ceheapwk.exe) enables you to view detailed information
	about heap identifiers and processes that are running on the remote device. It
	is also useful to determine if an application has memory leaks.
	
	Windows CE Process Viewer (cepview.exe) displays a graphical view on the desktop
	computer of Windows CE process and thread characteristics. The Process Viewer
	enables you to view memory usage and search for memory leaks.
	
	Windows CE Spy (cespy.exe) displays a graphical view on the desktop computer of
	Windows CE system processes, threads, windows, and window messages running on
	the remote device.
	
	Windows CE Zoom (cezoom.exe) captures an image from the remote device and
	displays it on the desktop computer.
	
	Communications
	--------------
	
	Access to the serial ports on the desktop machine from the emulator requires a
	special driver, WCEEMULD. This file is installed as part of the "Device Driver
	Development Kit" (DDK), which can be installed during the Handheld PC Platform
	SDK installation. Please see the REFERENCES section below for further
	information.
	
	The VBCE Winsock control does not function in the emulation environment. The
	emulator does not support IRDA.
	
	System
	------
	
	- Clipboard: The emulator environment shares the clipboard with the desktop
	  operating system.
	
	- Memory: Available memory values cannot be changed in the emulator.
	
	- Object Store: The Object Store is the central container for all WCE files on
	  both the remote device and emulator. In the emulator, you can choose a
	  different Object Store to use.
	
	- ControlBox: VBCE forms have a ControlBox property that enables display of the
	  ControlBox in the upper-left corner of the form. The ControlBox will only
	  display in the emulator, not on the remote device.
	
	REFERENCES
	==========
	
	Windows CE Toolkit Help for Visual Basic 6.0
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q158509 HOWTO: Install Additional Fonts in Windows CE
	
	  Q187532 HOWTO: Use the Remote Tools Installed with VBCE
	
	  Q193235 SAMPLE: VBCEComm.exe Uses the MSCEComm Control in Emulation
	
	Additional query words: wce wince vbce type style color
	
	======================================================================
	Keywords          : kbAddIn kbide kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
