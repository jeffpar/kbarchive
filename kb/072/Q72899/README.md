---
layout: page
title: "Q72899: SAMPLE: VPostD.exe Calls PostMessage from a Virtual Device (VxD)"
permalink: /kb/072/Q72899/
---

## Q72899: SAMPLE: VPostD.exe Calls PostMessage from a Virtual Device (VxD)

	Article: Q72899
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbDDK kbOSWin300
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows graphical environment, a virtual device (VxD) can
	indirectly call the PostMessage function. This enables any virtual machine (VM)
	to communicate with the system VM. VPostD.exe demonstrates the techniques
	discussed below to implement this communication.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  VPostD.exe
	  (http://download.microsoft.com/download/platformsdk/sample88/3.1/W31/EN-US/VPostD.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Although a VxD cannot directly call the PostMessage function, a VxD can call a
	callback function in a Windows dynamic-link library (DLL), which can in turn
	call PostMessage.
	
	To accomplish this communication, the callback function called by the VxD must
	reside in a FIXED code segment of a DLL. Any data accessed by the callback
	routine must be placed in a FIXED data segment. This is necessary because the
	callback routine is very similar to an interrupt service routine (ISR). Required
	code and data must be available in memory at all times. FIXED code and data
	segments of a Windows DLL are page locked by the Windows memory manager, which
	keeps the segments present in memory. The callback routine can call only the
	PostMessage and PostAppMessage functions, because these are the only reentrant
	Windows functions. The DLL can't call any other Windows functions.
	
	To communicate with the system VM, the VxD must provide a protected mode API
	through which the DLL can register the address of its callback function. When
	the VxD receives an event that generates a message, the VxD schedules the system
	VM for execution. It may also be necessary to wait for the critical section to
	be free and for interrupts to be enabled. The virtual machine manager (VMM)
	provides a service called Call_Priority_VM_Event, which is designed for
	situations such as this.
	
	When the System VM is scheduled and is in an appropriate state, the VxD can use
	the VMM service Simulate_Far_Call to call the DLL, which can then call
	PostMessage.
	
	Refer to the "Microsoft Windows Device Driver Kit: Virtual Device Adaptation
	Guide" (VDAG) for documentation on the VMM services. VPOSTD provides the full
	source listing for a VxD and DLL, which demonstrates everything required to
	implement the architecture discussed above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbDDK kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
