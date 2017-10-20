---
layout: page
title: "Q99859: Windows for Workgroups: Avoiding Hardware Conflicts"
permalink: /kb/099/Q99859/
---

## Q99859: Windows for Workgroups: Avoiding Hardware Conflicts

{% raw %}

	Article: Q99859
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbnetwork kbdisplay kbsound kbfasttip kbsetup kbtshoot
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article summarizes four possible sources of hardware conflicts: IRQ lines,
	upper memory address (UMA), base I/O address, and DMA channels. It also briefly
	describes the function of each and suggests a strategy for diagnosing and/or
	preventing hardware conflicts.
	
	MORE INFORMATION
	================
	
	When you install peripheral devices, there are four possible sources of hardware
	conflicts. (Not all devices use all four parameters or settings, although some
	do. Most use IRQ, base I/O address, and/or UMA.) The key to avoiding hardware
	conflicts is to ensure that no two devices are configured to use any of the same
	settings.
	
	A wide variety of symptoms may indicate hardware conflicts. These include system
	hangs, general protection (GP) faults (and other error messages), corrupted
	video displays, corrupted printing, limited functionality from one or more
	installed devices, intermittent performance, and so on.
	
	Diagnostic programs, such as Microsoft Diagnostics (MSD), can sometimes help
	determine which IRQs and upper memory ranges are in use and which are available.
	Currently, however, computer card manufacturers do not adhere to any industry
	standard for reporting the current status of a card when probed by diagnostic
	software. Therefore, the only accurate way to determine the current settings for
	a card is to consult the manufacturer's documentation or inspect each card.
	
	IRQs and DMA channels are single numbers (for example 1, 3, or 7). I/O base and
	upper memory addresses include or cover a range (for example, D000-D800 or
	360h-380h). Typically, these settings are chosen through DIP switches or jumpers
	on the card. Sometimes the cards are software configurable or both hardware and
	software configurable. For more information, consult your manufacturer's
	documentation.
	
	IRQ
	---
	
	An interrupt request line (IRQ) is a line trace etched on the circuit board from
	the expansion slot to the programmable interrupt controller (PIC) chip through
	which a peripheral device can notify the CPU. Under most circumstances, each
	device must use its own IRQ line. IBM PC/AT-compatible design architecture
	provides for a possibility of 16 IRQ lines (0-15), some of which are reserved
	for standard devices such as the keyboard, floppy disk drives, the system clock,
	and so forth. Communication (COM) ports 1 and 3 typically share IRQ 4; COM ports
	2 and 4 share IRQ 3. Therefore, a potential conflict exists if devices are
	installed on both COM ports 1 and 3 or on COM ports 2 and 4.
	
	Available IRQ lines (for sound cards, network adapters, scanners, bus mouse,
	video adapters, tape drives, SCSI interfaces, and so forth) usually include IRQs
	5, 9, 10, 11, 12, 13, and 15. 8-bit expansion slots provide access to IRQs
	through 7. 16-bit slots generally provide access to IRQs through 15.
	
	Not all devices allow the selection of any IRQ number. Consult the device's
	manufacturer or its documentation for information on which IRQs can be used by a
	particular device and select an IRQ that does not conflict with currently
	installed devices; or, change an installed device's IRQ to a different one to
	make available an IRQ for the new device.
	
	NOTE: You may need to reconfigure application software settings after changing
	IRQs of previously installed devices.
	
	UMA
	---
	
	A device's upper memory address (UMA) is a range of address space somewhere
	between A000 and FFFF for use by the device. This corresponds to "using" some
	portion of memory between 640 kilobytes (K) and 1 megabyte (MB). While physical
	system RAM cannot be used by the device, the "addresses" are used and are
	therefore unavailable to the system or other devices.
	
	Conflicts can occur if two hardware devices try to occupy the same address range
	or if an application, a device driver, or a terminate-and-stay-resident (TSR)
	program does not detect that this address range is already in use and tries to
	occupy it.
	
	The entire UMA range is the same range shared by the video adapter (A000-CFFF
	typically), the system ROM (0FFF-FFFF typically), and any installed cards that
	use UMAs. Furthermore, loading device drivers and TSR programs high places them
	in this range as well and can increase the potential for conflicts to occur.
	
	To avoid UMA conflicts, use the following suggestions:
	
	- Install cards before you optimize your upper memory area. If you have already
	  optimized the UMA and need to add a new card, load everything low, add the
	  new card, and then try to load items high. Optimizing the UMA after
	  installing cards avoids fragmenting the UMA range. This may allow more (or
	  larger) TSR programs and/or device drivers to be loaded high.
	
	- Carefully plan the use of the entire UMA range when you install several
	  peripherals and/or when you try to maximize conventional memory. Consult the
	  manufacturer or the documentation to determine the memory range required by
	  each device driver, TSR program, and peripheral. Note the options for this
	  range's "starting" address (for example, C000, D000, or D800). Ensure that no
	  two devices (device drivers or TSR programs loaded high or peripherals) are
	  sharing any part of a range within this space.
	
	- It may be necessary to use the EMM386.EXE "exclude range" switch (X=) in the
	  CONFIG.SYS file or the EMMexclude= parameter in the [386enh] section of the
	  SYSTEM.INI file. This option prevents software from accessing the specified
	  ranges in cases where the software does not recognize that the range is
	  already occupied.
	
	Base I/O Address
	----------------
	
	Base I/O address (I/O port) is another "address" or path for system-
	to-peripheral communication. The address table is 00H through FFFFH and should
	not be confused with UMA mentioned above. A device's I/O port range has a base
	address (for example, 300 or 320 or 3A0, and so forth). Each port address covers
	a range (8, 16, or even 32 bytes); therefore, there exists a possibility of
	overlap and conflict with devices whose starting addresses are close together.
	Consult the manufacturer's documentation for range size and starting address
	options. Ensure that each card has exclusive use of the range it occupies.
	
	DMA Channel
	-----------
	
	Direct memory access (DMA) channel is a means for peripherals to directly access
	RAM memory without requiring the services of the CPU. Many devices that move
	large amounts of data (network cards, sound boards, hard disk drive controllers,
	and so forth) take advantage of this feature to enhance overall system
	performance and increase data throughput within certain applications.
	
	The DMA channel is designated by a single number (0 through 7). Not all devices
	use it. Some can use it as an option. Consult your manufacturer's documentation
	for information on how, when, and why to use this option. Ensure each device has
	exclusive use of its channel.
	
	NOTE: DMA conflicts are somewhat less likely than UMA and base I/O address
	conflicts. Fewer devices use it; and, in the case of a sound card for example,
	the card's DMA channel may be in use only when the application using the card is
	running.
	
	Managing Complex Systems
	------------------------
	
	To help manage complex systems, make a chart like the one below, which documents
	the current settings of each device. Keep this chart available and consult and
	update it when you install more hardware.
	
	  Hardware         IRQ         Base I/O         UMA      DMA
	  -----------------------------------------------------------
	
	  Mouse            Com 2 (3)   COM 2(2F8h)      N/A      N/A
	  Device 1         5           300              D000     2
	  Device 2         x           x                n/a      x
	  Device 3         x           x                x        x
	
	Additional query words: tshoot gpf 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
