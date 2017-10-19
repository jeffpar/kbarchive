---
layout: page
title: "Q83435: Windows 3.1 Resource Kit SYSTEM.INI &#91;386ENH&#93; Section A-L"
permalink: /kb/083/Q83435/
---

## Q83435: Windows 3.1 Resource Kit SYSTEM.INI &#91;386ENH&#93; Section A-L

	Article: Q83435
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.10 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The information in this article can be found in the SYSINI.WRI file in the
	Microsoft Windows Resource Kit for the Microsoft Windows operating system
	version 3.1. The SYSINI.WRI file can be viewed in Microsoft Windows Write. Write
	is an application contained in the Windows Accessories Group.
	
	The [386Enh] section of the SYSTEM.INI file contains information specific to
	running Windows in 386-enhanced mode, including information used for
	virtual-memory page swapping.
	
	MORE INFORMATION
	================
	
	The [386Enh] section can contain the following settings:
	===============================================================================
	
	32BitDiskAccess=<boolean>
	Default:  Off if your hard disk is capable of supporting 32-
	         bit disk access. Otherwise, this setting is not
	         present in the SYSTEM.INI file.
	Purpose:  Turns 32-bit disk access on or off.
	To change:  Choose the 386 Enhanced icon in the Control
	           Panel window. If this setting is not present in
	           the SYSTEM.INI file, the 32-bit Disk Access
	           check box will not appear in the Control Panel
	           Virtual Memory dialog box.
	
	===============================================================================
	
	A20EnableCount=<number>
	Default:  The value computed by the Win386 loader.
	Purpose:  Specifies the initial A20 enable count. (For more
	         information about the A20 enable count, see your
	         Extended Memory specification).
	To change:  Use Notepad to edit the SYSTEM.INI file. (You
	           should never need to change this setting.)
	
	===============================================================================
	
	AllVMsExclusive=<Boolean>
	Default:  False
	Purpose:  If enabled, this setting forces all applications
	         to run in exclusive full-screen mode, overriding
	         all contrary settings in the applications' program
	         information files (PIFs). Enabling this setting
	         might prolong the length of the Windows session
	         when you are running network and memory-resident
	         software that is incompatible with Windows.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	AltKeyDelay=<seconds>
	Default:  .005
	Purpose:  Specifies how much time Windows waits to process a
	         keyboard interrupt after it processes an ALT
	         interrupt.  Some applications expect a slower
	         processing rate than Windows in 386 enhanced mode
	         normally uses. Increase this value if such an
	         application has trouble handling the ALT key.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	AltPasteDelay=<seconds>
	Default:  .025
	Purpose:  Specifies how much time Windows waits before
	         pasting any characters after the ALT key has been
	         released. Some applications may require more time
	         for recognition of the ALT keystroke.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	AllEMSLocked=<Boolean>
	Default:  False
	Purpose:  If enabled, this setting locks the contents of
	         expanded memory used by all Windows and non-
	         Windows applications into memory (instead of
	         swapping it to disk) and overrides the non-
	         Windows application PIF settings for EMS Memory
	         Locked. Set this value to True if you are using a
	         disk cache program that uses expanded memory.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	AllXMSLocked=<Boolean>
	Default:  False
	Purpose:  If enabled, this setting locks the contents of the
	         extended memory used by all Windows and non-
	         Windows applications into memory  (instead of
	         swapping it to disk), and overrides non-Windows
	         application PIF settings for XMS Memory Locked.
	To change:  Use Notepad to edit the SYSTEM.INI file. (You
	           should never need to change this setting).
	
	===============================================================================
	
	AutoRestoreScreen=<Boolean>
	Default:  True
	Purpose:  Specifies whether the display for non-Windows
	         applications should be restored by Windows or the
	         applications themselves when they become active.
	         If enabled, Windows saves the display information
	         for a non-Windows application in memory when you
	         switch away from the application. When you switch
	         back to the application, Windows uses this
	         information to restore the screen. If disabled,
	         the application must restore its own display by
	         repainting the screen. This requires less memory,
	         but can slow down performance since Windows can
	         usually restore the screen faster.
	
	Note:  This setting only applies to VGA displays and affects
	      only applications that notify Windows that they can
	      update their own screen automatically when Windows
	      initiates a display update call.
	
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	BkGndNotifyAtPFault=<Boolean>
	Default:  True for VGA displays; False for 8514 displays.
	Purpose:  Specifies when a notification should be sent to a
	         non-Windows application or to Windows to prevent
	         the application from attempting to access the
	         display (which might corrupt the display of a
	         different application). This notification can be
	         sent while switching to a different application or
	         when attempting to access the actual display. If
	         disabled, Windows sends a notification when
	         switching between applications. Disable this
	         setting if you are using a display that has
	         special hardware, (for example, 8514 and TIGA). If
	         you are using a VGA display, enabling this setting
	         should work in most cases.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	CGA40WOA.FON=<filename>
	Default:  None
	Purpose:  Specifies the filename of the fixed-pitch display
	         font used for non-Windows applications with a
	         display of 40 columns and 25 or fewer lines.
	To change:  Quit Windows and run Setup from the MS-DOS
	           prompt. Change the Codepage or Display
	           setting.
	
	===============================================================================
	
	CGA80WOA.FON=<filename>
	Default:  None
	Purpose:  Specifies the filename of the fixed-pitch display
	         font used for non-Windows applications with a
	         display of 80 columns and 25 or fewer lines.
	To change:  Quit Windows and run Setup from the MS-DOS
	           prompt. to change the Codepage or Display
	           setting.
	
	===============================================================================
	
	CGANoSnow=<Boolean>
	Default:  No
	Purpose:  If enabled, causes Windows to do special handling
	         to avoid snow appearing on an IBM CGA display
	         device.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	COM1AutoAssign=<number-or-seconds>
	COM2AutoAssign=<number-or-seconds>
	COM3AutoAssign=<number-or-seconds>
	COM4AutoAssign=<number-or-seconds>
	Default:  2
	Purpose:  Indicates the contention detection values for each
	         connected serial port. These values are used by
	         Windows to determine how to arbitrate requests for
	         the use of a device by more than one application,
	         at least one of which is a non-Windows
	         application. If the value is -1, Windows will
	         display a warning message that asks you which
	         application should be given control of the port.
	         If the value is zero, any application can use the
	         device at any time. If the value is a positive
	         integer less than 1,000, this value represents the
	         number of seconds after an application stops using
	         the device before another application can use the
	         same device.
	To change:  Choose the 386 Enhanced icon from the Control
	           Panel window.
	
	===============================================================================
	
	COM1Base=<address>
	COM2Base=<address>
	COM3Base=<address>
	COM4Base=<address>
	Default:  COM3Base=3E8h and the port address values located
	         in the BIOS data area for COM1, COM2, anc COM4.
	Purpose:  Specifies the base (first) port for the serial
	         port adapter you are using. Check you hardware
	         documentation for the appropriate value.
	
	Note:  Windows uses these values for both standard and 386
	      enhanced mode.
	To change:  Use the Advanced Settings dialog box for the
	           Ports option in Control Panel.
	
	===============================================================================
	
	COMBoostTime=<milliseconds>
	Default:  2
	Purpose:  Specifies the amount of time (in milliseconds) to
	         allow a virtual machine to process a COM
	         interrupt. If a communications application is
	         losing keyboard characters on the display, you can
	         try increasing this value.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	COM1Buffer=<number>
	COM2Buffer=<number>
	COM3Buffer=<number>
	COM4Buffer=<number>
	Default:  128
	Purpose:  Specifies the number of characters that the device
	         on the corresponding serial port will place in the
	         buffer. Before changing one of these settings, see
	         the corresponding COMxProtocol setting to make
	         sure that it has the proper value. Buffering may
	         slow down communications on a port, but might be
	         necessary to prevent some communications
	         applications from losing characters at high baud
	         rates. The size of the buffer required will depend
	         on the speed of the machine and the application's
	         needs.
	To change:      Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	COMMdrv30=<Boolean>
	Default:  False
	Purpose:  If enabled, indicates that the Virtual COM Driver
	         (VCD) uses its own copy of the serial communica-
	         tions driver's interrupt handler. This improves
	         performance of your COM ports. Enable this setting
	         if you are using a Windows 3.0 serial communica-
	         tions driver. Disable this setting if you are
	         using the standard Windows 3.1 serial communica-
	         tions driver.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	COM1FIFO=<Boolean>
	COM2FIFO=<Boolean>
	COM3FIFO=<Boolean>
	COM4FIFO=<Boolean>
	Default:  True
	Purpose:  Specifies whether the FIFO buffer of a COM port's
	         16550 Universal Asynchronous Receiver Transmitter
	         (UART) should be enabled (true) or disabled
	         (false). If a serial port does not have a 16550
	         UART, this setting is ignored.
	
	Note:  These values are used by Windows for both standard
	      and enhanced modes.
	
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	COM1Irq=<number>
	COM2Irq=<number>
	COM3Irq=<number>
	COM4Irq=<number>
	Default:  COM1Irq=4; COM2Irq=3; COM3Irq=4; COM4Irq=3 for ISA
	         and EISA machines. COM1Irq=4; COM2Irq=3;
	         COM3Irq=3; COM4Irq=3 for MCA machines
	Purpose:  Specifies which interrupt line is being used by
	         the device on the corresponding serial port. Check
	         your hardware documentation for the appropriate
	         value. If there is a hardware conflict between
	         ports, set this value to -1 to disable input for a
	         COM port.
	
	Note:  Windows uses these values for both standard and 386
	      enhanced mode.
	
	To change:  Use the Advanced Settings dialog box for the
	           Ports option in Control Panel.
	
	===============================================================================
	
	COMIrqSharing=<Boolean>
	Default:  True for Micro Channel (TM) and EISA machines;
	         False for all other machines
	Purpose:  Specifies whether COM interrupt lines are sharable
	         between multiple serial ports or with other
	         devices. Enable this setting if your machine uses
	         the same interrupt for COM3 or COM4 as it does for
	         COM1 or COM2.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	COM1Protocol=<XOFF-or-blank>
	COM2Protocol=<XOFF-or-blank>
	COM3Protocol=<XOFF-or-blank>
	COM4Protocol=<XOFF-or-blank>
	Default:  (Default is no entry, which is the same as any
	         entry other than XOFF)
	Purpose:  Specifies whether Windows in 386 enhanced mode
	         should stop simulating characters into a virtual
	         machine after the virtual machine sends an XOFF
	         character. Set the value for a port to XOFF if a
	         communications application using that port is
	         losing characters while doing text transfers at
	         high baud rates. Windows will resume simulating
	         characters when the virtual machine sends another
	         character after the XOFF character. Leave this
	         setting disabled if the application is doing
	         binary data transfers; enabling this switch might
	         suspend binary transmissions. Windows will not
	         check for XOFF characters if this setting is blank
	         or set to anything other than XOFF. If the
	         application continues to lose characters after
	         this setting is properly set, try increasing the
	         corresponding COMxBuffer value.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	Device=<filename-or-*devicename>
	Default:  None (Setup assigns appropriate values based on
	         your system configuration.)
	Purpose:  Specifies which virtual devices are used with
	         Windows in 386 enhanced mode. This value can
	         appear in two ways: either the name of a specific
	         virtual device file, or an asterisk (*) followed
	         immediately by the device name. The latter case
	         refers to a virtual device that is in the
	         WIN386.EXE file. Filenames usually include the
	         .386 extension. Multiple device lines are required
	         to run Windows in 386 enhanced mode.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	Display=<filename-or-*devicename> (See "Device=", above)
	Default:  None (Setup assigns an appropriate value based on
	         your system configuration.)
	Purpose:  Specifies the display device that is being used
	         with Windows in 386 enhanced mode.
	To change:  Choose the Windows Setup icon from the Main
	           Group window.
	
	===============================================================================
	
	DMABufferIn1MB=<Boolean>
	Default:  No
	Purpose:  If enabled, Indicates that the direct memory
	         access (DMA) buffer memory should be in the first
	         1MB of memory (above 640K, if possible) in order
	         to be compatible with 8-bit bus master cards.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	DMABufferSize=<kilobytes>
	Default:  16
	Purpose:  Specifies the amount of memory (in kilobytes) to
	         be reserved for the direct memory access buffer
	         (DMA). This memory will be allocated above 640K,
	         if possible. Windows in 386 enhanced mode will
	         default to a DMA buffer size that will handle disk
	         access.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	DOSPromptExitInstruc=<Boolean>
	Default:  Yes
	Purpose:  If enabled, when you start the MS-DOS prompt a
	         message box appears, with instructions on how to
	         exit and switch away from the MS-DOS prompt.
	         Disable this setting if you do not want to see the
	         message.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	DualDisplay=<Boolean>
	Default:  See "Purpose."
	Purpose:  Normally, when running in 386 enhanced mode, the
	         memory between B000:0000 and B7FF:000F is used by
	         the general system unless a secondary display is
	         detected. Enable this setting if you are using a
	         VGA-based color display and want EMM386.EXE to
	         include this address space as an upper memory
	         block (UMB). In addition to enabling this setting,
	         you must include the i= option in the
	         device=EMM386.EXE command line in your CONFIG.SYS
	         file as follows:
	
	                               device=EMM386.EXE i=B000-B7FF
	
	         If this setting is disabled, the address range is
	         available on EGA systems, but not on VGA systems,
	         because the VGA display device supports monochrome
	         modes, which use this address space.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	EBIOS=<filename-or-*devicename> (See "Device=", above)
	Default:  None (Setup assigns an appropriate value based on
	         your system configuration.)
	Purpose:  Specifies the extended BIOS device that is being
	         used with Windows in 386 enhanced mode.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	EGA40WOA.FON=<filename>
	Default:  None
	Purpose:  Specifies the filename of the fixed-pitch display
	         font used for non-Windows applications with a
	         display of 40 columns and more than 25 lines.
	To change:  Quit Windows and run Setup from the MS-DOS
	           prompt. Change the Codepage or Display setting.
	
	===============================================================================
	
	EGA80WOA.FON=<filename>
	Default:  None
	Purpose:  Specifies the filename of the fixed-pitch display
	         font used for non-Windows applications with a
	         display of 80 columns and more than 25 lines.
	To change:  Quit Windows and run Setup from the MS-DOS
	           prompt. Change the Codepage or Display setting.
	
	===============================================================================
	
	EISADMA=<Boolean> or <channel>,<size>
	Default:  0,8; 1,8; 2,8; 3,8; 5,16w; 6,16w; 7,16w (Each pair
	         goes with its own EISADMA setting.)
	Purpose:  Specifies the mode of operation of an extended DMA
	         channel for Extended Industry Standard
	         Architecture (EISA) machines only. This setting's
	         value can take one of two forms. If you disable
	         this setting, Windows will treat the machine as
	         non-EISA, therefore avoiding all EISA-related
	         logic. You can try disabling this switch if you
	         cannot run Windows in 386 enhanced mode on your
	         EISA machine. If you are using an EISA machine,
	         you can specify the default transfer size for one
	         or more DMA channels. The channels can operate in
	         the following modes: 8-bit (8), 16-bit specified
	         in words (16w), 16-bit specified in bytes (16b),
	         or 32-bit (32). If you are not using an EISA
	         machine, Windows will ignore this setting.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	EMMExclude=<paragraph-range>
	Default:  None
	Purpose:  Specifies a range of memory that Windows will not
	         scan to find unused address space. This has the
	         side effect of turning off the RAM and ROM search
	         code for the range. The range (two paragraph
	         values separated by a hyphen) must be between A000
	         and EFFF. This scanning can interfere with some
	         adapters that use the same memory area. The
	         starting value is rounded down and the ending
	         value is rounded up to a multiple of 16K. For
	         example, you could set EMMExclude=C800-CFFF to
	         prevent Windows from scanning the addresses
	         C800:0000 through CFFF:000F. You can specify more
	         than one range by including more than one
	         EMMExclude line.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	EMMInclude=<paragraph-range>
	Default:  None
	Purpose:  Specifies a range of memory that Windows will
	         treat as unused address space regardless of what
	         may be there. EMMInclude takes precedence over
	         EMMExclude if you specify ranges that overlap. The
	         range (two values separated by a hyphen) must be
	         between A000 and EFFF. The starting value is
	         rounded down and the ending value is rounded up to
	         a multiple of 16K.  For example, you could set
	         EMMInclude=C800-CFFF to ensure that Windows can
	         use the addresses C800:0000 through CFFF:000F.
	         You may specify more than one range by including
	         more than one EMMInclude line.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	EMMPageFrame=<paragraph>
	Default:  None
	Purpose:  Specifies the starting paragraph where the 64K
	         page frame will begin when Windows in 386 enhanced
	         mode cannot find a suitable page frame. Allows an
	         EMM page frame in an area containing some unused
	         RAM or ROM. For example, you could set
	         EMMPageFrame=C400 to start the page frame at
	         C400:0000.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	EMMSize=<kilobytes>
	Default:  65,536
	Purpose:  Specifies the total amount of memory available for
	         mapping as expanded memory. The default value
	         allocates the maximum possible amount of system
	         memory as expanded memory. Specify a value for
	         this setting if you run an application that  \ 
	         allocates all of the available expanded memory. If
	         this is the case, you cannot create new virtual
	         machines. If this value is zero, then no expanded
	         memory will be allocated, but the EMM driver will
	         be loaded. To disable EMM and prevent the EMM
	         driver from loading, use the NoEMMDriver setting.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	FileSysChange=<Boolean>
	Default:  Off in 386 enhanced mode; Not supported in
	         standard mode.
	Purpose:  Indicates whether File Manager automatically
	         receives messages anytime a non-Windows
	         application creates, renames, or deletes a file.
	         If disabled, a virtual machine can run
	         exclusively, even if it modifies files. Enabling
	         this setting can slow down system performance
	         significantly.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	Global=<device-name>
	Default:  (all devices)
	Purpose:  Defines DOS devices loaded in CONFIG.SYS that need
	         to be global to the system. The default setting
	         for all devices is global. However, certain
	         virtual devices might specify that a DOS device be
	         local (for example, MS$MOUSE). Use this setting to
	         override that local specification. The <device-
	         name> value must exactly match the case of the
	         device name, or setting will not work. (Most
	         device names are in all capital letters, therefore
	         this value must usually be in all caps.)
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	HardDiskDMABuffer=<kilobytes>
	Default:  0 for AT architecture computers; 64 for micro-
	         channel computers or computers that use Direct
	         Memory Access (DMA) channel 3 (unless you are
	         using SMARTDrive and double-buffering is turned
	         on. In this case the default is 0.)
	Purpose:  Specifies the amount of memory used for the DMA
	         buffer. If you are using SMARTDrive and double-
	         buffering is turned on, this amount is determined
	         automatically. You may need to change this value
	         if you are using a hard disk that supports DMA and
	         are not using SMARTDrive, or if you do not have
	         double-buffering turned on.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	IdleVMWakeUpTime=<seconds>
	Default:  8
	Purpose:  Causes timer interrupts to periodically "wake up"
	         idle virtual machines after the specified number
	         of seconds have elapsed. If a virtual machine does
	         not use timer interrupts (Int 8 or Int 1Ch),
	         Windows will not usually force timer interrupts
	         into a virtual machine unless it is active. This
	         setting forces the timer interrupts to occur. The
	         value for this setting is rounded  down to
	         the lowest power of two (for example, 1, 2, 4, 8,
	         16, 32, 64).
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	IgnoreInstalledEMM=<Boolean>
	Default:  No
	Purpose:  If enabled, Windows will start in 386 enhanced
	         mode, even when there is  an unknown expanded
	         memory manager (EMM) running. This can cause the
	         system to fail if memory-resident software was
	         using EMM before Windows was started. Enable this
	         setting only if no such software is installed or
	         you are sure will not be active when you are
	         running Windows. This setting applies only to
	         expanded memory managers servicing physical EMS
	         hardware; Windows will not disable unrecognized
	         80386 expanded memory emulators.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	InDOSPolling=<Boolean>
	Default:  No
	Purpose:  If enabled, prevents Windows from running other
	         applications when memory-resident software has the
	         InDOS flag set. Enabling this setting is necessary
	         if the memory-resident software needs to be in a
	         critical section to do operations off an INT21
	         hook, but will slow down system performance
	         slightly.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	INT28Critical=<Boolean>
	Default:  True
	Purpose:  Specifies whether a critical section is needed to
	         handle INT28h interrupts used by memory-resident
	         software. Some networks do internal task switching
	         on INT28h interrupts. These interrupts might hang
	         some network software, indicating the need for an
	         INT28h critical section. If you are not using such
	         software, you might improve Windows' task
	         switching by disabling this setting.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	IRQ9Global=<Boolean>
	Default:  No
	Purpose:  If enabled, converts IRQ9 masks to global. Enable
	         this setting if your system hangs when accessing a
	         floppy drive. Or make sure your system accesses
	         the floppy drive before starting Windows.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	Keyboard=<filename-or-*devicename> (See "Device=", above)
	Default:  None (Setup assigns an appropriate value based on
	         your system configuration.)
	Purpose:  Specifies the keyboard driver that is being used
	         with Windows in 386 enhanced mode.
	To change:  Choose the Windows Setup icon from the Main
	           Group window.
	
	===============================================================================
	
	KeyBoostTime=<seconds>
	Default:  .001
	Purpose:  Specifies the amount of time (in seconds) an
	         application runs with  increased priority when it
	         receives a keystroke. You can use this setting to
	         increase the response to keystrokes when several
	         background applications are running.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	KeyBufferDelay=<seconds>
	Default:  .2
	Purpose:  Specifies the amount of time (in seconds) to delay
	         pasting keyboard input after the keyboard buffer
	         is full. Some applications might require more than
	         .2 seconds.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	KeyIdleDelay=<seconds>
	Default:  .5
	Purpose:  Specifies how much time Windows ignores idle calls
	         after simulating a keystroke into a virtual
	         machine. You can set this value to 0 to speed up
	         keyboard input, but some applications might slow
	         down significantly.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	KeyPasteCRSkipCount=<number>
	Default:  10
	Purpose:  Specifies the number of times that a read status
	         INT 16 call should return a status of empty for
	         the keyboard buffer after pasting a carriage
	         return before pasting another character. When
	         Windows pastes information from the Clipboard to a
	         non-Windows application, it must first paste the
	         information to the BIOS keyboard buffer before
	         pasting it into the application. This setting is
	         used to slow down fast pasting from the Clipboard
	         to the keyboard buffer so that the application can
	         handle all incoming characters from the buffer. If
	         you seem to lose characters, or if the screen does
	         not update often enough while pasting information
	         from the Clipboard, increase this value. This
	         setting is related to KeyPasteSkipCount.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	KeyPasteDelay=<seconds>
	Default:  .003
	Purpose:  Specifies how much time (in seconds) to wait
	         before pasting any characters after a key has been
	         pasted. Some applications might require more time
	         than .003 seconds for recognition of a keystroke.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	KeyPasteSkipCount=<number>
	Default:  2
	Purpose:  Specifies the number of times that a read status
	         INT 16 call should return a status of empty for
	         the keyboard buffer before pasting another
	         character. When Windows pastes information from
	         the Clipboard to a non-Windows application, it
	         must first paste the information to the BIOS
	         keyboard buffer before pasting it into the
	         application. This setting is used to slow down
	         fast pasting from the Clipboard to the keyboard
	         buffer so that the application can handle all
	         incoming characters from the buffer. If you seem
	         to lose characters, or if the screen does not
	         update often enough while pasting information from
	         the Clipboard, increase this value. This setting
	         is related to KeyPasteCRSkipCount
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	KeyPasteTimeout=<seconds>
	Default:  1
	Purpose:  Specifies how much time (in seconds) to allow an
	         application to make the necessary BIOS calls for
	         reading keyboard input before Windows will change
	         from the fast paste (INT16h) to the slow paste
	         (INT9h) mechanism.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	KybdPasswd=<Boolean>
	Default:  True for IBM PS/2 computers; False for all other
	         computers
	Purpose:  Specifies whether the virtual keyboard device
	         (VKD) should support PS/2 8042 commands that
	         implement password security. This setting only
	         applies to 8042 keyboard controllers that are
	         compatible with the PS/2 computer.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	KybdReboot=<Boolean>
	Default:  True
	Purpose:  If enabled, Windows will attempt to reboot the
	         computer using a keyboard controller command. On
	         some computers this method is unreliable. If your
	         computer hangs while rebooting, then disable this
	         setting. In this case, Windows will quit and then
	         display a prompt to press CTRL+ALT+DEL a second
	         time.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	Local=<device-name>
	Default:  None (In a standard SYSTEM.INI file, Setup will
	         set Local=CON. See "Purpose.")
	Purpose:  Defines MS-DOS device drivers that need to be
	         local to each virtual machine. The <device-name>
	         value must exactly match the case of the device
	         name, or this setting will not work. (Most device
	         names are in all capital letters, therefore this
	         value must usually be in all caps.) If a device
	         driver is local, a separate copy of it will exist
	         in each virtual machine, and each will keep
	         different state information. Most device drivers
	         will not function properly when this setting is
	         used. An exception is CON, the DOS console device,
	         which should be local to avoid filling a buffer
	         with input from multiple virtual machines.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	LocalLoadHigh=<Boolean>
	Default:  False
	Purpose:  Determines how extra memory in the UMB (Upper
	         Memory Block) area is used when Windows in running
	         on MS-DOS version 5.0. If disabled, then Windows
	         uses all of the UMB area, leaving no extra UMB
	         space available for Virtual Machines. If enabled,
	         then Windows does not use all of the extra UMB
	         area. In this case, UMB area is available locally
	         to each Virtual Machine.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	LocalReboot=<on-or-off>
	Default:  On
	Purpose:  Specifies whether you can press CTRL+ALT+DEL to
	         quit applications that cause an unrecoverable
	         errors in 386 enhanced mode, without restarting
	         Windows. If this setting is enabled, you can quit
	         the applications. If this setting is disabled,
	         pressing CTRL+ALT+DEL will restart your entire
	         system (as it normally does.)
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	LPT1AutoAssign=<seconds>
	LPT2AutoAssign=<seconds>
	LPT3AutoAssign=<seconds>
	LPT4AutoAssign=<seconds>
	Default:  60
	
	Note:  These settings apply to Windows version 3.0 only. If
	      you have upgraded to Windows 3.1, these settings may
	      still appear in your SYSTEM.INI file, but will have
	      no affect.
	
	===============================================================================
	
	LRULowRateMult=<number>
	Default:  10
	Purpose:  Specifies the value used for determining the low
	         paging rate sweep  frequency. The low paging rate
	         sweep frequency is computed by multiplying the
	         value for LRUSweepFreq by the value specified for
	         this setting. Values between 1 and 65535 may be
	         used.
	To change:  Use Notepad to edit the SYSTEM.INI file.  (You
	           should never need to change this setting).
	
	===============================================================================
	
	LRURateChngTime=<milliseconds>
	Default:  10,000
	Purpose:  Specifies the length of time that the Memory
	         Manager stays at high rate with no paging before
	         switching to low rate, and the length of time the
	         Memory Manager stays at low rate with no paging
	         before turning the Least-Recently-Used (LRU) Sweep
	         off.
	To change:  Use Notepad to edit the SYSTEM.INI file. (You
	           should never need to change this setting).
	
	===============================================================================
	
	LRUSweepFreq=<milliseconds>
	Default:  250
	Purpose:  Specifies the time between sweep passes. This is
	         also the high paging rate sweep frequency.
	To change:  Use Notepad to edit the SYSTEM.INI file.  (You
	           should never need to change this setting).
	
	===============================================================================
	
	LRUSweepLen=<length-in-pages>
	Default:  1024 (Windows computes this value by dividing the
	         value of LRUSweepReset by the value of
	         LRUSweepFreq)
	Purpose:  Specifies the length in pages of the region swept
	         on each pass. The value must be at least 1.
	To change:  Use Notepad to edit the SYSTEM.INI file.  (You
	           should never need to change this setting).
	
	===============================================================================
	
	LRUSweepLowWater=<number>
	Default:  24
	Purpose:  Specifies when the Least-Recently Used (LRU)
	         sweeper should be turned on. When the number of
	         free pages drops below this value, the sweeper is
	         turned on.
	To change:  Use Notepad to edit the SYSTEM.INI file. (You
	           should never need to change this setting).
	
	===============================================================================
	
	LRUSweepReset=<milliseconds>
	Default:  500
	Purpose:  Specifies the time desired for an ACC bit reset
	         divided by 4 megabytes of pages. Therefore, the
	         time to reset all ACC bits is: (number of pages in
	         system+1023/1024) where 1024 pages = 4megabytes.
	         The minimum value is 100.
	To change:  Use Notepad to edit the SYSTEM.INI file. (You
	           should never need to change this setting).
	
	===============================================================================
	
	Reference(s):
	
	Microsoft Windows Resource Kit 3.1, SYSTEM.INI file
	
	Additional query words: 3.10 win31
	
	======================================================================
	Keywords          :  
	Version           : 3.10 3.11
	
	=============================================================================
	
