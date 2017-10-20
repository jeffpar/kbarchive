---
layout: page
title: "Q83436: Windows 3.1 Resource Kit SYSTEM.INI &#91;386ENH&#93; Section M-Z"
permalink: /kb/083/Q83436/
---

## Q83436: Windows 3.1 Resource Kit SYSTEM.INI &#91;386ENH&#93; Section M-Z

{% raw %}

	Article: Q83436
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information from the SYSINI.WRI file that ships in the
	Microsoft Windows Resource Kit for the Microsoft Windows operating system
	version 3.1. You can view SYSINI.WRI within Microsoft Windows Write.
	
	The [386ENH] section of the SYSTEM.INI file contains information specific to
	running Windows in 386 enhanced mode, including information used for
	virtual-memory page swapping.
	
	MORE INFORMATION
	================
	
	===============================================================================
	
	MapPhysAddress=<range>
	Default:  None
	Purpose:  Specifies the address range (in megabytes) in
	         which the memory manager preallocates physical
	         page-table entries and linear address space. Use
	         this setting if you are using a DOS device driver
	         (such as an older version of RAMDrive that uses
	         extended memory) that needs contiguous memory.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	MaxBPs=<number>
	Default:  200
	Purpose:  Specifies the maximum number of break points (a
	         method for transferring control to 386 Enhanced
	         Windows) that can be used by the Virtual Memory
	         Manager. You may need to increase this value if
	         you are using a third-party virtual device driver
	         that requires more break points than the default
	         value.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	MaxCOMPort=<number>
	Default:  4
	Purpose:  Specifies the maximum number of COM ports
	         supported in enhanced mode. Change this value if
	         you have more than 4 COM ports installed in your
	         computer.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	MaxDMAPGAddress=<address>
	Default:  0FFFh (non-EISA computers); 0FFFFFh (EISA
	         computers)
	Purpose:  Specifies the maximum physical page address that
	         can be used for Direct Memory Access (DMA). This
	         setting works only with hard drives that support
	         DMA.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	MaxPagingFileSize=<kilobytes>
	Default:  50 percent of available disk space
	Purpose:  Specifies the maximum size (in kilobytes) for a
	         temporary swap file.
	To change:  Choose the 386 Enhanced icon from the Control
	           Panel window.
	
	===============================================================================
	
	MaxPhysPage=<hexidecimal-page-number>
	Default:  Determined by Windows based on the highest
	         physical page number detected by the Memory
	         Manager during initialization.
	Purpose:  Specifies the maximum physical page number that
	         the Memory Manager can manage as a useable page.
	         This setting allows pages to be added at a
	         physical address beyond what the Memory Manager
	         recognized during initialization. If the value
	         specified is less than what the Memory Manager
	         determines, the Memory Manager will ignore several
	         physical pages that it would normally use,
	         preventing the use of memory. This is useful if
	         you are using a hardware device that cannot
	         recognize all of the physical memory in your
	         computer (for example, ISA DMA Network cards
	         cannot access physical memory above 16 megabytes.)
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	MCADMA=<Boolean>
	Default:  True for MCA computers; False for all other
	         computers
	Purpose:  Specifies whether Windows should use the MCA
	         extensions to direct- memory access (DMA). This
	         setting only applies to MCA computers. Disable
	         this setting if you are using an MCA computer, but
	         the DMA extensions are not implemented.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	MessageBackColor=<vga-color-attribute>
	Default:  1 (for blue)
	Purpose:  Specifies the background color of message screens,
	         such as the screen that appears when you press
	         Ctrl+Alt+Del.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	MessageTextColor=<vga-color-attribute>
	Default:  F (for white)
	Purpose:  Specifies the color used to display text in
	         message screens, such as the screen that appears
	         when you press Ctrl+Alt+Del.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	MinTimeSlice=<milliseconds>
	Default:  20
	Purpose:  Specifies the minimum amount of time (in
	         milliseconds) a virtual machine is allowed to run
	         before other virtual machines can take over. A
	         smaller value (such as 10 milliseconds) will make
	         multitasking appear smoother, but will decrease
	         overall system performance.
	To change:  Choose the 386 Enhanced icon from the Control
	           Panel window.
	
	===============================================================================
	
	MinUnlockMem=<kilobytes>
	Default:  40
	Purpose:  Specifies the amount of memory that must remain
	         unlocked and available for use when resuming a
	         virtual machine if more than one virtual machine
	         is running.
	To change:  Use Notepad to edit the SYSTEM.INI file. (You
	           should never need to change this setting.
	
	===============================================================================
	
	MinUserDiskSpace=<kilobytes>
	Default:  500
	Purpose:  Specifies how much disk space (in kilobytes) to
	         leave free when creating a temporary swap file.
	         Use this setting if your system's paging drive has
	         less available space than Windows can use for
	         paging. This setting does not apply if a permanent
	         swap file exists.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	Mouse=<filename-or-*devicename> (See "Device=", above)
	Default:  None (Setup assigns an appropriate value based on
	         your system configuration.)
	Purpose:  Specifies the virtual device that controls the
	         mouse hardware in 386 enhanced mode.
	To change:  Choose the Windows Setup icon from the Main
	           Group window.
	
	===============================================================================
	
	MouseSoftInit=<Boolean>
	Default:  True
	Purpose:  Specifies whether Windows should convert INT 33h
	         function 0 hard initialization calls to function
	         33 soft initialization calls, which do not reset
	         the mouse hardware. If enabled, you can use a
	         mouse with a non-Windows application that you
	         start in a window. Disable this setting if the
	         cursor and screen information appear garbled or
	         distorted when using the mouse with an
	         application. If you disable this setting, you may
	         not be able to use the mouse when running a non-
	         Windows application in a window.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	NetAsynchFallback=<Boolean>
	Default:  False
	Purpose:  If enabled, Windows attempts to save a failing
	         NetBIOS request. When an application issues an
	         asynchronous NetBIOS request, Windows will attempt
	         to allocate space in its global network buffer to
	         receive the data. If there is insufficient space
	         in the global buffer, Windows will normally fail
	         the NetBIOS request. If this setting is enabled,
	         Windows will attempt to save such a request by
	         allocating a buffer in local memory and preventing
	         any other virtual machines from running until the
	         data is received or the timeout period (specified
	         by the NetAsynchTimeout setting) expires.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	NetAsynchTimeout=<seconds>
	Default:  5.0
	Purpose:  Specifies the timeout period (in seconds) when
	         Windows needs to enter a critical section in order
	         to service an asynchronous NetBIOS request. It is
	         used only when NetAsynchFallback is enabled. This
	         value can include a decimal (such as 0.5).
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	NetDMASize=<kilobytes>
	Default:  32 on Micro Channel (TM) machines (IBM PS/2 or
	         compatible); 0 on non-Micro Channel machines (IBM
	         PC/AT compatible).
	Purpose:  Specifies the DMA buffer size (in kilobytes) for
	         NetBIOS transport software if a network has been
	         installed. In this case, the buffer size is the
	         larger value between this value and the value of
	         DMABufferSize.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	NetHeapSize=<kilobytes>
	Default:  12
	Purpose:  Specifies the size (in kilobytes) of the data-
	         transfer buffers in conventional memory that
	         Windows allocates for transferring data over a
	         network when running in 386 enhanced mode. All
	         values are rounded up to the nearest 4K.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	Network=<filename-or-*devicename> (See "Device=", above)
	Default:  None (Setup assigns an appropriate value based on
	         your system configuration.)
	Purpose:  Specifies the type of network you are using with
	         Windows in 386 enhanced mode.
	To change:  Choose the Windows Setup icon from the Main
	           Group window.
	
	===============================================================================
	
	NMIReboot=<Boolean>
	Default:  No
	Purpose:  If enabled, causes a reboot to occur when a
	         nonmaskable interrupt is received.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	NoEMMDriver=<Boolean>
	Default:  False
	Purpose:  If enabled, prevents Windows in 386 enhanced mode
	         from installing its expanded memory driver. This
	         differs from setting EMMSize to zero, which does
	         not prevent the EMM driver from being loaded.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	NoWaitNetIO=<on-or-off>
	Default:  On
	Purpose:  Specifies whether or not to convert synchronous
	         NetBIOS commands to asynchronous commands. When
	         this setting is enabled, synchronous NetBIOS
	         commands are converted. This can improve overall
	         system performance when running several
	         applications.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	OverlappedIO=<Boolean>
	Default:  Off, if InDOSPolling is enabled; Otherwise, On
	Purpose:  If enabled, several virtual machines can make read
	         and write requests to  a disk before the first
	         request has been completed. If disabled, virtual
	         machines cannot issue a request to read or write
	         to a disk until any previous read and write
	         requests have been completed.
	To change:  Use Notepad to edit the SYSTEM.INI file. (You
	           should never need to change this setting.
	
	===============================================================================
	
	PageBuffers=<number>
	Default:  4
	Purpose:  Specifies the number of 4K page buffers used to
	         store asynchronous read and write pages. This
	         setting is used only if you are using 32-Bit Disk
	         Access and a permanent swap file. You can specify
	         a value between 0 and 32. Increasing this value
	         can improve Windows' performance.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	PageOverCommit=<number>
	Default:  4
	Purpose:  Specifies the multiplier for determining the
	         amount of linear address space the Memory Manager
	         will create for the system. The amount of linear
	         address space that the Memory Manager will create
	         is computed by rounding up the amount of available
	         physical memory to the nearest 4 megabytes and
	         then by multiplying that value to the value
	         specified for this setting. You can specify a
	         value between 1 and 20. Increasing this value
	         increases the amount of available linear address
	         space, causing the size of data structures to
	         increase. This also increases paging activity
	         proportionately and can slow down the system.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	Paging=<Boolean>
	Default:  Yes
	Purpose:  Enables or disables demand paging (virtual memory)
	         and permanent and temporary swap files. Disable
	         this setting only if you need the disk space
	         normally used for a temporary swap file.
	To change:  Choose the 386 Enhanced icon from the Control
	           Panel window.
	
	===============================================================================
	
	PagingDrive=<drive-letter>
	Default:  None
	Purpose:  Specifies the disk drive where Windows in 386
	         enhanced mode will create a temporary swap file.
	         This setting is ignored if you have a permanent
	         swap file. If you don't have a permanent swap file
	         and no drive is specified or the specified drive
	         does not exist, Windows will attempt to put your
	         temporary swap file on the drive containing your
	         SYSTEM.INI file. If the specified drive is full,
	         paging will be disabled.
	To change:  Choose the 386 Enhanced icon from the Control
	           Panel window.
	
	===============================================================================
	
	PagingFile=<path-and-filename>
	Default:  WINDOWS\WIN386.SWP
	Purpose:  Specifies the path and filename for the temporary
	         swap file that is created when you start Windows
	         in 386 enhanced mode. This file is deleted when
	         you quit Windows. This setting overrides the
	         PagingDrive setting.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	PerformBackfill=<Boolean>
	Default:  Auto (Windows automatically checks to see if it
	         needs to fill in memory  based on how DOS is
	         occupying memory.)
	Purpose:  Specifies whether or not to allocate a full 640K
	         of memory to a computer that has less than 640K of
	         base conventional memory. Enabling or disabling
	         this setting overrides the automatic checking done
	         by Windows.
	To change:  Use Notepad to edit the SYSTEM.INI file. (You
	           should never need to change this setting,
	           because Windows can automatically detect whether
	           or not to perform a backfill.
	
	===============================================================================
	
	PermSwapDOSDrive=<drive-letter>
	Default:  None
	Purpose:  Specifies the disk drive where Windows in 386
	         enhanced mode will create a permanent swap file.
	         This setting is ignored if you are using a
	         temporary swap file.
	To change:  Choose the 386 Enhanced icon from the Control
	           Panel window.
	
	===============================================================================
	
	PermSwapSizeK=<kilobytes>
	Default:  None
	Purpose:  Specifies the desired size in kilobytes of a
	         permanent swap file.
	To change:  Choose the 386 Enhanced icon from the Control
	           Panel window.
	
	===============================================================================
	
	PerVMFILES=<number>
	Default:  10; 0 if SHARE is installed.\177
	Purpose:  Specifies the number of private file handles
	         Windows should allocate to each virtual machine.
	         Increase this value if an application does not
	         have enough file handles to run. The total number
	         of file handles, including the global handles
	         specified in the FILES= statement in CONFIG.SYS,
	         cannot exceed 255. If it exceeds 255, this value
	         will be rounded down. Set this value to 0 to
	         prevent the allocation of any private file
	         handles. If SHARE is installed, then this setting
	         is ignored in the SYSTEM.INI file.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	PSPIncrement=<number>
	Default:  2
	Purpose:  Specifies the amount of additional memory, in 16-
	         byte increments, that Windows should reserve in
	         each successive virtual machine when the
	         UniqueDOSPSP setting is enabled. The setting that
	         works best for your  machine might vary depending
	         on your memory configuration and the applications
	         you are running. Valid values are 2 through 64.
	         See UniqueDosPSP for more information.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	ReflectDosInt2A=<Boolean>
	Default:  False
	Purpose:  Indicates whether Windows should consume or
	         reflect DOS INT 2A signals. The default means
	         Windows will consume these signals and therefore
	         run more efficiently. Enable this setting if you
	         are running memory-resident software that relies
	         on detecting INT2A messages.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	ReservedHighArea=<paragraph-range>
	Default:  None
	Purpose:  Specifies a range of memory that Windows will not
	         scan to find unused address space. This has the
	         side effect of turning off the RAM and ROM  search
	         code for the range. The range (two paragraph
	         values separated by a hyphen) must be between A000
	         and EFFF. This scanning can interfere with some
	         adapters that use the same memory area. The
	         starting value is rounded down and the ending
	         value is rounded up to a multiple of 4K. For
	         example, you could set ReservedHighArea=E100-E3FF
	         to prevent Windows from scanning the first 12K of
	         memory starting at E100. You can specify more than
	         one range by including more than one
	         ReservedHighArea line.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	ReservePageFrame=<Boolean>
	Default:  True
	Purpose:  Specifies whether Windows should give preference
	         to EMS page frame space or conventional memory
	         when it has to use one of the two to allocate MS-
	         DOS transfer buffers. This choice is necessary
	         when Windows cannot find space (other than EMS
	         page frame space) between 640K and 1MB. If
	         enabled, this setting will preserve EMS page frame
	         space at the expense of conventional memory. If
	         your non-Windows applications do not require
	         expanded memory, disable this setting to make more
	         conventional memory available to non-Windows
	         applications.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	ReserveVideoROM=<Boolean>
	Default:  False
	Purpose:  Instructs Windows that video read-only memory
	         exists in pages C6 and C7. If the text font
	         appears scrambled when starting non-Windows
	         applications, enable this setting.
	To change:  Use Notepad to edit the SYSTEM.INI file. (You
	           should not need to change this setting, because
	           the default setting causes Windows to detect
	           video ROM correctly.)
	
	===============================================================================
	
	ROMScanThreshold=<number>
	Default:  20
	Purpose:  Specifies a parameter used for determining if a
	         memory area in the adapter region (usually between
	         C000-EFFF) that has no ROM header or incorrect
	         header information is read-only memory (ROM). The
	         number for this setting specifies how many
	         different values must occur within the memory area
	         to determine whether or not it is ROM. If the
	         number of transitions is greater than the value
	         for this setting, Windows recognizes the memory
	         as ROM. If the number of transitions is less than
	         the value, Windows recognizes the memory as usable
	         memory. A value of 0 disables this setting,
	         causing Windows to recognize this memory area as
	         usable.
	To change:  Use Notepad to edit the SYSTEM.INI file. (You
	           should never need to change this setting.)
	
	===============================================================================
	
	ScrollFrequency=<number>
	Default:  2
	Purpose:  Specifies the number of lines you can scroll in a
	         non-Windows application that is running in a
	         Window before its display is updated.
	To change:  Use Notepad to edit the SYSTEM.INI file. (You
	           should never need to change this setting.)
	
	===============================================================================
	
	SGrabLPT=<port-number>
	Default:  None
	Purpose:  Routes all printer interrupts on the specified
	         port to the Windows screen rather than to the
	         current virtual machine.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	SyncTime=<Boolean>
	Default:  True
	Purpose:  If enabled, Windows periodically synchronizes its
	         time with the computer's CMOS clock. If this
	         setting is disabled, Windows usually maintains the
	         correct time, unless TrapTimerPorts is disabled
	         and you are running applications that can cause
	         the system time to run faster or slower than the
	         actual time. This setting is related to the
	         TrapTimerPorts setting.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	SystemROMBreakPoint=<Boolean>
	Default:  True if Windows is started in real mode of the
	         80386/486 CPU. False if Windows is started in
	         virtual mode of the 80386/486 CPU. Most 386 memory
	         managers, such as QEMM and 386MAX, require this
	         value to be set to false. If a 386 memory manager
	         is running Windows is started in virtual mode.
	         Otherwise, Windows is started in real mode.
	Purpose:  Specifies whether Windows should use ROM address
	         space between F000:0000 and 1MB for a break point.
	         Windows in 386 enhanced mode normally searches
	         this space to find a special instruction that is
	         used as a system break point. If this address
	         space contains something other than permanently
	         available ROM, you should disable this setting.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	SysVMEMSLimit=<number -or-kilobytes>
	Default:  2048
	Purpose:  Specifies how many kilobytes of expanded memory
	         Windows is permitted to use. Setting this value to
	         0 prevents Windows from gaining access to any
	         expanded memory. Setting it to -1 gives Windows \ 
	         all the available expanded memory that it
	         requests.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	SysVMEMSLocked=<Boolean>
	Default:  No
	Purpose:  Specifies whether to swap expanded memory being
	         used by Windows applications to the hard disk.
	         Locking expanded memory (enabling this setting)
	         can improve the performance of a Windows
	         application that uses it, but can slow down the
	         rest of the system.
	To change:  Use Notepad to edit the SYSTEM.INI file. (You
	           should never need to change this setting.)
	
	===============================================================================
	
	SysVMEMSRequired=<kilobytes>
	Default:  0
	Purpose:  Specifies how many kilobytes of expanded memory
	         must be free in order to start Windows. Leave this
	         setting at zero if no Windows applications require
	         expanded memory.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	SysVMV86Locked=<Boolean>
	Default:  False
	Purpose:  If enabled, causes the virtual-mode memory used in
	         the system virtual machine to remain locked in
	         memory instead of swaping it out to disk.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	           (Because Windows controls this process, there is
	           no need to change this setting.)
	
	===============================================================================
	
	SysVMXMSLimit=<number-or-kilobytes>
	Default:  2048
	Purpose:  Specifies the maximum amount of memory (in
	         kilobytes) the extended  memory driver allocates
	         to DOS device drivers and memory-resident software
	         in the system virtual machine. Set the value to -1
	         to give an application all the available extended
	
	         memory that it requests.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	SysVMXMSRequired=<kilobytes>
	Default:  0
	Purpose:  Specifies how many kilobytes of extended memory
	         must be reserved by the XMS driver in order to
	         start Windows. Leave this setting at zero if there
	         are no XMS users in the system virtual machine.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	TimerCriticalSection=<milliseconds>
	Default:  0
	Purpose:  Instructs Windows to go into a critical section
	         around all timer interrupt code, and specifies a
	         timeout period (in milliseconds). Specifying a
	         positive value causes only one virtual machine at
	         a time to receive timer interrupts. Some networks
	         and other global memory-resident software may fail
	         unless this setting is used. However, it slows
	         down performance and can make the system seem to
	         stop for short periods of time.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	TokenRingSearch=<Boolean>
	Default:  True
	Purpose:  If enabled, Windows searches for a token ring
	         network adapter on machines with IBM PC/AT (R)
	         architecture. Disable this setting if you are not
	         using a token ring card and the search interferes
	         with another device.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	TranslateScans=<Boolean>
	Default:  No
	Purpose:  If enabled, Windows will translate a keyboard's
	         scan codes to make them compatible with standard
	         IBM scan codes. Use this setting only if you  have
	         a keyboard that generates non-standard scan codes.
	         This setting is used only for the Switcher Screen
	         and fullscreen message boxes.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	TrapTimerPorts=<Boolean>
	Default:  True
	Purpose:  Specifies whether Windows should trap read and
	         write operations to the system timer ports that
	         are performed by applications. If disabled,
	         Windows will not trap these operations, allowing
	         applications that fequently read or write to the
	         timer to run faster. However, this may interfere
	         with Windows' ability to keep accurate system
	         time. If disabled, Windows can usually detect when
	         an application has changed the timer interrupt
	         interval and then make any adjustments to the
	         time. If your system's time appears to be running
	         fast or slow, enable this setting. If you do not
	         want to enable this setting, enable the SyncTime
	         setting. This causes Windows to check the time
	         periodically and then make any necessary
	         adjustments.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	UniqueDOSPSP=<Boolean>
	Default:  True (If you are running a network based on
	         Microsoft Network or LAN Manager. See the
	         NETWORKS.WRI online document to find out whether
	         the network you are running is one of these);
	         False for all other networks.
	Purpose:  If enabled, Windows starts every application at a
	         unique address (PSP). Each time Windows creates a
	         new virtual machine to start a new application,
	         Windows reserves a unique amount of memory (i
	         bytes) below the application. For example, if the
	         first application is loaded at address M, the
	         second application is loaded at address M+i, the
	         third at M+2i, and so on.The amount of memory (i)
	         is determined by the PSPIncrement setting. These
	         settings ensure that applications in different
	         virtual machines all start at different addresses.
	         Some networks use applications' load addresses to
	         identify the different processes using the
	         network. Disabling this setting on such networks,
	         might cause one application to fail when you exit
	         another because the network interprets them as the
	         same application. If you enable this setting,
	         slightly less memory is available for non-Windows
	         applications.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	UseableHighArea=<paragraph-range>
	Default:  None
	Purpose:  Specifies a range of memory that Windows will
	         treat as unused address space regardless of what
	         may be there. UseableHighArea takes precedence
	         over ReservedHighArea if you specify ranges that
	         overlap. The range (two values separated by a
	         hyphen) must be between A000 and EFFF. The
	         starting value is rounded down and the ending
	         value is rounded up to a multiple of 4K. For
	         example, you could set UseableHighArea=E100-E3FF
	         to ensure that Windows can use the first 12K of
	         memory starting at E100. You may specify more
	         than one range by including more than one
	         UseableHighArea line.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	UseInstFile=<Boolean>
	Default:  False
	Purpose:  Specifies whether Windows should look in the
	         INSTANCE.386 file for information it can use to
	         determine whether data structures within MS-DOS
	         need to be local. There are two other methods for
	         giving Windows this information: internal tables
	         within the device, and an INT 2Fh call documented
	         in the OEM Adaptation Kit. Both methods are
	         preferable to using this setting; it is provided
	         only for compatibility with Windows/386 version
	         2.x.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	UseROMFont=<Boolean>
	Default:  True
	Purpose:  If enabled, Windows uses the soft font stored in
	         the video read-only memory (ROM) for displaying
	         messages that appear when non-Windows applications
	         are running in a full screen, and for displaying
	         the text that appears when switching away from a
	         non-Windows application. Disable this setting if
	         the font used to display messages is different
	         than the font used in the application, or if
	         random dots and shapes appear on your screen.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	VGAMonoText=<Boolean>
	Default:  True
	Purpose:  Instructs Windows to ignore the video memory
	         address space in VGA displays, usually used for
	         monochrome adapters. When this setting is
	         disabled, Windows can use the B000h through B7FF
	         range for upper memory space, provided that no
	         hardware device is using these addresses and your
	         applications do not use the monochrome display
	         mode of your VGA adapter.
	
	Note:  This setting applies to VGA displays only.
	
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	VideoBackgroundMsg=<Boolean>
	Default:  True
	Purpose:  If enabled, Windows displays a message when a
	         background application is suspended, or if its
	         display cannot be updated properly because video
	         memory is low. Disabling this setting turns off
	         the warning message. This setting affects all non-
	         Windows applications that are currently running.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	VideoSuspendDisable=<Boolean>
	Default:  False
	Purpose:  Specifies whether or not to suspend applications
	         running in the background if their display become
	         corrupted. If this setting is enabled, the
	         application continues running. If disabled,
	         applications become suspended and a warning
	         message appears, if the VideoBackgroundMsg setting
	         is enabled.
	
	Note:  This setting applies to VGA displays only.
	
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	VirtualHDIrq=<Boolean>
	Default:  On for AT-compatible computers; Off for all other
	         computers.
	Purpose:  If enabled, Windows in 386 enhanced mode can
	         terminate interrupts from the hard disk
	         controller, bypassing the ROM routine that handles
	         these interrupts. Some hard drives might require
	         this setting to be disabled in order for
	         interrupts to be processed correctly. If this
	         setting is disabled, the ROM routine handles the
	         interrupts, which slows down system performance.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	WindowKBRequired=<kilobytes>
	Default:  256
	Purpose:  Specifies how much conventional memory (in
	         kilobytes) must be free in order to start Windows.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	WindowMemSize=<number-or-kilobytes>
	Default:  -1
	Purpose:  Limits the amount of conventional memory Windows
	         can use for itself. The default value (-1)
	         indicates that Windows can use as much
	         conventional memory as it needs. If there is not
	         enough memory to run Windows in 386 enhanced mode,
	         try entering a positive value less than 640.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	WindowUpdateTime=<milliseconds>
	Default:  50
	Purpose:  Specifies the amount of time (in milliseconds)
	         Windows takes before it updates the display oXf
	         non-Windows applications running in a window.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	WinExclusive=<Boolean>
	Default:  No
	Purpose:  If enabled, all of the computer's processing time
	         is allocated to Windows whenever a Windows
	         application is in the foreground. If this setting
	         is enabled and a Windows application is in the
	         foreground, no non-Windows application will run.
	To change:  Choose the 386 Enhanced icon from the Control
	           Panel window.
	
	===============================================================================
	
	WinTimeSlice=<number,number>
	Default:  100,50
	Purpose:  This setting contains two numbers. The first
	         number specifies the relative amount of processing
	         time (based on the MinTimeSlice setting) given to
	         all Windows applications running in the
	         foreground, relative to the time allocated to all
	         non-Windows applications running in the
	         background. The second number specifies the
	         relative amount of processing time given to all
	         Windows applications running in the background
	         when a non-Windows application is running in the
	         foreground. The range of valid numbers is 1
	         through 10000. The important value is the ratio of
	         these settings to the corresponding settings in
	         the PIF's of the active non-Windows applications.
	To change:  Choose the 386 Enhanced icon from the Control
	           Panel window.
	
	===============================================================================
	
	WOAFont=<font filename>
	Default:  DOSAPP.FON
	Purpose:  Specifies which font file(s) are loaded into
	         memory when running non-Windows applications.
	         These fonts are also available to your Windows
	         applications as long as a non-Windows application
	         is running.
	To change:  Quit Windows and then run Setup from MS-DOS.
	           This setting changes when you change the
	           Codepage or Display setting in Setup.
	___________________________________________________________
	XlatBufferSize=<kilobytes>
	Default:  8
	Purpose:  Specifies the size of the low-memory buffer used
	         to map MS-DOS calls from protected mode to virtual
	         386 enhanced mode. Increasing this value can
	         improve the performance of protected mode Windows
	         applications that read or write information in a
	         large number of bytes (for example, some database
	         applications). However, this may decrease the
	         amount of memory available for running non-Windows
	         applications and may cause problems on networks
	         that use named pipes. These networks may require a
	         value of 4. The value you specify is rounded to
	         the next 4-kilobyte increment. For example, if you
	         set this value to 5, Windows rounds it up to 8.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	XMSUMBInitCalls=<Boolean>
	Default:  Ususally true, but may be false depending on the
	         extended memory manager you are using.
	Purpose:  Specifies whether or not Windows should call the
	         extended memory driver's upper memory block (UMB)
	         management routines.
	To change:  Use Notepad to edit the SYSTEM.INI file. (You
	           should never need to change this setting.)
	
	===============================================================================
	Reference(s):
	
	"Microsoft Windows Resource Kit," version 3.1, SYSTEM.INI
	
	Additional query words: 3.10 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	
	=============================================================================
	

{% endraw %}
