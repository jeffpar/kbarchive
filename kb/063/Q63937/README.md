---
layout: page
title: "Q63937: VDS.exe Demonstrates DMA in Windows 3.0"
permalink: kb/063/Q63937/
---

## Q63937: VDS.exe Demonstrates DMA in Windows 3.0

	Article: Q63937
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbDDK kbOSWin300
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VDS.exe is a sample that contains the Virtual DMA Specification supported by
	Windows enhanced mode and standard mode. DMA requires special handling in the
	different modes of Windows version 3.0. This article focuses on the
	virtualization of the DMA ports that is done by the enhanced-mode Windows.
	
	In real mode, DMA can be programmed and performed as usual, as in a normal DOS
	application.
	
	This article addresses the following topics:
	
	1. DMA in enhanced mode (including bus master DMA, the Virtual DMA Specification
	  [VDS], and the DMABUFFERSIZE SYSTEM.INI switch)
	
	2. DMA in standard mode
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Vds.exe
	  (http://download.microsoft.com/download/winddk/sample3/3.0/W31/EN-US/Vds.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	VDS.exe contains the following files:
	
	  Filename       Description
	  --------       -----------
	  DMA_API.DOC    Virtual DMA Specification in Microsoft Word format
	  WINDOC.STY     Style sheet used by DMA_API.doc
	  DMA_API.TXT    The same specification in text format
	
	These services are necessary for applications that program DMA in Windows 3.0
	enhanced mode.
	
	DMA in Enhanced Mode
	--------------------
	
	In enhanced mode, standard (on AT-type machines) DMA channels are virtualized.
	The Virtual DMA Device (VDMAD) translates (or maps) the linear address to the
	physical address. As long as an application program can obtain a linear address
	that is less than 24 bits, it can program the standard DMA channels using the
	linear address as a physical address. For example, programs (such as
	MS-DOS-based applications) running in Virtual 86 mode can program the standard
	DMA channels as they can in real mode. The linear address in the Virtual 86 mode
	is calculated as (segment<<4)+offset. When this address is used on the
	standard DMA channels, it is translated (mapped) by the Virtual DMA Device. In
	other words, the translation is done transparently through I/O virtualization.
	
	However, there are two situations when an application cannot rely on VDMAD to do
	the translation:
	
	1. A program running in protected mode, such as a Windows program, cannot
	  usually obtain linear addresses that are less than 24 bits.
	
	2. When dealing with a Bus Master DMA controller, because its I/O ports are not
	  standard, there is no virtualization of its ports. Even if the application
	  can obtain a linear address less than 24 bits, VDMAD cannot perform
	  translation on ports that it doesn't know about.
	
	In these cases, the application must use the Virtual DMA Specification (VDS)
	services. VDS services are provided by enhanced-mode Windows as an API through
	INT 4Bh. VDS provides services to lock a linear DMA region and return a physical
	address for the region. The application can specify whether an automatic remap
	should or should not be attempted when necessary. The returned physical address
	can then be used to program the DMA channels. VDS also provides a service to
	Scatter/Gather lock a linear region. This service is typically used on DMA
	devices that can perform Scatter/Gather.
	
	To use VDS lock region services, an application needs to know either the virtual
	address selector(segment):offset or the linear address. The linear address in
	protected mode can be obtained using GetSelectorBase() (see below for more
	information). Please be advised that due to a problem in Windows 3.0, it is
	sometimes necessary to perform GlobalPageLock() on the DMA regions before using
	the VDS locking services. [See the Windows SDK reference for GlobalPageLock().]
	
	Note that a program should disable the DMA translation using the VDS
	enable/disable translation service before it uses the physical address to
	program the standard DMA channels. It should enable the translation after the
	DMA channel is programmed.
	
	The following is information about the DMABUFFERSIZE switch in SYSTEM.INI. In
	enhanced-mode Windows, when an application relies on VDMAD to do the
	translation, VDMAD may use a buffer it has allocated during initialization time
	to remap the DMA region. This buffer has a default size of 16K. The size may be
	changed to a larger one by setting the switch DMABUFFERSIZE in SYSTEM.INI to a
	value greater than 16. If a DMA region that requires remapping has a size
	greater than that of the allocated remapping buffer, Windows will crash and ask
	the user to set the DMABUFFERSIZE switch to a greater value. It is the
	application's responsibility to inform the user about this and have the user
	modify the SYSTEM.INI switch beforehand.
	
	DMA in Standard Mode
	--------------------
	
	VDS services are also provided in Windows standard mode. Windows-based
	applications can utilize the same services to do DMA in standard mode as in
	enhanced mode. MS-DOS-based applications running under standard-mode Windows may
	not have access to VDS services. Because MS-DOS-based applications are running
	in real mode, they should do the DMA programming as they would in the MS-DOS
	environment.
	
	It is also possible for applications running in standard mode Windows to perform
	DMA without using VDS. This is because in standard mode, the linear address is
	the same as the physical address, the memory is contiguous, and memory
	addressing is limited to 24 bits (the 16 MB address space limit of the 80286
	processor). Also, there is no virtualization on the DMA I/O ports, or other I/O
	ports in standard mode. The Windows-based application should obtain the linear
	address of the DMA region and program the DMA directly.
	
	To obtain the linear address, the application should call GetSelectorBase() to
	obtain the base address first. GetSelectorBase() is documented in the Windows
	SDK reference.
	
	     DWORD dwBase ;
	     WORD wSelector ;
	     DWORD dwPhyAddr ;
	
	     wSelector = (WORD)(lpBuffer >> 16) ; // selector of the
	     buffer address.
	
	     dwBase = GetSelectorBase (wSelector) ;
	     dwPhyAddr = dwBase + (0x0000FFFF & lpBuffer) ; // base +
	     offset
	
	Note that although dwPhyAddr is a 32-bit variable, only the lower 24 bits will be
	nonzero. The 80286 can only address up to 24 bits of address space. The DMA
	controller can usually take 24 bits. If it can only take up to 20 bits,
	GlobalDOSAlloc() should be used to allocate the memory. GlobalDOSAlloc()
	allocates memory within the first 1 MB range. Please see the SDK reference for
	information on GlobalDOSAlloc().
	
	Memory allocated in standard mode is physically contiguous. However, it is the
	application program's responsibility to make sure the memory block does not
	overlap a segment boundary. Most DMA controllers wrap around when they reach a
	segment boundary. The application program should break the DMA transfer into two
	smaller transfers in this case: the first transfer ends at the segment boundary
	and the second one begins at the segment boundary.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbDDK kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300
	Version           : :3.0
	Issue type        : kbinfo
	
	=============================================================================
	
