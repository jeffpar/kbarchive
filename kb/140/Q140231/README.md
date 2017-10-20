---
layout: page
title: "Q140231: Changing Boot Partition from NTFS to FAT Hangs Setup"
permalink: /kb/140/Q140231/
---

## Q140231: Changing Boot Partition from NTFS to FAT Hangs Setup

{% raw %}

	Article: Q140231
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install Windows NT 3.51 on a startup partition (the partition that is
	marked active and boots the system) which is formatted with the NTFS File
	System, reformatting that existing NTFS startup/boot partition as FAT during
	Windows NT Setup causes your computer to hang after Setup initially reboots, but
	before the Boot Menu appears.
	
	WORKAROUND
	==========
	
	There are three workarounds to this problem:
	
	- Run setup again. When prompted, select the startup partition (which appears
	  now as FAT) as the partition to install to. The following message appears:
	
	  The partition you have chosen is recognized by Windows NT but is unformatted
	  or damaged. Setup will have to reformat this partition to install Windows NT
	  on it.
	
	  To continue and use the partition anyway, press C. Setup will confirm this
	  again later before actually reformatting the partition.
	
	  Select 'C' to reformat the partition. Setup reboots and your computer starts
	  normally.
	
	  -or-
	
	- Use FDISK from MS-DOS 6.22 to delete the non-DOS (NTFS) partition before
	  running Windows NT Setup.
	
	  -or-
	
	- Delete and recreate the partition using Windows NT Setup, formatting the
	  newly created partition as FAT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt lock
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
