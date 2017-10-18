---
layout: page
title: "Q65443: Enhanced EMM386.SYS Parameters for Windows 3.0"
permalink: kb/065/Q65443/
---

## Q65443: Enhanced EMM386.SYS Parameters for Windows 3.0

	Article: Q65443
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the syntax and parameters to use when loading EMM386.SYS
	from a device line in the CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	As a device driver, EMM386.SYS must be loaded from a device line in CONFIG.SYS
	using the following syntax
	
	     device=[drive][path]EMM386.SYS [AUTO | ON | OFF] [SIZE]
	            [W=ON | W=OFF] [Mx|FRAME=mmmm|/Pmmmm] [Pn=mmmm]
	            [X=mmmm-nnnn] [B=mmmm] [L=n] [A=n] [/Hnnn] [D=nnn]
	
	where the following is true:
	
	[AUTO|ON|OFF]
	-------------
	
	This indicates the state of the machine when the driver returns to DOS. AUTO is
	the default and means that the driver is loaded and listening, but the machine
	is left in real mode until the first Int 67h call is seen. Thus, we say the
	driver is inactive. The driver stays active with the machine in virtual mode as
	long as a handle is allocated. Loading a TSR that allocates EMS causes the
	driver to become permanently active.
	
	ON indicates the machine is always in virtual mode and the driver is always
	active. OFF indicates that the machine stays in real mode and the driver in
	inactive. All Int 67h calls will fail when in this mode.
	
	[SIZE]
	------
	
	This is the amount of system memory measured in kilobytes to be reserved for the
	common memory pool to be available as expanded memory or VCPI memory. The amount
	defaults to 256K of system memory that is not already allocated. If there is not
	enough memory available to provide SIZE kilobytes of expanded memory, EMM386
	will adjust SIZE.
	
	[W=ON|W=OFF]
	------------
	
	This enables or disables the Weitek Coprocessor Support. The default value is
	OFF.
	
	[Mx|FRAME=mmmm|/Pmmmm]
	----------------------
	
	Any one of these methods may be used to specify the location of the EMS 3.2
	compatible page frame. This must be four contiguous pages to be compatible with
	EMS 3.2. It is not required that this parameter be specified because EMM386 will
	select a 64K contiguous region as a default. The default will be chosen by
	looking at E000h at each segment until C000h. The default will not be placed
	below C000h. These parameters are provided because it is not possible to
	absolutely identify adapter memory in all cases. When a conflict occurs, you
	must force the page frame to some known location.
	
	  mmmm - is a segment address between 4000h and EC00h inclusive
	  Mx - allows you to specify the base address of the 64K page frame
	
	The following is an example:
	
	     M1 = C000h      M8 = DC00h
	     M2 = C400h      M9 = E000h
	     M3 = C800h      M10 = 8000h*
	     M4 = CC00h      M11 = 8400h*
	     M5 = D000h      M12 = 8800h*
	     M6 = D400h      M13 = 8C00h*
	     M7 = D700h      M14 = 9000h*
	     * Options M10 through M14 may require you to configure memory to
	       have 512K or less.
	
	  FRAME=mmmm - allows you to directly specify the segment base
	  /Pmmmm - is a synonym for /FRAME
	
	[Pn=mmmm]
	---------
	
	This argument lets you define the segment of a specific page. Page (n) gets
	placed at mmmm. If Mx or FRAME is specified, then Pn is not allowed.
	
	[X=mmmm-nnnn]
	-------------
	
	This argument lets you specify a segment address range that cannot be used for an
	EMS page.
	
	[B=mmmm]
	--------
	
	This allows you to specify the lowest segment address. Default is B:4000h, but
	mmmm can range from 1000h to EC00h inclusive.
	
	[L=n]
	-----
	
	This allows you to specify the minimum amount of extended memory available after
	EMM386 is loaded. n is the number of 1K blocks.
	
	[A=n]
	-----
	
	This allows you to specify the number of fast alternate register sets to
	allocate, where n is the number of fast register sets to allocate. The default
	is A=7.
	
	[/Hnnn]
	-------
	
	This allows you to specify the number of handles available for use from 1 to 255.
	The default is /H255.
	
	[/D=nnn]
	--------
	
	This argument specifies the amount of memory to be reserved for buffering DMA
	operations. nnn is measured in kilobytes to allocate for DMA. Valid parameters
	are { 16 <= nnn >= 256}. This parameter should reflect the largest DMA
	transfer that can occur while the driver is active.
	
	Additional query words: 3.00 3.0 3.0a 3.00a winmem win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
