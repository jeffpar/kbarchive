---
layout: page
title: "Q96447: Manifest Shows EMS Memory with NOEMS Switch"
permalink: kb/096/Q96447/
---

## Q96447: Manifest Shows EMS Memory with NOEMS Switch

	Article: Q96447
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Quarterdeck's Manifest program indicates that EMS memory exists, even if
	EMM386.EXE is loaded with the NOEMS switch. If you add the NOVCPI switch to the
	EMM386.EXE line in the CONFIG.SYS file, Manifest no longer shows any EMS memory.
	
	MORE INFORMATION
	================
	
	EMM386.EXE version 4.45, which ships with MS-DOS 6.0, and EMM386.EXE version
	4.48, which ships with MS-DOS 6.2x, is a Virtual Control Program Interface
	(VCPI) provider even when the NOEMS switch is specified. With VCPI support
	enabled, EMM386.EXE supplies an upper memory frame buffer for the VCPI
	applications to use. When an application checks for EMS memory, it may see this
	buffer and believe it to be an EMS page frame, and thus report that EMS memory
	is available when it is not. When the NOVCPI switch is added, it disables this
	upper memory buffer, thus disabling what the application is seeing as EMS.
	
	NOTE: MS-DOS 6.0 and later can maintain VCPI server functionality with the NOEMS
	switch specified; this feature was not provided in versions of MS-DOS prior to
	6.0.
	
	VCPI support can exist without a page frame. For example, EMM386 in MS-DOS 5.0
	(version 4.44) provided VCPI support by using the "frame=0" switch. MS-DOS 6.0
	and later can achieve the same result using the NOEMS switch and the NOVCPI
	switch together.
	
	Manifest is manufactured by Quarterdeck Office Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 6.22 6.00 6.20 third party third-party 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
