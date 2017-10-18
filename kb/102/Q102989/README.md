---
layout: page
title: "Q102989: Device Driver Entries, PART 2--Mouse/Keyboard Driver"
permalink: kb/102/Q102989/
---

## Q102989: Device Driver Entries, PART 2--Mouse/Keyboard Driver

	Article: Q102989
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The article contains REGISTRY entries for Mouse and Keyboard Drivers. There is a
	second half of this topic, found in the article Device Driver Entries, Part 3.
	
	These subgroups are included:
	
	- Microsoft Bus Mouse Port Driver
	
	- Intel 8042 Port Driver
	
	- Microsoft InPort Bus Mouse Port Driver
	
	There are 5 parts to the Device Driver Entries article series:
	
	Part 1: Device Driver Entries, containing:
	
	- File System Drivers and Recognizers
	
	- Disk, Serial and Parallel Ports
	
	Part 2: Mouse and Keyboard Entries
	
	Part 3: Mouse and Keyboard Entries, cont'd, containing:
	
	- Microsoft Serial Mouse Port Driver
	
	- Mouse Class Driver
	
	- Keyboard Class Driver
	
	- Device Map Entries for the Keyboard and Mouse
	
	Part 4: SCSI Miniport Entries
	
	Part 5: Sound Card and Video Device Driver Entries
	
	===============================================================================
	
	NOTE: You can view current settings for these device drivers by choosing the
	Devices button in WinMSD.
	
	Mouse and Keyboard Driver Entries
	---------------------------------
	
	Parameters in this section are for the mouse and keyboard class and port drivers,
	including these drivers:
	
	Busmouse          Inport          Mouclass
	i8042             Kbdclass        Sermouse
	
	Microsoft Bus Mouse Port Driver Entries
	---------------------------------------
	
	The following value entries for the Microsoft bus mouse are found in this
	subkey:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Busmouse\Parameters
	
	MouseDataQueueSize REG_DWORD >= 0x1
	Specifies the number of mouse events to be buffered internally by the driver, in
	nonpaged pool. The allocated size, in bytes, of the internal buffer is this
	value times the size of the MOUSE_INPUT_DATA structure (defined in NTDDMOU.H).
	Consider increasing the size if the System log in Event Viewer frequently
	contains this message from the Busmouse source: "The ring buffer that stores
	incoming mouse data has overflowed (buffer size is configurable via the
	Registry)."
	Default: 0x64 (100)
	
	NumberOfButtons REG_DWORD >= 0x1
	Specifies the number of buttons on the bus mouse. If the number of buttons
	detected at startup time and placed in the Registry is incorrect, this value can
	be used to override it.
	Default: 0x2 (two buttons)
	
	PointerDeviceBaseName REG_SZ Base port device name
	Specifies the base name for the device object(s) created by the bus mouse port
	device driver. The device driver also writes information about the device
	objects into HKEY_LOCAL_MACHINE\HARDWARE\DeviceMap so that the pointer class
	driver can locate the pointer port device objects.
	Default: PointerPort
	
	
	Intel 8042 Port Driver Entries
	------------------------------
	
	The i8042prt driver handles the keyboard and mouse port mouse (also known as a
	PS/2-compatible mouse) for the Intel 8042 controller. These value entries are
	found in the following subkey:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\i8042prt\Parameters
	
	KeyboardDataQueueSize REG_DWORD >= 0x1
	Specifies the number of keyboard events to be buffered internally by the driver,
	in nonpaged pool. The allocated size, in bytes, of the internal buffer is this
	value times the size of the KEYBOARD_INPUT_DATA structure (defined in
	NTDDKBD.H). Consider increasing the size if the System log in Event Viewer
	contains the following message from the i8042prt source: "The ring buffer that
	stores incoming keyboard data has overflowed (buffer size is configurable via
	the Registry)."
	Default: 0x64 (100)
	
	KeyboardDeviceBaseName REG_SZ Base keyboard port device name
	Specifies the base name for the keyboard device object(s) created by the i8042prt
	device driver. The device driver also writes information about the device
	objects into HKEY_LOCAL_MACHINE\HARDWARE\DeviceMap so that the keyboard class
	driver can locate the keyboard port device objects.
	Default: KeyboardPort
	
	MouseDataQueueSize REG_DWORD >= 0x1
	Specifies the number of mouse events to be buffered internally by the driver, in
	nonpaged pool. Consider increasing the size if the System log in Event Viewer
	contains the following message from the i8042prt source: "The ring buffer that
	stores incoming mouse data has overflowed (buffer size is configurable via the
	Registry)."
	Default: 0x64 (100)
	
	MouseResolution REG_DWORD Mouse resolution specifier
	Used in specifying the mouse port mouse resolution, where 2 to the power of
	MouseResolution specifies counts-per-millimeter.
	Default: 0x3
	
	MouseSynchIn100ns REG_DWORD Time, in 100 nanosecond units
	Specifies the length of time after which the next mouse interrupt is assumed to
	indicate the start of a new mouse packet (partial packets are discarded). This
	enables the driver to synchronize its internal notion of the mouse packet state
	with the hardware state when a mouse interrupt is lost. Consider modifying this
	value if the system behaves as if there are random mouse events occurring (for
	example, button clicks when no mouse button has been pressed).
	Default: 20,000,000 (2 seconds)
	
	NumberOfButtons REG_DWORD >= 0x1
	Specifies the number of buttons on the mouse port mouse. If an incorrect number
	of buttons is detected at startup time and placed in the Registry, this value
	can be used to override it.
	Default: 0x2
	
	PointerDeviceBaseName REG_SZ Base mouse port device name
	Specifies the base name for the pointer device object(s) created by the mouse
	port mouse driver. The device driver also writes information about the device
	object into HKEY_LOCAL_MACHINE\HARDWARE\DeviceMap so that the pointer class
	driver can locate the pointer port device objects.
	Default: PointerPort
	
	PollStatusIterations REG_DWORD Number
	Specifies the maximum number of times to check the i8042 controller status
	register for interrupt verification before dismissing the interrupt as spurious.
	This value can be used to work around a problem experienced on some hardware
	(including the Olivetti MIPS computers) where the keyboard interrupt is raised
	before the Output Buffer Full bit is set in the i8042 status register.
	
	Increase this value if the system seems to suddenly stop taking keyboard
	interrupts. This can happen if a keyboard interrupt is mistakenly dismissed as
	spurious, when instead it just took too long to set Output Buffer Full after
	raising the interrupt. Increasing the value of PollStatusIterations results in a
	longer execution time for the Interrupt Service Routine if the keyboard
	interrupt truly is spurious (there is a 1 microsecond delay following each check
	for Output Buffer Full).
	
	To determine whether the driver is taking keyboard interrupts, press the NUMLOCK
	key. If the NumLock light on the keyboard turns on or off, this indicates that
	the i8042prt driver handled the keyboard interrupt correctly.
	Default: 1
	
	OverrideKeyboardType REG_DWORD >= 0x0
	This entry is not usually present. When present, it specifies the keyboard type
	(overriding the keyboard type detected during system initialization). Add this
	value entry if the detected keyboard type is incorrect in the Registry. Type
	values 0x2 and 0x4 indicate an enhanced 101-key or 102-key keyboard, or
	compatible; other values typically indicate an old-style AT keyboard (83, 84, or
	86 keys), or compatible.
	Default: 0x4 (Enhanced 101-key or 102-key keyboard)
	
	OverrideKeyboardSubtype REG_DWORD >= 0x0
	This entry is not usually present. When present, it specifies the OEM- dependent
	keyboard subtype (overriding the keyboard subtype detected during system
	initialization).
	Default: 0x0
	
	PollingIterations REG_DWORD >= 0x400
	Specifies the standard number of times to poll the hardware (in polling mode)
	before giving up and timing out the operation. Consider increasing this value if
	the driver fails to initialize or work correctly and the System log in Event
	Viewer contains the following message from the i8042prt source: "The operation
	on ... timed out (time out is configurable via the Registry)."
	Default: 0x400
	
	PollingIterationsMaximum REG_DWORD >= 0x400
	Specifies the maximum number of times to poll the hardware (in polling mode)
	before giving up and timing out the operation. This value is used instead of
	PollingIterations when an old-style AT keyboard is detected (see
	OverrideKeyboardType). Consider increasing this value if the driver fails to
	initialize or work correctly and the System log in Event Viewer contains the
	following message from the i8042prt source: "The operation on ...timed out (time
	out is configurable via the Registry)."
	Default: 0x2EE0
	
	ResendIterations REG_DWORD >= 0x1
	Specifies the maximum number of times a hardware operation will be retried before
	timing out. Consider increasing this value if the driver fails to initialize or
	work correctly and the System log in Event Viewer contains the following message
	from the i8042prt source: "Exceeded the allowable number of retries
	(configurable via the Registry) on device ..."
	Default: 0x3
	
	SampleRate REG_DWORD Mouse sample rate in Hz
	Specifies the sample rate for the mouse. Intended for future use. This value
	might have no effect in the first release of Windows NT.
	Default: 0x3C (60 Hz)
	
	Microsoft InPort Bus Mouse Port Driver Entries
	----------------------------------------------
	
	The value entries for the Microsoft InPort bus mouse are found in this subkey:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Inport\Parameters
	
	HzMode REG_DWORD Mouse sample rate mode specifier
	Specifies the value written to the Microsoft InPort mode register to set the
	mouse sample rate. Might be used in the first release of Windows NT, but should
	become obsolete.
	Default: 0x2 (selects 50 Hz)
	
	MouseDataQueueSize REG_DWORD >= 0x1
	Specifies the number of mouse events to be buffered internally by the driver, in
	nonpaged pool. The allocated size, in bytes, of the internal buffer is this
	value times the size of the MOUSE_INPUT_DATA structure (defined in NTDDMOU.H).
	Consider increasing the size if the System log in Event Viewer contains the
	following message from the InPort source: "The ring buffer that stores incoming
	mouse data has overflowed (buffer size is configurable via the Registry)."
	Default: 0x64 (100)
	
	NumberOfButtons REG_DWORD >= 0x1
	Specifies the number of buttons on the Microsoft InPort bus mouse. If the number
	of buttons detected at startup time and placed in the Registry is incorrect,
	this value can be used to override it.
	Default: 0x2
	
	PointerDeviceBaseName REG_SZ Base port device name
	Specifies the base name for the device object(s) created by the Microsoft InPort
	bus mouse device driver. The device driver also writes information about the
	device objects into HKEY_LOCAL_MACHINE\HARDWARE\DeviceMap so that the pointer
	class driver can locate the pointer port device objects.
	Default: PointerPort
	
	SampleRate REG_DWORD Mouse sample rate in Hz
	Specifies the sample rate for the Microsoft InPort bus mouse. Intended for future
	use. This value might have no effect in the first release of Windows NT.
	Default: 0x32 (50 Hz)
	
	Reference: "The Windows NT Resource Kit for Operating System Version 3.1".
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
