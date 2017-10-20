---
layout: page
title: "Q168015: Files Not Replaced When Running Emergency Repair on X86 Intel"
permalink: /kb/168/Q168015/
---

## Q168015: Files Not Replaced When Running Emergency Repair on X86 Intel

{% raw %}

	Article: Q168015
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage kbhowto
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some or all of the files you specify to repair when you run an Emergency Repair
	may not be replaced.
	
	CAUSE
	=====
	
	The Setupdd.sys file drives the Emergency Repair process. After you select to
	replace files, the version of Setupdd.sys included on the original Windows NT
	4.0 CD-ROM makes an additional check of these files.
	
	The Emergency Repair process searches the Setup.log file for the files to
	replace. After you select to replace the files, Setupdd.sys compares the files
	to the files on the original CD-ROM. If the files are different you are prompted
	to replace the files. If you choose to replace the files, Setupdd.sys reads the
	files from the CD-ROM and compares the Version Resource date of the files on the
	CD-ROM to the Version Resource date of the files on the computer. If the Version
	Resource date of the file on the computer is newer, then the file is not
	replaced. The Emergency Repair process does not indicate that the file is not
	going to be replaced.
	
	RESOLUTION
	==========
	
	The Setupdd.sys file in Service Pack 2 or later has the Version Resource date
	checking disabled. In order to ensure all files selected during an Emergency
	Repair process are properly replaced you must replace the Setupdd.sys file on
	disk 2 of the Installation disk set with the Setupdd.sys file from Service Pack
	2 or later.
	
	NOTE: If your computer (stops responding) hangs while reading the CD-ROM path to
	Autochk.exe, press ENTER to proceed.
	
	If Service Pack 5 or later is installed on the computer, you may receive the
	following error message:
	
	  File setupdd.sys could not be loaded. The error code is 7
	
	  Setup cannot continue. Press any key to exit.
	
	To work around this behavior, use the Setupdd.sys file from Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	When running an Emergency Repair on an Intel-based computer, you must start your
	computer using the three installation boot disks. If you choose the "Verify
	Windows NT system files" option, the Emergency Repair process continues and
	prompts you for the Emergency Repair Disk (ERD). You are then prompted to
	replace files that it detects are different from those listed in your Setup.log
	file. You have the option to select an individual file or to select all files.
	After you choose to replace files and you restart your computer, there may still
	be files on the system that you requested to replace.
	
	Additional query words: 4.00 prodnt STOP ntoskrnl.exe fastfat.sys ntfs.sys SP3
	
	======================================================================
	Keywords          : kbusage kbhowto 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
