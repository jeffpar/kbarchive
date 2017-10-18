---
layout: page
title: "Q82136: Troubleshooting Communications Under Windows 3.0"
permalink: kb/082/Q82136/
---

## Q82136: Troubleshooting Communications Under Windows 3.0

	Article: Q82136
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following table depicts the standard settings for the four communications
	ports that Microsoft Windows version 3.0 and Microsoft MS- DOS version 4.01
	support. This information is useful for troubleshooting communications problems
	under Windows 3.0.
	
	A brief description of each column appears below the table. NOTE: In the table
	below, Windows 3.0 is abbreviated as WIN3.
	
	          WIN3 COMM.DRV       WIN3  Default        WIN3 Desired
	           Procom Plus      SYSTEM.INI Settings  SYSTEM.INI Settings
	  Port      I/O Range  IRQ      I/O Range           I/O Range
	  ----    -----------  ---  -------------------  ------------------
	
	                            [386Enh]             [386Enh]
	  COM1      3F8h        4   COM1BASE=3F8h        COM1BASE=3F8h
	  COM2      2F8h        3   COM2BASE=2F8h        COM2BASE=2F8h
	  COM3      3E8h        4   COM3BASE=2E8h        COM3BASE=3E8h
	  COM4      2E8h        3   COM4BASE=2E0h        COM4BASE=2E8h
	
	The first column lists the ports. The second column describes the settings for
	the ports that both the Windows COMM.DRV and most popular communications
	packages use by default. The third column shows what Windows 3.0 sets by default
	and the fourth column shows what should be set in the [386Enh] section of the
	SYSTEM.INI file for proper functioning of the ports under 386 enhanced mode
	Windows 3.0.
	
	NOTE: The default values specified for COM3 and COM4 ensure PS/2 compatibility.
	
	There is a problem with using the Windows 3.0 SYSTEM.INI file setting COM(x)IRQ=
	in the [386Enh] section. Changing the COM port interrupt is NOT be recognized by
	Windows applications. However, MS-DOS applications running with Windows 3.0 in
	386 enhanced mode do recognize this COM(x)IRQ= setting. Therefore, Windows
	applications that use the COM ports are limited to hardware interrupts 3 and 4
	for COM2 and COM1, respectively.
	
	MORE INFORMATION
	================
	
	In 386 enhanced mode, Windows 3.0 accesses the communication ports using a
	device called the virtual communications driver (VCD). MS-DOS applications
	running from Windows in 386 enhanced mode access COM ports by using the VCD.
	Changing the COM(x)IRQ= setting in the SYSTEM.INI file allows the use of a COM
	port that has been set to a different hardware interrupt, but this works only
	for MS-DOS applications running in 386 enhanced mode.
	
	Windows applications use the VCD as well; however, they must also communicate
	through a second layer, the Windows real/standard mode COMM driver. The
	real/standard mode COMM driver does not recognize changes made to the VCD;
	therefore, Windows applications cannot use COM ports assigned to any interrupts
	other than industry standard ones.
	
	The following information about COM(x)IRQ is from the SYSINI2.TXT file:
	
	  COM1Irq=<number>
	  COM2Irq=<number>
	  COM3Irq=<number>
	  COM4Irq=<number>
	
	  Default: COM1Irq=4; COM2Irq=3; COM3Irq=4; COM4Irq=3
	
	  Purpose: Specifies which interrupt line is being used by
	           the device on the specified communications port.
	           Check your hardware documentation for the
	           appropriate value. Setting a value to -1 disables
	           input for that COM port. You would do this only
	           if there is a hardware conflict between ports.
	
	Microsoft has confirmed this to be a problem in Microsoft Windows version 3.0. We
	are researching this problem and will post new information here as it becomes
	available.
	
	Troubleshooting Communications Problems Under Windows 3.0
	---------------------------------------------------------
	
	1. You can simultaneously use two communication ports that share the same
	  interrupt (for example, COM1 and COM3, or COM2 and COM4) only if the hardware
	  is capable of doing so. The ability to share communications port interrupt
	  request lines (IRQs) is hardware dependent. Currently, the only hardware that
	  you can be sure that IRQ sharing is supported on is Micro Channel
	  Architecture (MCA) hardware. Although Extended Industry Standard Architecture
	  (EISA) hardware does have IRQ sharing as part of its specifications,
	  implementation on current machines is random. If you cannot successfully
	  share an IRQ with the COMIrqSharing switch set to true, the hardware does not
	  support IRQ sharing and Windows 3.0 is not able to overcome the lack of
	  support for this feature using software.
	
	  Note: On some implementations of EISA, there is some configuration of the
	  system hardware that must take place before IRQ sharing can occur. An example
	  of this is Compaq's EISA machines. By default, they are not configured to IRQ
	  share. Be aware that you may need to take additional steps to configure such
	  machines.
	
	2. COM3 and COM4 may not be reliable under Windows 3.0 (in standard or real
	  mode) unless both COM1 and COM2 are first activated. If you use only COM3
	  and/or COM4, you may experience problems (with printing, communications, or
	  your mouse). If you use COM1 and COM3 without using COM2, you also may have
	  problems. The easiest way to remember this is to not use a higher serial port
	  (2, 3, or 4) unless all lower number ports (1, 2, and 3) are first activated
	  (or in use).
	
	3. Standard and real mode Windows 3.0 use COMM.DRV directly, whereas 386
	  enhanced mode Windows 3.0 serializes the ports using the VCD. For this
	  reason, serial communication can theoretically be considered more reliable
	  under standard and real mode because there can be no miscommunication between
	  the VCD and COMM.DRV. In cases where you are using multiple communications
	  ports under Windows 3.0 386 enhanced mode, verify that the base port
	  addresses are set as described in the table earlier in this article.
	
	NOTE: IRQ sharing is possible under 386 enhanced mode Windows 3.0 only if you
	make the necessary changes to the [386Enh] section of the SYSTEM.INI file as
	outlined above.
	
	Additional query words: tshoot 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
