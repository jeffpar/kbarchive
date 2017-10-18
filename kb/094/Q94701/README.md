---
layout: page
title: "Q94701: Understanding Pen Driver Functionality Under Windows"
permalink: kb/094/Q94701/
---

## Q94701: Understanding Pen Driver Functionality Under Windows

	Article: Q94701
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 28-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is designed to give the reader a general introduction to the
	functionality of the Windows pen driver by explaining what the source does and
	how it does it. It is assumed that the reader has a basic understanding of pen
	driver functionality and is familiar with the Windows Device Driver Kit (DDK).
	
	The files that make up the pen driver can be found in the Windows for Pen
	Computing OEM adaptation kit and in the Windows version 3.1 DDK directory. The
	files of interest are: DISABLE.ASM, ENABLE.ASM, FILTER.ASM, INSTALL.ASM,
	LOAD.ASM, MISC.ASM, PLAY.ASM, WACOM.ASM and DIALOGS.C. It is important that
	these source files be read in conjunction with this article.
	
	In addition, this article is meant to be read with the article titled
	
	  "Architecture of Windows Pen Drivers"
	
	MORE INFORMATION
	================
	
	This article is divided into three sections. The first section provides some
	background information about the pen driver, the second section introduces the
	source files used to build the driver, and the third section describes the pen
	driver source code in detail.
	
	BACKGROUND INFORMATION
	----------------------
	
	1. Q. What does a pen driver do?
	
	  A. A pen driver is a Windows installable driver, which means it is a
	  dynamic-link library (DLL) that conforms to certain standards as outlined in
	  Chapter 25 of the Windows version 3.1 Software Development Kit (SDK)
	  "Programmer's Reference, Volume 1: Overview" manual. A pen driver must:
	
	   - Properly handle standard driver messages that get sent to it by Windows.
	
	   - Process certain messages that are unique to the pen driver.
	
	   - Gather information from the tablet hardware, package it in the
	     hardware-independent pen packet structure, and submit it to the PENWIN.DLL
	     for processing.
	
	2. Q. Where do standard driver messages come from?
	
	  A. The standard driver messages, such as DRV_LOAD, DRV_DISABLE, and so on, are
	  sent from Windows (specifically from USER.EXE) to installable drivers when
	  important system events occur, such as Windows booting up, Windows switching
	  to an MS-DOS box, and when an application wants to start a conversation with
	  an installable driver.
	
	3. Q. Where do pen-specific driver messages come from?
	
	  A. Some of the messages (such as DRV_GetPenInfo) are often sent by
	  applications that want to get information about the pen driver. Some messages
	  (such as DRV_SetCalibration) are sent by Control Panel applications that want
	  to change some pen driver parameters. Some messages (such as
	  DRV_SetEntryPoints) are sent by the PENWIN.DLL when it is ready to accept pen
	  packets. Pen-specific driver messages come from Windows-based applications
	  and DLLs that know about the pen driver and want to exchange information with
	  it.
	
	4. Q. Where do interrupts come from?
	
	  A. Interrupts can come to the pen driver from one of three places, depending
	  on the mode of Windows (standard or enhanced) and the mode of the processor
	  (protected or real) when the tablet hardware wants to send information to the
	  IBM-compatible PC. In the most common case (Windows for Pen Computing running
	  on a 386-based computer in Windows enhanced mode), the actual hardware
	  interrupts are trapped and processed by a completely separate virtual driver.
	  Once this virtual driver has assembled a complete pen packet, it notifies the
	  pen driver via an interrupt. The pen driver then has the easy job of
	  performing any adjustments (calibration, filtering, and so on), and
	  submitting the pen packet to PENWIN.DLL.
	
	  In the less common case (Windows is running in standard mode and there is no
	  virtual driver to handle hardware I/O), the pen driver itself must hook I/O
	  interrupts for both protected and real mode. Hardware interrupts will then
	  arrive in both modes, and it is up to the pen driver to collect the tablet
	  information, create a pen packet, switch the processor into protected mode if
	  it isn't already, and then perform the same steps (calibration, filtering,
	  and so forth) as in the enhanced case.
	
	SOURCE FILES
	------------
	
	There are nine files in the pen driver source that are needed to build this
	driver. Each file contains logically grouped functions. The following is a list
	of the functions that are found in these files:
	
	  Files and Functions            Description of Functions
	  -------------------------------------------------------
	
	  INSTALL.ASM
	     DriverProc                  Message processing routine
	
	  LOAD.ASM
	     Load                        Initializes variables
	
	  DISABLE.ASM
	     Disable                     Turns off serial interrupts
	
	  ENABLE.ASM
	     Enable                      Turns on serial interrupts
	     setup_tablet                Makes tablet connection
	
	  MISC.ASM
	     OutTabletChar               Sends character to COM port
	     OutTabletString             Sends character string to COM port
	     SetPenSamplingRate          Sets sampling rate
	     SetPenSamplingDist          Sets sampling distance
	     GetPenInfo                  Fills PenInfo structure
	     GetName                     Returns name of driver
	     SetPenDriverEntryPoints     Gets function addresses
	     RemovePenDriverEntryPoints  Sets function pointers to NULL
	     GetCalibration              Returns width and height
	     SetCalibration              Sets width and height
	     WEP                         Windows exit procedure
	
	  WACOM.ASM
	     int_stuff                   Global entry point for interrupts
	     rm_DWPP_cb                  Real-mode pen packet entry location
	     deal_with_pen_packet        Processes pen packet
	     do_mouse_event              Causes driver to act like a mouse
	     deal_with_playmode          Works with PLAY.ASM functions
	     shut_up                     Prevents out-of-range pen packets
	     speak_up                    Initiates in-range pen packets
	     out_tablet_bl               Transmits characters to tablet
	
	  FILTER.ASM
	     FFilterPacket               Removes incorrect pen packets
	
	  PLAY.ASM
	     PenPlayStart                Routines for simulating tablet events
	     PenPlayBack
	     PenPlayStop
	
	  DIALOGS.C
	     ConfigDlgProc               Handles configurable dialog box messages
	     ConfigDialog                Function that loads driver-configurable
	                                 dialog box
	     LibMain                     Entry point
	
	The remainder of this article focuses on the actions of each one of the functions
	listed above.
	
	HOW THE PEN DRIVER DOES ITS WORK
	--------------------------------
	
	The actions of the pen driver have been divided into three categories: load time
	work, interrupt time work, and miscellaneous services.
	
	Load Time Work
	--------------
	
	The pen driver is a DLL. Like all Windows DLLs, when it is loaded into memory,
	the first piece of code the Windows loader executes is LibMain, found in the
	last few lines of DIALOGS.C. This code is uninteresting.
	
	The pen driver is an installable driver, and like all installable drivers, it has
	a message handler that is sent a DRV_LOAD message the first time it is loaded
	into memory. The message handler for the pen driver is in INSTALL.ASM. Because
	the load-time code is complex, the message handler makes a far call to the load
	procedure, found in LOAD.ASM. As an aside, the message handler is definitely not
	a complex procedure, nor does it use any special register or memory tricks, and
	it should not be written in assembly. Much of the pen driver should be written
	in a clearer, easier to maintain language, such as C.
	
	When the pen driver is loaded into memory, it reads .INI file switches and
	performs some DPMI tricks to handle switching from real to protected mode. It
	does not become involved with interrupts or communications yet; that happens
	when the pen driver is enabled.
	
	Lines 119 and 120 of LOAD.ASM load registers with near pointers to strings. The
	pointers are used a lot when calling GetPrivateProfileInt(). The first .INI file
	switches read in are the undocumented BeforeLaunch= and AfterLaunch= switches.
	These switches are useful for debugging pen drivers. They can hold values 0, 1,
	or 2, and they describe how the pen driver is supposed to behave before and
	after the PENWIN.DLL has been launched (0 means ignore all input from the
	tablet, 1 means turn all tablet data into mouse events, bypassing Windows for
	Pen Computing, 2 means turn all tablet data into pen events so that handwriting
	recognition can take place). The default values are BeforeLaunch=1 and
	AfterLaunch=2, which means that the pen behaves similar to a mouse when Windows
	for Pen Computing is not present, and similar to a pen when Windows for Pen
	Computing is present.
	
	Lines 137-154 read in the pressure .INI file switches. If pressure is not
	supported (Pressure=0), then there is no need to read the Inductive= flag and
	the Force= value. WACOM makes two kinds of pressure pens, inductive and
	noninductive. The force value represents how much force (on a scale of 0- 70)
	must be applied to cause a WM_LBUTTONDOWN message to be generated; it defaults
	to 35.
	
	Lines 155-159 patch up the PENINFO structure. The PENINFO structure defaults to
	"no pressure." If the driver is driving a pressure pen, the PENINFO structure
	must be patched to describe a pressure pen. First the cbOemData field is set to
	2, because there will be 2 bytes (one word) of OEM data in each pen packet. Then
	the first slot of the rgOemPenInfo field is set to PenDataType=pressure,
	MaximumValue=70, DistinctValues=70. This means that in addition to the three
	words of X, Y, Status included in every pen packet, there will be an additional
	word of OEM data. This is pressure information, which is represented by a number
	from 0 to 69, such that there are 70 distinct values in that range.
	
	Lines 168-180 check for the Wacom510 switch. The pen driver by default drives a
	WACOM HD-648A (WACOM 648) tablet, but if the Wacom510 switch is set, the pen
	driver makes some adjustments to the tablet measurements (lines 172-177) and
	clears the INTEGRATED bit (line 178) because the Wacom510 tablet is not
	integrated with the display. Line 179 jumps over the calibration .INI file
	switches, because it makes no sense to calibrate an opaque tablet with the
	screen.
	
	If the tablet is not a Wacom510 tablet, however, lines 186-215 read in the
	calibration switches. The first four switches (cxRawWidth, cyRawHeight,
	wDistinctWidth, and wDistinctHeight) override the default values in the PENINFO
	structure. The last two values, wOffsetX and wOffsetY, are the values added to
	the X and Y components of each pen packet before they are submitted to
	PENWIN.DLL, plus 1000. Thus the pen driver subtracts 1000 from the values (lines
	208 and 214) before saving them in global variables. The practice of adding 1000
	to the actual value was started because in some earlier releases of Windows, the
	pen driver has a difficult time reading in negative values. The actual value
	1000 was chosen because if a tablet is off by more than 1 inch (1000 raw units,
	and each raw unit = 1/1000th of an inch), then there is a major defect in the
	hardware that no calibration program can correct. The calibration values are
	usually written by a calibration program, such as the Calibrate Control Panel
	application distributed with Microsoft Windows for Pen Computing.
	
	Lines 223-230 read in the maximum allowable change in X (wDeltaXMax) and Y
	(wDeltaYMax) if filtering is enabled. The filtering algorithm is explained in a
	later section.
	
	Lines 237-248 read in the Com2= flag, and depending on the value, some global
	variables dealing with serial communications are set.
	
	Lines 256-261 read in the DisplayOrientation= value from the SYSTEM.INI file.
	Lines 262-287 deal with the value, rotating the X and Y measurements of the
	tablet properly if the display is rotated from the default 0, 0, which is the
	upper-left corner.
	
	Lines 293-296 write more global variables. Lines 302 and 303 get a selector that
	points to the same memory as the pen driver's data selector but has the code
	attribute set. This is done because the interrupt handling code is in the data
	selector, but the pen driver needs a code selector for some services.
	
	One of the important variables in the pen driver is rglpfn_DWPP, which is a
	two-element array of long pointers to the function deal_with_pen_packet. When
	the pen driver is processing an interrupt, and has assembled a pen packet, it
	will call rglpfn_DWPP[0] if the driver is in protected mode, and rglpfn_DWPP[4]
	if it is in real mode. Lines 309-311 fill in the first 4 bytes of this array
	with the selector and offset of the protected mode address of
	deal_with_pen_packet.
	
	Line 317 saves the protected mode data selector in a global variable. The reason
	for this will be clear when discussing the interrupt handler. Lines 323-327
	convert the protected mode data selector of the pen driver into a real mode data
	segment. This value gets stored 4 bytes past the protected mode data selector in
	the DS_reg global variable. Again, the reasons for this will be clear when
	discussing the interrupt handler.
	
	Lines 333-342 allocate a real mode callback via the magic of DPMI. Several times
	this document has mentioned "switching from real mode to protected mode." The
	actual procedure for switching from real to protected mode is done through a
	real mode callback. When allocating a real mode callback, ES:DI points to a
	protected mode procedure that is run when the processor is switched from real to
	protected mode. DS:SI points to a protected mode data structure where DPMI can
	place the real mode register values when the processor switches from real to
	protected mode. Finally, AX contains the service number of the
	"allocate-real-mode-callback" routine. After calling DPMI via a software
	interrupt, CX:DX points to a function that, if called from real mode (that is,
	CX is a code segment, not a code selector), will switch the processor into
	protected mode and jump to the procedure specified in ES:DI. The CX and DX
	registers are saved in rglpfn_DWPP, starting at byte offset 4 (lines 349 and
	350).
	
	Lines 352-356 verify that Windows is running in protected mode (which it must if
	Windows 3.1 is running, and Windows 3.1 is required for Windows for Pen
	Computing). If the load procedure returns a 0 in DX:AX, the installable pen
	driver will be unloaded from memory.
	
	It is worth noting that once again, a procedure was written in assembly that
	should have been written in C. The only tricky part of the code is the DPMI code
	in lines 333-343, and if that can't be done with int86() calls, assembly code
	could be inserted with _asm {} directives. For ease of maintenance, this code
	should be rewritten in C.
	
	The next message the pen driver gets is DRV_ENABLE. When Windows is running in
	enhanced mode, the DRV_ENABLE message gets sent once, soon after the pen driver
	is loaded into memory. It gets the corresponding DRV_DISABLE message once, when
	the pen driver is unloaded from memory as Windows shuts down. The situation is
	similar when Windows is running in standard mode, except that a DRV_DISABLE
	message gets sent to the driver every time Windows switches to an MS-DOS box,
	and it gets a DRV_ENABLE when Windows switches back to Windows.
	
	The enable procedure starts at line 99 of ENABLE.ASM. Lines 101-103 preserve some
	registers on the stack, and lines 105 and 106 initialize two variables used in
	the hardware-detection algorithm used later.
	
	Because the enable routine hooks interrupts while preserving the old interrupt
	vectors, it would be disastrous if the enable routine was called twice without a
	disable call in-between. It would also be a bad idea to hook interrupts if the
	DRV_LOAD message hasn't been called once. The two flags fPenExists and
	fPenEnabled keep track of the message state, and if, for example, load has not
	been called or if the pen interrupt vectors have already been hooked, the enable
	procedure is aborted.
	
	The WACOM pen driver drives serial hardware, so much of the enable routine deals
	with the intricacies of PC serial communications. One of the best descriptions
	of PC serial communications is Chapters 6 and 13 of "The MS- DOS Encyclopedia,"
	published by Microsoft press.
	
	Lines 133-141 turn off serial interrupts at the 8259 chip, and save the previous
	state of the chip. Please note the use of CLI and STI on lines 134 and 140. If
	an interrupt occurred between these lines, and the interrupt handler modified
	the bits in the MASK_PORT, then the pen driver would overwrite any changes the
	other interrupt handler made.
	
	Lines 144 and 145 check to see if enhanced mode Windows is running in this
	session. If it is, then the virtual pen driver hooks all tablet interrupts, and
	there is no need for the pen driver to hook any. Thus, line 145 will skip over
	the interrupt hooking process if the WF_ENHANCED bit is set. Because the pen
	driver only saves the low word of the Windows flags in wWF, line 143 verifies
	that the WF_ENHANCED bit is still in the low word of the Windows flags double
	word. If in some future release of Windows the WF_ENHANCED bit moves out of the
	low word, this file will generate an error and not compile, and the code will
	have to be rewritten.
	
	Lines 147 and 148 skip over the interrupt hooking routines if the interrupts have
	already been hooked. The variable fPenEnabled is misleading, and should probably
	be renamed fInterruptVectorsHooked or just fIntsHooked.
	
	Lines 154-158 save the old protected mode interrupt vector in lpOldPModeVector.
	Lines 164-172 set the new protected mode interrupt vector. Notice how the
	selector is IntCS, the alias to the pen driver's data selector. The offset is
	pmode_int, a label in WACOM.ASM.
	
	Lines 178-182 save the old real mode interrupt vector, using DPMI to get at real
	mode features from the protected mode thread that the pen driver is running in.
	Lines 188-192 set the new real mode interrupt vector, again using DPMI. Notice
	how the segment is the real mode data segment corresponding to the pen driver's
	data selector, and the offset is the label rmode_int, again found in WACOM.ASM.
	There was no need to convert the data segment to a code segment, because unlike
	protected mode selectors, real mode segments do not have code or data
	properties.
	
	Line 195 sets the fPenEnabled (which should be renamed to something more
	appropriate such as fIntsHooked).
	
	Lines 201-230 set various parameters of the PC serial communications. By the time
	line 230 is executed, enough of the communications parameters have been set that
	the pen driver can send information to the tablet. Line 237 calls the
	hardware-dependent routine setup_tablet to put the tablet in the proper state.
	
	Setup_tablet (lines 429-478) first resets the tablet with the "RE" command (line
	436). According to the WACOM documentation, after a reset, a driver must wait
	before sending further commands, so lines 442-451 busy wait. These lines look at
	the time value in BIOS, but should be rewritten to use Windows's GetTickCount()
	instead. Line 458 sends more tablet commands, and lines 464-467 put the tablet
	into pressure mode if the .INI file indicates a pressure pen is being used.
	Finally, setup_tablet sets the pen sampling rate (line 474) by calling
	SetPenSamplingRate (which is explained later).
	
	After setup_tablet returns, execution continues at line 243. Interrupts at the
	8250 chip are disabled (243-247) to be sure no interrupts arrive while the PC
	communications are being changed. Lines 243-257 set DTR and RTS to the
	appropriate values, and then a character is read in from the I/O port. It is a
	quirk of the PC I/O architecture that if a character is not read at this point,
	I/O will not occur. Lines 272-291 are code lifted from the serial mouse driver.
	It is not known exactly what this code accomplishes.
	
	Lines 297-303 enable interrupts at the 8259 chip (note again the CLI and STI on
	lines 299 and 303), lines 309-312 enable Data Ready interrupts on the 8250 chip,
	and lines 318-324 raise OUT2 on the 8250 chip, which is necessary for the 8250
	chip to generate serial interrupts. At this point, the tablet should be
	generating interrupts and the interrupt handler should be processing them.
	
	It is now time to notify the virtual pen driver that the pen driver exists, is
	ready to accept interrupts, and give the virtual pen driver several pieces of
	information it needs. The virtual pen driver needs to be notified only once, so
	lines 330-332 ensure that the VPenD initialization occurs only once.
	
	For the pen driver to call the virtual pen driver, the pen driver needs to know
	the address of the application programming interface (API) procedure of the
	virtual pen driver. A virtual driver's API procedure is similar to the DrvProc
	message handler of an installable driver--it is a place where other pieces of
	code can call the virtual driver and make requests for services. Lines 334-343
	ask enhanced mode Windows (line 338) for the API entry point (line 336) of the
	virtual pen driver (line 337). The address (a protected mode long pointer) is
	placed into ES:DI. If this value is 0:0, there is no virtual pen driver to
	initialize and the next few pieces of code are skipped (line 342).
	
	If there is a virtual pen driver, then it needs to be told three things: the
	address of the PenInfo structure (which describes the pen), the address of the
	emode_int procedure to call when the virtual pen driver has assembled a pen
	packet, and the address of a pen packet structure to be filled by the virtual
	pen driver and used by the pen driver. These three pointers are put into a
	structure (vpend_data) that both the virtual pen driver and pen driver know
	about.
	
	Next, the pen driver calls the virtual pen driver's API procedure. Remember, the
	address of the API procedure is in ES:DI, but the 386 architecture has no "call
	ES:DI" instruction. Rather than do something simple such as saving ES:DI in a
	dword and doing an indirect call, the pen driver performs some stack trickery to
	save 4 bytes of data space. This should be rewritten to make the code easier to
	understand.
	
	The plan is to set up the stack to make it appear as if the pen driver made a far
	call to the API procedure, and then jump to the location at ES:DI. First the
	"return address" is pushed onto the stack. This address is CS:E_done_VPenD_init,
	which is at line 381. Lines 368 and 370 push this value onto the stack. At this
	point, the pen driver wants to jump to the location in ES:DI, but there is no
	"jmp ES:DI" instruction either, so the pen driver instead pushes ES:DI on the
	stack (lines 371 and 372) and later executes a far return, which causes the 386
	processor to pop a long address of the stack and jump to it. Line 374 loads AX
	with the VPEND_ENABLE message/service request, and line 375 loads SI with the
	offset of the vpend_data structure. This simple protocol is between the pen
	driver and virtual pen driver only, and any OEM is free to change it, add more
	services, and so forth. Finally, line 378 executes a far return, which causes
	the processor to jump to the location that was in ES:DI; when that procedure
	returns, the processor will jump to the next location on the stack, namely
	CS:E_done_VPenD_init. Notice how it took several lines to describe how the pen
	driver did a register indirect far call and saved 4 bytes of data. This code
	should be rewritten.
	
	Lines 383-385 read in a character from the COM port. This is probably
	unnecessary, and should be removed.
	
	Now the enable routine is mostly done. If all I/O has been performed properly,
	the tablet should be generating interrupts and the interrupt handler should be
	processing them. It is our experience at Microsoft, however, that all I/O is not
	always performed correctly. Sometimes tablets are unplugged when a desktop
	computer is first booting up. Sometimes a character is sent as an "R" and gets
	received as a "P". This means that the tablet might not be generating
	interrupts, and the tablet will appear dead to the user.
	
	Every time the pen driver processes an interrupt, it sets the fGotAnInt flag to
	TRUE. At this point (line 387), the enable routine waits for the fGotAnInt flag
	to be set. If after 20 ticks of the BIOS clock an interrupt has still not been
	detected, the pen driver tries to initialize the tablet again by jumping to
	E_enable_tablet again. After attempting to initialize the tablet cEnableTry
	times without success, the enable routine gives up.
	
	Please note that the WACOM tablet has been configured such that the tablet will
	generate interrupts even when the pen is not near the tablet. This is often not
	the case with other OEM hardware, and thus if those OEMs do not take steps to
	modify this code, they will always wait 20*cEnableTry ticks before finishing
	with the enable routine. This is a noticeable (on the order of seconds) and
	annoying delay when booting up Windows. All OEMs should be sure they understand
	this looping code and remove it if their hardware is not capable of supporting
	interrupt generation verification like the WACOM tablet can.
	
	The opposite of DRV_ENABLE is DRV_DISABLE. This message is sent to the pen driver
	when standard mode Windows switches to an MS-DOS box and when Windows shuts
	down. The disable handler is supposed to undo the work of the enable handler,
	and leave the system in more or less the same state as before the driver was
	enabled.
	
	When the driver gets a DRV_DISABLE message, it calls the disable routine,
	starting at line 58 of DISABLE.ASM. Similar to the way the enable routine checks
	for reentrancy, the disable routine checks on line 64 to make sure the pen is
	enabled right now, and if it isn't, skips over the disable code.
	
	Because there is no WACOM MS-DOS-mode pen driver to go with the WACOM Windows pen
	driver, the pen driver then disables serial interrupts in every possible way so
	that no tablet interrupts will slip through to MS-DOS. If there was an
	MS-DOS-mode WACOM pen driver, the Windows and MS-DOS pen drivers might want to
	agree on leaving the PC's I/O hardware in a particular state.
	
	Lines 72-76 disable interrupts at the 8250 chip. Lines 82-88 clear the obscure
	OUT2 bit on the 8250 chip to ensure that interrupts are disabled. Lines 94-98
	also turn interrupts off at the PIC. There is a bug in this section of code; an
	interrupt could arrive between lines 95 and 98 on some other hardware device,
	that interrupt handler could modify the PIC bits, and then line 98 would
	overwrite its work. A PUSHF and CLI should be inserted before line 95, and a
	POPF should be added after line 98 to restore interrupts to their previous
	state.
	
	Now that interrupts from the serial port have been totally disabled, the
	protected (lines 104-111) and real (lines 113-117) mode interrupt vectors are
	restored to their previous state.
	
	Lines 124-131 restore that mysterious BIOS table, but there is a bug in this code
	too. This code and the corresponding code in ENABLE.ASM use the variable
	wBIOSPortIndex to denote whether any BIOS work has been performed. If the value
	is 0, no work has been done/needs to be undone. Unfortunately, 0 is also the
	rs232 offset in the BIOS table for one of the COM ports. Thus, if work is
	performed on the first COM port in the BIOS table, the offset 0 is written into
	wBIOSPortIndex, and then the work will not be undone by DISABLE.ASM. One
	possible solution is to add an INC AX instruction on line 289 of ENABLE.ASM, and
	DEC CX on line 126 of DISABLE.ASM. If the code is left in its current state,
	devices on COM1 will stop working after running standard then enhanced mode
	Windows.
	
	As usual, DISABLE.ASM should probably be rewritten in C for readability.
	
	Interrupt Time Work
	-------------------
	
	When an interrupt occurs in any of the three processor modes (enhanced
	protected-mode virtual interrupt, standard mode protected-mode interrupt,
	protected-mode real interrupt), it jumps to an entry point near the top of
	WACOM.ASM.
	
	As noted before, all of the code that is run at interrupt time is in the data
	segment. Line 54 of WACOM.ASM begins the data segment, and it does not end until
	line 809, at the end of the file. In retrospect, the savings gained by putting
	the code in the data segment probably do not justify the confusion this has
	caused.
	
	The interrupt handlers all follow the same strategy. First, try to create a pen
	packet. Second, get the processor into the proper mode (protected mode). Third,
	call deal_with_pen_packet.
	
	Emode_int, on line 124 of WACOM.ASM, is the entry point for the enhanced mode
	virtual interrupt passed to the virtual pen driver as part of enable. When this
	code runs, there is already a pen packet in the pp (pen packet) variable (it was
	put there by the virtual pen driver), and the processor is already in protected
	mode. Thus the work of this interrupt handler is relatively easy.
	
	Because the virtual pen driver does not reenter emode_int, line 125 enables
	interrupts. Lines 126 and 127 save the BP register and fill it with the value 2.
	Throughout the interrupt handler, the BP register is used to keep track of what
	mode the processor was in when the interrupt occurred; 0=standard protected,
	2=enhanced protected virtual, 4=standard real.
	
	Lines 128-130 save the other registers, and line 131 gets the protected mode data
	selector by referencing the DS_reg offset from the code segment. Now that the DS
	register has the proper value, the flag fGotAnInt can be set so enable will know
	interrupts are flowing.
	
	Then line 134 calls deal_with_pen_packet, registers are restored, and the
	interrupt handler executes an IRET to return control back to the virtual
	driver.
	
	When an interrupt arrives in standard real or standard protected mode, the pen
	driver must perform I/O to read the byte of information off the tablet and
	attempt to construct a pen packet. Real mode interrupts arrive at line 153, and
	protected mode interrupts arrive at line 169. In both cases, they restore
	interrupts (there won't be any more serial interrupts until an EOI is sent to
	the PIC), the BP register is saved and loaded with the proper (4 or 0) value,
	and execution goes to the int_286 label on line 185.
	
	Lines 186-188 save important registers, and line 189 loads the proper segment
	(real mode) or selector (protected mode) into the DS register by indexing off of
	the BP register.
	
	Lines 196-201 verify that a character is ready on the I/O line. Sometimes
	interrupts are generated for other reasons, and the pen driver does not want to
	read in an invalid value off the serial line in that case.
	
	Lines 213-217 read a character into the AL register, and then check for data
	overrun. If the tablet hardware has generated information faster than the PC can
	process it, then serial data overrun occurs and the OR bit gets set in the LSR
	register of the communications chip. In that case, execution goes to line 204,
	where all collected tablet data is thrown out, and the interrupt thread
	returns.
	
	Lines 223-267 put the byte into the appropriate location in rgbByteBuffer, while
	taking the sync bit status into account. COUNT_ERRORS (lines 231 and 252) is an
	assemble-time option that records unexpected-sync-bit and unexpected-nonsync-bit
	errors into reserved word areas of the PenInfo structure. When testing a driver
	on new hardware it is often useful to enable this feature and note how
	error-free the serial communications are. It might be useful to monitor overrun
	errors also.
	
	Line 273 checks to see if the enough information has been pulled off the tablet
	to construct a pen packet. If not (line 275), the interrupt routine returns. If
	7 bytes of information have been pulled off the tablet, the ibByteBuffer index
	is reset and the fGotAnInt flag is set. fGotAnInt should probably be renamed to
	fGotAPacket, because by this time at least 7 interrupts have been serviced.
	
	Lines 285 and 286 check the WACOM's OutOfRange bit. If it is set, the X, Y, and
	Status fields do not need to be processed. The pp (pen packet) gets its
	PDK_OUTOFRANGE bit set, and the code jumps to the WI_constructed_pen_packet
	label.
	
	Otherwise, lines 302-322 convert the tablet data into X and Y coordinates, and
	lines 328-352 set the PDK bits of the pen packet and maybe the pressure field of
	the first OEM Data field too.
	
	At line 359, a valid pen packet has been constructed and put into the pp
	variable. Now the interrupt handler calls either deal_with_pen_packet (protected
	mode) or the real mode callback function (real mode), which switches to
	protected mode and calls deal_with_pen_packet. When this call returns, if the
	processor is in protected mode, an EOI has already been sent to the PIC by DWPP
	(deal_with_pen_packet). Line 361 checks for protected mode, and if it is true,
	skips over the EOI code on lines 366- 370. Lines 371-375 restore registers and
	return from the interrupt.
	
	If the processor was in real mode when the interrupt occurred, line 359 will call
	into an obscure location inside DMPI's tables, and execution will pop out at
	line 397 with the processor in protected mode. Lines 397-404 simulate a far
	return in the real mode thread's register set, which it must do so that the real
	mode thread continues execution at the instruction after the call on line 359.
	Line 405 sets the real mode's BP register to 0, so it will not send an extra EOI
	to the PIC.
	
	When the real mode callback routine is entered, ES:DI points to the rm_callback
	structure that holds information that DPMI needs to properly return back into
	real mode. If this routine is reentered, the old rm_callback values will be
	overwritten and the pen driver will most likely crash. To prevent this, the pen
	driver copies the current rm_callback structure into an empty slot in a tablet
	of rm_callback structures.
	
	Lines 411-417 search the table for an empty slot. If none can be found, lines
	422-425 send an EOI and quickly return to protected mode because this interrupt
	cannot be processed. There is a bug here. There is a slight chance that 7 tablet
	interrupts could arrive after the EOI is sent, the last one could be in real
	mode, and the real mode callback routine could be reentered. While the chances
	of this occurring are remote, it could happen, and then the pen driver could
	crash. What the code ought to do at this point is instead of sending an EOI,
	merely set the real mode's BP register back to its original value of 4, and then
	return. Using this method, the test on line 362 would fail, and the pen driver
	would have interrupts disabled (the CLI on line 366) from the EOI to the end of
	the interrupt handler.
	
	In the more common case, the pen driver is at line 428, where an empty slot is
	found and marked as full. After the increment on line 429, DS:BX points to the
	space where the rm_callback structure will be copied. This value gets saved on
	the stack (lines 431-432) for future reference, and then the rm_callback
	structure is copied (lines 433-437).
	
	Line 439 zeros the BP register so DWPP knows this is an I/O handling thread,
	rather than the non-I/O virtual interrupt thread (when BP=2). Line 441 calls
	DWPP, and then lines 443-444 restore the rm_callback pointer into ES:DI, as DPMI
	requires for a return. Line 445 disables interrupts, because if an interrupt
	arrived between marking the slot as empty again (line 446) and the return to
	DPMI and real mode (line 449), there is a slight chance the rm_callback
	structure in ES:DI could be overwritten.
	
	Deal_with_pen_packet, which starts on line 474, is where the three interrupt
	threads come together. It is in this procedure that the pen packets are finally
	passed to PENWIN.DLL.
	
	Lines 474-495 rotate the X and Y values in the pp structure based on the
	orientation of the screen. Lines 501-531 calibrate the X and Y fields of the pen
	packet and convert the values from the raw coordinate system (the values coming
	off of the tablet) into tablet units (thousandths of an inch).
	
	Line 537 makes DS:SI point to the pen packet. This is what PENWIN.DLL expects.
	
	Lines 538-546 (which are only assembled in if the PLAY directive is defined)
	check to see if the pen driver is playing back pen packets rather than
	generating new ones. If the pen driver is in play mode, it calls
	deal_with_play_mode (line 541), which will replace the current pen packet with
	the one that will be played back. This function can choose to abort the current
	pen packet (if there is nothing to play) by returning 0; if it does, the pen
	driver jumps to the end of DWPP.
	
	Lines 547-551 are some more conditional code that call a filtering algorithm.
	Again, if the filtering algorithm returns 0, the current pen packet is not sent
	to PENWIN.DLL.
	
	Lines 552-568 use special features of the WACOM tablet to guarantee that an
	out-of-range event generated by the tablet will not get lost due to an erroneous
	byte in serial communications. Most tablets generate only one out- of-range
	event when the pen goes out of range. This is known as "shut-up" mode. Some
	tablets generate interrupts at the proper sampling rate even when the pen is out
	of range. This is known as "speak-up" mode.
	
	If an out-of-range event gets lost due to serial overflow, faulty wiring, or a
	slow CPU unable to keep up with the tablet hardware, then the pen will be out of
	range but the operating system will think the pen is still in range. The
	operating system might even think the pen is still touching the tablet. This can
	cause many problems such as stuck buttons, recognition appearing to hang, and so
	forth. The NCR pen driver for the NCR 3125 tablet does exactly this, and
	received a terrible review in a recent (August, 1992) issue of INFOWORLD.
	
	The WACOM pen driver gets around this problem by putting the WACOM tablet into
	speak-up mode when the pen is in range, and putting the tablet into shut-up mode
	(for efficiency reasons) only when a given number (OUT_COUNT_MAX) of
	out-of-range packets have been processed. Once the pen has been moved back in
	range, the pen driver puts the tablet back into speak-up mode a number of times
	(IN_COUNT_MAX).
	
	By the time the pen driver gets to line 572, it has a pen packet in the pp
	variable and must do something with it based on the BeforeLaunch= and
	AfterLaunch= values specified in the .INI file and stored in the rgbToDo array.
	Line 572 puts the fLaunched flag into BX (true if PENWIN.DLL has been launched,
	false if it hasn't), loads the appropriate action into AL (line 573), and then
	branches based on the AL register.
	
	If it is 0, the pen driver jumps to the end of the DWPP routine. If it is 1, it
	calls do_mouse_event, which turns the pp (pen packet) into a mouse packet and
	calls MOUSE_EVENT in USER.EXE. If it is 2, it calls the AddPenEvent entry point
	in PENWIN.DLL, sends an EOI to the PIC (if the I/O is being handled by the pen
	driver and not the virtual pen driver) to allow further pen interrupts, and then
	calls ProcessPenEvent in PENWIN.DLL. AddPenEvent is documented as being small,
	fast, and nonreentrant, while ProcessPenEvent is documented as being big, slow,
	and reentrant so tablet interrupts can be safely turned on (and should be turned
	on) after the call to AddPenEvent.
	
	The do_mouse_event procedure starts on line 614. Its mission is to take a pen
	packet in DS:SI and call user's MOUSE_EVENT entry point with the registers set
	to the appropriate values for the call. The first thing do_mouse_event checks
	for is out of range. If the pen is out of range, there is no need to send
	anything to user. Next, lines 617-631 convert the pen packet's X and Y values in
	tablet coordinates (thousandths of an inch) into normalized (0000H-FFFFH)
	coordinates and place them into BX and CX. Lines 633-641 put the button and
	Absolute-Movement flags into the AX register, and lines 643-646 set the rest of
	the registers to the appropriate values. After a call to MOUSE_EVENT on line
	647, do_mouse_event returns. MOUSE_EVENT is documented in the MSDN.
	
	Lines 667-746 implement the deal_with_playmode procedure. It is up to this
	procedure to make DS:SI point to the pen packet to be played back to PENWIN.DLL,
	or to return 0 in AX to prevent any pen packet from being played back during
	this interrupt. Lines 667-669 make the obvious check to see if the pen driver is
	in play mode. If it isn't, it returns success; that is, play the pen packet that
	is already in DS:SI.
	
	Lines 667-669 check to see if the pen driver is still playing pen packets that
	were passed to it via the DRV_PenPlayBack message. If there are no more pen
	packets to be played, because the buffer of pen packets is empty and the
	fPlaying flag was set to FALSE, then deal_with_playmode returns 0; that is,
	don't play any pen packets now.
	
	Lines 675 and 676 get ES:DI to point to the next pen packet in the buffer. Pen
	packets in the buffer can be one of two types, pen packets that are meant to be
	submitted to PENWIN.DLL in sequence, and pause packets. Pause packets have the
	PDK_PAUSE bit set in the wPDK field, and the Y and X coordinate values together
	describe how many milliseconds the pen packet player must pause before
	submitting more pen packets. If the current pen packet is a pause packet, lines
	680-696 take care of checking the clock to see if the requisite number of
	milliseconds have passed. If they haven't, the pen driver returns a 0 (line 704)
	to abort the current pen packet and does not increment the ibPlay index. If
	enough time has elapsed, the pen driver increments the ibPlay index (line 699)
	so next time the next pen packet in the queue will get processed. Line 680 ought
	to call GetTickCount, and not the obsolete GetSystemMsecCount.
	
	If the pen packet in ES:DI was not a pause packet, but rather a normal pen packet
	meant for PENWIN.DLL, the pen driver copies the pen packet from ES:DI to DS:SI
	(lines 708-726). This takes a lot of register manipulations because the 8086
	instruction movsb assumes the source is in DS:SI and the destination is in
	ES:DI. Finally, the AX register is set to return true (line 727).
	
	Lines 730-732 check to see if the pen packet play buffer is empty or not. If it
	is, the fPlaying flag is set to FALSE (line 733), and the current tick count
	(again, line 734 should use GetTickCount) is put into the pointer passed to the
	pen driver as part of the DRV_PenPlayStart message.
	
	Lines 756-807 implement procedures that put the WACOM tablet into speak-up and
	shut-up modes. The routine to output a character to a tablet had to be
	duplicated here (lines 794-806) because the regular OutTabletChar routine is not
	in a locked selector and may not be available at interrupt time.
	
	The only other code that might be executed at interrupt time is the FFilterPacket
	routine in FILTER.ASM. This routine implements a simple filtering algorithm.
	Appropriate filtering is unique to each brand of hardware, and this algorithm
	will most likely be customized by the careful OEM.
	
	The algorithm is to maintain a queue of valid pen packets, where valid is defined
	as not being more than 1 inch away from the previous pen packet. When the queue
	reaches a certain size (3), the filtering algorithm submits the pen packets from
	the head of the queue.
	
	Lines 47-52 of FILTER.ASM copy the new pen packet to the tail of the queue. Lines
	59-64 set the SI register to point to the current pen packet, and the DI
	register to point to the previous pen packet, for comparisons. Lines 71- 93
	verify the X and Y coordinates are valid, and lines 99-103 make sure the button
	status has been the same for the last few pen packets. If the pen packet fails
	any of these tests, then the queue is cleared of all other pen packets, the head
	and tail pointers of the queue are set appropriately (lines 154-162), and the
	routine returns a 0. Otherwise the new pen packet is entered into the queue by
	incrementing the tail (lines 110-115); if the queue is not full (lines 122-124),
	there have not been enough valid pen packets in a row and the routine returns 0
	(line 125). If the queue is full, it is time to submit the pen packets by making
	DS:SI point to the head of the queue (line 133), incrementing the head pointer
	(lines 135- 141), and returning a 1 (line 143). Throughout the increments and
	decrements of the circular queue pointers, special attention has been paid to
	wraparound.
	
	Miscellaneous Services
	----------------------
	
	Miscellaneous services include both internal functions and the remaining driver
	message handlers. They can be found in MISC.ASM, PLAY.ASM, and DIALOGS.C.
	
	MISC.ASM contains most of these functions. OutTabletChar, lines 108- 119, sends
	one character to the tablet, by waiting for the 8250 transmit register to be
	empty (lines 108-114), and then sending out a character (lines 116-119).
	OutTabletString, on lines 142-165, sends an entire null- terminated string to
	the tablet, which is useful for the long strings sent to the tablet at enable
	time.
	
	SetPenSamplingRate, lines 191-231, handles the DRV_SetPenSamplingRate message.
	This function must return the old rate of the tablet, so this value is first
	placed on the stack on line 191. Lines 202-212 try to find the nearest
	WACOM-supported sampling rate equal to or above (or below if there is no rate
	above) the rate given in the argument. The supported sampling rates (which for
	the WACOM tablet are the integral dividends of 200) are kept in a tablet
	(rgwRateTable) for fast lookup. Once the proper WACOM supported rate is found,
	the proper command is constructed and sent to the tablet (lines 221-226). Lines
	228-231 store the new rate in the PenInfo structure and pop the old sampling
	rate into the return value of the function.
	
	Lines 257-278, SetPenSamplingDistance, perform a similar operation with the
	sampling distance of the WACOM tablet. Line 257 saves the old distance on the
	stack, lines 258-262 compute the distance that will be used (that is, clip the
	requested value to the hardware), line 266 saves the new value in the PenInfo
	structure, lines 268-273 construct and send a tablet command, and lines 277-278
	pop the old distance into the return value.
	
	The DRV_GetPenInfo message handler is implemented on lines 311-328. Line 311
	checks to see if the input parameter is null, which means the caller is only
	interested in the presence or absence of the tablet. Lines 315-319 copy the
	PenInfo structure to the long pointer argument, and lines 327-328 always return
	true. This function has several problems. First, if an invalid pointer is passed
	to this function, it will GP (general protection) fault, which is unacceptable.
	This function should call IsBadWritePtr first and verify that the specified
	memory area can be written to. Second, this function always returns true, even
	if the tablet is not attached to the hardware. This function should probably
	return the value of FGotAnInt. Better yet, the load routine or enable routine
	should have sent a WACOM diagnostic string, checked for a valid return result,
	and stored the existence/nonexistence of the tablet in a global variable. In the
	case of drivers for tablets that are part of the computer, always returning true
	is acceptable.
	
	Lines 338-359 implement DRV_GetName. This simple routine writes as much of a
	predefined string as it can into its parameter, and returns the number of
	characters written in DX:AX. Again, this function should also call IsBadWritePtr
	to verify the string copy won't crash.
	
	SetPenDriverEntryPoints (lines 414-456) handles the DRV_SetPenEntryPoints message
	that PENWIN.DLL sends to the pen driver when it is ready to receive pen packets.
	Before this message gets sent to the pen driver, the pen driver must not make
	any references to PENWIN.DLL or submit any pen packets to it. Any events that
	come off of the hardware before this message gets sent must either be thrown
	away or (more likely) turned into mouse events and passed off to USER.EXE. Lines
	414-423 get a module handle to the pen driver (by default PENWIN.DLL) by calling
	OpenDriver and GetDriverModuleHandle. Lines 429-442 get function pointers to the
	three entry points in PENWIN.DLL that the pen driver cares about--AddPenEvent,
	ProcessPenEvent, and UpdatePenInfo. Now that the pen driver is finished with
	PENWIN.DLL, the pen driver calls CloseDriver, sets the fLaunched flag to TRUE
	(so the interrupt handler will switch to its AfterLaunch= code path), and
	returns true.
	
	Lines 473-484, RemovePenDriverEntryPoints, perform the opposite feat, that of
	putting the pen driver into its original state before it knew of PENWIN.DLL. To
	ensure that no references are made to invalid code pointers, the three pointers
	to PENWIN functions are cleared. If an interrupt arrived midway through the
	function pointer clearing, it might try to call one of these function pointers
	and would surely crash, so interrupts are turned off before the clearing (line
	473), and are restored to their previous state after the clearing (line 482).
	The fLaunched flag is also reset while interrupts are disabled, so the interrupt
	handler will follow the BeforeLaunch= code path, the path that was used before
	the pen driver knew PENWIN.DLL existed. Finally, this function returns true on
	lines 483-484.
	
	The next two functions in MISC.ASM implement calibration for the WACOM tablet.
	Calibration is an OEM issue, and the calibration needs of each piece of hardware
	are different. Opaque tablets do not need any calibration with the screen,
	because the screen and tablet are in different locations. Some OEMs have
	implemented their own calibration applications and calibration protocol with
	their pen drivers.
	
	The pen driver reads in calibration information from .INI files (written by a
	calibration application) during Windows boot time. It uses this information to
	calibrate its pen packets at interrupt time. The sample calibration Control
	Panel application distributed with the WACOM pen driver needs two additional
	messages implemented - DRV_SetCalibration and DRV_GetCalibration, which read or
	write calibration structures containing offsets and measurements of tablet size.
	The DRV_GetCalibration handler copies the current calibration information into a
	structure. As usual, this routine should use IsBadWritePtr to see if the
	destination structure is valid.
	
	The DRV_SetCalibration message handler (lines 530-579) is more complex, because
	it must turn off interrupts (it would be disastrous to process a pen packet when
	only half of the tablet measurements have been updated), and it must take screen
	orientation into account (if the screen is rotated 90 degrees, width is height
	and height is width). Lines 550-568 copy the data from the structure into the
	local tablet measurements, and then the pen driver calls UpdatePenInfo in
	PENWIN.DLL, as all pen drivers must do whenever the tablet measurements or
	OemDataInfo fields of the PenInfo structure change.
	
	The last routine in MISC.ASM is the Windows exit procedure (WEP) of the pen
	driver DLL, which all Windows DLLs must have. It is worth noting once again that
	all of the routines in MISC.ASM should be written in C, because that would make
	them much more maintainable and easier to read.
	
	PLAY.ASM implements the three messages associated with the playback of pen
	packets to PENWIN.DLL. While implementing these messages is not strictly
	required for Windows for Pen Computing version 1.0, they are required for all
	future versions of Windows for Pen Computing, and any OEM who removes this code
	will only make developing pen drivers for future versions that much more
	difficult.
	
	PenPlayStart (lines 68-90 of PLAY.ASM) doesn't do much. First it disables
	interrupts, because a set of global variables referenced in interrupt code needs
	to be manipulated in one transaction. Rather than using CLI and STI, this
	procedure should use the EnterCrit and LeaveCrit macros, which will restore the
	interrupt flag to its previous state rather than always reenabling interrupts
	upon leaving this procedure. The fPlayMode flag is set to TRUE on line 70
	because the pen driver is going into play mode and no more pen events from the
	hardware should be sent to PENWIN.DLL. The fPlaying flag is set to FALSE on line
	71 because the pen driver is not playing any pen packets right now. Any pen
	packets that the pen driver should play back will be sent later in a
	DRV_PenPlayback message. Lines 73- 80 put the WACOM tablet into speak-up mode.
	This means that the WACOM tablet will now generate pen packets at the current
	sampling rate even if the pen is not near the tablet. Pen hardware that does not
	support speak-up mode will have to find some other way of generating interrupts
	at the current sampling rate, perhaps using hardware timers. Lines 82-85 save
	the long pointer to the variable in the caller's data space (which must be page-
	locked so that it won't be swapped out at interrupt time), which will receive
	the tick count of Windows when it is done playing a series of pen packets. Line
	87 forces interrupts to be turned on, which is a problem (bug) discussed earlier
	in this paragraph, and lines 89 and 90 return true to the caller. As usual, this
	procedure should probably use IsBadWritePtr to verify the lpdwTimesUp variable
	is valid.
	
	Lines 123-142 implement the DRV_PenPlayback message handler. Once again, lines
	123 and 139 use CLI and STI, when they really should use the EnterCrit and
	LeaveCrit macros. Lines 125-128 copy the location of the pen packet buffer into
	lppp, where the interrupt handler is expecting it; it should use IsBadReadPtr to
	verify that the pointer is valid. Line 130 resets the ibPlay index into the lppp
	structure to 0, and lines 132-135 compute the byte offset of the end of the pen
	packet buffer, and put the result into cppMax. Next the fPlaying global flag is
	set (line 137) because the interrupt handler should be playing pen packets from
	lppp, interrupts are enabled (line 139), and the function returns true (line
	141-142).
	
	The PenPlayStop handler is the simplest of the three handlers--it simply resets
	the fPlayMode flag, because the pen driver is no longer in play mode. This
	forces the interrupt handler to process pen events as they come off the tablet.
	Note that the tablet is left in speak-up mode. If the pen is away from the
	tablet, the interrupt handler will get a few out-of-range events from the
	hardware and send them to PENWIN.DLL, but eventually the interrupt handler will
	put the tablet into shut-up mode and the tablet won't be needlessly interrupting
	the computer. Because only one global variable is changed in PenPlayStop, there
	is no need to disable or enable interrupts in this procedure, and lines 169 and
	171 should be removed.
	
	The last miscellaneous service in the pen driver is the Configure dialog box.
	Windows installable drivers support the concept of a Configure dialog box, to
	configure various options of the driver that are unique to each driver. If a
	driver supports a Configure dialog box, it should return true to a
	DRV_QUERYCONFIGURE message (lines 144-149 of INSTALL.ASM). The Drivers Control
	Panel application and the Pen Control Panel application send this message to the
	pen driver. If the pen driver does return true, then the user can bring up the
	Configure dialog box by choosing the Setup button in the Drivers or Pen Control
	Panel application. When the Setup button is clicked, a DRV_CONFIGURE message is
	sent to the pen driver.
	
	The pen driver handles this message in lines 159-169 of INSTALL.ASM by calling
	the ConfigDialog procedure in DIALOGS.C. ConfigDialog (lines 37-73) as
	distributed in the WACOM sample driver brings up a simple dialog box in which
	one can choose either COM1 or COM2 as the communications port. In a production
	class pen driver, the user should be able to adjust every .INI file switch from
	this dialog box, and never have to edit an .INI file by hand. Thus, when WACOM
	writes its driver, it should include fields for pressure, force, and the
	inductive flag.
	
	The first thing ConfigDialog does is get the current Com2= value from the .INI
	file. This value is necessary for displaying the dialog box in the proper
	initial state and detecting whether the user made any changes to the system.
	Next, lines 46-48 bring up the dialog box. The graphical description of the
	dialog box is in DIALOGS.DLG, which was created by the Windows 3.1 Software
	Development Kit (SDK) Dialog Editor. The dialog box procedure is in
	ConfigDlgProc, lines 7-35 of DIALOGS.C.
	
	ConfigDlgProc is marked as _loadds (line 7) because it is a callback function,
	and the DS of the caller is almost certain to not be the DS of the pen driver.
	On WM_INITDIALOG, the dialog box checks the appropriate (COM1 or COM2) button
	based on the value of fCom2Now, which was set at initialization to the value in
	the .INI file, but may have been changed by the user. Only two buttons on the
	dialog box need any special handling, the OK button and the Cancel button. On a
	Cancel (lines 24-27), fCom2Now is set back to the value in the .INI file
	(fCom2). On an OK (lines 20-23), the fCom2Now flag is set to the user's choice
	by reading the check status of the COM2 button. In either case, EndDialog is
	called to close the dialog box.
	
	After the dialog box closes, execution continues at line 48 of DIALOGS.C, which
	frees the instance handle of ConfigDlgProc obtained by MakeProcInstance on line
	46. The rest of the code in this function is executed only if (according to line
	50) fCom2 != fCom2Now; in another words, if the user has chosen a different COM
	port than the one that is in the SYSTEM.INI file.
	
	The WACOM sample pen driver in its current state is not designed to change COM
	ports on the fly--it merely changes the SYSTEM.INI file and restarts Windows.
	Changing COM ports on the fly would be a handy feature in production code.
	Because restarting Windows is a drastic option, the user is given a chance to
	back out of the operation (lines 52-55). If the user chooses "yes, make the
	change and restart Windows," then line 61 writes the new Com2= value into the
	SYSTEM.INI file, and line 62 attempts to restart Windows. If this function
	returns, something went wrong restarting Windows, so the pen driver must
	carefully back out of any changes it made to the .INI files (lines 67-69) and
	put the user back at the dialog box again (line 71).
	
	This file did no fancy register manipulations, and should be written in C. Most
	of the pen driver code should follow suit.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	
