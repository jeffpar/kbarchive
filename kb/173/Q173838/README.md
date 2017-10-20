---
layout: page
title: "Q173838: Windows NT 4.0 Evaluation Edition Incompatible With FAT32"
permalink: /kb/173/Q173838/
---

## Q173838: Windows NT 4.0 Evaluation Edition Incompatible With FAT32

{% raw %}

	Article: Q173838
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft TCP/IP Training 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While installing the Evaluation Edition of Microsoft Windows NT 4.0 from one of
	the Microsoft Press training kits listed above, you may encounter an error
	message stating that there is no valid partition.
	
	CAUSE
	=====
	
	If the drive was originally formatted for the installation of Windows 95, the
	partition may be marked for FAT 32. Windows NT 4.0 does not currently recognize
	the FAT 32 format and, therefore, will not install. If this is the case, you
	must back up all data and create new partitions either from Windows NT 4.0 or
	from MS-DOS 6.22 in order to continue the installation.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The FAT 32 file system is designed to work with hard disk partitions over 512 MB
	in size. The OEM version of Microsoft Windows 95 will automatically format the
	hard disk using FAT 32 if the hard drive size is over 512 MB and the "large disk
	compatibility" option has been selected in FDISK.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q126690 Windows NT 4.0 Setup Troubleshooting Guide
	
	Additional query words: mspress ms_press press bookbug 1-57231-373-0 1- 57231-439-7 1-57231-623-3
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbTCPIPSearch
	Version           : winnt:4.0; :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
