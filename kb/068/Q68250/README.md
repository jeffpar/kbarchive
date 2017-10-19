---
layout: page
title: "Q68250: VFINTD.exe Capturing Global Interrupts in Enhanced Mode"
permalink: /kb/068/Q68250/
---

## Q68250: VFINTD.exe Capturing Global Interrupts in Enhanced Mode

	Article: Q68250
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbDDK kbOSWin300
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VFINTD.exe is a sample application that is used later in this article to
	demonstrate how to virtualize a particular IRQ. There are two pieces of code to
	the VFINTD sample: the VxD and a sample MS-DOS application. All the files that
	are named VFINTD are part of the VxD. The MS-DOS application is called TSTFINT.
	The only purpose of the MS-DOS application is to capture floppy disk interrupts.
	The sample application does not release the focus capture, but the VxD provides
	this functionality.
	
	A hardware interrupt in the 386 enhanced mode of the Microsoft Windows graphical
	environment is classified as either "global" or "owned." A global interrupt is
	typically reflected into whichever virtual machine (VM) is currently running,
	while an owned interrupt is reflected into the VM that owns that interrupt. For
	example, the floppy disk drive interrupt is typically made global, because any
	VM should be able to use the floppy disk drive and receive interrupts from it.
	On the other hand, an application that exclusively handles communications with a
	nonstandard device would become confused if interrupts from the device were
	routed to some other VM. For this reason, these interrupts should be "owned."
	
	In some circumstances, it may be advantageous to "capture" a global interrupt
	temporarily in one VM, effectively making the interrupt "owned." The text below
	discusses VFINTD.386, a sample virtual device (VxD) that does just that. With
	this VxD installed in a Windows system running in 386 enhanced mode, an
	application can issue the appropriate function calls to reflect all interrupts
	from the floppy disk drive into the application's VM, regardless of which VM is
	currently running.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Vfintd.exe
	  (http://download.microsoft.com/download/winddk/enhmode/1/W31/EN-US/Vfintd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Background
	----------
	
	Standard hardware for an MS-DOS compatible computer includes a programmable
	interrupt controller (PIC). One register in the PIC is the interrupt mask
	register (IMR), which defines which hardware interrupts are currently enabled
	and which are disabled (or masked). The MS-DOS utility DEBUG can display the
	contents of the IMR. To demonstrate this, run DEBUG from the MS-DOS prompt. Then
	enter the following command to display the value of port 21 on your machine:
	
	  " i21 " (without the quotation marks)
	
	Port 21 is the IMR for the hardware interrupts IRQ0 through IRQ7. The format of
	the IMR is that each bit (0-7) that is set corresponds to a disabled interrupt
	request (IRQ). Therefore, a typical IMR value might be 98h, which indicates that
	IRQ3, IRQ4, and IRQ7 are all masked, and that those interrupts are disabled:
	
	     Hexadecimal 98 = Binary 10011000 = IRQ3, IRQ4, and IRQ7 off
	
	NOTE: A PC/AT compatible system has two hardware PICs, and thus, two IMRs, that
	correspond to the fifteen possible IRQs. (The second PIC is cascaded to IRQ2,
	which consumes one IRQ.) While this point is included here for completeness, is
	not necessary to understand the overall picture.
	
	When an MS-DOS device driver or terminate-and-stay-resident program (TSR)
	installs an interrupt handler for a particular IRQ, the device driver or TSR
	hooks the interrupt vector and unmasks the corresponding bit in the IMR. When
	Windows is running, MS-DOS drivers and TSRs are normally shared by all virtual
	machines. Thus, if an interrupt occurs while an arbitrary VM is running, Windows
	is not required to perform a virtual machine task switch to access the interrupt
	handler, because the interrupt handler resides in the address space of each
	virtual machine.
	
	Alternatively, if an interrupt handler for a previously masked IRQ is installed
	within a virtual machine, and an interrupt occurs while another virtual machine
	is executing, Windows must make a task switch so that the local interrupt
	handler is accessible and executable.
	
	Windows Default Behavior
	------------------------
	
	The VPICD VxD virtualizes the PICs when Windows is running in 386 enhanced mode.
	When hardware is virtualized, each virtual machine has access to its own
	"virtual" PIC. This allows transparently sharing hardware among all virtual
	machines.
	
	Unless some other mechanism processes an IRQ, the VPICD handles interrupts
	according to the following default behavior:
	
	When Windows boots into 386 enhanced mode, VPICD examines the value of the IMRs
	in the system to determine which interrupts are masked. If an interrupt is not
	masked (is enabled), Windows must assume that a valid interrupt handler is
	already installed for this IRQ. These IRQs are then flagged as "global," so that
	Windows can avoid the overhead of a task switch to service them. The remaining
	IRQs, which are masked (disabled), are flagged as "local" or "owned." An
	interrupt for one of these IRQs will be reflected only into each virtual machine
	that unmasks the IRQ.
	
	Changing the Default Behavior
	-----------------------------
	
	It is possible to change the default behavior of interrupt handling (described
	above) by installing a VxD that virtualizes an IRQ with the VxD call
	VPICD_Virtualize_IRQ. This call replaces the VPICD default callback routines
	with routines supplied in the VxD. For example, the virtual communication device
	(VCD) virtualizes the communication interrupt so that it can control interrupts
	from communication devices regardless of the state of the IMR at Windows load
	time.
	
	The VFINTD sample VxD also uses VPICD_Virtualize_IRQ to allow an application to
	"capture" the interrupts on IRQ6 (the floppy disk device), which is normally
	global. For example, a hard disk backup program that directly accesses the
	floppy disk controller hardware to improve performance would "lose" interrupts
	to other virtual machines unless it changed the global nature of IRQ6. VFINTD
	can be used in this case to capture the "focus" of the floppy disk device and
	the interrupts it generates.
	
	Using VFINTD
	------------
	
	There are two pieces of code to the VFINTD.exe sample: the VxD and a sample
	MS-DOS application. All the files that are named VFINTD.exe are part of the VxD.
	The MS-DOS application is called TSTFINT. The only purpose of the MS-DOS
	application is to capture floppy disk interrupts. The sample application does
	not release the focus capture, but the VxD provides this functionality.
	
	To install the VxD in your machine, perform the following steps:
	
	1. Exit Windows.
	
	2. Modify the [386enh] section of your SYSTEM.INI file to include the following
	  line:
	
	  device=VFINTD.386
	
	3. Copy the VFINTD.386 file into the directory where the Windows system files
	  are stored. By default, this is the C:\WINDOWS\SYSTEM directory.
	
	4. Start Windows.
	
	With the VxD installed, you can run the TSTFINT application in an MS-DOS window
	to capture interrupts from the floppy drive. TSTFINT displays the version number
	of the VxD to indicate that the application has successfully communicated with
	the VxD.
	
	This sample has been provided to demonstrate how to virtualize a particular IRQ.
	It is a good place to start when developing another VxD to perform a similar
	function.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbDDK kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	
