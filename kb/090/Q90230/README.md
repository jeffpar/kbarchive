---
layout: page
title: "Q90230: Load High Issues with WFWG &amp; EMM386, 386MAX, QEMM, or Stealth"
permalink: /kb/090/Q90230/
---

## Q90230: Load High Issues with WFWG &amp; EMM386, 386MAX, QEMM, or Stealth

	Article: Q90230
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	This article discusses the use of the following upper memory block (UMB)
	managers with Windows for Workgroups (WFWG):
	
	- EMM386.EXE
	
	- Qualitas' 386MAX
	
	- BlueMax
	
	- QuarterDeck's QEMM
	
	All other UMB managers are not specifically supported.
	
	Most of the UMB manager issues that apply to Windows 3.1 also apply to Windows
	for Workgroups and are documented in the Knowledge Base. This article addresses
	the following issues that relate specifically to Windows for Workgroups:
	
	- Excluding the Network Card UMB Memory Area
	
	- Reconfiguring the Device Driver and TSR Loading (the system stops responding
	  at startup)
	
	- Using Stealth with QEMM
	
	- Using VGASWAP with 386MAX
	
	- Mixing Load High Methods
	
	MORE INFORMATION
	================
	
	Excluding the Network Card UMB Memory Area
	------------------------------------------
	
	Most net cards use some address space in the UMB. You may need to exclude this
	address range so the UMB manager does not overwrite a device driver or
	Terminate-and-stay-resident (TSR) program. You can use Microsoft Diagnostics to
	determine what address range your network card uses, or consult your network
	card documentation. To determine how to exclude a memory range, consult your UMB
	manager documentation. To exclude a memory range using EMM386.EXE, add the
	following parameter to the DEVICE= line in your CONFIG.SYS file (where yyyy-zzzz
	indicates the address range):
	
	  x=yyyy-zzzz
	
	Reconfiguring Device Driver and TSR Loading
	-------------------------------------------
	
	QEMM and 386MAX place device drivers and TSRs into predetermined memory areas
	using memory optimization programs. If an Expanded Memory Specification (EMS)
	page frame is present, these programs can also borrow memory from the EMS page
	frame to load some device drivers and TSRs. Windows for Workgroups device
	drivers load themselves into free UMB space. This can cause conflicts with
	QEMM's and 386MAX's optimization programs resulting in a system that stops
	responding (hangs) at system startup.
	
	To recover from this situation you must start the system from an MS-DOS startup
	(boot) disk, edit your CONFIG.SYS and AUTOEXEC.BAT files to remove all load high
	commands.
	
	Using Stealth with QEMM
	-----------------------
	
	QuaterDeck's Stealth option for QEMM in implemented as ST:x on the QEMM load line
	in the CONFIG.SYS file, where x is an single letter parameter. Stealth is
	unsupported with Windows for Workgroups.
	
	
	Using VGASWAP with 386MAX
	-------------------------
	
	VGASWAP is a 386MAX parameter. This parameter relocates ROM into portions of the
	memory region usually reserved for VGA memory. This parameter is unsupported by
	Windows for Workgroups but generally is safe to use. The know limitation is that
	the network card UMB memory area cannot be mapped to the area made available by
	VGASWAP. The network card needs to be configured so it uses another area.
	
	Mixing Load High Methods
	------------------------
	
	Microsoft does not support mixing load high methods. You should either use
	386MAX, BlueMAX, EMM386.EXE or QEMM. Mixing 386MAX, BlueMAX or QEMM with the
	MS-DOS LOADHIGH command is not supported.
	
	Additional query words: 3.10 QEMM 386MAX BlueMax EMM386 MS-DOS DOS 5. 5.0 5.00 UMA NET CARD Limulator hang hung stop stopped freeze frozen 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
