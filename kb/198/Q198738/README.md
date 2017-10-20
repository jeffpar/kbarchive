---
layout: page
title: "Q198738: Probable Non-Windows NT Disk Error on HP NetServers"
permalink: /kb/198/Q198738/
---

## Q198738: Probable Non-Windows NT Disk Error on HP NetServers

{% raw %}

	Article: Q198738
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In certain circumstances, when autochk or chkdsk runs on an HP NetServer, you
	may receive the either of the following messages:
	
	  Errors found
	  Probable non-Windows NT disk
	  Continue Yes/No: No
	
	or
	
	  Checking file system on C:
	  The file system is FAT
	  Volume Serial Number is xxxx-xxxx
	  Probable non-Windows NT disk
	  Continue (Y/N)? No
	
	"No" is automatically filled in, which prevents running the chkdsk utility on the
	Windows NT system partition in write-mode. However, you may be able to run
	chkdsk in read-only mode from a command prompt within the Windows NT GUI.
	
	CAUSE
	=====
	
	There are two items that may cause this error condtion:
	
	- The HP utility partition was created prior to the Windows NT system partition
	  and the HP Installation Assistant from the HP NetServer Navigator CD was then
	  used to install Microsoft Windows NT 3.51 or 4.0.
	
	- The EISA utility partition has the correct partition type of 12, or FAT12,
	  for partitions that are less then 16 MB. However, the HP Installation
	  Assistant mistakenly assigns the invalid partition type of 12 to the Windows
	  NT system partition.
	
	RESOLUTION
	==========
	
	According to HP, this issue is scheduled to be resolved in the next release of
	the HP NetServer Navigator CD for each HP NetServer Series G.01.65, F.01.40, and
	L.12.05.
	
	If the latest HP NetServer Navigator CD is not available, the only workaround is
	to do an fdisk on the system and utility partitions. Run HP Configuration
	Assistant in Custom mode and install Windows NT 3.51 or 4.0, which will create
	the system partition before the utility partition.
	
	MORE INFORMATION
	================
	
	This problem can be verified by using Disk Probe, a Microsoft Windows NT
	resource kit utility, and viewing the Master Boot Record for hard disk 0, which
	will have a 12 at offset 0x01C2.
	
	For additional information about Disk Probe, please see the following article(s)
	in the Microsoft Knowledge Base:
	
	  Q153973 Recovering NTFS Boot Sector on NTFS Partitions
	
	For addtional information on HP Netservers reference the following:
	
	  http://www.hp.com/go/netserver
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: hp netserver chkdsk probable non-windows NT disk 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
