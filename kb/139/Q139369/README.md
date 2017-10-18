---
layout: page
title: "Q139369: PC MMTA: Err Msg: Failure to Initialize the Modem Session"
permalink: kb/139/Q139369/
---

## Q139369: PC MMTA: Err Msg: Failure to Initialize the Modem Session

	Article: Q139369
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the OS/2 Multitasking MTA (MMTA) using serial
	communications, the following error may occur in the SESSION.LOG:
	
	  Failure to initialize the modem session.
	
	CAUSE
	=====
	
	The OS/2 operating system requires the device driver COMMxx.SYS to be loaded in
	the CONFIG.SYS file before it will enable and recognize the communications port.
	
	RESOLUTION
	==========
	
	You can use the serial communications port by setting up the appropriate device
	driver. Before you set up a device driver for a communications port, choose the
	driver that works with your hardware.
	
	Refer to the following list to find the driver that matches your hardware:
	
	Driver         Hardware
	----------------------------------------------------------------------
	COM01.SYS      IBM PC/AT or compatible computer
	COM02.SYS      IBM PS/2
	
	To direct COM01.SYS to load from the OS2 directory on drive C, add the following
	line to the CONFIG.SYS file before any Microsoft LAN Manager settings:
	
	     device=c:\os2\com01.sys
	
	When this driver is loaded, OS/2 and MS-DOS programs can use the serial
	communications ports on IBM PC/AT (or compatible) computers.
	
	To use a communications port, set up the port in addition to specifying the
	device driver. To set up a port in OS/2, use the MODE utility.
	
	To display the status of a serial device, type MODE followed by the name of the
	asynchronous port. For example, to see the status of the device that is
	connected to COM2, type the following:
	
	  "MODE com2" (without the quotation marks)
	
	To set the operating arguments for a serial port, type MODE followed by a
	combination of the following options:
	
	Option         Purpose
	----------------------------------------------------------------------
	
	com#           Specifies the number of the asynchronous
	              communications (COM) port.
	
	baud           Specifies the transmission rate. Valid rates are 110,
	              150, 300, 600, 1200, 1800, 2400, 3600, 4800, 7200,
	              9600, and 19,200. The first two digits specify the
	              transmission rate.
	
	parity         Specifies the parity. Valid values are N(none), O
	              (odd), E (even), M (mark; the parity equals 1), os S
	              (space; the parity equals zero). The default value is
	              E.
	
	databits       Specifies the number of databits. Valid values are 5,
	              6, 7, or 8. The default is 7.
	
	stopbits       Specifies the number of stop bits. Valid values are 1,
	              1.5, and 2. The default value is 1.
	
	The baud option must be set; all other arguments are optional.
	
	For example,
	
	  MODE com1: 9600,N,8,1
	
	For more information regarding this procedure, please refer to the OS/2 "User's
	Guide," pages 399-403 and 466-467.
	
	Additional query words: 3.20 mta lan man
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailMMTA320
	Version           : :3.2
	
	=============================================================================
	
