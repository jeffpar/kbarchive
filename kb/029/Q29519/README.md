---
layout: page
title: "Q29519: How to Write a Driver for a Custom Hardware Device"
permalink: /kb/029/Q29519/
---

## Q29519: How to Write a Driver for a Custom Hardware Device

	Article: Q29519
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): _IK kb16bitonly kbDDK
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to manage custom communications hardware through an
	I/O interrupt.
	
	To implement a device that is intended to replace one of the standard devices in
	Windows, obtain the Windows DDK from Microsoft and write the device driver to
	the appropriate specification. The DDK contains definitions of keyboard, mouse,
	display, communications, printer, and network drivers. The rest of this article
	discusses how to implement a driver for a device, such that the implemented
	driver does not replace a standard driver.
	
	Windows version 3.1 includes an installable driver interface, which allows these
	types of drivers to be loaded during Windows initialization, coalesce messages
	they generate, and get notification of when standard or real mode Windows swaps
	them out of memory. For more information on installable drivers, please refer to
	Chapter 25 of the "Programmer's Reference, Volume 1: Overview" of the Windows
	SDK version 3.1. There is also a technical article on installable drivers in the
	Microsoft Developer Network (MSDN) CD-ROM.
	
	MORE INFORMATION
	================
	
	Define a driver interface for the device and implement it in a dynamic linked
	library (DLL). To handle interrupts, place the interrupt handler in a FIXED DLL
	code segment. Any data accessed by the driver's interrupt handler must also be
	in a FIXED data segment. The interrupt handler may not make any Windows API
	calls except for calling the PostMessage function, which is defined to be
	reentrant and callable from an interrupt handler for just this purpose.
	
	Note that, to interact properly with the kernel memory manager, the default data
	segment of the DLL should be movable if the DLL will make calls to any Windows
	APIs. Therefore, the interrupt data is usually in a separate segment.
	
	Because the segment is FIXED, it will be page locked in enhanced mode. Also, it
	will not move in real mode. Therefore, the selector to the interrupt data
	segment may be legally referenced when it is stored in code, even in real mode.
	
	For example, a simple interrupt handler could resemble the following:
	
	      WM_DEVICENOTIFY EQU WM_USER + some number
	
	      inthandler proc far
	
	          push    ds
	          push    ax
	          mov     ax, _INTDATA
	          mov     ds, ax
	          assume ds:_INTDATA
	
	          ... Process the interrupt at the device, and do the
	          ... appropriate things to the interrupt controller.
	          ... For this example, assume that an event type is in CX,
	          ... which will be the wParam parameter of the posted message.
	          ... Data could also be stored to a buffer or reading data
	          ... from one. This buffer, or its selector, is stored in
	          ... _INTDATA as well. This function cannot call GlobalLock,
	          ... therefore the buffer must be fixed (and page locked in
	          ... enhanced mode) and its actual segment or selector stored
	          ... in _INTDATA.
	
	          push    [hwndNotify]    ;; Stored in _INTDATA segment
	          mov     ax, WM_DEVICENOTIFY
	          push    cx
	          sub     ax, ax
	          push    ax              ;; NULL for lParam unless the driver has
	          push    ax              ;; something more interesting...
	          call    PostMessage
	
	          ... pop other registers
	
	          pop     ax
	          pop     ds
	          assume ds:nothing
	          iret
	
	      inthandler endp
	
	The device driver should export an API to set the window that will receive the
	notification messages (typically a "DeviceOpen()" function). The window
	procedure for the window receiving notification will process the driver-defined
	message WM_DEVICENOTIFY.
	
	In enhanced mode, a VxD (virtual device driver) should be written if any of the
	following conditions exist:
	
	- The device processes a lot of data or generates a lot of interrupts.
	
	-or-
	
	- The timing of interrupt processing requires low interrupt latency.
	
	-or-
	
	- Many I/O instructions are required to manage the device.
	
	A VxD is a 32-bit flat-model device driver that runs at ring 0, allowing much
	faster response time to interrupts and lower overhead I/O. Windows DLLs run at a
	lower protection ring, which requires interrupts to be reflected from the 32-bit
	WIN386.EXE to the Windows driver, and slows down I/O instructions. A VxD can
	interact with a Windows driver or application by providing protected mode
	call-ins, which allows Windows code to call the VxD. For more information on
	writing a VxD, see the Windows DDK.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : _IK kb16bitonly kbDDK 
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
