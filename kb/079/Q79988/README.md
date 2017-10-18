---
layout: page
title: "Q79988: CE_OVERRUN Errors with Serial Communications"
permalink: kb/079/Q79988/
---

## Q79988: CE_OVERRUN Errors with Serial Communications

	Article: Q79988
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The communications driver (COMM.DRV) provided with version 3.0 of the Microsoft
	Windows graphical environment returns CE_OVERRUN errors under "stress"
	conditions. The text below discusses this error and the conditions that can
	cause it to occur.
	
	MORE INFORMATION
	================
	
	When an application uses the Windows communications functions, it may encounter
	a CE_OVERRUN error. The frequency of this error depends on the machine
	configuration; however, the baud rate is normally the most critical factor.
	Generally, the higher the baud rate, the greater the probability a CE_OVERRUN
	error.
	
	The CE_OVERRUN error indicates an "overrun" of the receive buffer in the
	universal asynchronous receiver transmitter (UART). The COMM driver obtains this
	error by reading the line status register (LSR) of the UART -- of which bit 1 is
	set when an overrun error occurs.
	
	When the COMM driver cannot service a Received Data Available interrupt before it
	receives the next transmitted character, the UART signals an error because at
	least one character has been lost.
	
	One cause that prevents the COMM driver from servicing an interrupt quickly
	enough is that interrupts are disabled for an extended period of time -- this
	condition is commonly referred to as "interrupt latency."
	
	Some of the biggest contributors to interrupt latency are terminate-
	and-stay-resident programs (TSRs) such as network drivers, pop-up utilities, and
	drive cache programs. TSRs are not known to cooperate well with other
	interrupt-intensive applications, such as the COMM driver.
	
	Windows processes communications in this fashion for performance reasons.
	However, it does leave Windows vulnerable to ill-behaved applications. The COMM
	driver is very sensitive to ill-behaved applications because, at 9600 baud,
	characters can arrive at a frequency of approximately 1000 Hz (1 character every
	millisecond); at 19.2K baud, that frequency doubles. This is near the limit for
	an interrupt service routine (ISR) running under Windows.
	
	There is an additional problem that may cause CE_OVERRUN errors and data loss
	when running in standard mode on an 80286 computer. Windows must regularly
	switch the processor from protected mode into real mode to pass data to MS-DOS,
	MS-DOS drivers, and TSRs. This mode switch occurs a minimum of 18.2 times per
	second (to update the time-of-day clock). Because the 80286 does not provide a
	built-in method to switch the processor from protected mode into real mode, the
	system must reset the processor. This "trick" requires up to 1 millisecond to
	complete.
	
	In addition, during the transition, interrupts are disabled. Therefore, if a COMM
	interrupt arrives during one of these transitions, it may be lost, which is more
	of a problem on some machines than on others. The speed of the transition varies
	depending on the speed of the processor, the speed of installed memory, and
	other factors. If Windows is running in standard mode on an 80386 computer,
	losing interrupts should not be a problem because the 80386 is designed to make
	the protected mode to real mode transition easier and faster.
	
	There are even more factors that can affect interrupt latency in the enhanced
	mode of Windows. CE_OVERRUN errors can occur more often if more than one virtual
	machine (VM) is running (that is, standard MS- DOS applications are running
	under Windows).
	
	The source of the problem is the enhanced mode Windows virtual machine
	architecture. There is a certain amount of overhead associated with virtualizing
	interrupts and device ports. However, the largest problem in this area is
	interrupt latency caused by transitions between VMs.
	
	Enhanced mode Windows performs preemptive multitasking between VMs. Several times
	each second, Windows performs a "task switch" from one VM to another. If
	COMMAND.COM or an MS-DOS application is running under Windows, two VMs are
	present in the system, one for the MS-DOS application and one for Windows itself
	and its applications. If a COMM port interrupt occurs while the MS-DOS VM is
	active, the interrupt cannot be processed because the COMM driver cannot be
	called until the Windows VM becomes active again. Normally, this will be handled
	quickly enough, but there are times when the switch does not occur fast enough.
	Windows 3.0 has a virtual device driver (VxD) to buffer characters until the
	correct VM is scheduled (the VxD is called COMBUFF.386 and is automatically
	installed with Windows when a machine is capable of running in enhanced mode).
	COMBUFF.386 helps to correct this problem considerably; however, it does not
	eliminate the problem.
	
	The following three items are factors that affect interrupt latency and task
	switches in enhanced mode:
	
	1. MS-DOS spends most of its time in a state that prevents Windows from
	  performing a task switch. Almost every MS-DOS call places MS- DOS into this
	  state. Therefore, task switches cannot occur during file I/O, directory
	  manipulation, screen I/O, getting or setting the system time, and so on. Even
	  running COMMAND.COM in a Windows window incurs MS-DOS calls to blink the
	  cursor.
	
	  Large amounts of file I/O in an MS-DOS application may cause an application to
	  spend a great deal of time inside MS-DOS. Floppy disk file I/O has the
	  greatest impact. If too much time is spent in MS-DOS, a task switch will not
	  occur soon enough for the COMM interrupt to be processed correctly.
	
	2. Interrupts are not processed when interrupts are disabled. There are various
	  times in Windows and in MS-DOS when interrupts are disabled. Also, Windows
	  provides expanded memory (EMS) emulation for banking Windows applications
	  into and out of conventional memory. Interrupts are disabled during the EMS
	  task switch. These times are generally very short, but when they occur in
	  conjunction with task switch latency, they can combine to cause the problem.
	
	3. Higher-priority interrupts are processed before lower-priority interrupts.
	  This often is not a problem; however, difficulties have been seen more often
	  when the system uses a serial mouse. The mouse has a higher interrupt
	  priority than the COMM port. If the mouse is using one of the COMM ports,
	  communication with the mouse is relatively slow. Therefore, if the mouse is
	  very active, mouse processing takes a high priority and a relatively long
	  time to complete which may cause the system to miss a COMM interrupt.
	
	In all of these cases, a faster machine performs better because the time spent in
	MS-DOS, or with interrupts disabled, is less, and therefore more time is
	available to process the COMM interrupts.
	
	Running Windows in standard mode on an 80386 machine eliminates the virtualizing
	layer of Windows and yet retains the improved mode switch of the 80386
	processor. Eliminating unnecessary TSRs and MS-DOS drivers may help; decreasing
	the number of applications and VMs running simultaneously can only help
	matters.
	
	There is no easy, general method to work around this problem. In general, the
	COMM.DRV performs better at lower baud rates (300 to 2400 baud). As in all
	serial communications, the only way to guarantee that data is not lost is to use
	a packet/protocol transmission scheme. Using this type of protocol, it is
	possible to detect errors in packets and, more importantly, to request
	retransmission of an incorrectly received packet.
	
	Another thing to keep in mind while when developing a communications application
	is to test with dedicated hardware. For example, if two computers are running
	Windows in enhanced mode, and data is sent back and forth at 19.2K baud, the
	system is NOT under stress. Both machines are affected by the interrupt latency
	inherent in enhanced mode Windows. Therefore, the effective throughput is
	probably not 19.2K baud. Even though each character is transmitted at 19.2K
	baud, no adjustment is made for the delay between characters.
	
	Instead, dedicate the "remote" machine to an MS-DOS terminal program that can
	maintain an effective throughput of 19.2K baud. It is quite likely that it will
	be necessary to decrease the baud rate to 9600 or even to 2400 for the
	Windows-based application to receive all the data correctly.
	
	Another option is to modify the COMM.DRV to support a buffered UART. The source
	for the COMM.DRV is provided with the Windows Device Development Kit (DDK). The
	INS16550A UART is pin-for-pin compatible with the 8250 and 16450.
	
	Additional query words: 3.00 DDKCOMM
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300
	Version           : :3.0
	
	=============================================================================
	
