---
layout: page
title: "Q160964: 0x0000001e When Printing Certain Documents from Windows NT 4.0"
permalink: /kb/160/Q160964/
---

## Q160964: 0x0000001e When Printing Certain Documents from Windows NT 4.0

	Article: Q160964
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a document that contains a 1 point font from any application, the
	Windows NT print server crashes unexpectedly with the following Blue Screen
	error:
	
	  STOP: 0x0000001e (0xc0000094, 0xfe7533ca, 0xc0000094, 0x00000010)
	  Kmode_Exception_Not_Handled. RASDD.DLL
	
	CAUSE
	=====
	
	Windows NT cannot despool a job that contains a font of a single point. This
	causes a divide by zero and forces Windows NT to have a blue screen error when
	trying to print. Prior to Windows NT 4.0 Service Pack 2, the spooler was
	configured to always respool a pending job during startup time, If the job in
	the spooler is damaged or contains a 1 point font, it can cause the computer to
	display a blue screen error continually.
	
	
	WORKAROUND
	==========
	
	To work around the problem, delete the *.spl and *.shd files from the following
	directory:
	
	  %SYSTEMROOT%\SYSTEM32\SPOOL\PRINTERS
	
	NOTE: If you are using a FAT file system, you can start the server using MS- DOS
	or a bootable floppy and remove the files mentioned above. If the Windows NT
	directory (or Spool file location) resides on an NTFS volume, it will be
	necessary to install a parallel installation and remove the files using File
	Manager or Explorer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0 For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
