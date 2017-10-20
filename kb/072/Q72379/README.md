---
layout: page
title: "Q72379: Tips on Using WDEB386"
permalink: /kb/072/Q72379/
---

## Q72379: Tips on Using WDEB386

{% raw %}

	Article: Q72379
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WDEB386 debugger provided in the Windows Software Development Kit (SDK) has
	many invaluable features; however, it also has a number of shortcomings. This
	article describes some of the things that WDEB386 can and cannot do, and
	provides a few usage tips.
	
	MORE INFORMATION
	================
	
	Reasons for Using WDEB386
	-------------------------
	
	The WDEB386 debugger was originally written as a Microsoft internal tool for
	developing and debugging the enhanced mode layer of Windows. As such, it retains
	a number of the advanced features that are necessary to debug a multitasking,
	protected mode system. At the same time, the low-level nature of this debugging
	environment can be unwieldy and confusing in many situations. However, there are
	many situations where this debugger is particularly useful, or even totally
	necessary, to diagnose problems such as the following:
	
	- Tracing through low-level code that CVW will not trace
	
	- Viewing virtual/linear/physical memory
	
	- Viewing advanced 386 processor data, such as the GDT, LDT, IDT, and all of
	  the PMODE registers
	
	- Tracing hardware interrupt handlers
	
	- Tracing terminate-and-stay-resident (TSR) programs, or MS-DOS device drivers
	
	- Displaying the status of virtual machines (VMs)
	
	- Monitoring all interrupts and exceptions in enhanced mode
	
	- Developing and debugging virtual devices (VxDs) for enhanced mode
	
	This is not an exhaustive list; however, it should serve to illustrate some of
	the situations where the WDEB386 debugger might typically be used.
	
	Breaking into the Debugger on Startup
	-------------------------------------
	
	One command-line option that was not mentioned in Chapter 9 of the "Microsoft
	Windows Software Development Kit Tools" manual is the /B option. Specifying /B
	on the WDEB386 command line instructs the debugger to halt execution during
	Windows startup. This option does not guarantee that the debugger will halt
	execution on the very first instruction run. In fact, the debugger does not halt
	execution until after Windows has loaded VxDs, just prior to initialization.
	
	Breaking into the Debugger in General
	-------------------------------------
	
	When WDEB386 is running, execution of the current instruction stream can be
	halted with the CTRL+ALT+SYS RQ key combination. This will not stop execution at
	the precise location of the keyboard interrupt; execution will halt at a
	location in the virtual machine manager (VMM). The register contents of the
	interrupted virtual machine can be inspected using the .VM command (see below).
	
	Alternatively, breakpoints can be set with the BP command, or with interrupt
	instructions assembled directly into the code. Either an INT 1 or INT 3
	instruction can be used. The difference is that an INT 1 will produce an
	"Unexpected trace interrupt" message and stop on the instruction AFTER the INT
	1. This message does not indicate an error condition and can be ignored. An INT
	3 will break directly on the INT and not produce the message. Once a breakpoint
	instruction is hit, it can be removed permanently with the "Z" command. This
	command replaces the INT machine language with NOPs (No OPeration).
	
	Also, if the necessary hardware is available, the nonmaskable interrupt (NMI) can
	be used to break into the debugger. This usually means having an external "STOP"
	button connected to a debugging card installed in a slot of the development
	machine. Some machines may have the capability of connecting a front panel
	button to the NMI line on the machine bus. In any case, using NMI has the
	advantage of being able to break into a machine that has "hung" with interrupts
	disabled.
	
	For programmers developing virtual device drivers (VxDs), the Debug_Out macro is
	available to combine sending an ASCII string to the debug terminal and executing
	an INT 1, which will break to the debugger.
	
	Using WDEB386 in Standard Mode
	------------------------------
	
	The WDEB386 debugger is provided mainly for enhanced mode debugging; however, it
	can also be used in standard mode on a 386 processor. In general, operation of
	the WDEB386 debugger in standard mode is the same as in enhanced mode, except
	that a number of features are unavailable, particularly in Windows 3.0.
	
	For example, the "/b" option to break on startup is only available in enhanced
	mode on Windows 3.0. It is available in standard mode on Windows 3.1. Many of
	the "dot" commands (commands prefixed with a period) are provided for enhanced
	mode and are not available in standard mode.
	
	Determining the State of the Processor
	--------------------------------------
	
	Once control has been given to the debugger, the prompt character used will
	provide the protected mode status of the processor. The following list shows
	what prompt characters may be displayed and the meaning of each:
	
	   Character  Meaning
	   ---------  -------
	
	      >       The processor is in real mode
	      #       The processor is in protected mode
	      -       The processor is in virtual 8086 mode
	
	The mode the processor is in will be a good indication of what code is being
	executed. For example, if the prompt is a "-" (hyphen), the current instruction
	stream is somewhere in MS-DOS, the BIOS, or possibly in a TSR or MS-DOS device
	driver. This is because the enhanced mode layer of Windows must switch the
	processor to V86 mode to run MS-DOS or BIOS functions. Alternatively, if the
	prompt is a "#" (number sign), protected mode code -- which could be a
	Windows-based application, DLL, or even the enhanced mode layer -- is running.
	
	One of the most important aspects of "knowing what is running" when using WDEB386
	under Windows in enhanced mode is some awareness of WIN386.EXE. This module
	consists of the VMM (virtual machine manager) and all VxDs (virtual devices).
	These components are often collectively referred to as the "enhanced mode
	layer," "ring zero code," or just "WIN386." Under Windows 3.0 and 3.1, and
	Windows for Workgroups, versions 3.0, 3.1, and 3.11, if the debugger prompt is a
	"#" and the value of the CS register is 0028h, it means the machine is stopped
	in WIN386.
	
	Stopping in WIN386 may or may not be desirable. For example, the ability of
	WDEB386 to stop in WIN386 enables VxD developers to single- step through the VxD
	in question. However, an application or device driver programmer using WDEB386
	because of its "protected mode awareness" may have no interest in what WIN386 is
	doing. In any case, recognizing the system component associated with the current
	execution stream is a crucial step in using WDEB386 effectively.
	
	Using the Dot Commands
	----------------------
	
	Probably the most interesting (and confusing) part about using WDEB386 concerns
	the "dot" commands, which are commands preceded by a period. One of the causes
	of the confusion is that unless the debugging version of WIN386.EXE is
	installed, most of the dot commands are unavailable. For example, if the
	following message is displayed while Windows is running in enhanced mode
	
	  Win386 not loaded, not debug version, or not responding
	
	it most likely means that the retail version of WIN386.EXE is installed. For more
	information on installing the debugging version of WIN386, query on the words:
	
	  " prod(winddk) and wdeb386 " (without the quotation marks)
	
	Additionally, this message will always appear if WDEB386 is used when Windows is
	in standard mode.
	
	Dot Dump Commands
	-----------------
	
	Conceptually, the dot commands are "external" commands, or commands that operate
	on data structures and operations specific to the Windows environment. For
	example, the "D" (dump) command displays memory locations as would be expected
	from a debugger, but the ".DG" command displays Windows global heap information
	in much the same way as the HEAPWALK application.
	
	Most of the .Dx commands do not require the debugging version of WIN386.EXE, and
	are also available under standard mode. The remainder of the commands described
	in this article require both the debugging version of WIN386.EXE and enhanced
	mode operation. Once EVERYTHING is installed correctly, the ".?" help command
	should provide an online quick reference of the dot commands.
	
	One important distinction that should be made is the difference between the "K"
	and the ".DS" commands. The "K" command will walk the Windows stack as long as
	the debugger is stopped in Windows-based application or dynamic-link library
	(DLL) code. However, if the debugger is tracing through WIN386 code, the "K"
	command will not produce any useful output. For this reason, the ".DS" command
	has been provided to display the WIN386 stack. This is another demonstration of
	the importance of "knowing what is running," as mentioned previously in this
	article.
	
	Dot VM Commands
	---------------
	
	WDEB386 was originally designed to debug the enhanced mode layer of Windows;
	therefore, there may be situations in which the debugger is stopped in the
	middle of WIN386. For example, if execution is halted using CTRL+ALT+SYS RQ, the
	machine will not stop immediately at the instruction that was running, but
	rather at a breakpoint in WIN386 code. Thus, the general registers do not
	normally contain anything that will be of any use to a developer trying to debug
	a driver or an application.
	
	However, the operating status of the current virtual machine can be displayed by
	using the .Vx commands. For example, ".VM" will display the status flags,
	register contents, current instruction, and a portion of the stack of the
	current VM. Typing ".VL" will produce a list of all of the VMs in the system.
	These commands can be used to get an overview of the application, DLL, MS-DOS,
	or BIOS execution state, as opposed to the state of WIN386.
	
	Dot Memory Commands
	-------------------
	
	The .Mx commands display advanced information on the state of memory. Many of the
	functions print internal WIN386 information in a more readable format. Two
	commands that are immediately useful are ".ML" and ".MP". These commands convert
	addresses from linear to physical, and vice versa.
	
	Dot Trace Commands
	------------------
	
	The ".T" and ".S" commands provide for keeping interrupt trace information. The
	trace entries describe what interrupts have occurred, the VM block address, and
	the interrupted instruction address. These commands can be extremely helpful in
	tracking down problems (bugs) that do not produce immediate symptoms.
	
	Dot Device Commands
	-------------------
	
	WIN386 and WDEB386 provide the ability for an individual VxD to display
	information about its own operating state. In general, the user can request this
	debugging information from a VxD by typing ".name" (without the quotation marks)
	at the WDEB386 prompt, where "name" is the name of the VxD. For example, typing
	".VDMAD" (without the quotation marks) produces information about the state of
	the virtual DMA device.
	
	Issuing a dot device command will cause VMM to send a "Debug_Query" message to
	the VxD. The VxD is not required to do anything in response to this message, and
	in fact many VxDs do not produce any debugging output. In general, output
	produced by VxDs in this manner is not documented, and is only provided as a
	means of debugging the VxD in question. VxD developers may want to take
	advantage of this mechanism to display important data structures that define the
	state of the virtual device.
	
	Dot Command Summary
	-------------------
	
	The dot commands are summarized in Section 9.6 (page 9-48) of the "Microsoft
	Windows Software Development Kit Tools" manual. An online quick reference screen
	is available with the ".?" command.
	
	Note: A number of the dot commands are not documented in the SDK tools manual.
	For example, the format of the dot device command is described, but the actual
	output produced by specific virtual devices is not given. There are a number of
	reasons for this:
	
	- The output produced by the dot commands usually is not produced by the
	  WDEB386 debugger, but rather by components of WIN386. These components are
	  being revised and updated more dynamically than the debugger, and so the
	  information produced by these components is likely to change.
	
	- The output is often very specific information about the VxD itself, and would
	  not normally be useful in a typical debugging situation.
	
	Additional query words: wfw 3.00 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
