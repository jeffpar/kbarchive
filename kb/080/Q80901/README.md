---
layout: page
title: "Q80901: Windows 3.1 Application Compatibility (part 6 of 7)"
permalink: /kb/080/Q80901/
---

## Q80901: Windows 3.1 Application Compatibility (part 6 of 7)

	Article: Q80901
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Application Compatibility Document for Windows 3.1
	--------------------------------------------------
	
	Due to the amount of information in this document, it has been broken into seven
	pieces. To find all seven pieces of this document and the Windows 3.1
	Compatibility Test checklist, query this knowledge base on the words:
	
	  " prod(winsdk) and 31compattest " (without the quotation marks)
	
	Enhanced-Mode Windows
	---------------------
	
	COMM DRIVER
	-----------
	
	Performance and functionality of the Windows version 3.1 COMM driver are improved
	as follows:
	
	- COMM.DRV provides its own interrupt handling in enhanced mode. In Windows
	  version 3.0, the virtual communication device (VCD) provided the interrupt
	  routine so that interrupts for Windows applications could be handled at ring
	  0. In Windows version 3.1, a new function allows COMM.DRV to register its own
	  ring-0 handler, ensuring that all communications code exists in COMM.DRV. The
	  VCD can still support COMM drivers that are compatible with Windows version
	  3.0 by adding the SYSTEM.INI switch "COMMDRV30=TRUE" in the [386ENH] section.
	
	- Both COMM.DRV and VCD read the COMxBASE and COMxIRQ settings in the
	  SYSTEM.INI file to determine the base addresses and IRQs for COM3 and COM4;
	  reading values written into the BIOS data area is no longer required.
	  Although for compatibility these settings are in the [386ENH] section,
	  COMM.DRV also examines them when running in standard mode.
	
	- COMM.DRV supports the FIFO on 16550A UARTs. By default, COMM.DRV enables the
	  FIFO if the FIFO is available, but the user can disable the FIFO by using the
	  COMxFIFO setting in the [386ENH] section of the SYSTEM.INI file.
	
	- COMM.DRV baud rate is limited only by machine capability, so communication
	  applications need not limit baud rates to 19200. Some users do have hardware
	  capable of faster rates, and they don't like being stuck with an artificial
	  limit.
	
	Potential Problem
	-----------------
	
	Changes to COMM.DRV could affect any application that uses the communications
	driver.
	
	Test
	----
	
	You can test most changes to COMM.DRV by sending and receiving data in your
	application at various baud rates.
	
	VIRTUAL PRINTER DEVICE
	----------------------
	
	The standard setup no longer includes the virtual printer device (VPD). In
	Windows version 3.0, the VPD detects contention between multiple VMs attempting
	to access the same LPT port. To detect contention, VPD traps I/O for LPT ports,
	which creates too much overhead for devices that use LPT ports, such as network
	adapters, SCSI adapters, and external hard disks. Windows version 3.1 eliminates
	the overhead by not installing the VPD.
	
	Potential Problem
	-----------------
	
	Although changes to the virtual printer device installation should not affect
	applications, Windows version 3.1 cannot detect the rare case of two
	applications attempting to print through the same port at the same time.
	
	VIRTUAL DMA DEVICE
	------------------
	
	In Windows version 3.1, VDMAD supports auto-initialize DMA as long as the region
	being used can be locked and does not have alignment problems. This means that
	TSRs and device drivers can use auto- initialize DMA with global memory. VDMAD
	also deals with DMA globally rather than through VM. This means that most global
	users (network, disk, and so on) no longer need a separate virtual device to
	coordinate their DMA activity when they set up DMA transfers using hardware
	interrupts. Finally, all problems in the virtual DMA services implementation
	have been corrected; relying on private versions of VDMAD is no longer
	necessary.
	
	Potential Problem
	-----------------
	
	Changes to the VDMAD may affect applications that include their own version of
	VDMAD.
	
	Test
	----
	
	If your application has a custom VDMAD, thoroughly test the application with the
	new VDMAD. Also, be sure that your installation program does not overwrite the
	device=*VDMAD setting in the SYSTEM.INI file.
	
	VIRTUAL TIMER DEVICE
	--------------------
	
	In Windows version 3.1, the virtual timer device (VTD) does not trap the I/O
	ports used for accessing the system timer chip. This allows more MS-DOS software
	to run better in VMs because I/O trapping adds significant overhead. The VTD
	keeps timing in sync by watching other activity, for example, by counting
	hardware interrupts that are not passed to the BIOS. Thus, the VTD does not
	prevent applications from reprogramming the timer to different rates. The
	TrapTimerPorts setting was added to the SYSTEM.INI file to revert to Windows
	version 3.0 compatible behavior if problems do occur because of this change.
	
	Potential Problem
	-----------------
	
	Changes to the virtual timer device may affect applications that are not based on
	Windows.
	
	Test
	----
	
	Start several other MS-DOS-based applications, and then start your MS-DOS- based
	application and check for timer problems. If problems arise, set the SYSTEM.INI
	setting TrapTimerPorts and try the tests again.
	
	VIRTUAL DISPLAY DEVICE
	----------------------
	
	In Windows version 3.1, the standard virtual display device (VDD) for VGA is
	modified to demand page video memory. Thus, you can run graphical MS-DOS-based
	applications in a window or in the background on VGA systems. This VDD must
	track video memory usage, so it is not compatible with any of the super VGA
	display drivers that must access more than 256 kilobytes (K) of video memory. To
	run these display drivers, a user must use either the VDD provided by the
	display adapter manufacturer or the VDDVGA30.386, which is included with Windows
	version 3.1. Demand paging of video memory may break TSRs that worked with
	Windows version 3.0. The difference is that the VDD virtualizes access to video
	memory; in Windows version 3.0, the display driver had full reign over memory.
	
	Potential Problem
	-----------------
	
	Changes to the video device driver may affect applications that work directly
	with video memory and TSRs.
	
	Test
	----
	
	Start your application or TSR in one or more virtual machines, and then switch
	between virtual machines, watching for problems with the display.
	
	FASTDISK (WDCTL)
	----------------
	
	FastDisk allows specific virtual devices (currently WDCTL) to access secondary
	storage devices directly. WDCTL supports Western Digital and compatible
	controllers. This device speeds up disk activity and allows demand paging of
	running VMs.
	
	Test
	----
	
	FastDisk should not affect any applications. Be sure you are running it while
	testing your application.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
