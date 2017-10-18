---
layout: page
title: "Q152517: Err Msg During Setup: DISK READ ERROR OCCURED"
permalink: kb/152/Q152517/
---

## Q152517: Err Msg During Setup: DISK READ ERROR OCCURED

	Article: Q152517
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have Windows NT installed on the first primary partition formatted as
	NTFS, and you chose to reformat the partition as NTFS during Setup to start with
	a clean partition, the Windows NT setup program will reformat the partition as
	FAT, copy files from the CD-ROM, and then try to reboot the computer in GUI mode
	to continue the installation. At this point the computer will either stop
	responding or display the following error message:
	
	  DISK READ ERROR OCCURED.
	
	If you boot from an MS-DOS disk and run scandisk C: you will encounter the
	following:
	
	  The media descriptor byte is invalid.
	  FAT copies are not the same.
	  Many crosslinked files.
	  All directory entries were invalid.
	
	Trying to repair the partition does not resolve the corruption, nor does it allow
	the installation to resume.
	
	CAUSE
	=====
	
	Windows NT always reformats the partition you want to install on using the FAT
	file system, then performs a conversion to NTFS on the final re-boot after
	Windows NT is finished setting up. When you choose to reformat the system boot
	partition as NTFS, Setup is inadvertently writing the 16 sector NTFS boot area
	over the top of the freshly formatted FAT drive after the file copying portion
	of text mode setup is complete.
	
	WORKAROUND
	==========
	
	1. During Setup, choose to delete the Primary NTFS Boot partition , then
	  re-create the partition and choose to format it NTFS.
	
	  OR
	
	2. Select the FAT file system to set up Windows NT on. After Windows NT is set
	  up, perform a manual conversion to NTFS as follows:
	
	  convert c: /fs:ntfs
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.50 and
	3.51 We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
