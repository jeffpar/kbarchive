---
layout: page
title: "Q83389: Windows 3.1 SYSTEM.INI &#91;NonWindowsApp&#93; Section"
permalink: /kb/083/Q83389/
---

## Q83389: Windows 3.1 SYSTEM.INI &#91;NonWindowsApp&#93; Section

	Article: Q83389
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information contained in this article is taken from the SYSINI.WRI file
	contained in the Microsoft Windows Resource Kit for the Windows operating system
	version 3.1. The SYSINI.WRI file may be viewed with Windows Write.
	
	The [NonWindowsApp] section of the SYSTEM.INI file contains settings that affect
	the performance non-Windows applications.
	
	MORE INFORMATION
	================
	
	The [NonWindowsApp] section can contain the following settings:
	____________________________________________________________
	
	CommandEnvSize=<bytes>
	
	Default:  0 with MS-DOS versions earlier than 3.2.
	         Otherwise, the value for the /e: parameter in the
	         shell= command line in the CONFIG.SYS file.
	Purpose:  Specifies the size of the COMMAND.COM environment.
	         Note that running batch files with the extension
	         .BAT starts COMMAND.COM, so this setting also
	         applies to batch files. The value for this setting
	         must be either 0, or between 160 and 32768. A
	         value of 0 disables this setting. If the value is
	         not valid, it will be rounded up to 160 or down to
	         32768. If the value is less than the current size
	         of the actual environment, this setting will be
	         disabled, as if it were set to 0. If you have
	         specified the environment size in a PIF file for
	         COMMAND.COM, the PIF file setting overrides this
	         setting.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	____________________________________________________________
	
	DisablePositionSave=<Boolean>
	
	Default:  0
	Purpose:  When disabled, the position and font used in a
	         non-Windows applications is saved in the
	         DOSAPP.INI file when you quit the application. If
	         enabled, the position and fonts used by a non-
	         Windows application whose settings have not been
	         previously saved in the DOSAPP.INI file will not
	         be saved. If enabled, the setting can be
	         overridden for each non-Windows application by
	         selecting the Save Settings On Exit check box in
	         the Font dialog box.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	____________________________________________________________
	
	FontChangeEnable=<Boolean>
	
	Default:  1 on systems that use Windows 3.1 grabbers. 0 on
	         systems that use Windows 3.00 grabbers
	Purpose:  Provides the ability to change the fonts when
	         running non-Windows applications in a window on
	         systems that use version 3.00 of the grabbers
	         (usually 3.00 display drivers). Windows version 3.1
	         of the video grabbers (used in 3.1 display
	         drivers) include built-in support for changing
	         fonts when running non-Windows applications in a
	         Window. If you are using a 3.00 grabber that has
	         not been updated to include the ability to change
	         fonts and you want to use this feature, enable
	         this setting. However, with this setting enabled,
	         your screen may lose characters and the cursor may
	         change size and positition slightly.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	____________________________________________________________
	
	GlobalHeapSize=<kilobytes>
	
	Default:  0
	Purpose:  Specifies the size of a buffer in conventional
	         memory that Windows allocates when running in
	         standard mode. This buffer can be used to share
	         information among all non-Windows applications
	         that are started from Windows. This setting has no
	         effect when Windows is running in 386 enhanced
	         mode.
	To change:  Use Notepad to edit the SYSTEM.INI file. (You
	           should never need to change this setting.)
	____________________________________________________________
	
	LocalTSRs=<list-of-TSR-applications>
	
	Default:  DOSedit, ced
	Purpose:  Specifies which terminate-and-stay-resident (TSR)
	         programs work properly if they are copied to each
	         instance of a virtual machine. When you start
	         Windows, it detects any TSR programs that are
	         currently running. If the TSR is on the LocalTSRs
	         list, Windows will place a copy of the TSR in each
	         virtual machine you run. Many TSR's will not run
	         properly if they are added to this list. Make sure
	         your TSR is fully compatible with Windows and can
	         be copied to a virtual machine before adding it to
	         the list.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	____________________________________________________________
	
	MouseInDOSBox=<Boolean>
	
	Default:  1 if an MS-DOS mouse driver with the extension
	         .COM or .SYS that supports the use of a mouse with
	         a non-Windows application is loaded. Oherwise, the
	         default is 0.
	Purpose:  Specifies whether the mouse is supported when
	         running a non-Windows application in a window.
	         Mouse support for non-Windows applications running
	         in a window is automatically available if you are
	         using a Windows 3.1 version of the grabbers. If
	         you are using a Windows 3.00 version of the
	         grabbers and you want mouse support, enable this
	         setting. If you do not want mouse support, disable
	         this setting.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	____________________________________________________________
	
	NetAsynchSwitching=<0-or-1>
	
	Default:  0, unless an application is running that supports
	         the use of the Task Switcher API by the NETBIOS.
	Purpose:  Specifies whether or not you can switch away from
	         an application (running in standard mode) after it
	         has made an asynchronous network BIOS call. If
	         disabled, you cannot switch away from an
	         application after it has made an asynchronous
	         network BIOS call. Switching away from some
	         applications that make  these calls might cause
	         your system to fail. Once Windows detects an
	         asynchronous NetBIOS call, you cannont switch away
	         from the application, even if no more of these
	         calls are made. Enable this setting if you are
	         sure that the applications you use will not
	         receive network messages while they are inactive.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	____________________________________________________________
	
	ScreenLines=<number>
	
	Default:  25
	Purpose:  Specifies the number of lines that will be
	         displayed on the screen when running a non-Windows
	         application. An application that specifies a
	         different screen mode can override this setting.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	____________________________________________________________
	
	SwapDisk=<drive-colon-directory>
	
	Default:  The directory pointed to by the TEMP environment
	         variable; if there is no TEMP variable, then the
	         default is the root directory of your first hard
	         drive (usually labeled C:). If you do not have a
	         hard disk, then the default is the root directory
	         of your first floppy drive (usually labeled A:).
	Purpose:  Provides the name of the disk drive and directory
	         to which Windows running in standard mode swaps
	         non-Windows applications.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	____________________________________________________________
	
	REFERENCES
	==========
	
	Microsoft Windows Resource Kit 3.1 SYSINI.WRI file
	
	Additional query words: 3.10 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
