---
layout: page
title: "Q124729: How to Program DMA Transfers in the Protected Mode Windows Env"
permalink: /kb/124/Q124729/
---

## Q124729: How to Program DMA Transfers in the Protected Mode Windows Env

{% raw %}

	Article: Q124729
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The process for performing DMA transfers in the protected mode Windows
	environment should be similiar to the process for performing DMA transfers in
	the real mode MS-DOS environment. In both environments, you must initialize the
	DMA controller with the starting base address, page address, transfer count, and
	mode. In both environments, you would usually install a hardware interrupt
	handler to handle terminal count interrupts when a DMA transfer is complete.
	
	MORE INFORMATION
	================
	
	The main difference, relevant to DMA transfers, between the real mode MS-DOS
	environment and the protected mode Windows environment is that with the use of
	80386 virtual memory features, a linear address may be mapped to an arbitrary
	physical address. In addition, a contiguous linear address region that spans
	page boundaries may be mapped to physical pages that are not physically
	contiguous. Because the DMA controller bypasses the 80386 page tables and works
	directly with physical addresses, the DMA controller must be programmed with
	physical address and the DMA transfer buffer must be physically contiguous.
	
	In enhanced mode Windows, the Virtual DMA Device (VDMAD) attempts to hide the
	virtual memory issues from device drivers that are not fully aware of the
	virtual memory environment. The main purpose of VDMAD is to convert linear
	addresses virtually programmed into the DMA controller into physical addresses.
	This is necessary because Windows applications and DLLs that are not fully aware
	of the virtual memory environmentonly deal with linear addresses, but the DMA
	controller only deals with physical addresses.
	
	VDMAD virtualizes the DMA controller by trapping all port I/O access to the
	controller. Windows-based applications and DLLs do not have direct access to the
	DMA controller through port I/O. They only directly affect the VMDAD maintained
	virtual state of the DMA controller. The virtual state for each channel includes
	the mode, base address, and transfer count. When a DMA channel is virtually
	unmasked, VDMAD physically programs the DMA controller with appropriate values
	based on the channels virtual state.
	
	If the DMA region specified by the virtual base address and transfer count maps
	to physical memory that is physically contiguous and does not cross a 64K
	boundary on byte channels or a 128K boundary on word channels, the VDMAD will
	physically program the DMA controller with the physical base.
	
	If the DMA buffer is not physically contiguous, or crosses a 64K or 128K
	boundary, VDMAD double buffers the DMA tranfer using a physically contiguous DMA
	buffer that it allocated during its initialization. The default size of this
	buffer is 16K. It can be increased by using SYSTEM.INI [386Enh] DMABUFFERSIZE=.
	If the DMA buffer is not physically contiguous and it is larger than the size of
	the VDMAD buffer, VDMAD will terminate the VM (Virtual Machine) and display this
	message:
	
	  The DMA buffer is too small. Set DMABUFFERSIZE=xxx in SYSTEM.INI in the
	  [386Enh] section and restart your computer.
	
	The Windows 3.1 version of VDMAD does support AutoInit DMA transfers. The major
	restriction VDMAD places on AutoInit DMA transfers is that the DMA buffer must
	be physically contiguous. Unless a DMA buffer is allocated by a VxD, a
	Windows-based application or DLL should not attempt AutoInit transfers using a
	buffer larger than 4Kb. If you need a DMA buffer larger than 4K that is
	guaranteed to be physically contiguous, you can use _PageAllocate during the
	initialization of a VxD.
	
	GlobalDosAlloc() does not guarantee anything about the physical memory properties
	of the memory it allocates. In particular, the memory may not be physically
	contiguous, and it may be physically located above one megabyte. However, it
	does guarantee that the linear address of memory is below one megabyte. What
	this means in relation to not needing to use VDS is that the linear address can
	be programmed into a virtual 24-bit DMA controller, and then VDMAD can
	transparently take care of converting the linear address to a physical address.
	
	Memory returned by GlobalDosAlloc() is already fixed and page locked so neither
	GlobalFix() nor GlobalPageLock() are necessary.
	
	In enhanced mode Windows, GlobalAlloc() can allocate memory with a linear address
	above 16 megabytes. In particular, the address should be above two gigabytes if
	it is not below one megabyte. A linear address above 16 megabytes cannot be
	programmed into a virtual 24-bit DMA controller. You can use the VDS function
	Lock DMA Region to convert the linear address to a physical address. Then use
	the VDS function Disable Address Translation to disable the normal
	linear->physical address translation. Then program the DMA controller with
	the physical address of the buffer instead of the linear address.
	
	The VDS function Lock DMA Region will page lock a linear address region, but it
	has no knowledge of Kernel's global heap. If the memory moves in Kernel's global
	heap, the linear address of the memory will change and it will no longer map to
	the same physical pages. A DMA buffer allocated using GlobalAlloc() should be
	allocated with the flags GMEM_FIXED by a DLL, or if allocated by an application
	GlobalFix() or GlobalPageLock() should be used to keep the memory from moving in
	the linear address space.
	
	In summary, if AutoInit transfers are not used, a DMA buffer can be allocated
	using GlobalDosAlloc(), in which case the use of VDS should not be necessary, or
	a DMA buffer can be allocated using GlobalAlloc() (GMEM_FIXED in a DLL, or also
	use GlobalPageLock() in an application), in which case the use of VDS is
	necessary. If AutoInit transfers are used, and the buffer size must be larger
	than 4K, then the DMA buffer must be allocated using _PageAllocate in the
	initialization of a VxD, and VDS must be used to disable address translation.
	
	Additional query words: 3.10 3.11 VDMAD VDS
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK310
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
