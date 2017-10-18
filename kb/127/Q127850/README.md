---
layout: page
title: "Q127850: Using the DPT SmartRAID SCSI Host on a AST Manhattan P5090"
permalink: kb/127/Q127850/
---

## Q127850: Using the DPT SmartRAID SCSI Host on a AST Manhattan P5090

	Article: Q127850
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Setup may not recognize your hard disks or your may stop responding
	(hang) when booting if you use a DPT SmartRAID PCI (PM3224a/9x) SCSI controller
	on an AST Manhattan P Series 5090 (single processor) computer.
	
	CAUSE
	=====
	
	The DPT SmartRAID PCI (PM3224a/9x) SCSI controller is not on the Windows NT
	version 3.5 hardware compatibility list (HCL), and it is not a supported device.
	
	WORKAROUND
	==========
	
	Since the AST Manhattan P5090 is on the Windows NT 3.5 HCL, you may be able to
	use the PM3224a controller if you configure it specifically for the P5090.
	According to DPT technical support, you may need to perform some or all of the
	following configuration steps for the system to successfully run Windows NT
	3.5:
	
	1. The DPT SmartRAID controller must be set as the boot device. If you set a
	  disk connected to another controller as the boot device, then the system may
	  hang at boot time.
	
	2. Some models of the AST Manhattan P5090 have dual internal (embedded) NCR
	  53C810 SCSI controllers. One of them must be disabled for the DPT PM3224a to
	  work.
	
	3. You need to explicitly specify an Input/Output (I/O) address in the BIOS
	  configuration program for the DPT PM3224a host adapter. However, you do not
	  need to choose the default setting of 330H as the I/O address for the card.
	  To set the I/O address for the card, press CTRL-D at boot time, and then
	  choose HBIO from the menu.
	
	4. In certain cases you may also need to disable PCI Parity in the DPT BIOS for
	  the initial installation to succeed. Otherwise, memory parity problems may
	  result.
	
	5. Once the machine boots successfully, replace the DPT driver supplied on the
	  Windows NT distribution disks with an updated driver from DPT. This updated
	  driver is available from the DPT bulletin board system (BBS) at (407)
	  831-6432 (14000 to 2400 baud, HST/DUAL). The file name is NT351JJ.ZIP. Other
	  DPT Bulletin Board numbers include: (407) 830-1070 (14400 to 1200 buad,
	  HST/DUAL), and (407) 830-0852 (9600-1200 baud).
	
	6. As of 2/1/97, the latest firmware for the DPT SmartRaid PCI (PM3224a/9x)
	  controller is FW290-007H1. The latest ROM revision is SmartRom 3.DS.
	
	For additional information or continuing problems with the DPT product mentioned
	above, please contact DPT directly at (407) 830-5522. You may also email DPT
	technical support directly at Support@DPT.COM or visit their web page at
	WWW.DPT.COM.
	
	The third-party products discussed here are manufactured vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: prodnt array freeze lock
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
