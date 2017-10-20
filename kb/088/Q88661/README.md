---
layout: page
title: "Q88661: Using the IBM PS/1 with Windows"
permalink: /kb/088/Q88661/
---

## Q88661: Using the IBM PS/1 with Windows

{% raw %}

	Article: Q88661
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The IBM PS/1 series computer runs Microsoft Windows, and is similar to other
	ISA-compatible computers. This article discusses the following issues:
	
	- The PS/1 should be configured to boot from the hard drive
	
	- Windows should not be started from the SHELLSTB.COM menu
	
	- Configuring the PS/1 Printer (model 2205) in Windows 3.0 and 3.0a
	
	- MSD.EXE and the PS/1
	
	
	MORE INFORMATION
	================
	
	The PS/1 Should Be Configured to Boot from the Hard Drive
	---------------------------------------------------------
	
	The IBM PS/1 series computer can be configured to boot either from system ROMs or
	the hard drive. For Windows to load HIMEM.SYS and function correctly, the
	computer must boot from the hard drive.
	
	There are two ways to make the PS/1 boot from drive D so that HIMEM.SYS is
	loaded.
	
	- Customize the boot process:
	
	  1. From the PS/1 main menu, choose the IBM DOS option.
	
	  2. Select "Customize how the system starts from the DOS Shell."
	
	     When you select this option, the PS/1 does not boot directly from drive C,
	     and the default PS/1 menu no longer appears. (See the next section of this
	     article for information about this menu.)
	
	  3. Press ENTER to save changes and restart the PS/1.
	
	  NOTE: In some cases, disabling the ROMs and booting from the hard drive may
	  not work. (This problem is usually caused by a bad or missing COMMAND.COM
	  file.) If the system doesn't restart, hold down both mouse buttons to force
	  the machine to boot from the ROM again.
	
	  For more information, refer to pages 78-81 in the "IBM PS/1 User's Reference
	  for the PS/1 Computer."
	
	- Press ALT+PRINT SCREEN. This forces the computer to restart using drive C.
	  This is a short-term solution; as soon as the computer is turned off and back
	  on again, it starts from the ROMs again.
	
	If you are installing Windows 3.1 to a PS/1 started from ROMs, you may receive an
	error message about not being able to update your system files. To correct this
	problem:
	
	1. Configure the PS/1 to boot from the hard drive.
	
	2. Update the system files used to boot, using the COPY command by typing the
	  following at the MS-DOS command prompt (press ENTER after each line):
	
	  copy c:\windows\config.win c:\config.sys
	  copy c:\windows\autoexec.win c:\autoexec.bat
	
	Windows Should Not Be Started from SHELLSTB.COM Menu
	----------------------------------------------------
	
	When you boot from a PS/1 hard drive, many PS/1s load a terminate-and-stay-
	resident (TSR) menu program called SHELLSTB.COM. Microsoft does not recommend
	that you operate Windows from this menu.
	
	This file can be installed in CONFIG.SYS or loaded in AUTOEXEC.BAT. Be sure to
	remark out SHELLSTB.COM from both files, and then restart your computer.
	
	NOTE: If you don't disable this line before starting Windows, Windows operates
	from the IBM PS/1 menu. To confirm this, exit Windows to PC-DOS, and then type
	"exit" (without the quotation marks) and pressing ENTER. You are then in the
	PS/1 menu.
	
	Configuring the PS/1 Printer (model 2205) in Windows 3.0, 3.0a
	--------------------------------------------------------------
	
	Windows versions 3.0 and 3.0a do not come with a driver for the PS/1 printer.
	This printer should be set up as an IBM Proprinter X24E in Windows. Windows 3.1
	does come with a driver for the PS/1 printer.
	
	MSD.EXE and the PS/1
	--------------------
	
	MSD.EXE may stop responding (hang) when run on a PS/1 that is running LAN Manager
	2.1.
	
	
	The IBM products included here are manufactured by IBM, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11 winfest ps 1 3rdparty ps-1 ps\1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
