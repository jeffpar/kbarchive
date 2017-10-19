---
layout: page
title: "Q68975: I/O Device Serialization and Virtualization"
permalink: /kb/068/Q68975/
---

## Q68975: I/O Device Serialization and Virtualization

	Article: Q68975
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbSample kbDDK kb16bitonly
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes two techniques that you can use in your application to
	support or simulate hardware devices that an application can employ when
	Microsoft Windows is running in 386 enhanced mode. This article also refers to
	two sample programs, Vdialog.exe and Vitd.exe, that help illustrate the topics
	mentioned here. This information may be helpful to a hardware vendor that is
	trying to support a product under Windows, or to someone who wants a better
	understanding of how Windows performs I/O operations in 386 enhanced mode.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Vdialog.exe
	  (http://download.microsoft.com/download/winddk/sample/3.1/W9X/EN-US/vdialog.exe)
	
	  Vitd.exe
	  (http://download.microsoft.com/download/winddk/samp57/1/W31/EN-US/Vitd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Background
	----------
	
	Usually, when an application performs an I/O operation, it calls functions in a
	high-level applications programming interface (API) to perform the task. For
	example, an application developed for Windows can call the WriteComm function to
	send characters to a communications port. Eventually, however, that transmission
	is accomplished through a combination of IN and OUT instructions in Intel
	assembly language that communicate with the desired hardware device.
	
	In enhanced mode, Windows uses features of the Intel 386 processor that enable
	multiple MS-DOS applications, as well as the Windows graphical environment, to
	run concurrently. During normal system operation, the processor rapidly switches
	its context between these applications, creating the impression that all
	applications are running simultaneously. This process creates the need to
	arbitrate access to hardware devices. Returning to the communications example,
	if the system would allow an MS-DOS-based communications package to write
	characters to a COM port that was currently being used by the Windows Terminal
	application, the characters from the two applications would be intermixed, and
	the communications data would be corrupted.
	
	Protection Mechanisms
	---------------------
	
	The 386 processor has various features that enable enhanced mode Windows to
	provide a protected environment for each application. This environment is called
	a virtual machine (VM). Because the Windows graphical environment and each DOS
	application runs in its own VM, the processor checks each instruction that it
	processes to enforce the protection mechanism. This hardware checking enables
	the system to take control when an application attempts an operation that would
	normally interfere with the other running tasks.
	
	For example, one protection mechanism that allows Windows to maintain control
	over I/O devices is known as the I/O permission bitmap, a data area created by
	the operating system that is referenced directly by the processor. When an
	application issues an IN or OUT instruction to a specific I/O port, the
	processor uses the port address as an index into the bitmap first. Then,
	depending on the value of the bit at the corresponding offset, it will either
	allow the operation to proceed or interrupt the operation and start the
	general-protection fault interrupt handler. This provides the operating system
	with the tool it needs to trap I/O instructions on a port-by-port basis.
	
	Serialization
	-------------
	
	Now that you have the background information you need, let's take a closer look
	at the communications example to see how Windows handles device contention. If
	you try to concurrently use the Windows Terminal application and an MS-DOS
	communications program on the same COM port under Windows 3.0, Windows display a
	dialog box warning you of the device contention, and asking which application
	should gain ownership of the device. This process is known as device
	serialization. One VM is allowed unlimited access to a device for a certain
	period of time and all other applications that want to use the device must wait
	until it is available.
	
	The processor's I/O permission bitmap makes serialization possible. For the first
	application that uses the port, Windows sets the appropriate bit in the
	permission bitmap for its VM to 0 (zero) to allow I/O operations. However,
	Windows sets that same bit in the bitmaps of all other VMs to 1 (one), signaling
	that I/O is "trapped." Therefore, when a second application attempts to read or
	write to the COM port, the instruction causes a general-protection fault,
	Windows receives control, and displays the dialog box.
	
	This concludes a very low-level analysis of device contention. Fortunately, it is
	not necessary to dig around in the I/O permission bitmap to make this all work.
	Instead, Windows provides functions that allow an application to manipulate the
	protection mechanisms for a particular piece of hardware and for a particular
	VM. However, to use these functions, and in general, to provide this type of
	functionality in enhanced mode Windows, a virtual device (VxD) is required.
	
	The VCD
	-------
	
	The virtual communications device (VCD) has actually been the main subject of
	this article to this point. The VCD is a VxD provided with Windows that, among
	other things, keeps track of which VM currently owns a particular COM port, and
	displays a contention dialog box when a second VM tries to use a port
	concurrently. Because the source of the VCD is available in the Microsoft
	Windows Device Development Kit (DDK), it is possible to study the instructions
	that the VCD uses to perform these functions and to use them as a base for
	writing a new VxD that supports another device.
	
	Unfortunately, the VCD is not the best example for a beginning VxD programmer
	because it is quite large and uses multiple code source files. It also contains
	a considerable amount of complex code that has been added to improve
	performance.
	
	VDIALOG
	-------
	
	Because the VCD is so complex, a small VxD sample demonstrates how to implement
	device serialization instead. VDIALOG is a VxD that, when installed on a Windows
	enhanced mode system, controls access to a nonexistent device. The companion
	programs WINACC and DOSACC are application programs that attempt to use the
	fictitious device. When both applications are run concurrently, VDIALOG tracks
	the device "owner" and displays a dialog box when contention occurs. VDIALOG is
	one of samples provided with version 3.1 of the Windows DDK.
	
	Note that the mechanism works correctly regardless of whether actual hardware
	exists at the protected port address. The protection mechanisms themselves do
	not depend on what is connected to the system.
	
	One Step Further
	----------------
	
	Sometimes, device serialization is not enough. For example, imagine how unusable
	the system would be if a dialog box would be displayed each time an MS-DOS
	application tried to write to the screen. For this reason, the virtual display
	device (VDD) uses a technique called device virtualization. Essentially, this
	means that the system informs an application that the I/O operations the
	application issues succeed, when in fact the real (physical) device may have
	been affected only indirectly.
	
	Using the display device to illustrate this concept, one of the more advanced
	features of Windows in enhanced mode is the ability to display multiple MS-DOS
	applications simultaneously on the Windows desktop. Previous versions of Windows
	had attempted, often unsuccessfully, to perform this feat by trapping screen
	writes at the system BIOS function level. The problem with this approach is that
	there is no protection at the device level; it has always been possible for some
	application to bypass the BIOS and write directly to the device. Windows
	enhanced mode fully exploits features of the 386 processor to prevent so-called
	"bad applications" from ruining the display context.
	
	More Protection Mechanisms
	--------------------------
	
	Video adapters not only have hardware registers, as COM ports do, but normally
	also have a memory mapped I/O buffer. Therefore, when an MS-DOS application, for
	example, writes to the screen, the text is moved out to the video buffer,
	usually located at some address between 640K and 1 MB, and the text then
	automatically appears on the screen. Obviously, if the multiple VMs that can run
	under enhanced mode Windows could all write physically to that buffer, and the
	adapter was using that single buffer to display text on the screen, the screen
	would display a jumble of characters and the multiple VM facility would be
	useless.
	
	Windows is able to avoid that problem. To do so, Windows uses the page
	translation facility of the 386 processor. Where the I/O permission bitmap is a
	mechanism to protect I/O ports, page translation is a mechanism to protect
	memory. Page translation works as follows: as a program executes, it constantly
	makes read and write accesses to memory. For example, a typical MOV instruction
	forms a memory address from the operand of the instruction, often using an
	offset within the instruction, some combination of general registers, and a
	segment register. The values are combined to eventually form an address, a
	number that is sent to the memory unit of the computer to identify the desired
	memory location. When paging is enabled on the 386 processor, as it normally is
	when enhanced mode Windows is running, an extra step is inserted before the
	address is sent to the memory unit. The processor uses the address as an index
	into page tables that are set up by the system. The value found in the tables is
	the one sent to the memory unit.
	
	The VDD
	-------
	
	Page mapping is the tool used by the VDD to virtualize these I/O buffers. When an
	MS-DOS application writes to the screen (that is, when the application thinks it
	writes to the screen), Windows reroutes the actual text to an entirely separate
	area in memory which is managed by the VDD.
	
	When Windows updates the physical screen--for example, a screen that has a number
	of windowed MS-DOS applications--Windows sends requests to the VDD for the
	contents of each "virtual video buffer" and paints the text from each of these
	buffers into an MS-DOS window. The fact that this entire process is transparent
	to each of the MS-DOS applications is the essence of virtualization.
	
	VITD
	----
	
	As you might expect, the VDD is quite complicated. In fact, it is much more
	complicated than the VCD, and, as such, the beginning VxD programmer would
	undoubtedly have a difficult time understanding how it does what it does.
	Therefore, the virtual interval timer device (VITD) has been written to
	demonstrate some of the principles of device virtualization. VITD is somewhat
	larger than the VDIALOG sample, but it is tiny in comparison with the VDD.
	However, despite its small size and relative simplicity, it provides full
	virtualization of a simulated hardware device. VITD is one of the samples
	provided with version 3.1 of the Windows DDK.
	
	To understand what VITD does, imagine a totally new hardware device in a PC
	called an interval timer. This new device would have nothing to do with the real
	hardware timer that is used to keep time on each PC. Instead, the way this timer
	would work is that an application would program in an interval and start the
	timer. The timer would count down, return a single interrupt to the application,
	and stop. This works differently than the standard timer on the PC, which
	provides interrupts repeatedly at some programmed rate. Another difference
	between this imaginary timer and the real one is that the count specified is the
	number of milliseconds for the interval, instead of some number of "clock
	ticks." If all this sounds like a potentially useful device, which it would be,
	then it certainly is a shame that it is not part of the standard PC hardware.
	
	The interval timer is not part of the PC hardware unless the VITD VxD is
	installed on an enhanced mode Windows system. The VITD provides a simulation of
	the imaginary interval timer for each virtual machine. Therefore, an application
	developed for MS-DOS or Windows can program the interval timer (using IN and OUT
	instructions) just as if it were a real hardware device, and it will produce an
	interrupt in that virtual machine after the desired interval.
	
	It is important to note that the VITD simulates hardware that is not there;
	however, the same principles can be applied to providing virtualization of real
	hardware devices. Such a VxD would work similarly to VITD, but would also work
	with the real hardware and "massage" data going to or coming from the virtual
	state of the device in each VM. Again, a perfect example is the VDD, which must
	maintain and read from its virtual buffers so that the data can be painted on
	the screen.
	
	Conclusion
	----------
	
	The VxD API under enhanced mode Windows contains the functions necessary
	serialize and virtualize I/O devices. It is through this API that programmers
	can protect, change the behavior of, or even completely simulate, I/O hardware.
	
	The VDIALOG and VITD VxDs are small, straightforward samples that are a good
	place to begin to learn about this aspect of Windows programming. VDIALOG and
	VITD are provided with the version 3.1 of the Windows DDK.
	
	Additional query words: DDKVXD
	
	======================================================================
	Keywords          : kbfile kbSample kbDDK kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	
