---
layout: page
title: "Q116358: Upgrading to Windows 95 May Disable Windows NT Boot Sector"
permalink: /kb/116/Q116358/
---

## Q116358: Upgrading to Windows 95 May Disable Windows NT Boot Sector

	Article: Q116358
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbsetup win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows 95 on a computer running Microsoft Windows NT, The
	Windows NT boot record (Ntldr) may be lost.
	
	CAUSE
	=====
	
	This problem can occur for either of the following reasons:
	
	- You are using Small Computer System Interface (SCSI) hard disks on Micro
	  Channel Architecture (MCA) computers.
	
	- You started the computer with an MS-DOS disk before installing Windows 95,
	  thereby bypassing the Windows NT boot loader.
	
	RESOLUTION
	==========
	
	You can use the Windows NT Repair Disk that was created when you installed
	Windows NT to re-create the Windows NT boot record.
	
	MORE INFORMATION
	================
	
	On an MCA computer, the highest SCSI ID must be the boot drive. The boot drive
	of an Industry Standard Architecture (ISA) or Extended Industry Standard
	Architecture (EISA) computer is SCSI ID 0. Because of this, all physical hard
	disks on an MCA computer are listed, but they are disabled (or not listed) on an
	ISA or EISA computer (unless they are IDE hard disks).
	
	When you install Windows 95, it installs the boot record on the bootable drive.
	If the physical hard disks are listed in CMOS (as with MCA computers), any
	remaining boot records are removed. Since the boot record on a SCSI hard disk in
	an ISA or EISA computer is handled by a device driver, they are not listed in
	the CMOS, and Windows 95 does not remove them.
	
	For information about restoring dual-boot capabilities after installing Windows
	95, please see the following article in the Microsoft Knowledge Base:
	
	  Q136547 Restoring Windows NT Dual Boot After Installing Windows 95
	
	Additional query words: winnt
	
	======================================================================
	Keywords          : kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
