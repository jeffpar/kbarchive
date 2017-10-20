---
layout: page
title: "Q93469: Complete Text PW0519: Virtual DMA Services (VDS)"
permalink: /kb/093/Q93469/
---

## Q93469: Complete Text PW0519: Virtual DMA Services (VDS)

{% raw %}

	Article: Q93469
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	======================================================================
	 Microsoft(R) Product Support Services Application Note (Text File)
	                 PW0519: Virtual DMA Services (VDS)
	======================================================================
	
	                                               Revision Date: 9/92
	                                                     No Disk Included
	
	The following information applies to Microsoft Windows(TM) Software
	Development Kit versions 3.0 and 3.1.
	
	--------------------------------------------------------------------
	| INFORMATION PROVIDED IN THIS DOCUMENT AND ANY SOFTWARE THAT MAY    |
	| ACCOMPANY THIS DOCUMENT (collectively referred to as an            |
	| Application Note) IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY      |
	| KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO    |
	| THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A     |
	| PARTICULAR PURPOSE. The user assumes the entire risk as to the     |
	| accuracy and the use of this Application Note. This Application    |
	| Note may be copied and distributed subject to the following        |
	| conditions: 1) All text must be copied without modification and    |
	| all pages must be included; 2) If software is included, all files  |
	| on the disk(s) must be copied without modification [the MS-DOS(R)  |
	| utility DISKCOPY is appropriate for this purpose]; 3) All          |
	| components of this Application Note must be distributed together;  |
	| and 4) This Application Note may not be distributed for profit.    |
	|                                                                    |
	| Copyright 1990-1992 Microsoft Corporation. All Rights Reserved.    |
	| Microsoft and MS-DOS are registered trademarks and Windows         |
	| is a trademark of Microsoft Corporation.                           |
	| IBM and AT are registered trademarks and XT is a trademark of      |
	| International Business Machines Corporation.                       |
	--------------------------------------------------------------------
	
	                            INTRODUCTION
	                            ============
	
	An MS-DOS device driver that performs direct memory access (DMA) programs a
	hardware controller with the address of a buffer region. The DMA controller
	places the following restrictions on an acceptable DMA buffer region:
	
	  -  The DMA buffer region must be in contiguous physical memory.
	
	  -  On IBM(R) PC/XT(TM)-compatible machines, the DMA buffer region
	     must be in the first 1 megabyte (MB) of memory.
	
	  -  On IBM PC/XTs, IBM PC/AT(R)s, and compatibles, the DMA buffer
	     region must not cross a 64-kilobyte (K) or 128K alignment
	     boundary.
	
	However, software running in a protected mode environment, whether running
	in virtual 8086 mode under Windows or in protected mode under an MS-DOS
	extender, usually cannot determine the physical address of the appropriate
	DMA buffer region. To compensate for this limitation, the Virtual DMA
	Services (VDS) enable a device driver or application program to obtain the
	information required to program a DMA transfer using either the on-board
	DMA controller or a bus master DMA controller.
	
	The VDS are provided through Interrupt 4Bh. The VDS provider software sets
	a bit in the BIOS data area to indicate the availability of the VDS. Before
	using the VDS, an application or driver must load the byte at address
	0040:007Bh. If bit 5 of this byte is set, VDS provider software is present,
	and the VDS can be used. If bit 5 is clear, the VDS are not available.
	
	 NOTE: If bit 5 of the byte at 0040:007Bh is clear, the processor is
	 probably running in real mode, where all memory is mapped with its
	 physical address equal to its linear address, and the application or
	 driver can directly program the DMA device without modification.
	 However, the processor may actually be running in virtual 8086 mode
	 under protected mode software that does not support the VDS. Under
	 these circumstances, there is no way to determine if the physical
	 and linear address are the same.
	
	An implementation of the VDS on a 386 or faster processor must do one of
	the following:
	
	  -  Automatically remap pages to force regions of memory to be
	     physically contiguous
	  -  Support a DMA buffer of at least 16K, if paging is enabled by
	     the system software
	
	On a 386 processor, neither of these characteristics is required.
	
	With the exception of the AX register and Carry flag, all registers and
	flags are preserved across VDS calls unless otherwise specified. If the
	Carry flag is set upon return from a VDS call, the AL register contains an
	error code. Otherwise, the contents of the AX register are undefined upon
	return.
	
	                NOTES FOR WRITING DMA DEVICE DRIVERS
	                ====================================
	
	Applications and device drivers that use the VDS must verify that bit 5 of
	the byte at 0040:007Bh is set before programming DMA. The VDS provider
	software may initialize or terminate DMA services at any time. For example,
	when an application first uses simulated expanded memory, a limulator
	places the processor into virtual 8086 mode and enables the VDS. (A
	limulator is an application that emulates expanded memory using the
	Lotus/Intel/Microsoft [LIM] Expanded Memory Specification [EMS].) When all
	memory provided by the limulator is freed, the limulator typically returns
	the processor to real mode and terminates the VDS.
	
	Note also that the type of DMA support provided may change dynamically. For
	example, the user may run one protected mode environment, close it, and
	then run a second protected mode environment. In this example, the VDS are
	provided by two separate implementations.
	
	Device drivers can provide various levels of support for DMA. The options
	are listed below and are ordered from most desirable to least desirable:
	
	  -  Scatter/gather operations are supported by the hardware DMA
	     adapter.
	  -  The VDS provider software parcels the DMA requests, eliminating
	     the need for a buffer.
	  -  The VDS provider software parcels the DMA requests into 16K or
	     smaller pieces, using the default buffer.
	  -  The user is required to override the default buffer size.
	
	For all practical purposes, the final option listed above is unacceptable.
	At the very least, the VDS provider software should parcel DMA transfers
	into pieces no larger than 16K. For example, the VDS provider software
	could break transfers to a hard disk at a track boundary. For most hard
	disks, one track fits into a 16K buffer.
	
	However, for devices that are less sensitive to timing than a hard drive,
	the VDS provider software can parcel each DMA transfer into larger pieces.
	Ideally, all DMA hardware adapters would include support for scatter/gather
	operations.
	
	In some situations, a device driver has a real physical address to specify
	in a DMA transfer. This address may be for a block of memory allocated from
	extended memory or through Interrupt 15h before the VDS was enabled, for
	memory on an adapter card, and so forth. In these situations, the
	application must not call the Lock DMA Buffer Region service because the
	VDS functions interpret region addresses as linear addresses. If the
	standard DMA controller performs the transfer, the application must still
	call the Disable DMA Translation and Enable DMA Translation services.
	
	By convention, the buffer identifier 0 in a DMA descriptor data structure
	(DDS) indicates that no buffer has been allocated. The device driver can
	check this field to determine if a buffer was allocated.
	
	                 NOTES FOR IMPLEMENTING DMA SERVICES
	                 ===================================
	
	On a machine with an 80386 processor, the recommended method of supporting
	the VDS is to use a DMA buffer. A buffer has been found to be faster than
	remapping memory on these machines. On a machine equipped with an 80286
	processor, the VDS can be implemented without implementing a buffer. On
	these machines, the software calling the services must parcel out transfers
	to avoid crossing alignment boundaries. Implementations that do not include
	any buffers must return the "No buffer available" error (code 04h) in
	response to the Request DMA Buffer service (service 07h).
	
	Each implementation of the VDS should provide a mechanism for overriding
	the size of the DMA buffer or remap region. Each implementation should also
	provide a mechanism for forcing the buffer or remap region to reside in the
	first megabyte of physical memory. These mechanisms are implementation
	dependent. For example, one VDS implementation may use a configuration file
	while another may use a set of command-line switches.
	
	Lock DMA Buffer Region calls for the following types of memory must not
	fail:
	
	  -  Memory that is not "owned" by the VDS provider software
	  -  Memory allocated before the VDS provider software started
	     running (including low memory)
	  -  The EBIOS data area
	  -  Extended memory allocated through Interrupt 15h or the Extended
	     Memory Specification (XMS)
	
	If a VDS implementation supports auto-remapping, pages must be remapped to
	create contiguous regions. If auto-remapping is not supported, the VDS
	provider software must keep these memory areas contiguous. Also, some
	environments include device drivers that attempt long-term DMA transfers.
	In these environments, the user must be able to configure the software to
	enable DMA transfers to take place. One solution is to install long-term
	DMA device drivers only after the VDS provider software. The other solution
	is to keep all "unowned" memory mapped to its original location to keep its
	linear memory address equal to its physical memory address. Mapping memory
	in this way allows DMA transfers started prior to the VDS to continue as
	normal.
	
	Because other hardware and software services can be provided on the
	Interrupt 4Bh chain, the VDS provider software must determine if it should
	chain interrupts when AH is not 81h. On Micro Channel Architecture (MCA)
	machines, this information is available in bit 3 of the byte at 0040:007Bh.
	The following table provides the interpretation for the contents of this
	bit:
	
	  Interrupt 4Bh Intercepted Indicator (MCA Only)
	  ----------------------------------------------
	
	  Bit 3 Set    Interrupt vector intercepted. Chaining is required.
	  Bit 3 Clear  Interrupt vector not intercepted. Action depends on
	               the contents of the interrupt vector. If the vector
	               contains 0:0, or if the vector's segment value is
	               E000h or F000h, chaining is not permitted.
	
	On other architectures, examining the value of the interrupt vector may be
	the only method of determining if interrupts should be chained.
	
	If the VDS provider software does not chain interrupts, it should execute
	an IRET instruction to ignore the interrupt without modifying any registers
	or flags.
	
	DETERMINING WHICH ERROR CODES TO RETURN
	=======================================
	
	An application should implement the following pseudocode to access the Lock
	DMA Buffer Region service (service 8103h):
	
	  IF region contiguous THEN
	     IF region does not cross alignment boundary THEN
	        BEGIN
	        Lock region
	        Set Buffer_ID field to 0
	        Return with Carry flag clear
	        END
	     ELSE
	        PERFORM Buffer/Remap
	     ENDIF
	  ELSE
	     PERFORM Buffer/Remap
	  ENDIF
	
	BUFFER/REMAP Function
	---------------------
	
	  IF buffer supported THEN
	     IF Buffer Disable flag clear THEN
	        PERFORM Buffer
	     ELSE
	        Return with Carry flag set and AL=1, 2, or 3
	     ENDIF
	  ELSE
	     IF remap supported THEN
	        IF Remap Disable flag clear THEN
	           PERFORM Remap
	        ELSE
	           Return with Carry flag set and AL=1, 2, or 3
	        ENDIF
	     ELSE
	        Return with Carry flag set and AL=1, 2, or 3
	     ENDIF
	  ENDIF
	
	BUFFER Function
	---------------
	
	  IF buffer available THEN
	     IF region size <= buffer size THEN
	        BEGIN
	        Allocate buffer
	        IF Copy flag set THEN
	           Copy data from linear region to buffer
	        ENDIF
	        Set Buffer_ID field (nonzero)
	        Set Physical_Address field to buffer physical address
	        Return with Carry flag clear
	       END
	     ELSE
	        Return with Carry flag set and AL=05h
	     ENDIF
	  ELSE
	     Return with Carry flag set and AL=06h
	  ENDIF
	
	REMAP Function
	--------------
	
	  IF region can be forced contiguous THEN
	     IF region will not cross specified boundary THEN
	        BEGIN
	        Force region contiguous
	        Set Physical_Address field
	        Set Buffer_ID field to 0
	        Return with Carry flag clear
	        END
	     ELSE
	        Return with Carry flag set and AL=02h
	     ENDIF
	  ELSE
	     Return with Carry flag set and AL=01h
	  ENDIF
	
	                              SERVICES
	                              ========
	
	Most services require a pointer to a DMA DDS as one parameter. The DDS is
	defined as follows:
	
	  DDS                   STRUCT
	    Region_Size         DWORD     ?    ; offset 0
	    Offset              DWORD     ?    ; offset 4
	    Seg_or_Select       WORD      ?    ; offset 8
	    Buffer_ID           WORD      ?    ; offset A
	    Physical_Address    DWORD     ?    ; offset C
	  DDS                   ENDS
	
	Region_Size is a double word (DWORD, or 32-bit quantity) at offset 0. It
	specifies the size of the DMA buffer region in bytes.
	
	Offset and Seg_or_Select (segment/selector) are a far word (FWORD, or 48-
	bit quantity) pair at offset 04h. They specify a segment:offset pointer in
	virtual 8086 mode, or a selector:offset pointer in protected mode.
	
	 NOTE: If the linear address has been determined, the application can
	 set the Seg_or_Select field to 0 and place the linear address in the
	 Offset field. An application can specify a 32-bit value in the
	 Offset field even with a real mode segment value. This eases the
	 process of parceling a DMA transfer in a device driver; the driver
	 can modify the Offset value without changing the Seg_or_Select
	 value.
	
	Buffer_ID is a word (16-bit quantity) at offset 0Ah. This field is set by
	the Request DMA Buffer service. (It might also be set by the Lock DMA
	Buffer Region service.)
	
	Physical_Address is a double word at offset 0Ch. This field is set by the
	Lock DMA Buffer Region and Request DMA Buffer services.
	
	RESERVED SUBFUNCTIONS
	=====================
	
	Functions 00h, 01h, and 0Dh through 0FFh are reserved. Any of these
	functions returns with the Carry flag set and the AL register set to 0Fh
	("Function not supported").
	
	Notes
	
	None.
	
	GET VERSION
	-----------
	
	This service returns the VDS version number, information about the hardware
	and buffer size, and whether automatic memory remapping is supported.
	
	To Call
	
	  AH = 81h
	  AL = 02h
	  DX = Flags
	  All bits are reserved and must be 0.
	
	Returns
	
	  If function was successful:
	
	     Carry flag is clear.
	     AH = Major specification version number (binary, currently 1)
	     AL = Minor specification version number (binary, currently 0)
	     BX = Product number
	     CX = Product revision number
	     SI:DI = Maximum DMA buffer size supported (size in bytes)
	     DX = Flags
	         Bit 0 = 1 If PC/XT bus architecture (DMA in first megabyte
	                   only)
	         Bit 1 = 1 If physical buffer/remap region is in first
	                   megabyte
	         Bit 2 = 1 If automatic remap supported
	         Bit 3 = 1 If all memory physically contiguous
	         Other flags are reserved and must be 0.
	
	  If function was not successful:
	
	     Carry flag is set.
	     AL = Error code
	         10h = Reserved flag bits set in DX
	
	Notes
	
	  -  The version numbers returned in the AH and AL registers
	     determine the functionality supported by a VDS implementation.
	     Drivers that support the functionality described in this
	     document return AX=0100h.
	
	  -  Bit 3 of the flag word is set only in an environment that runs
	     in protected mode but does not perform paging. One example of
	     such an environment is an 80286 MS-DOS extender. When bit 3 is
	     set, the VDS services only convert selector:offset linear
	     address pairs into physical addresses.
	
	LOCK DMA BUFFER REGION
	----------------------
	
	An application calls this service to determine if a target DMA buffer
	region is in contiguous physical memory. If so, this service returns the
	physical address of the region that the VDS provider software can use to
	program the DMA channel. A locked DMA buffer region must be unlocked once
	DMA is complete.
	
	If the DMA controller has memory-placement restrictions (for example, if
	the memory must be addressed in the first megabyte), the device driver can
	examine the returned physical address. If the address is unsuitable, the
	driver must unlock the region and request a DMA buffer.
	
	Some implementations of the VDS attempt to remap memory pages to force the
	region to be contiguous physical memory. The calling application can
	disable this behavior by setting bit 3 in the DX register. Under most
	circumstances, a device can parcel transfers or use a DMA buffer more
	quickly than the VDS can remap pages.
	
	This service has an automatic buffer-allocation option that is often very
	convenient to use. When an application specifies this option, if the DMA
	buffer region cannot be locked for any reason, the VDS will attempt to
	allocate a DMA buffer. The VDS can automatically copy the data in the DMA
	buffer region into the allocated buffer.
	
	To Call
	
	  AH = 81h
	  AL = 03h
	  DX = Flags
	     Bit 1 = 1  If data should be copied into buffer (ignored if
	                bit 2 = 1)
	     Bit 2 = 1  Disable buffer allocation if DMA buffer region not
	                contiguous or crosses a physical alignment boundary
	                specified by bits 4 and 5
	     Bit 3 = 1  Disable automatic remap attempt
	     Bit 4 = 1  If region must not cross a 64K physical alignment
	                boundary
	     Bit 5 = 1  If region must not cross a 128K physical alignment
	                boundary
	     All other bits are reserved and must be 0.
	
	  ES:DI = Pointer to DDS
	     The caller must complete the Region_Size, Offset, and
	     Seg_or_Select fields in the data structure before calling this
	     service.
	
	Returns
	
	  If function was successful:
	
	     Carry flag is clear.
	     Memory is locked.
	     The Physical_Address field of DDS contains the starting physical
	     address of the region.
	     The Buffer_ID field will contain the ID of the allocated buffer
	     or 0 if no buffer was allocated.
	
	  If function was not successful:
	
	     Carry flag is set.
	     Memory is NOT locked.
	     Region_Size field of DDS contains the maximum contiguous length
	     in bytes.
	     AL = Error code
	        01h = Region not in contiguous memory
	        02h = Region crossed a physical alignment boundary
	        03h = Unable to lock pages (virtual memory systems only)
	        05h = Region too large for buffer
	        06h = Buffer currently in use
	        07h = Invalid memory region
	        10h = Reserved flag bits set in DX
	
	Notes
	
	  -  The VDS locks memory on a page-by-page basis. A page can be
	     locked more than once, which allows two DMA buffer regions to
	     overlap on a page. The VDS maintains page locking as a count.
	     Some systems need not maintain a count because memory is never
	     discarded or moved. In these systems, the Unlock DMA Buffer
	     Region service will never fail.
	
	  -  If an application selects the automatic buffer-allocation option
	     by clearing bit 2 of the flags in the DX register, the VDS will
	     automatically allocate a DMA buffer if the region cannot be
	     locked. An application sets bit 1 to indicate that the data
	     should be copied into the buffer for a memory-read operation.
	     When the Lock DMA Buffer Region Service fails and bit 2 is clear
	     but no buffer is supported, VDS reports the actual cause of the
	     error, rather than returning a "No buffer error available" error
	     (error code 04h).
	
	  -  If an application receives a "Buffer currently in use" error
	     (error code 06h), it can wait in a loop to allow another device
	     time to release the buffer. For more details, refer to the
	     documentation for the Request DMA Buffer service below in this
	     document.
	
	  -  An application should use the buffer-alignment mask with devices
	     that have physical memory boundary constraints. For example,
	     with the PC/AT architecture, the standard DMA controllers "wrap"
	     memory address calculations at 64K or 128K physical boundaries.
	     If the programmed DMA controller has an alignment constraint,
	     set the applicable bit in the DX register.
	
	UNLOCK DMA BUFFER REGION
	------------------------
	
	This service unlocks a previously locked DMA buffer region.
	
	To Call
	
	  AH = 81h
	  AL = 04h
	  DX = Flags
	     Bit 1 = 1  If data should be copied out of buffer
	     All other bits are reserved and must be 0.
	
	  ES:DI = Pointer to DDS
	     The caller must complete the Region_Size, Physical_Address, and
	     Buffer_ID fields before calling this service. (Usually the
	     caller specifies the data structure completed by a call to the
	     Lock DMA Buffer Region service.)
	
	Returns
	
	  If function was successful:
	
	     Carry flag is clear.
	     Memory is unlocked or no count is maintained.
	
	  If function was not successful:
	
	     Carry flag is set.
	     All memory remains locked.
	     AL = Error code
	        08h = Region was not locked
	        0Ah = Invalid Buffer_ID
	        10h = Reserved flag bits set in DX
	
	Notes
	
	If the Buffer_ID field of the DDS data structure is nonzero, this service
	releases the DMA buffer allocated by the Lock DMA Buffer Region service.
	Any data in the buffer is lost. If the DMA transfer was a memory-write
	operation and bit 1 in the DX register is set, this service will copy the
	data from the DMA buffer before the buffer is released.
	
	SCATTER/GATHER LOCK REGION
	--------------------------
	
	This service allows a hardware device that supports automatic
	scatter/gather operations to determine the physical regions of a linear
	address range and to lock the linear address range in one service. A device
	driver that parcels DMA requests can use this service instead of repeatedly
	calling Lock DMA Buffer Region.
	
	To Call
	
	  AH = 81h
	  AL = 05h
	  DX = Flags
	     Bit 6 = 1 If an extended data descriptor structure (EDDS) should
	               be returned with page-table entries.
	     Bit 7 = 1 If only present pages should be locked. Not-present
	               pages are identified with a page-table entry of 0 (if
	               bit 6 = 0, bit 7 is ignored).
	     All other bits are reserved and must be 0.
	
	  ES:DI = Pointer to one of the following extended EDDS's:
	
	     If bit 6 of the DX register is 0, this service returns an EDDS
	     with a table of physical regions (address and size pairs), as
	     follows:
	
	        EDDS                 STRUCT
	          Region_Size        DWORD     ?    ; offset  0h
	          Offset             DWORD     ?    ; offset  4h
	          Seg_or_Select      WORD      ?    ; offset  8h
	          Reserved           WORD      0    ; offset  Ah
	          Number_Avail       WORD      ?    ; offset  Ch
	          Number_Used        WORD      ?    ; offset  Eh
	          R0_Physical_Addr   DWORD     ?    ; offset 10h
	          R0_Size            DWORD     ?    ; offset 14h
	          R1_Physical_Addr   DWORD     ?    ; offset 18h
	          R1_Size            DWORD     ?    ; offset 1Ch
	          ...
	          Rn_Physical_Addr   DWORD     ?    ; offset 10h + n*8
	          Rn_Size            DWORD     ?    ; offset 14h + n*8
	        EDDS                 ENDS
	
	     If bit 6 of the DX register is 1, this service returns an EDDS
	     with a table of page-table entries (one entry per 4K page, the
	     same format as 80386 page-table entries), as follows:
	
	        EDDS                 STRUCT
	          Region_Size        DWORD     ?    ; offset  0h
	          Linear_Offset      DWORD     ?    ; offset  4h
	          Seg_or_Select      WORD      ?    ; offset  8h
	          Reserved           WORD      0    ; offset  Ah
	          Number_Avail       WORD      ?    ; offset  Ch
	          Number_Used        WORD      ?    ; offset  Eh
	          Page_Table_Ent0    DWORD     ?    ; offset 10h
	          Page_Table_Ent1    DWORD     ?    ; offset 14h
	          ...
	          Page_Table_Entn    DWORD     ?    ; offset 10h + n*4
	        EDDS                 ENDS
	
	          Each page-table entry contains the physical page number in
	          the upper 20 bits; the lower 12 bits are flag bits, as
	          follows:
	
	              Bit 0 = 1 If the page is present and locked
	              Bits 1 through 11 are reserved and set to 0
	
	          If option bit 7 is 1, then pages in the region that do not
	          have a physical page assigned will have a page-table entry
	          of 0 and are not locked by this service.
	
	     The caller must complete the Region_Size, Offset (or
	     Linear_Offset), Seg_or_Select, and Number_Avail fields. The
	     Number_Avail field specifies the number of physical regions
	     (page-table entries) in the EDDS.
	
	Returns
	
	  If function was successful:
	
	     Carry flag is clear.
	     The Number_Used field contains the number of table entries
	     filled in with information about physical regions.
	     If bit 6 of the DX register was set (page-table copy), bits 0
	     through 11 of the BX register are set to the offset in the first
	     page to the start of the DMA buffer region. Bits 12 through 15
	     are 0.
	
	  If function was not successful:
	
	     Carry flag is set.
	     Memory is NOT locked.
	     The Region_Size field contains the maximum number of bytes that
	     can be locked and described in the DDS table.
	     The physical regions (table entry) fields are undefined.
	     AL = Error code
	         03h = Unable to lock pages
	         07h = Invalid memory region
	         09h = Number of physical pages was greater than table
	               length. (The Number_Used field will contain the number
	               of table entries required to describe the DMA buffer
	               region.)
	         10h = Reserved flag bits set in DX
	
	Notes
	
	Given a linear address and the size of the DMA buffer region, the maximum
	number of physical regions required to describe a DMA buffer region is
	computed as follows:
	
	  (Linear Address AND 0FFFh) + Region Size + 0FFFh
	  ------------------------------------------------
	                         1000h
	
	SCATTER/GATHER UNLOCK REGION
	----------------------------
	
	This service unlocks a DMA buffer region locked by the Scatter/Gather
	Lock Region service.
	
	To Call
	
	  AH = 81h
	  AL = 06h
	  DX = Flags
	     Bit 6 = 1 If the EDDS contains page-table entries.
	     Bit 7 = 1 If the EDDS may contain not-present pages. Not-present
	               pages are identified with a page-table entry of 0 (if
	               bit 6 = 0, bit 7 is ignored).
	     All other bits are reserved and must be 0.
	
	  ES:DI = Pointer to the EDDS specified in a call to the
	  Scatter/Gather Lock Region service.
	
	Returns
	
	  If function was successful:
	
	     Carry flag is clear.
	     Memory is unlocked.
	
	  If function was not successful:
	
	     Carry flag is set.
	     AL = Error code
	        08h = Region was not locked
	        10h = Reserved flag bits set in DX
	
	Notes
	
	This service uses only the Region_Size, Offset (or Linear_Offset), and
	Seg_or_Select fields of the EDDS. Therefore, the application need not
	maintain the physical address (page-table) entries unless bits 6 and 7 in
	the DX register are set in the corresponding call to the Scatter/Gather
	Lock Region service. If an application uses this special form of region
	locking, the table is required to unlock the correct pages.
	
	REQUEST DMA BUFFER
	------------------
	
	To perform buffered DMA, a device driver must perform the following steps:
	
	  -  Request a DMA buffer
	  -  Copy data into the buffer (when a memory-read operation is
	     performed)
	  -  Program the DMA channel and initiate the transfer
	  -  Copy data from the buffer (when a memory-write operation is
	     performed)
	  -  Release the DMA buffer
	
	The driver must copy the data from the buffer before the buffer is
	released. The physical address of the buffer is not valid after the buffer
	is released.
	
	To Call
	
	  AH = 81h
	  AL = 07h
	  DX = Flags
	     Bit 1 = 1 If data should be copied into the buffer
	     All other bits are reserved and must be 0.
	  ES:DI = Pointer to DDS
	     The caller must complete the Region_Size field. If automatic
	     copy is selected (flag bit 1 is set), the caller must also
	     complete the Seg_or_Select and Offset fields.
	
	Returns
	
	  If function was successful:
	
	     Carry flag is clear.
	     The Physical_Address field of the DDS contains the starting
	     physical address of the buffer.
	     The Region_Size field specifies the size of the buffer.
	     The Buffer_ID field contains the identifier of the allocated
	     buffer.
	     If automatic copy was selected, then data was copied into the
	     buffer.
	
	  If function was not successful:
	
	     Carry flag is set.
	     AL = Error code
	        04h = No buffer available
	        05h = Region too large for buffer
	        06h = Buffer currently in use
	        07h = Invalid memory region
	        10h = Reserved flag bits set in DX
	
	Notes
	
	  -  Under the 386 enhanced mode of Windows, a device should enter a
	     Windows critical section to prevent another virtual machine from
	     running while a DMA buffer is in use.
	
	  -  If the buffer is currently in use (error code 06h), the
	     application can loop with interrupts enabled repeatedly,
	     attempting to allocate the buffer. Doing so gives another device
	     time to complete its DMA transfer.
	
	  -  A device driver must either poll for the DMA operation to
	     complete or receive a hardware interrupt. Once DMA is complete,
	     the driver releases ownership of the DMA buffer. If ownership is
	     released in response to a hardware interrupt, other devices can
	     wait for the buffer as described above.
	
	RELEASE DMA BUFFER
	------------------
	
	This service releases a DMA buffer that was previously requested. The
	buffer's physical address is invalidated by this service.
	
	To Call
	
	  AH = 81h
	  AL = 08h
	  DX = Flags
	     Bit 1 = 1 If data should be copied out of buffer
	     All other bits are reserved and must be 0.
	
	  ES:DI = Pointer to DDS
	     The caller must complete the Buffer_ID field of the DDS before
	     calling this service.
	
	Returns
	
	  If function was successful:
	
	     Carry flag is clear.
	
	  If function was not successful:
	
	     Carry flag is set.
	     AL = Error code
	        0Ah = Invalid Buffer_ID
	        10h = Reserved flag bits set in DX
	
	Notes
	
	None.
	
	COPY INTO DMA BUFFER
	--------------------
	
	Copy data from a user-specified buffer into the DMA buffer to prepare for a
	memory-read DMA transfer.
	
	To Call
	
	  AH = 81h
	  AL = 09h
	  DX = Flags
	     All bits are reserved and must be 0.
	
	  ES:DI = Pointer to DDS
	     The caller must complete the Buffer_ID, Offset, Seg_or_Select,
	     and Region_Size fields. The Offset and Seg_or_Select fields
	     specify the source address for the copy operation.
	
	  BX:CX = Starting offset in DMA buffer to copy
	     The Region_Size field of the DDS determines the number of bytes
	     to copy.
	
	Returns
	
	  If function was successful:
	
	     Carry flag is clear.
	
	  If function was not successful:
	
	     Carry flag is set.
	     AL = Error code
	        0Ah = Invalid Buffer_ID
	        0Bh = Buffer boundary violated
	        10h = Reserved flag bits set in DX
	
	Notes
	
	None.
	
	COPY OUT OF DMA BUFFER
	----------------------
	
	Copy data from a DMA buffer into a user-specified buffer after a memory-
	write DMA transfer.
	
	To Call
	
	  AH = 81h
	  AL = 0Ah
	  DX = Flags
	     All bits are reserved and must be 0.
	
	  ES:DI = Pointer to DDS
	     The caller must complete the Buffer_ID, Offset, Seg_or_Select,
	     and Region_Size fields. The Offset and Seg_or_Select fields
	     specify the destination address for the copy operation.
	
	  BX:CX = Starting offset in DMA buffer to copy
	     The Region_Size field of the DDS determines the number of bytes
	     to copy.
	
	Returns
	
	  If function was successful:
	
	     Carry flag is clear.
	
	  If function was not successful:
	
	     Carry flag is set.
	     AL = Error code
	        0Ah = Invalid Buffer_ID
	        0Bh = Buffer boundary violated
	        10h = Reserved flag bits set in DX
	
	Notes
	
	None.
	
	DISABLE DMA TRANSLATION
	-----------------------
	
	Environments that support the VDS trap the standard DMA I/O ports and
	attempt to remap the addresses provided by the client application (assumed
	to be linear addresses) into appropriate physical addresses. However, an
	application that uses the VDS to determine the physical address of its DMA
	buffer region must call this service to disable the remapping of standard
	DMA ports.
	
	This service maintains a disable count. Therefore, one call to Enable DMA
	Translation must be made for each call to the Disable DMA Translation
	service before automatic DMA translation is enabled.
	
	To Call
	
	  AH = 81h
	  AL = 0Bh
	  BX = DMA channel number
	  DX = Flags
	     All bits are reserved and must be 0.
	
	Returns
	
	  If function was successful:
	
	     Carry flag is clear.
	
	  If function was not successful:
	
	     Carry flag is set.
	     AL = Error code
	        0Ch = Invalid DMA channel number
	        0Dh = Disable count overflow
	        10h = Reserved flag bits set in DX
	
	Notes
	
	None.
	
	ENABLE DMA TRANSLATION
	----------------------
	
	An application calls this service to reenable automatic DMA buffer
	remapping that was disabled by the Disable DMA Translation service.
	
	This service maintains a disable count. Therefore, one call to Enable DMA
	Translation must be made for each call to the Disable DMA Translation
	service before automatic DMA translation is enabled.
	
	To Call
	
	  AH = 81h
	  AL = 0Ch
	  BX = DMA channel number
	  DX = Flags
	     All bits are reserved and must be 0.
	
	Returns
	
	  If function was successful:
	
	     Carry flag is clear.
	     If disable count is decremented to 0, the Zero flag is set.
	
	  If function was not successful:
	
	     Carry flag is set.
	     AL = Error code
	        0Ch = Invalid DMA channel number
	        0Eh = Disable count underflow (was not previously disabled;
	              count not changed)
	        10h = Reserved flag bits set in DX
	
	Notes
	
	None.
	
	               SUMMARY OF ERROR CODES AND OPTION FLAGS
	               =======================================
	
	ERROR CODES
	===========
	
	  01h = Region not in contiguous memory
	  02h = Region crossed a physical alignment boundary
	  03h = Unable to lock pages
	  04h = No buffer available
	  05h = Region too large for buffer
	  06h = Buffer currently in use
	  07h = Invalid memory region
	  08h = Region was not locked
	  09h = Number of physical pages was greater than table length
	  0Ah = Invalid Buffer_ID
	  0Bh = Buffer boundary violated
	  0Ch = Invalid DMA channel number
	  0Dh = Disable count overflow
	  0Eh = Disable count underflow
	  0Fh = Function not supported
	  10h = Reserved flag bits set in DX
	
	OPTION FLAGS
	============
	
	  Bit 1 = Automatically copy to/from buffer
	  Bit 2 = Disable automatic buffer allocation
	  Bit 3 = Disable automatic remap feature
	  Bit 4 = Region must not cross 64K physical alignment boundary
	  Bit 5 = Region must not cross 128K physical alignment boundary
	  Bit 6 = Copy page-table for scatter/gather remap
	  Bit 7 = Allow non-present pages for scatter/gather remap
	
	Additional query words: no32bit 3.00 3.10 appnote PW0519
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
