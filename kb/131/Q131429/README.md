---
layout: page
title: "Q131429: Conner Backup Exec Incompatible with Long Filenames"
permalink: kb/131/Q131429/
---

## Q131429: Conner Backup Exec Incompatible with Long Filenames

	Article: Q131429
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a full system backup with Conner Backup Exec version 2.1, some
	filenames appear garbled and the system stops responding (hangs).
	
	CAUSE
	=====
	
	Conner Backup Exec 2.1 reads from the hard disk directly and sees long
	filenames. However, this program does not support long filenames and cannot
	successfully back up files that use long filenames.
	
	WORKAROUND
	==========
	
	To work around this behavior, use any one of the following methods:
	
	- Back up from another computer on the network. If you back up your computer
	  from another computer on the network, Conner Backup Exec 2.1 does not see
	  long filenames, but successfully uses the 8.3 filenames.
	
	- Do not perform a full system backup. Instead, select the files to back up,
	  omitting files with long filenames.
	
	- Rename all the files that have long filenames to use 8.3-format filenames
	  before you back up the system.
	
	- Backup your long filenames using the LFNBK.EXE utility included on the
	  Windows 95 CD in the \Admin\Apptools\Lfnback folder. Follow the directions in
	  the LFNBK.TXT file for instructions on how to use this utility. After
	  performing the backup, restore the long filenames.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
