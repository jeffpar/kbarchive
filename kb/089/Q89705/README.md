---
layout: page
title: "Q89705: INFO: How VMs Can Communicate with VxDs"
permalink: kb/089/Q89705/
---

## Q89705: INFO: How VMs Can Communicate with VxDs

	Article: Q89705
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under the enhanced mode Windows environment, it is sometimes necessary or
	desirable to provide means by which processes (virtual machines) can communicate
	with virtual devices (VxDs). This article discusses the techniques by which this
	can be achieved.
	
	MORE INFORMATION
	================
	
	Virtual machines (VMs) can communicate with virtual devices either explicitly
	(which means that the virtual machine is aware of running under control of
	enhanced mode Windows and submits explicit calls to the VxD) or implicitly
	(which means that the VxD traps VM requests to the operating system that would
	otherwise be serviced by the BIOS, TSRs, or the hardware directly). The latter
	notion is basically a subset of the idea of "virtualization," which means
	leaving the process under the impression that it runs on a dedicated machine
	instead of under a multitasking operating system.
	
	When VM software wants to call into a VxD explicitly, it must first use the
	Interrupt 2fh call "get device api entry point" (ax=1684h) to receive the
	callback address to which the call into the VxD must be submitted. The
	functionality of the VxD when processing this call is up to the VxD; the
	software running in the virtual machine must know both the OEM VxD ID number
	that belongs to the VxD and the functionality of the VxD API function to utilize
	it. Because the VxD runs under a different protection level and in 32-bit code
	segments instead of 16-bit code segments, a VM cannot directly call into the
	VxD. The necessary ring transitions and mode switches are performed by the VMM.
	
	Because VxDs may also hook software interrupts that are being submitted by a VM
	(as outlined below), a software interrupt may also be seen as a valid method for
	a VM to explicitly call into a VxD; however, prior to submitting the software
	interrupt, the VM should make sure that the VxD is installed, which is possible
	through the "get device api entry point" call mentioned above. If the software
	interrupt interface provided by the VxD includes an installation check call
	(such as the VDS implementation provided by a Windows virtual device), there is
	no need for an explicit VxD installation check. Note that VDS stands for
	"Virtual DMA Interface Specification," which is a software interface for virtual
	machines to access physical DMA (direct memory access). The specification is
	available in the Software/Data Library; just query for VDS.
	
	The ways a VxD can cause a VM to trap into it implicitly are the following:
	
	- By hooking software interrupts that will be submitted by the VM
	
	- By trapping accesses from VMs to ports
	
	- By inserting callback addresses in the VMs address space
	
	When a VxD wants to hook a software interrupt, it can do so by one of the
	following techniques:
	
	1. Use Hook_V86_Int_Chain to register a callback function that is being called
	  whenever a VM running in V86 mode submits the software interrupt
	
	2. Use Get/Set V86_Int_Vector or Get/Set PM_Int_Vector to change the interrupt
	  tables of the virtual machines
	
	The differences between these strategies are as follows:
	
	- Interrupt hooks established via Hook_V86_Int_Chain are not called by virtual
	  machines running in protected mode unless the last handler in the VM
	  protected-mode interrupt chain reflects the interrupt to V86 mode.
	
	- Get/Set V86/PM_Int_Vector behaves just as if any real/protected mode software
	  running in the VM had used the interrupt vectors; all code and data that will
	  be touched by the interrupt handler must be visible to the VM in the
	  corresponding modes and reside in 16-bit segments (unless it is being sent to
	  a callback); the modified vectors can be manipulated (that is, looked at,
	  chained to, replaced, and so forth) by the VM.
	
	- The calling software in the VM will never be aware of a VxD V86 hook. That
	  is, the hook chain can never be accessed or manipulated by a VM; the
	  interrupt handler resides in a VxD (that is, in a 32-bit segment on ring 0).
	  V86 hooks are generally used to virtualize software interrupt interfaces
	  within VMs (such as providing the VDS or virtual NetBIOS interfaces to VMs).
	
	- V86 hooks cannot be installed on a per-VM basis, whereas PM and V86-mode
	  interrupt handlers can be.
	
	- Scenario 2 is very rarely used because it requires that the VxD must provide
	  code and data in an environment which is not easily accessible to it; in
	  effect, by doing so it would extend the VM with software running in the VMs
	  execution mode, whereas the technique outlined in scenario 1 contains code
	  and data which is directly accessible to the VxD.
	
	By trapping port accesses from VMs, a VxD can simulate a hardware device to a VM;
	whenever the VM accesses the port, the VxD-supplied callback function will gain
	control and leave the VM under the impression that a hardware device had
	serviced the port access. Although the main purpose of this mechanism is to
	virtualize hardware, it can be used to communicate information from a VxD to a
	VM. This technique is used in VITD, a virtual timer device that is supplied in
	the Software/Data Library (query on VITD or S12887).
	
	To use port trapping for communication, a VxD calls one of the services,
	Install_IO_Handler or Install_Mult_IO_Handler.
	
	A callback, eventually, is an address within the visible range of a VM that will
	transfer control to a routine supplied in a VxD when being jumped to while the
	VM is running in its current mode. Callback functions can be combined with
	interrupt vectors in that an interrupt vector in a VM can be set to a callback
	function. Note, however, that for VMs running in V86 mode, hooking the interrupt
	is generally more efficient than setting the V86-mode interrupt vector to a
	callback because two ring transitions less are needed.
	
	To allocate a callback, a VxD can call the service Allocate_V86_Call_back service
	for VMs running in V86 mode and Allocate_PM_Call_Back for VMs running in
	protected mode.
	
	Calling VM Code from a VxD
	--------------------------
	
	When a VxD wants to transfer control to code residing in a VM, it will generally
	do this by scheduling an event for the VM that simulates a far call or an
	interrupt into the VM. Depending on whether the event has been scheduled using
	the CallxxxEvent or the SchedulexxxEvent service, and which VM was currently
	running when the event was scheduled, the call may or may not be executed
	immediately. In any case, a ring transition will occur that will execute the VM
	code in a less privileged level in 16-bit mode.
	
	If a VxD wants to call software in a VM directly without scheduling an event, it
	should do so by using the Begin_Nest_Exec and End_Nest_Exec services. Because
	this mechanism uses the current virtual machine only, a VxD should use it
	primarily with global TSRs because global TSRs are guaranteed to be shared by
	all VMs; if a VxD wants to use nested execution to call code that is local to
	one VM, it must make sure to do this only if the VM hosting the code to call
	into is the current VM.
	
	Nested calls and scheduled events can be used cooperatively. In particular, due
	to the non-reentrancy of the Windows enhanced mode operating system, certain
	routines (such as interrupt handlers) will need to schedule events that will
	eventually submit a nested execution call into a VM.
	
	Note that the Exec_VxD_Int service should not be used to communicate information
	from a VxD to a VM. This service is basically provided to allow VxDs to use
	extended MS-DOS services. When Exec_VxD_Int is being called, the current virtual
	machine will be forced into protected mode regardless of the mode it ran under,
	and the system protected-mode interrupt handler chain is called (note that the
	current VM's protected-mode interrupt chain does not see the interrupt).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
