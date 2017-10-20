---
layout: page
title: "Q69453: InBoard 386, Adaptec Controller and Expanded Memory"
permalink: /kb/069/Q69453/
---

## Q69453: InBoard 386, Adaptec Controller and Expanded Memory

{% raw %}

	Article: Q69453
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may have problems accessing expanded memory with Microsoft Windows version
	3.0 on a system with an Intel InBoard 386 and Adaptec SCSI controller. This
	article describes the potential problems and provides some procedures to work
	around them.
	
	MORE INFORMATION
	================
	
	Adaptec SCSI Controller
	-----------------------
	
	The Adaptec SCSI Controller has limited compatibility with Intel's InBoard 386.
	The ILIM386 (InBoard 386'S expanded memory software) swap parameter cannot be
	used because the Adaptec board has its own DMA controller that assumes the
	logical addresses equal the physical addresses. This is not true when swap is
	activated.
	
	To work with ILIM386.SYS, load Adaptec's AH1544.SYS driver before ILIM386.SYS.
	The AH1540.SYS command line must contain the following parameters:
	
	  /V386 /B=nnn   (where nnn = DMA buffer size)
	
	Adaptec AT Hard Disk Controller
	-------------------------------
	
	All Adaptec AT hard disk controllers use interrupts 60 to 67h and have a ROM
	address at C8000 to CBFFF or alternately at CC000 to CFFFF. These controllers
	conflict with expanded memory managers such as ILIM386.SYS, unless you install
	the driver ADAPTEC.SYS between the InBoard driver and ILIM386.SYS in the
	CONFIG.SYS file.
	
	The Intel InBoard 386 provides up to three times faster performance than the
	80286. It is compatible with the IBM PC/AT, IBM 3270 AT, COMPAQ DESKPRO
	286(8MHz), COMPAQ PORTABLE 286, COMPAQ PORTABLE II, Tandy 3000HL, and Tandy
	3000HD. It is expandable to 1MB with 256K chips and up to 3MB with Piggyback
	options. It supports the optional Intel 387 DX-16 math coprocessor.
	
	The products included here are manufactured by vendors independent of Microsoft.
	We make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : :3.0,3.0a
	
	=============================================================================
	

{% endraw %}
