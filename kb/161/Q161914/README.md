---
layout: page
title: "Q161914: ERROR MESSAGE: Load Needed DLLs for HAL"
permalink: /kb/161/Q161914/
---

## Q161914: ERROR MESSAGE: Load Needed DLLs for HAL

{% raw %}

	Article: Q161914
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, you encounter the following error message:
	
	  Load needed DLLs for HAL
	
	CAUSE
	=====
	
	This error can be caused if you uninstall Diskeeper for Windows NT 3.5x after
	you upgrade Windows NT 3.5x to Windows NT 4.0.
	
	RESOLUTION
	==========
	
	If you install Windows NT on a FAT partition, start in MS-DOS mode and then
	replace the affected files (Ntdll.dll, Ntoskrnl.exe, Fastfat.sys, and Ntfs.sys)
	with the files from the Windows NT CD, or from the service pack, as applicable.
	
	If you installed Windows NT on an NTFS partition, replace the files in one of the
	following two ways:
	
	1. Use the Windows NT 4.0 Emergency Repair Disk (ERD) for this system to repair
	  the system files.
	
	  WARNING: Ensure that you have a good backup of your system before using the
	  ERD. Any services, applications, service packs, and so on, that you added
	  after you created the ERD may be affected by using the ERD.
	
	  - or -
	
	2. Install Windows NT 4.0 into a separate directory. Start your computer with
	  the temporary version of Windows NT 4.0. Replace the affected files
	  (Ntdll.dll, Ntoskrnl.exe, Fastfat.sys, and Ntfs.sys) in the original
	  installation with the correct version from the Windows NT 4.0 CD or the
	  service pack, if you applied one. After you replace the files and start the
	  computer without incident with the original version of Windows NT 4.0, it is
	  safe to remove the temporary version of Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	When you install Diskeeper for Windows NT 3.51, it replaces the following files:
	Ntdll.dll, Ntoskrnl.exe, Fastfat.sys, and Ntfs.sys. The original files are
	renamed with an .org file extension. When you use the uninstall option in
	Diskeeper, the original files are renamed, replacing the Diskeeper version of
	these files. When you uninstall Diskeeper for Windows NT 3.51 after you install
	Windows NT 4.0, the Windows 4.0 version of these files are replaced by the
	Windows 3.51 version.
	
	To prevent this problem, uninstall Diskeeper before installing Windows NT 4.0.
	
	Executive Software has announced an updated version of Diskeeper for Windows NT
	4.0. For additional information, please contact Executive Software.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: disk keeper
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
