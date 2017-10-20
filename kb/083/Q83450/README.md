---
layout: page
title: "Q83450: Windows 3.1 Serial Communications Q &amp; A Part 2"
permalink: /kb/083/Q83450/
---

## Q83450: Windows 3.1 Serial Communications Q &amp; A Part 2

{% raw %}

	Article: Q83450
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains specific questions and answers regarding the Microsoft
	Windows operating system version 3.1.
	
	MORE INFORMATION
	================
	
	1. Q. What is the maximum possible bit rate for Windows applications?
	
	  A. Windows 3.1 allows applications to select bit rates as high as 57.6
	  kilobits per second (Kbps). However, how well data can be transmitted and
	  received at high speeds depends on the variables listed below. With Windows
	  3.1, a 19.2 Kbps XModem transfer should run well on a 20MHz 386. Factors
	  affecting top bit rate in Windows applications include the following:
	
	  a. CPU Speed. Faster CPUs allow faster data throughput with fewer errors.
	     This is because they allow the COM driver to service character interrupts
	     faster, which prevents UART (Universal Asynchronous Receiver Transmitter)
	     overflow and allows applications to handle transfer protocols better. If
	     you experience slow serial performance or a loss of characters on a
	     286-based machine, try the following:
	
	     1. Reduce the number of MS-DOS drivers and terminate-and-stay- resident
	        (TSR) programs.
	
	     2. Do not load MS-DOS 5.0 into upper memory.
	
	     3. Add the following line to the SYSTEM.INI file:
	
	  " FasterModeSwitch=1." (without the quotation marks)
	
	     For more information on FasterModeSwitch and other SYSTEM.INI file
	     switches, see the SYSINI.WRI file in the WINDOWS directory.
	
	  b. Transfer Protocols. Data transmission protocols, such as XModem, YModem,
	     and ZModem, vary greatly in robustness in multitasking environments. Some
	     are designed to be very fast and provide little error checking; others are
	     slower but provide error correction. XModem and ZModem usually work well
	     with Windows, even at high speeds.
	
	  c. Serial Port Hardware. Newer serial ports use the 16550 Universal
	     Asynchronous Receiver Transmitter (UART), which contains a buffer to
	     reduce overhead and prevent overflow.
	
	  d. System Overhead. The more applications, TSRs, and device drivers that are
	     running, the busier the operating system is. This reduces overall
	     execution time for every user in the system. If many programs and devices
	     are active while trying to transmit data at high speeds, reduced
	     throughput and transmission errors are likely to result.
	
	2. Q. What is the maximum possible bit rate for MS-DOS applications running in
	  Windows?
	
	  A. MS-DOS serial communications applications are designed to run in a
	  non-multitasking environment; therefore, they make assumptions about the
	  operating system and devices that may not always be true for a multitasking
	  operating system. These applications may allow the selection of speeds as
	  high as 115 Kbps. While these speeds may work well in MS-DOS alone, reduced
	  data throughput should be expected when running these applications in a
	  multitasking operating system.
	
	  The guidelines listed above for Windows serial communications applications
	  also apply to MS-DOS-based applications. However, the following guidelines
	  are important for MS-DOS-based applications running within Windows 386
	  enhanced mode:
	
	  a. Full-Screen v. Windowed v. Minimized. MS-DOS-based applications run best
	     in full-screen mode; they receive foreground priority and avoid the
	     overhead of display virtualization. Although MS-DOS-based applications
	     running in a foreground window receive foreground execution priority, the
	     overhead of updating the window can seriously reduce application
	     performance. If you want to run an MS-DOS-based communications application
	     in the background during a data transfer, run it as an icon rather than in
	     a window.
	
	  b. Foreground and Background Execution Priority. Windows allocates execution
	     time for MS-DOS applications according to foreground and background
	     priorities that are supplied in a .PIF file. If the application is not
	     getting the time slices it needs to process incoming data, errors occur
	     during data transfer. Increase the application's background execution
	     priority in the .PIF file to prevent errors when receiving data in the
	     background. Make sure that background execution is specified in the PIF
	     file.
	
	  c. Lock Application Memory Option. To allow more MS-DOS-based applications to
	     run simultaneously, Windows 3.1 386 enhanced mode swaps application memory
	     to disk. This can slow the execution of the MS-DOS-based applications and
	     significantly reduce communications performance. You can disable this
	     swapping of application memory in the MS-DOS communications application's
	     .PIF file by checking the Lock Application Memory check box in the
	     Advanced Options dialog box of the PIF Editor. Note that this setting
	     applies only if a permanent swap file is allocated and 32-bit disk access
	     is enabled.
	
	3. Q. Does Windows 3.1 support the 16550 UART buffer?
	
	  A. Many serial port adapters and add-in modems now use the 16550 Universal
	  Asynchronous Receiver Transmitter (UART), which contains a 16-byte character
	  buffer to reduce interrupt overhead and errors during high-speed serial
	  transmissions. The Windows 3.1 COM driver enables this buffer for Windows
	  serial communications applications in order to reduce interrupt overhead and
	  improve serial throughput at high speeds. Windows applications do not need to
	  call a special API to receive this support, it is automatically enabled. To
	  determine if serial ports use the 16550 UART, run the Microsoft Diagnostics
	  (MSD.EXE) outside of Windows 3.1.
	
	  Windows 3.1 does NOT enable the 16550 buffer for MS-DOS communications
	  applications. When running in Windows 386 enhanced mode, 16550-aware MS-DOS
	  communications applications may fail to detect and enable the UART buffer.
	  This is because Windows is doing its own buffering of the COM port for the
	  application. To allow 16550- aware MS-DOS communications applications to
	  enable the FIFO, disable Windows' buffering of a COM port by adding
	  "COMxBuffer=0" in the [386Enh] section of SYSTEM.INI file, where x= the ID of
	  the COM port (for example, "COM1Buffer=0"). This may improve serial
	  communications performance under certain conditions.
	
	  Some older 16550 UART versions do not properly support the buffer and may
	  cause problems. Windows can detect many of these and will not enable the
	  buffer. However, if problems are encountered, the 16550 support may need to
	  be manually disabled by adding "COMxFIFO=0" to the [386Enh] section of
	  SYSTEM.INI file. For more information on COMxFIFO and other SYSTEM.INI
	  switches, see the SYSINI.WRI file in the WINDOWS directory.
	
	4. Q. A Windows communications application replaced the Windows 3.0 driver.
	  Should this driver continue to be used with Windows 3.1?
	
	  A. The Windows 3.1 communications driver will probably provide better support
	  than some replacement communications drivers developed for Windows 3.0.
	  However, if the replacement communications driver provides special device
	  support or features specific to the application, continue to use it with
	  Windows 3.1. If not using a 3.1 version communications driver, then add the
	  following line to the [386Enh] section of SYSTEM.INI file: "COMMdrv30=TRUE".
	  For more information on COMMdrv30 and other SYSTEM.INI switches, see the file
	  SYSINI.WRI in the WINDOWS directory.
	
	5. Q. I use Pacific Commware's TurboCom with Windows 3.0. Should I use TurboCom
	  with Windows 3.1?
	
	  A. Windows 3.1 corrects most of the problems that TurboCom was developed to
	  alleviate in Windows 3.0 and provides additional communications features.
	  Windows 3.1 also provides Windows application support for the 16550 buffer,
	  which TurboCom provides in Windows 3.0.
	
	  Unlike TurboCom, Windows 3.1 does not enable the 16550 buffer for MS-DOS
	  communications applications. However, if you follow the above guidelines for
	  using fast bit rates, these applications may not require TurboCom in Windows
	  3.1. Also, if you use TurboCom to run Windows-based applications at bit rates
	  higher than they provide options to select, using TurboCom until the
	  application is updated to support higher bit rates with Windows 3.1 may be
	  desirable.
	
	  In general, if the Windows 3.1 communications driver meets your needs, use it,
	  rather than a third-party driver. This helps achieve full Windows 3.1
	  compatibility.
	
	Additional query words: 3.10 COMMQ&A
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
