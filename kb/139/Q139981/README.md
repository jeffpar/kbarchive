---
layout: page
title: "Q139981: IBM Model 80 Reboots Starting Windows NT 3.51"
permalink: /kb/139/Q139981/
---

## Q139981: IBM Model 80 Reboots Starting Windows NT 3.51

	Article: Q139981
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you apply Windows NT 3.51 Service Pack 2 or 3 to an IBM PS/2 80 Model
	8580, an IBM PS/2 90 Model 8590, an IBM PS/2 90 Model 8595, or an IBM PS/2 90
	Model 9595 - OKD Microchannel computer, the computer resets itself during
	boot-up.
	
	However, an IBM PS/2 model 8595 - OKS upgrades with no problem.
	
	
	CAUSE
	=====
	
	There is a problem with the new NTLDR in Service Pack 2.
	
	WORKAROUND
	==========
	
	If your Boot drive is a FAT volume, copy the NTLDR from the Windows NT 3.51
	installation CD-ROM to the root of the C: drive.
	
	If your Boot drive is a NTFS volume, do one of the following:
	
	- Use a Windows NT Boot floppy disk to boot into Windows NT and copy the NTLDR
	  file from the boot disk to the root of the boot drive.
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  ARTICLE-ID: Q130921
	  TITLE : Creating an FT Boot Disk With Scsi( ) and Multi( ) Identifiers
	
	  -or-
	
	- Boot from the 3 Windows NT Setup disks and select "R" from the first Setup
	  screen to repair. Select only "verify system files" from the options list.
	  When asked to replace the NTLDR file, choose yes, after replacing the NTLDR
	  file, press F3 to exit repair and perform a reboot.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Pack 2. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt sp
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
