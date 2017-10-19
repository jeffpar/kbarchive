---
layout: page
title: "Q117567: How 16-Bit and 32-Bit Programs Multitask in Windows 95"
permalink: /kb/117/Q117567/
---

## Q117567: How 16-Bit and 32-Bit Programs Multitask in Windows 95

	Article: Q117567
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows 95, all 32-bit applications are scheduled preemptively. Preemptive
	multitasking allows Windows 95 to switch between 32-bit applications whether
	those applications are prepared to lose control of the CPU or not. No
	cooperation between the application and the operating system is required for
	32-bit multitasking.
	
	MORE INFORMATION
	================
	
	32-Bit Applications
	-------------------
	
	32-bit application program interface (API) functions and the applications that
	call those functions are designed to handle the concurrence requirements that
	come with preemptive multitasking. All internal data structures are either
	allocated on a per-thread basis, or protected against corruption by semaphores
	(or critical code sections). This ensures that one 32-bit application does not
	destroy the data required by another 32-bit application by calling the same APIs
	at the same time. 32-bit Windows and its APIs allow this because they are
	reentrant (that is, code can be shared by several programs at the same time).
	
	Windows 95 further protects 32-bit applications against unintentional data loss
	by running each program in its own address space. This means the data for one
	application is not accessible to another application. The disadvantage of this
	protection is that applications cannot share data amongst themselves as freely
	as if they were running in the same address space and had full access to each
	other's code and data.
	
	16-Bit Applications
	-------------------
	
	Under Windows 3.x and Windows for Workgroups 3.x, 16-bit applications multitask
	cooperatively by frequently yielding control of the CPU to other programs. This
	kind of cooperative multitasking means that an application has control of the
	CPU until it relinquishes it. Corruption of data structures is prevented by the
	cooperative task switching.
	
	Under Windows 3.x, Windows for Workgroups 3.x, and Windows 95, all 16-bit
	applications run in the same address space. By running in the same address
	space, applications can share resources among themselves, and are,
	unfortunately, at a greater risk of overwriting data from another application.
	
	Some 16-bit applications depend on the features offered by cooperative
	multitasking. These applications may make the following assumptions:
	
	- Control of the CPU, display, and other resources is not relinquished until
	  the application itself yields control.
	
	- Resources such as pens and brushes can be created by one application and
	  passed on to another.
	
	- Sharing data between applications can be done by writing to the data area of
	  another application.
	
	Because of this dependency on cooperation to switch between applications, if a
	16-bit application stops responding (hangs) before it has yielded to another
	application, it may cause Windows to hang as well. The Application Local Reboot
	feature introduced in Windows 3.1 helps alleviate this problem by closing the
	unresponsive application and allowing Windows and the other running programs to
	continue. It is important to note that the Local Reboot feature does not always
	work; its success depends on the severity of the problem that caused the
	particular application to hang.
	
	NOTE: The Local Reboot feature allows you to use CTRL+ALT+DEL to close an
	application that has stopped responding.
	
	Windows 95 balances the requirements for backward compatibility, running on a
	4-megabyte (MB) computer, and providing preemptive multitasking by retaining
	much of its 16-bit code base for previous functionality and by adding new
	functionality to the 32-bit code.
	
	This means that some 32-bit calls are mapped to 16-bit code and vice versa. When
	a 32-bit application calls 16-bit code, there is a possibility that a poorly
	designed 16-bit program may cause a 32-bit application to hang.
	
	This problem can occur if both of the following conditions are present:
	
	- A 16-bit application hangs before yielding control.
	
	- A 32-bit application calls an API that is redirected to 16-bit code.
	
	To work around this problem, use the Local Reboot feature to close the 16- bit
	application that has stopped responding. Improvements have been made to the
	Local Reboot feature in Windows 95 to make 16-bit applications more robust.
	
	Additional query words: faq freeze frozen hang hung lock locked
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
