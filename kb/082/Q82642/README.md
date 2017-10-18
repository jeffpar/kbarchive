---
layout: page
title: "Q82642: Serial Communications Speeds in Windows 3.1"
permalink: kb/082/Q82642/
---

## Q82642: Serial Communications Speeds in Windows 3.1

	Article: Q82642
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.1 allows applications to select bit rates as high as
	57.6 kilobits per second (Kbps). However, how reliably you can transmit and
	receive data at high speeds depends on many variables, which are discussed
	below. With Windows 3.1 in a reasonably busy system, a 19.2 Kbps XModem transfer
	can run well on a 20 megahertz 80386 machine.
	
	MORE INFORMATION
	================
	
	Maximum Bits-Per-Second (BPS) Rate for Windows Applications
	-----------------------------------------------------------
	
	Factors affecting top BPS rate in Windows applications include:
	
	- CPU Speed: Faster CPUs allow faster data throughput with fewer errors. This
	  is because they allow the communication driver to service character
	  interrupts faster (preventing UART overflow), and allow applications to
	  handle transfer protocols better.
	
	  If you are experiencing slow serial performance or are losing characters on an
	  80286 based PC, do the following to correct the problem:
	
	  1. Reduce the number of MS-DOS drivers and terminate-and-stay- resident (TSR)
	     programs.
	
	  2. Do not load MS-DOS 5.0 into upper memory.
	
	  3. Add the following line to the SYSTEM.INI [standard] section:
	
	  FasterModeSwitch=1
	
	  For more information on FasterModeSwitch and other SYSTEM.INI file switches,
	  see the SYSINI.WRI file in your Windows directory.
	
	- Transfer Protocols: Data transmission protocols (for example, Xmodem, Ymodem,
	  Zmodem, and so on) vary greatly in robustness in a multitasking environment.
	  Some are designed to be very fast, with little error checking, while others
	  trade throughput for error correction. Usually, XModem and ZModem work well
	  with Windows, even at high speeds.
	
	- Serial Port Hardware: Newer serial ports use the 16550 UART, which contains a
	  buffer to reduce overhead and prevent overflow. See additional discussion on
	  this below.
	
	- System Overhead: The more applications, TSRs, and device drivers that are
	  running, the busier the operating system is. This reduces overall execution
	  time for everything in the system. If you have many programs and devices
	  active while trying to transmit data at high speeds, you are likely to
	  encounter reduced throughput and transmission errors.
	
	- Application Quality: Like most other software, not all serial communications
	  applications are created equal. These vary in quality and performance, so
	  comparison shopping is valuable before purchasing. In general, choose a
	  program that is well-tested and supported by an experienced vendor.
	
	Maximum Possible Bit Rate for MS-DOS Apps Running in Windows
	------------------------------------------------------------
	
	MS-DOS serial communications applications are designed to run in a non-
	multitasking environment, and make assumptions about the operating system and
	devices that are not always true in a multitasking operating system. These
	applications may allow you to select speeds as high as 115 Kbps and beyond.
	While these speeds may work very well in MS-DOS alone, there will most likely be
	reduced data throughput when running these applications in a multitasking
	operating system such as Windows or OS/2.
	
	The guidelines listed above for Windows serial communications applications also
	apply to MS-DOS based applications. However, the following guidelines are
	important for MS-DOS applications running within Windows enhanced mode:
	
	- Full-screen vs. Windowed vs. Minimized: MS-DOS applications run best in
	  full-screen mode. They receive their foreground priority and avoid the
	  overhead of display virtualization. Although MS-DOS applications running in a
	  foreground window receive their foreground execution priority, the overhead
	  of updating the window can seriously reduce application performance. If you
	  wish to run an MS-DOS communications application in the background during a
	  data transfer, run it minimized as an icon rather than in a window.
	
	- Foreground & Background Execution Priority: Windows allocates execution
	  time for MS-DOS applications according to foreground and background
	  priorities that are in an application's program information file (PIF). If
	  the application is not getting the time slices it needs to process incoming
	  data, it will encounter errors during data transfer. Increase the MS-DOS
	  application's background execution priority in the PIF to prevent errors when
	  receiving data in the background. And of course, make sure that the
	  "Background" execution is marked in the PIF.
	
	- "Lock Application Memory:" In order to allow more MS-DOS applications to run
	  simultaneously, Windows 3.1 386 enhanced mode swaps application memory to
	  disk. However, this can slow the execution of the MS-DOS application, and
	  significantly reduce communications performance. Disable this swapping of
	  application memory in the MS-DOS communications program's .PIF by marking the
	  "Lock Application Memory" check box in the Advanced Options dialog box of the
	  PIF Editor. Note that this PIF setting only applies if you have a permanent
	  swap file and 32-bit disk access is enabled.
	
	
	Additional query words: 3.10 3.11 modem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
