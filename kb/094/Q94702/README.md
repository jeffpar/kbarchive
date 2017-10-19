---
layout: page
title: "Q94702: Architecture of Windows Pen Drivers"
permalink: /kb/094/Q94702/
---

## Q94702: Architecture of Windows Pen Drivers

	Article: Q94702
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is designed to give the reader a general introduction to the
	functionality of the Windows for Pen Computing pen driver and virtual pen
	driver, and helps to explain why the drivers function as they do. This article
	is an overview that should be read in conjunction with the article titled
	
	  "Understanding Pen Driver Functionality Under Windows"
	
	It is assumed the reader has some understanding of the Intel 386 chip
	architecture and is familiar with Windows device drivers.
	
	MORE INFORMATION
	================
	
	DEVELOPING WINDOWS FOR PEN COMPUTING PEN DRIVERS: AN OVERVIEW
	-------------------------------------------------------------
	
	Pen drivers are hardware-dependent Windows DLLs (dynamic-link libraries) and
	virtual drivers that are responsible for detecting, enabling, disabling,
	reading, and commanding stylus hardware attached to a Windows for Pen Computing
	computer.
	
	Why Pen Drivers Are Necessary
	-----------------------------
	
	At first glance, the pen may seem to be very similar to a mouse; it can report X
	and Y information and it has buttons. It would be relatively easy for a
	developer to write a mouse driver that turned all pen input into mouse events
	for Windows. Unfortunately, there are two problems with using this approach in
	Windows for Pen Computing.
	
	First, pens can generate much more information than just X, Y, and button status.
	Some pens generate pressure information, some detect changes in pen angle, and
	some detect whether the pen has left the sensing area of the tablet. Because
	regular Windows provides no mechanism for communicating this additional
	information, Windows for Pen Computing standardized a way for this new
	information to be fed to the Windows system.
	
	Second, it is natural to think of a pen as a useful device for entering
	handwritten data. However, several features of Windows mouse processing are
	detrimental to handwriting recognition. For example, Windows collapses
	WM_MOUSEMOVE messages making it impossible for a handwriting recognizer to
	obtain all of the relevant data from the pen. This implies that Windows for Pen
	Computing must store data from the pen itself so that all of it is available to
	perform handwriting recognition. Given this and other limitations, a pen driver
	must behave differently than a mouse driver-- using a Windows for Pen Computing
	interface to record pen input.
	
	Windows for Pen Computing provides the required flexible method for pen drivers
	to send all appropriate pen information from the pen to a new DLL, PENWIN.DLL.
	This new DLL handles the archiving of pen data, generation of mouse events, ink
	drawing, recognizer management, and other hardware- independent aspects of pen
	computing.
	
	Pen Versus Mouse
	----------------
	
	There are several differences between a pen driver and a mouse driver. Here are a
	few:
	
	Mouse Driver                      Pen Driver
	------------                      ----------
	A standard driver that has        An installable driver that
	its own mouse.drv= line in the    must be loaded (with all other
	[boot] section of the SYSTEM.INI  installable drivers) through the
	file.                             drivers= line in the [boot]
	                                 section of the SYSTEM.INI file.
	
	Can only provide X, Y, and        Can also provide pressure,
	button information.               proximity, and angle information
	
	                                 plus any other hardware-specific
	                                 information.
	
	Calls the MOUSE_EVENT entry       Calls the AddPenEvent() and
	point in USER.EXE when            ProcessPenEvent() entry points
	information is ready.             in PENWIN.DLL when information
	                                 is ready.
	
	Generally a low resolution,       Generally a high resolution,
	low Hz, relative-coordinate       high Hz, absolute-coordinate
	device.                           device.
	
	STRUCTURE OF A PEN DRIVER
	-------------------------
	
	Installable Drivers
	-------------------
	
	Windows version 3.1 provides an installable driver mechanism for loading DLLs at
	Windows boot time. Each DLL generally handles the interface between the Windows
	system and a specific hardware device. All installable drivers have a message
	handler, DriverProc, that processes messages sent by the Windows system or
	various interested programs. For more information on Windows system messages to
	installable device drivers, see the Windows 3.1 Device Driver Development Kit
	(DDK).
	
	Installable Pen Drivers
	-----------------------
	
	The driver that handles pen input in standard mode Windows is an installable
	driver. While most of the message handling done by the installable pen driver is
	identical to that done by any installable driver, there are a few notes that
	will prove useful to the pen driver developer, as well as a few new messages
	specific to pen drivers.
	
	DRV_LOAD
	--------
	
	This message is sent once when the standard mode driver is loaded. At this time,
	pen drivers should consult any .INI files for specific parameters, fill in
	global data structures (such as PENINFO) that will be referenced later, allocate
	any segments/memory/real-mode callbacks that need to be allocated, and finally
	return a 1 (one) if everything went well.
	
	DRV_ENABLE
	----------
	
	This message is sent when Windows is booting and when standard mode Windows
	switches from a full screen MS-DOS session back to Windows. When a pen driver
	gets this message, it should manipulate any appropriate I/O ports, reset the
	tablet, hook any appropriate interrupts, and enable any appropriate IRQs
	(interrupt requests) at the PIC (programmable interrupt controller) so the pen
	will start generating information.
	
	DRV_OPEN
	--------
	
	When an installable driver gets an Open message, that generally means some other
	program wants to get the address of some entry points in the driver. The polite
	thing to do in this case is to return a 1.
	
	DRV_CLOSE
	---------
	
	This is the opposite of the Open message. While the return value probably doesn't
	matter, the polite thing to do is to return a 1.
	
	DRV_DISABLE
	-----------
	
	This message occurs when Windows is exiting or when standard mode Windows
	switches from graphics mode to a full screen MS-DOS session. When processing the
	message, a pen driver should unhook any interrupts that were hooked at enable
	time and return all modified I/O ports to their original state.
	
	Other DRV_Messages
	------------------
	
	The following messages are usually NOPs in the sample drivers because Microsoft
	is often not given the complete documentation on a tablet. In a finished OEM
	product, a driver must support and implement these messages. These messages are
	documented in Appendix B of the "Microsoft Windows for Pen Computing:
	Programmer's Reference" supplied with the Windows version 3.1 SDK.
	
	  DRV_SetPenSamplingRate
	  DRV_SetPenSamplingDist
	  DRV_SetEntryPoints
	  DRV_RemoveEntryPoints
	  DRV_GetName
	  DRV_GetVersion
	  DRV_GetPenInfo
	  DRV_GetCalibration
	  DRV_SetCalibration
	  DRV_QUERYCONFIGURE
	
	The following three messages may or may not be supported by a pen driver for
	Windows for Pen Computing version 1.0. In future versions, these messages will
	be required. Take a look in INSTALL.ASM for their defined values, and look in
	PLAY.ASM for their functionality.
	
	  Message             Function
	  -------            --------
	  DRV_PenPlayStart   Places the pen driver into "playback" mode.
	  DRV_PenPlayBack    The driver is given an array of pen packets to play.
	  DRV_PenPlayStop    Restores the driver back into its normal state.
	
	PEN DRIVER ARCHITECTURE NOTES
	-----------------------------
	
	The following are miscellaneous notes about the structure of the pen drivers,
	issues to be considered during driver development, and so forth.
	
	Interrupt Handling
	------------------
	
	When interrupts arrive, pen drivers should collect any information from the
	tablet. If enough information is available, the pen driver should:
	
	1. Put the information into a pen packet structure.
	
	2. Set DS:SI to point to the structure.
	
	3. Disable pen interrupts.
	
	4. Call the AddPenEvent entry point in PENWIN.DLL.
	
	5. Enable pen interrupts.
	
	6. Call the ProcessPenEvent entry point in PENWIN.DLL.
	
	The AddPenEvent function call quickly records the contents of the pen packet in a
	queue of pen packets inside of PENWIN.DLL. The function is fast, but it must be
	called with interrupts turned off because it is not re- entrant. The
	ProcessPenEvent entry point handles all of the inking and other internal
	"management" of the pen data. While it is relatively slow, this function is
	re-entrant so interrupts need not be disabled when it is called.
	
	The combination of AddPenEvent() and ProcessPenEvent() allows a pen driver to
	leave interrupts disabled for the shortest time possible. This guarantees that
	no data from the pen is lost due to interrupt flooding and results in smooth
	inking and higher recognition rates.
	
	Interrupt Code; CS=DS
	---------------------
	
	All code that runs at interrupt time in the pen driver is in the data segment.
	This is done for memory management reasons. The data segment of a pen driver
	must always be fixed in memory; otherwise, its data won't be accessible at
	interrupt time. If the interrupt code is put into a code segment, then that code
	segment must also be fixed. This is a waste of a segment, and perhaps also a
	waste of fixed memory. Thus the interrupt code was put into the data segment,
	conserving the most amount of memory and segment allocations.
	
	PENWIN.DLL Not Loaded and Not Present
	-------------------------------------
	
	Pen drivers should always notify the Windows system when the pen state (position,
	pressure, and so forth) has changed. Normally this is accomplished by calling
	the AddPenEvent/ProcessPenEvent entry points in PENWIN.DLL. Due to loading-order
	issues however, pen drivers must not import these entry points directly. Rather,
	pen drivers should perform the fixup to these functions on the fly.
	
	When PENWIN.DLL is loaded and ready to accept calls to its pen event entry
	points, it sends the pen driver a DRV_SetPenDriverEntryPoints message. At this
	point, the pen driver should get the address of the AddPenEvent and
	ProcessPenEvent APIs in PENWIN.DLL via GetProcAddress().
	
	When PENWIN.DLL may not accept any more calls to its pen event entry points
	(because it is getting unloaded, for example), it will send the pen driver a
	DRV_RemovePenDriverEntryPoints message. In response to this message, a pen
	driver should cease calling AddPenEvent() and ProcessPenEvent() because these
	entry points are invalid upon receipt of the RV_RemovePenDriverEntryPoints
	message.
	
	If PENWIN.DLL is not accepting calls to its pen event entry points, either
	because it has yet to call DRV_SetDriverEntryPoints or it has called
	DRV_RemovePenDriverEntryPoints, then pen drivers must call the MOUSE_EVENT entry
	point in USER every time the pen status has changed. This ensures that mouse
	behavior is available from the pen even if inking/handwriting behavior is not.
	
	Orientation
	-----------
	
	Windows for Pen Computing supports the notion of multiple display orientations,
	for example, portrait and landscape modes. The current display orientation is
	stored in the "DisplayOrientation" field in the [Display Driver] section of the
	SYSTEM.INI file. The DisplayOrientation key is an integer from 0 to 3, which
	specifies which corner of the screen is now the upper-left corner of the
	display.
	
	DisplayOrientation Value  Meaning
	------------------------  -------
	0                          Display oriented normally.
	1                          Old upper-right corner now upper-left corner;
	                          +90.
	2                          Display is upside down; +180.
	3                          Old lower-left corner now upper-left corner;
	                          +270.
	
	A pen driver must read the display orientation value and orient itself so the
	width and height values in the PENINFO structure are correct and all X, Y
	information reported in pen packets has its origin in the upper-left corner of
	the logical display. That is, it must ensure that regardless of the coordinates
	reported by the physical device, that the X, Y information reported reflects the
	orientation of the Windows desktop on the display device.
	
	Because orientation can be changed only at Windows startup, the orientation key
	must be read only at DRV_LOAD time.
	
	Re-Entrancy
	-----------
	
	As stated above, AddPenEvent() is fast but not re-entrant and ProcessPenEvent()
	is not fast but is re-entrant. The recommended way of using these functions is
	to enable pen interrupts [that is, send an EOI (end of interrupt) to the PIC
	(programmable interrupt controller)] after the call to AddPenEvent(), but before
	the call to ProcessPenEvent().
	
	If pen interrupts are enabled before the call to AddPenEvent(), a pen driver runs
	the risk of re-entering AddPenEvent(). If pen interrupts are not enabled before
	the call to ProcessPenEvent(), the pen driver runs the risk of data overflow.
	
	Filtering
	---------
	
	Sometimes tablets need to filter pen packets before they are submitted to Windows
	for Pen Computing. This might be necessary to remove spurious data from the
	digitizing hardware, for example. The default filter distributed in FILTER.ASM
	ensures that each pen packet is followed by two pen packets with similar data
	before it gets submitted for processing. Some tablets need less or no filtering,
	while other tablets need much more extensive filtering that takes into account
	velocity and acceleration. The function provided is fairly basic and the OEM is
	free to enhance it as appropriate for the digitizing hardware concerned.
	
	Speak Up/Shut Up Modes
	----------------------
	
	An interesting problem arises in some tablets that can sense when the pen goes
	out of range. Tablets can respond to a pen going out of range in two ways. They
	can send only one out-of-range packet ("shut up mode"), or continuously send
	out-of-range packets ("speak up mode"). If the tablet is in shut up mode and the
	out-of-range packet is lost for some reason, then the system is in an incorrect
	state--it will have missed the state transition to out-of-range. If a tablet is
	in speak up mode, then the system is continuously interrupted by the tablet when
	there is no new information--at least no important information. This is a
	performance problem because it floods the system with useless data.
	
	The sample serial driver in the Windows for Pen Computing DDK resolves this
	potential problem by putting the tablet in speak up mode until the pen goes out
	of range. When an out-of-range packet arrives, the tablet is put into shut up
	mode. When the pen goes back in range, the tablet is put back into speak up
	mode. It is very important to follow this example in all pen drivers. The state
	transition from in range to out of range is critical and nothing will prove more
	annoying than quickly flicking a pen out of range and causing the system to
	think the pen is still in contact with the screen. The computer appears hung
	while the system patiently waits for the user to finish writing and lift the
	pen.
	
	Full-Screen MS-DOS Mode
	-----------------------
	
	If a machine has no keyboard and goes into a full-screen MS-DOS-based
	application, there is no default way to get back into Windows except by
	rebooting the machine. There are three options available to an OEM who releases
	a keyboardless machine. An OEM can remove the .MOD files from the Windows system
	directory, thereby disabling all MS-DOS sessions. An OEM can use the modified
	Pen Windows .MOD files, which put up a warning dialog box before launching any
	MS-DOS session. Or an OEM can write an MS-DOS mode pen driver that supports some
	special gesture such as triple-tap, which switches from an MS-DOS session back
	into Windows. This is a very OEM- dependent situation that must be addressed in
	keyboardless machines, or machines that often will be run without a keyboard.
	
	286/386 MODE INTERRUPTS
	-----------------------
	
	The following sections contain discussions of the 286/386 protect mode versus
	real mode issues and how they affect the design and behavior of pen drivers.
	
	System Layout
	-------------
	
	When Windows is running in standard mode, Windows owns the computer. Windows can
	hook interrupts, execute IN and OUT instructions, and in general exert complete
	control over the system. When it switches to a full screen MS-DOS session, the
	MS-DOS session owns the computer.
	
	When Windows is running in enhanced mode, what we normally think of as Windows is
	really a virtual machine running in a much larger Windows enhanced operating
	environment. All MS-DOS sessions are also running in their own virtual machines
	in the Windows enhanced operating environment. Every time a virtual machine
	(running in processor ring 3) executes a privileged instruction (such as an IN,
	OUT, or INT), a privileged exception occurs. The underlying Windows operating
	environment (running in ring 0) takes over, checks permissions, and (if
	everything is OK) simulates the instruction for the virtual machine. This
	exception-check-and-simulate operation takes on the order of 100-300 CPU cycles.
	Clearly this is a very expensive operation and to be avoided if possible.
	
	If a hardware interrupt arrives in enhanced mode Windows and no virtual driver in
	ring 0 has hooked the interrupt, the virtual PIC driver (VPICD) in the Windows
	operating environment simulates a hardware interrupt occurring in the virtual
	machine that has the focus. This also involves ring transitions and is a very
	expensive process.
	
	Protect Mode Interrupts
	-----------------------
	
	If standard mode Windows is running in protected mode (which it usually is), then
	any interrupt that arrives is sent to whoever last hooked the interrupt in
	standard mode. Standard mode interrupts are hooked via INT 21H, function 25H.
	
	Real Mode Interrupts
	--------------------
	
	If standard mode Windows is running in real mode (which happens when memory is
	being moved around, when the disk is accessed, and other times), then any
	interrupt that arrives is sent to whoever last hooked the interrupt in real
	mode. If nobody has hooked the interrupt, Windows will "reflect" the interrupt
	into standard mode and call any standard mode hook that exists. The resources
	consumed by the reflection process are scarce and are easy to destroy with
	high-speed interrupt devices such as pens. Thus it is necessary to hook
	interrupts in real mode. Real mode interrupts are hooked via INT 31H, function
	0201H.
	
	Once an interrupt arrives in real mode, there is very little processing that can
	be done. Code and data are stored in real mode segments, not protected mode
	selectors, so the DS and CS registers must hold the real mode equivalent of
	their protected mode values. Any time a real mode interrupt requires a
	significant amount of processing (such as making a far call to another
	procedure), the interrupt handler should switch the processor into protected
	mode via a real mode callback address, allocated via DPMI's function 0303h.
	
	DPMI is documented in the MS-DOS Protected Mode Interface Specification,
	available from Intel by calling (800) 548-4725.
	
	Pen drivers need a real mode interrupt handler because they process lots of
	interrupts. Pen Drivers also need to switch to protected mode occasionally in
	order to make far calls to PENWIN.DLL's AddPenEvent and ProcessPenEvent
	routines.
	
	Enhanced Mode Interrupts
	------------------------
	
	When Windows is running in enhanced mode, interrupts force the processor to
	switch to ring 0. If there is no virtual driver to take care of an interrupt,
	the VPICD (virtual PIC driver) will reflect the interrupt into whatever virtual
	machine has the focus. This reflection process is slow and not very reliable
	with high interrupt rate devices such as pens, so it is necessary to write a
	virtual pen driver that runs in ring 0, processes pen interrupts, and performs
	ring transitions only when necessary.
	
	In a pen driver, transitions from the ring 0 interrupt handler to ring 3 are
	necessary only when a complete pen packet has been built by handling interrupts
	from the digitizer. Whether it is one or many interrupts per pen packet, it is
	more efficient to handle them in a virtual pen driver than to rely on the
	reflection process. Once the pen packet is complete, the standard mode pen
	driver can be notified (see below for more information).
	
	VIRTUAL DRIVERS
	---------------
	
	This section is a supplement to the "Virtual Device Adaptation Guide," found in
	the Windows versions 3.0 and 3.1 DDKs, not a substitute. A virtual driver
	developer should first read Chapters 16 and 17 of the "Virtual Device Adaptation
	Guide" and be familiar with the other chapters.
	
	The Virtual Driver Environment
	------------------------------
	
	Virtual drivers are device drivers for the Windows operating environment present
	when Windows is running in enhanced mode. They operate in a 32-bit flat address
	space, and can utilize all 32 bits of the 386's registers. Because they reside
	in ring 0, they can execute privileged instructions such as IN, OUT, and INT
	without taking the massive performance hit that a program running in ring 3
	would take. Virtual drivers process interrupts "below" all of the virtual
	machines (VMs) running in the Windows operating environment. This means that a
	Windows virtual driver will "see" an interrupt before either a Windows driver or
	MS-DOS device driver.
	
	Focus
	-----
	
	In the Windows operating environment, one virtual machine always has the focus.
	All input and output go to this virtual machine. If an MS-DOS-based application
	is active in a full screen session, then that virtual machine has the focus. If
	a Windows-based application is currently active, then the Windows VM (also known
	as the system VM) has the focus. If an MS-DOS full- screen application has the
	focus, it is best not to capture and process interrupts from the pen in the pen
	virtual device driver. Rather, interrupts should be reflected to the VM that has
	the focus with the VPICD_Set_Int_Request call. In this way, any MS-DOS device
	drivers running in the VM can hook and process interrupts as if it owned all of
	the hardware. For example, this would allow the creation of an MS-DOS pen device
	driver that emulates a mouse.
	
	How Ring 3 Code Calls Ring 0 Code
	---------------------------------
	
	A program in ring 3, such as a Windows-based application or Windows device
	driver, communicates with a virtual driver via the virtual driver's API
	procedure. Every virtual device driver exports a single API for the sole purpose
	of communication with the "outside world." The entry point for a virtual device
	driver can be obtained by the INT 2FH, function 1684H. (This is documented in
	Appendix D of the "Virtual Device Adaptation Guide," which is part of the
	Windows 3.0/3.1 DDK.)
	
	Once the address of a virtual driver's API procedure is known, a program running
	in ring 3 can fill up its registers with useful information and call the API
	procedure. The virtual driver's API procedure then takes over and can read the
	virtual machine's registers. If the API procedure needs to return a value, it
	can modify the caller's registers as necessary.
	
	A standard mode pen driver running in ring 3 may want to call a virtual pen
	driver running in ring 0 when it wants to give the virtual driver useful
	information, such as the address of the PENINFO structure. This is the case in
	the sample serial pen driver shipped in the DDK, which at initialization time
	must give the virtual pen driver the address of a buffer that can serve to
	contain an entire pen packet. Once the virtual pen driver knows the address of
	this packet, it can "fill it in" at interrupt time as input is received from the
	digitizing device.
	
	How Ring 0 Code Calls Ring 3 Code
	---------------------------------
	
	It is not very easy for a ring 0 virtual driver to communicate with a ring 3
	program. The virtual machine running in ring 3 may think it has interrupts
	turned off, so calling or jumping to an entry point in the ring 3 virtual
	machine is bound to corrupt it. The only proper technique is for the ring 0
	program to wait until the ring 3 virtual machine is accepting interrupts, and
	then simulate an interrupt in the ring 3 virtual machine.
	
	Windows provides a mechanism, Call_Priority_VM_Event, whereby a ring 0 program
	can schedule an event procedure that will get executed when a specified virtual
	machine turns interrupt processing back on. Call_Priority_VM_Event is documented
	in Chapter 25 of the "Virtual Device Adaptation Guide." The event procedure can
	simulate an interrupt in the ring 3 virtual machine via the
	Build_Int_Stack_Frame and Resume_Exec calls, documented in Chapters 21 and 22 of
	the "Virtual Device Adaptation Guide." After the call to Resume_Exec, the ring 3
	virtual machine takes control of the system and performs any work that needs to
	be done. When it is finished, it executes an IRET instruction, which returns
	control back to the ring 0 virtual driver.
	
	A virtual pen driver may want to call a standard mode pen driver when it has
	constructed a pen packet from the hardware and wants to submit the pen packet
	for processing by Windows for Pen Computing. The sample serial driver in the
	Windows for Pen Computing DDK utilizes this mechanism to inform the standard
	mode driver that a pen packet has been completed. As discussed above, the
	virtual pen driver is processing interrupts from the digitizing device at ring 0
	and building a pen packet in a memory location provided by the standard mode pen
	driver at initialization time. Once the pen packet is complete, the virtual pen
	driver simply schedules a ring 3 interrupt to occur. In response to the ring 3
	interrupt, the standard mode pen driver calls AddPenEvent and ProcessPenEvent.
	
	Hooking Interrupts
	------------------
	
	A virtual pen driver can hook an IRQ at initialization time via the
	VPICD_Virtualize_IRQ call. Among other things, this call specifies what
	procedure should get executed when a hardware interrupt arrives on the specified
	IRQ line. This is the method by which a virtual pen driver can associate a
	tablet interrupt with a procedure in its code space. For example, the serial
	driver in the Windows for Pen Computing DDK utilizes this method to hook either
	IRQ 3 or 4 (depending on whether the tablet is connected to COM1 or COM2) so
	that it can receive input from the pen.
	
	Handling Interrupts
	-------------------
	
	There is nothing special about handling interrupts in a ring 0 virtual driver.
	The interrupt handling code can still execute the IN instruction to get data
	from a port, it must be sure and send an EOI when it is done processing, and it
	should return from the interrupt procedure with a RET instruction.
	
	INI File Parameters
	-------------------
	
	Pen drivers should use the [Pen Driver] section of the SYSTEM.INI file to store
	any initialization information. There are only four keys all pen drivers must
	support, and they are described below. Any OEM may also use and support
	OEM-specific keys and values.
	
	  wOffsetX, wOffsetY
	
	  These values specify the quantity plus 1000 in tablet hardware units that must
	  be added to every pen packet. They are used by tablet drivers to calibrate a
	  digitizer for horizontal and vertical drift, or simply offset from origin
	  variances in manufacture of the digitizer/display combination. These values
	  have 1000 added to them because reading and writing negative values to the
	  SYSTEM.INI file is difficult.
	
	  wDistinctWidth, wDistinctHeight
	
	  These values, if they exist, override the default wDistinctWitdth and
	  wDistinctHeight values in the PENINFO structure, thereby setting a new upper
	  bound on the width and height of the tablet in tablet hardware units.
	
	How to Quickly Get a Driver Up and Running
	------------------------------------------
	
	If you are in a hurry to get a pen driver up and running on new hardware, it is
	best to copy the source of a pen driver for similar hardware and modify it for
	the new hardware's parameters. The following is a list of files in the standard
	mode pen driver and the areas that usually need to be changed:
	
	  File            Changes
	  ----            -------
	
	  DISABLE.ASM     Make sure the correct PIC (either the master or
	                  the slave) is disabled.
	
	  ENABLE.ASM      Make sure the correct PIC (either the master or
	                 the slave) is enabled. The setup_tablet
	                  function is very hardware-dependent. Perform
	                  any hardware-dependent resetting of the tablet
	                  in that procedure.
	
	  FILTER.ASM      This is another hardware-dependent file. Some
	                  tablets don't need any filtering; some need a
	                  lot; some only need to filter the PDK bits in
	                  the PENPACKET structure; some only need to
	                  filter X and Y data in the PENPACKET structure.
	
	  HARDWARE.INC    All of the parameters here are extremely
	                  hardware-dependent. Be sure the Raw
	                  measurements measure the size of the tablet in
	                  1000ths of an inch, and the Distinct
	                  measurements measure the maximum values
	                  returned by the hardware (that is, the maximum X,Y
	                  resolution--often just digitizer extents--
	                  returned by the digitizing hardware).
	
	  LOAD.ASM        Any OEM-specific INI file switches should be
	                  read here. This is also where hardware
	                  communications variables and interrupt
	                  variables are usually initialized.
	
	  MISC.ASM        Most of the routines in here are hardware-
	                  dependent handlers for the various installable
	                  pen driver messages, and must be customized by
	                  the OEM.
	
	  INT.ASM         Obviously the interrupt handler is very
	                  hardware-dependent. But it is surprising how
	                  little of the code actually needs to change
	                  from driver to driver. The code that often
	                  needs the most work is the byte reader and
	                  PENPACKET constructor (from the int_286 label
	                  to the IRET instruction), the EOI code (make
	                  sure it is sent to the correct PICs!), and the
	                  SpeakUp and ShutUp code. The rest of the code
	                  (such as DealWithPenPacket) is hardware-
	                  independent and can usually be left alone.
	
	The standard mode driver should be tested and debugged in standard mode Windows,
	and be efficient and error free before a virtual pen driver is developed for
	enhanced mode Windows. The following are the areas that usually need to be
	changed in the source to a virtual driver:
	
	  File            Changes
	  ----            -------
	
	  VPEND.ASM       The IRQ virtualized in the call to
	                  VPICD_Virtualize_IRQ is hardware dependent.
	
	  HWINT.ASM       Usually, only the byte reader and PENPACKET
	                  constructor (from the start of the procedure to
	                  VHI_send_pen_packet) needs to be changed.
	
	COMMON PROBLEMS AND SOLUTIONS
	-----------------------------
	
	Problems that are likely to be encountered during pen driver development, along
	with solutions to those problems, are presented in the following section.
	
	Windows Boots But There Is No Cursor
	------------------------------------
	
	If Windows boots but there is no cursor on the screen, then the Windows mouse
	driver (that's mouse, not pen) cannot find any mouse hardware and is returning
	failure when it is loaded. A special mouse driver, YESMOUSE.DRV, is distributed
	with Windows for Pen Computing, which always returns success even when there is
	no mouse hardware present. If the mouse.drv= line in the [boot] section of the
	WIN.INI file points to YESMOUSE.DRV, then a cursor will be drawn by Windows.
	
	The Cursor Doesn't Move When the Pen Moves
	------------------------------------------
	
	When this happens, it is helpful to launch debug Windows with the kernel debugger
	and use breakpoints to determine what parts of the pen driver are not executing.
	Complete documentation on debug Windows and the kernel debugger can be found in
	the Microsoft Windows version 3.1 SDK and DDK documentation. Additionally, there
	are some very helpful WDEB386 articles available to Microsoft OnLine
	subscribers.
	
	When the pen doesn't work at all, put a breakpoint in the load, enable, and
	interrupt processing procedures. If Load is not getting called, verify that the
	SYSTEM.INI file is pointing to the correct driver. If Enable is not getting
	called, make sure the Load routine is returning a 1. If the hardware interrupt
	routine is not getting called, make sure the Enable routine hooked all the
	interrupts and manipulated all of the appropriate I/O ports correctly. If the
	hardware routine is only called once, make sure an EOI is sent to the correct
	PIC after every interrupt. If the hardware routine is getting called all the
	time but the pen still doesn't move, verify the AddPenEvent routine in
	PENWIN.DLL is getting called with a properly formed PENPACKET, and that
	ProcessPenEvent is getting called after AddPenEvent.
	
	The Cursor Isn't Lined Up with the Pen
	--------------------------------------
	
	If the pen has a parallax (offset) problem, there is an application in the
	control panel that can calibrate pen drivers. The application really just sends
	the DRV_ messages to perform the calibration discussed above--and writes out
	values to SYSTEM.INI to be used by the pen driver the next time the system is
	started. If the cursor is consistently off by the same amount on each tablet,
	the Distinct and Offset values in HARDWARE.INC probably need adjusting.
	
	If the Calibration application doesn't fix these problems, if the digitizer
	surface has "holes" in it, or if the tablet has areas where the pen seems to be
	more out of calibration than usual, this indicates a hardware problem. Either a
	custom calibration application and pen driver need to be built in order to take
	the digitizer quirks into account, or the hardware needs to be replaced.
	
	NOTE: The source code for the Calibrate application is available in the Windows
	for Pen Computing OAK.
	
	The Cursor Falls Way Behind in Following the Pen
	------------------------------------------------
	
	This usually indicates a performance problem in the pen driver or in the
	hardware. The debug version of Windows is slow and may cause such a performance
	problem. Also, enhanced mode Windows is slower than standard mode Windows. Try
	running the retail version of Windows in standard mode as a performance
	benchmark. If this does not rectify the problem, using a slower pen sampling
	rate probably will. Note that a minimum of 100 samples per second is required
	for adequate handwriting recognition. If this rate cannot be maintained, then
	the hardware may simply be too slow. The virtual pen driver has a queue of 32
	pen packets, and sometimes a delay of 32 pen packets is noticeable. This queue
	may have to be disabled on slower hardware.
	
	The Cursor Flickers or Jumps
	----------------------------
	
	This indicates either a performance problem or a hardware problem. If the tablet
	digitizer is resistive, this usually indicates a hardware problem.
	
	If the tablet hardware can sense proximity, this usually indicates a software
	performance problem. Possible solutions to the performance problem are slowing
	down the sampling rate, writing better pen-packet filtering code, and if the
	problem only appears in enhanced mode Windows, making sure the virtual pen
	driver is installed correctly and is processing interrupts.
	
	The Cursor Moves and Tracks the Pen, But Recognition Is Poor
	------------------------------------------------------------
	
	Usually this means the tablet measurements in the PENINFO structure are too
	small. Double check that the raw width and height measurements are in fact the
	size of the tablet in thousandths of an inch. For example, if the tablet surface
	is 8 inches wide, then PENINFO.cxRawWidth must be 8000. If the recognizer does
	not know the accurate size of the tablet, recognition quality will suffer.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
