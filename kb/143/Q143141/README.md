---
layout: page
title: "Q143141: Mylex DAC960 RAID Controller Causes &quot;Missing Operating System&quot;"
permalink: /kb/143/Q143141/
---

## Q143141: Mylex DAC960 RAID Controller Causes &quot;Missing Operating System&quot;

	Article: Q143141
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to install Windows NT on a system that is using the Mylex DAC960
	RAID controller or an OEM version of this controller, NT will under some
	circumstances complete the first phase of setup but fail when rebooting into GUI
	mode, displaying the following error message:
	
	  Missing Operating System.
	
	When formatting the partition, prior to the initial file copy operation, Windows
	NT might also have warned you that the partition you were creating contained
	more than 1024 cylinders.
	
	CAUSE
	=====
	
	This error occurs because the RAID controller misrepresents the geometry of the
	logical drives it presents to Windows NT. (When there is only one logical drive
	of less than 2 gigabytes (GB), or if a formatted partition already exists,
	Windows NT is able to correctly determine the geometry.)
	
	WORKAROUND
	==========
	
	There are two ways to avoid this problem:
	
	- Prior to installing Windows NT, create and format a partition on the boot
	  logical drive using Microsoft MS-DOS or another operating system -or-
	
	- Create only one logical drive of a size smaller than 2 GB on the RAID array,
	  using the configuration software that was supplied with the controller. After
	  NT is installed, you may create additional logical drives.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem has been reproduced on the Mylex DAC960 RAID controller and the IBM
	RAID controller.
	
	Additional query words: prodnt oemextendpartition unattend unattended extend extending 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	
